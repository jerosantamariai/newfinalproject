from flask import Flask, jsonify, request, render_template
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, Users, Roles, Blogs, Contact
from flask_mail import Mail, Message
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG '] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'jerosantamariai@gmail.com' #La cuenta de correo electronico de donde saldran los correos
app.config['MAIL_PASSWORD'] = ''
jwt = JWTManager(app)

db.init_app(app)

Migrate(app, db)
CORS(app)
bcrypt = Bcrypt(app)
mail = Mail(app)
manager = Manager(app)
manager.add_command("db", MigrateCommand)

@app.route("/")
def root():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Ingresar formato correcto"}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    

    if not email or email == '':
        return jsonify({"msg": "Ingresar Correo Electronico"}), 400
    if not password or password == '':
        return jsonify({"msg": "Ingresar contraseña"}), 400

    users = Users.query.filter_by(email=email).first()
    if not users:
        return jsonify({"msg": "Algo ingresaste mal, vuelve a intentarlo"}), 401

    if bcrypt.check_password_hash(users.password, password):
        access_token = create_access_token(identity=users.email)
        data = {
            "access_token": access_token,
            "users": users.serialize()
        }
        return jsonify(data), 201
    else:
        return jsonify({"msg": "Algo ingresaste mal, vuelve a intentarlo"}), 401

@app.route('/register', methods=['POST'])
def register():
    if not request.is_json:
        return jsonify({"msg": "Ingresar formato correcto"}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or email == '':
        return jsonify({"msg": "Ingresar correo electronico"}), 400
    if not password or password == '':
        return jsonify({"msg": "Ingresar contraseña"}), 400

    users = Users.query.filter_by(email=email).first()
    if users:
        return jsonify({"msg": "Nombre de usuario existe, por favor ingresar otro"}), 400

    users = Users()
    users.email = email
    users.password = bcrypt.generate_password_hash(password)
    users.role_id = 2

    db.session.add(users)
    db.session.commit()

    access_token = create_access_token(identity=users.email)
    data = {
        "access_token": access_token,
        "users": users.serialize()
    }

    return jsonify(data), 201

@app.route('/changepassword', methods=['POST'])
@jwt_required
def changepassword():
    if not request.is_json:
        return jsonify({"msg": "Ingresar formato correcto"}), 400

    oldpassword = request.json.get('oldpassword', None)
    password = request.json.get('password', None)

    if not oldpassword or oldpassword == '':
        return jsonify({"msg": "Debes ingresar tu clave anterior"}), 400
    if not password or password == '':
        return jsonify({"msg": "Debes ingresar una nueva clave"}), 400

    email = get_jwt_identity()

    users = Users.query.filter_by(email=email).first()

    if bcrypt.check_password_hash(users.password, oldpassword):
        users.password = bcrypt.generate_password_hash(password)
        db.session.commit()
        return jsonify({"success": "Contraseña cambiada!"}), 200
    else:
        return jsonify({"msg": "Ingresaste mal tu contraseña antigua!"}), 400

@app.route('/users', methods=['GET', 'POST'])
@app.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
@jwt_required
def users(id = None):
    if request.method == 'GET':
        if id is not None:
            user = Users.query.get(id)
            if user:
                return jsonify(user.serialize()), 200
            else:
                return jsonify({"msg": "El usuario no existe, reintente..."}), 404
        else:
            users = Users.query.all()
            users = list(map(lambda user: user.serialize(), users))
            return jsonify(users), 200

    if request.method == 'POST':
        name = request.json.get('name', None)
        lastname = request.json.get('lastname', None)
        phone = request.json.get('phone', None)
        email = request.json.get('email', None)
        
        users = Users()
         
        users.name = name 
        users.lastname = lastname 
        users.phone = phone
        users.email = email
        
        db.session.add(users) 
        db.session.commit()  

        return jsonify(users.serialize()), 201
    
    if request.method == 'PUT':
        name = request.json.get('name', None)
        lastname = request.json.get('lastname', None)
        phone = request.json.get('phone', None)
        email = request.json.get('email', None)
                
        users = Users()
         
        users.name = name 
        users.lastname = lastname 
        users.phone = phone
        users.email = email
        
        db.session.commit()  

        return jsonify(users.serialize()), 201

    if request.method == 'DELETE':
        users = Users.query.get(id)
        if not blog:
            return jsonify({"msg": "Usuario no encontrado"}), 404
        db.session.delete(users)
        db.session.commit()
        return jsonify({"msg":"Usuario borrado"}), 200

@app.route('/blog', methods=['GET', 'POST'])
@app.route('/blog/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required
def blog(id = None):
    if request.method == 'GET':
        if id is not None :
            blog = Blogs.query.get(id)
            if blog:
               return jsonify(blog.serialize()), 200
            else:
               return jsonify({"msg": "No se encuentra el blog"}), 404   
        else :
            blogs = Blogs.query.all()
            blogs = list(map(lambda blog: blog.serialize(), blogs))
            return jsonify(blogs), 200

    if request.method == 'POST':
        title = request.json.get('title', None)
        bintro = request.json.get('bintro', None)
        publictext = request.json.get('publictext', None)
        privatext = request.json.get('privatext', None)
       
        if not title or title == "":
           return jsonify({"msg":"Debes insertar el titulo del blog"}), 400
        if not bintro or bintro == "":
           return jsonify({"msg":"Debes insertar la introducción del blog"}), 400
        if not publictext or publictext == "":
            return jsonify({"msg":"Debes insertar el texto publico del blog"}), 400
        if not privatext or privatext == "":
            return jsonify({"msg":"Debes insertar el texto privado del blog"}), 400
        
        blogs = Blogs()
         
        blogs.title = title 
        blogs.bintro = bintro
        blogs.publictext = publictext 
        blogs.privatext = privatext
        
        db.session.add(blogs) 
        db.session.commit()  

        blogs = Blogs.query.all()
        blogs = list(map(lambda blog: blog.serialize(), blogs))
        return jsonify(blogs), 201

    if request.method == 'PUT':
        title = request.json.get('title', None)
        bintro = request.json.get('bintro', None)
        publictext = request.json.get('publictext', None)
        privatext = request.json.get('privatext', None)
       
        if not title or title == "":
            return jsonify({"msg":"Debes insertar el titulo del blog"}), 400
        if not bintro or bintro == "":
            return jsonify({"msg":"Debes insertar la introducción del blog"}), 400
        if not publictext or publictext == "":
            return jsonify({"msg":"Debes insertar el texto publico del blog"}), 400
        if not privatext or privatext == "":
            return jsonify({"msg":"Debes insertar el texto privado del blog"}), 400

        blogput = Blogs.query.get(id) #busca por el id
            
        if not blogput:
            return jsonify({"msg": "Not Found"}), 404 # para no actualizar algo q no existe
         
        blogput.title = title
        blogput.bintro = bintro
        blogput.publictext = publictext 
        blogput.privatext = privatext
 
        db.session.commit()
        
        blogput = Blogs.query.all()
        blogput = list(map(lambda blog: blog.serialize(), blogput))
        return jsonify(blogput), 200

    if request.method == 'DELETE':
        blog = Blogs.query.get(id)
        if not blog:
            return jsonify({"msg": "Blog no encontrado"}), 404
        db.session.delete(blog)
        db.session.commit()
        return jsonify({"msg":"Blog borrado"}), 200

@app.route('/contact', methods=['GET', 'POST'])
@app.route('/contact/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def contact(id = None):
    if request.method == 'GET':
        if id is not None :
            contact = Contact.query.get(id)
            if contact:
               return jsonify(contact.serialize()), 200
            else:
               return jsonify({"msg": "No se encuentra el comentario"}), 404   
        else :
            contacts = Contact.query.all()
            contacts = list(map(lambda contact: contact.serialize(), contacts))
            return jsonify(contacts), 200
    
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"msg": "Ingresar formato correcto"}), 400

        cont_name = request.json.get('cont_name', None)
        cont_lastname = request.json.get('cont_lastname', None)
        cont_email = request.json.get('cont_email', None)
        cont_phone = request.json.get('cont_phone', None)
        cont_message = request.json.get('cont_message', None)

        if not cont_name or cont_name == '':
            return jsonify({"msg": "Por favor ingresar nombre"}), 400
        if not cont_lastname or cont_lastname == '':
            return jsonify({"msg": "Por favor ingresar apellido"}), 400
        if not cont_email or cont_email == '':
            return jsonify({"msg": "Por favor ingresar correo electronico"}), 400
        if not cont_phone or cont_phone == '':
            return jsonify({"msg": "Por favor ingresar telefono"}), 400
        if not cont_message or cont_message == '':
            return jsonify({"msg": "Por favor ingresar mensaje"}), 400

        contact = Contact()
        contact.cont_name = cont_name
        contact.cont_lastname = cont_lastname
        contact.cont_email = cont_email
        contact.cont_phone = cont_phone
        contact.cont_message = cont_message
        
        db.session.add(contact)
        db.session.commit()  

        return jsonify(contact.serialize()), 201

@manager.command
def loadroles():
    role = Roles()
    role.rolename = "admin"

    db.session.add(role)
    db.session.commit()

    role = Roles()
    role.rolename = "customer"

    db.session.add(role)
    db.session.commit()

    print("Han sido creados los roles")

@manager.command
def loadadmin():
    users = Users()
    users.email = "admin@gmail.com"
    users.password = bcrypt.generate_password_hash("123456")
    users.role_id = 1

    db.session.add(users)
    db.session.commit()

    print("Administrador creado!")

if __name__ == '__main__':
    manager.run()



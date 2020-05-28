from flask import Flask, jsonify, request, render_template
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, Users, Roles, Blogs
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
jwt = JWTManager(app)

db.init_app(app)

Migrate(app, db)
CORS(app)
bcrypt = Bcrypt(app)
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
        name = request.form.get('name', None)
        lastname = request.form.get('lastname', None)
        phone = request.form.get('phone', None)
        email = request.form.get('email', None)
        
        users = Users()
         
        users.name = name 
        users.lastname = lastname 
        users.phone = phone
        users.email = email
        
        db.session.add(users) 
        db.session.commit()  

        return jsonify(users.serialize()), 201
    
    if request.method == 'PUT':
        name = request.form.get('name', None)
        lastname = request.form.get('lastname', None)
        phone = request.form.get('phone', None)
        email = request.form.get('email', None)
                
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
        title = request.form.get('title', None)
        publictext = request.form.get('publictext', None)
        privatext = request.form.get('privatext', None)
       
              
        if not title and title == "":
            return jsonify({"msg":"Debes insertar el titulo del blog"}), 400
        if not publictext and publictext == "":
            return jsonify({"msg":"Debes insertar el texto publico del blog"}), 400
        if not privatext and privatext == "":
            return jsonify({"msg":"Debes insertar el texto privado del blog"}), 400
        
        blog = Blogs()
         
        blog.title = title 
        blog.publictext = publictext 
        blog.privatext = privatext
        
        db.session.add(blog) 
        db.session.commit()  

        return jsonify(blog.serialize()), 201

    if request.method == 'PUT':
        title = request.form.get('title', None)
        publictext = request.form.get('publictext', None)
        privatext = request.form.get('privatext', None)
       
        if not title and title == "":
            return jsonify({"msg":"Debes insertar el titulo del blog"}), 400
        if not publictext and publictext == "":
            return jsonify({"msg":"Debes insertar el texto publico del blog"}), 400
        if not privatext and privatext == "":
            return jsonify({"msg":"Debes insertar el texto privado del blog"}), 400

        blog = Blogs()
         
        blog.title = title 
        blog.publictext = publictext 
        blog.privatext = privatext
 
        db.session.commit()
        return jsonify(blog.serialize()), 201

    if request.method == 'DELETE':
        blog = Blogs.query.get(id)
        if not blog:
            return jsonify({"msg": "Blog no encontrado"}), 404
        db.session.delete(blog)
        db.session.commit()
        return jsonify({"msg":"Blog borrado"}), 200

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



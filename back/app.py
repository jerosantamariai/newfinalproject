from flask import Flask, jsonify, request, render_template
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, Users, Roles
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
        return jsonify({"msg": "Contraseña cambiada!"}), 200
    else:
        return jsonify({"msg": "Ingresaste mal tu contraseña antigua!"}), 400

@app.route('/users', methods=['GET', 'POST'])
@app.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required
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
        return jsonify({"msg": "users post"}), 200
    if request.method == 'PUT':
        return jsonify({"msg": "users put"}), 200
    if request.method == 'DELETE':
        return jsonify({"msg": "users delete"}), 200

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



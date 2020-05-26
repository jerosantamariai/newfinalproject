from flask import Flask, jsonify, request, render_template
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, Users
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

if __name__ == '__main__':
    manager.run()

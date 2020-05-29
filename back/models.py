from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Roles (db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    rolename = db.Column(db.String(50), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "rolename": self.rolename
        }

class Users (db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=True)
    lastname = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(100), nullable=True)
    phone = db.Column(db.String(12), nullable=True)
    createdate = db.Column(db.DateTime, default=datetime.now())
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)
    role = db.relationship(Roles)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "avatar": self.avatar,
            "phone": self.phone,
            "createdate": self.createdate,
            "role": self.role.serialize()
        }

class Blogs (db.Model):
    __tablename__ = 'blogs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    publictext = db.Column(db.String(100), nullable=True)
    privatext = db.Column(db.String(1000), nullable=True)
    imagen = db.Column(db.String(250), nullable=True, default='vista.jpg')
    createdate = db.Column(db.DateTime, default=datetime.now())

    def serialize(self):
        return {
            "id": self.id,
            "publictext": self.publictext,
            "privatext": self.privatext,
            "imagen": self.imagen,
            "createdate": self.createdate
        }

class Contact (db.Model):
    __tablename__ = 'contact'
    id = db.Column(db.Integer, primary_key=True)
    cont_name = db.Column(db.String(100), nullable=False)
    cont_lastname = db.Column(db.String(100), nullable=False)
    cont_email = db.Column(db.String(100), nullable=False)
    cont_phone = db.Column(db.String(12), nullable=False)
    cont_message = db.Column(db.String(500), nullable=False)
    cont_createdate = db.Column(db.DateTime, default=datetime.now())

    def serialize(self):
        return {
            "id": self.id,
            "cont_name": self.cont_name,
            "cont_lastname": self.cont_lastname,
            "cont_email": self.cont_email,
            "cont_phone": self.cont_phone,
            "cont_message": self.cont_message,
            "cont_createdate": self.cont_createdate,
        }
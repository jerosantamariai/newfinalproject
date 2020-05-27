from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Users (db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=True)
    lastname = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(100), nullable=True)
    phone = db.Column(db.Integer, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "avatar": self.avatar,
            "phone": self.phone
        }
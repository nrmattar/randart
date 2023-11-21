
# 3. Importar las herramientas
# Acceder a las herramientas para crear la app web
from flask import Flask, request, jsonify

# Para manipular la DB
from flask_sqlalchemy import SQLAlchemy 

# Módulo cors es para que me permita acceder desde el frontend al backend
from flask_cors import CORS

# 4. Crear la app
app = Flask(__name__)

CORS(app)


# 5. Configurar a la app la DB
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://usuario:contraseña@localhost:3306/nombre_de_la_base_de_datos'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:1234@localhost:3306/randart'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 6. Crear un objeto db, para informar a la app que se trabajará con sqlalchemy
db = SQLAlchemy(app)

# 7. Definir la tabla 
class Galeria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    razon_social = db.Column(db.String(50))
    mapa_url = db.Column(db.String(500))
    observaciones = db.Column(db.String(100))

class Articulo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(50))
    autor = db.Column(db.String(50)) #Idealmente debería ser Autor_Id y tener FK a otra tabla.
    descripcion = db.Column(db.String(500))
    precio = db.Column(db.Numeric(precision=10, scale=2))
    imagen = db.Column(db.String(500))


# 8. Crear la tabla al ejecutarse la app
with app.app_context():
    db.create_all()

"""
# Ruta para insertar un registro en la DB
@app.route("/registro", methods=['POST'])
def registro():
    # {
    #   "nombre": "Fernando"
    # }
    #    <input type="text" name="nombre" id="nombre">
    
    nombre_recibido = request.json["nombre"].capitalize()

    nuevo_registro = Persona(nombre=nombre_recibido)
    db.session.add(nuevo_registro)
    db.session.commit()

    return "Solicitud vía post recibida."
"""  


# Retornar en un Json todos los registros de la tabla Galeria. 
@app.route("/galerias",  methods=['GET'])
def galerias():
    all_galerias = Galeria.query.all()
    # all_galerias lista de objetos

    # Transformar all_galerias (lista de objetos) a una lista de diccionarios
    data_serializada = []
    for registro in all_galerias:
        print(f'Registro {registro}')
        data_serializada.append({"id":registro.id, "razon_social":registro.razon_social, "mapa_url":registro.mapa_url, "observaciones":registro.observaciones})

    return jsonify(data_serializada)

"""
# Modificar un registro
@app.route('/update/<id>', methods=['PUT'])
def update(id):
    # Buscar a quién modificar, por id
    update_persona = Persona.query.get(id)
    # one_persona -> objeto

    # Recibir los nuevos datos
    nombre = request.json["nombre"]

    update_persona.nombre = nombre
    db.session.commit() 

    # Transformando update_persona (lista de objeto) a lista de diccionario
    data_serializada = [{"id":update_persona.id, "nombre": update_persona.nombre}]

    return jsonify(data_serializada)

    
# Eliminar un registro
@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):
    # Buscar a quién modificar, por id
    delete_persona = Persona.query.get(id)
    # delete_persona -> objeto

    db.session.delete(delete_persona)
    db.session.commit()

    data_serializada = [{"id":delete_persona.id, "nombre": delete_persona.nombre}]

    return jsonify(data_serializada)
"""


# Retornar en un Json todos los registros de la tabla Galeria. 
@app.route("/articulos",  methods=['GET'])
def articulos():
    all_articulos = Articulo.query.all()
    # all_galerias lista de objetos

    # Transformar all_galerias (lista de objetos) a una lista de diccionarios
    data_serializada = []
    for registro in all_articulos:
        print(f'Registro {registro}')
        data_serializada.append({"id":registro.id, "titulo":registro.titulo, "autor":registro.autor, "descripcion":registro.descripcion, "precio":registro.precio, "imagen":registro.imagen})

    return jsonify(data_serializada)

# Retornar en un Json todos los registros de la tabla Galeria. 
@app.route("/getarticulo/<id>",  methods=['GET'])
def getarticulo(id):
    articulo = Articulo.query.get(id)
    # all_galerias lista de objetos

    # Transformar all_galerias (lista de objetos) a una lista de diccionarios

    data_serializada = {"id":articulo.id, "titulo":articulo.titulo, "autor":articulo.autor, "descripcion":articulo.descripcion, "precio":articulo.precio, "imagen":articulo.imagen}

    return jsonify(data_serializada)

"""
# Modificar un registro
@app.route('/update/<id>', methods=['PUT'])
def update(id):
    # Buscar a quién modificar, por id
    update_persona = Persona.query.get(id)
    # one_persona -> objeto

    # Recibir los nuevos datos
    nombre = request.json["nombre"]

    update_persona.nombre = nombre
    db.session.commit() 

    # Transformando update_persona (lista de objeto) a lista de diccionario
    data_serializada = [{"id":update_persona.id, "nombre": update_persona.nombre}]

    return jsonify(data_serializada)

    
# Eliminar un registro
@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):
    # Buscar a quién modificar, por id
    delete_persona = Persona.query.get(id)
    # delete_persona -> objeto

    db.session.delete(delete_persona)
    db.session.commit()

    data_serializada = [{"id":delete_persona.id, "nombre": delete_persona.nombre}]

    return jsonify(data_serializada)
"""

if __name__ == "__main__":
     app.run(debug=True)


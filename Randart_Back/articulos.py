# articulos.py
from flask import Blueprint, jsonify
from models import Articulo

articulos_bp = Blueprint('articulos', __name__)

@articulos_bp.route("/articulos", methods=['GET'])
def obtener_articulos():
    all_articulos = Articulo.query.all()
    data_serializada = [{"id": registro.id, "titulo": registro.titulo, "autor": registro.autor, "descripcion": registro.descripcion, "precio": registro.precio, "imagen": registro.imagen} for registro in all_articulos]
    return jsonify(data_serializada)

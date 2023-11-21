# galerias.py
from flask import Blueprint, jsonify
from models import Galeria

galerias_bp = Blueprint('galerias', __name__)

@galerias_bp.route("/galerias", methods=['GET'])
def obtener_galerias():
    all_galerias = Galeria.query.all()
    data_serializada = [{"id": registro.id, "razon_social": registro.razon_social, "mapa_url": registro.mapa_url, "observaciones": registro.observaciones} for registro in all_galerias]
    return jsonify(data_serializada)

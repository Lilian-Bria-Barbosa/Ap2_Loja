from flask import Blueprint, request, jsonify
from controllers.produto_controller import criar_produto, listar_produtos, get_produto

produto_bp = Blueprint('produto_bp', __name__)

@produto_bp.route('', methods=['POST'])
def criar():
    """Descrição: Criar produto"""
    data = request.get_json() or {}
    res = criar_produto(data)
    if isinstance(res, tuple) and hasattr(res[0], '__class__') and res[1]==201:
        p = res[0]
        return jsonify({'id':p.id, 'nome':p.nome, 'qtd_estoque':p.qtd_estoque}), 201
    return jsonify(res[0]), res[1]

@produto_bp.route('', methods=['GET'])
def listar():
    """Descrição: Listar produtos"""
    produtos = listar_produtos()
    out = [{'id':p.id, 'nome':p.nome, 'qtd_estoque':p.qtd_estoque, 'preco_unit':p.preco_unit} for p in produtos]
    return jsonify(out)

@produto_bp.route('/<int:pid>', methods=['GET'])
def get_one(pid):
    """Descrição: get_one"""
    p = get_produto(pid)
    if not p:
        return jsonify({'error':'não encontrado'}), 404
    return jsonify({'id':p.id, 'nome':p.nome, 'descricao':p.descricao, 'preco_unit':p.preco_unit, 'qtd_estoque':p.qtd_estoque})
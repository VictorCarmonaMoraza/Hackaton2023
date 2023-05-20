from ninja import Schema
from typing import List

class UsuarioSchema(Schema):
    first_name: str

class TrabajadorSchema(Schema):
    usuario: UsuarioSchema
    rol: int
    estado: int

class PasoSchema(Schema):
    id: int
    nombre: str
    descripcion: str
    estado: int = 0
    orden: int = 0
    comentarios: str = None
    trabajadores: List[TrabajadorSchema]

class Error(Schema):
    message: str

class PasoPostSchema(Schema):
    id: int
    nombre: str
    descripcion: str

class ProyectoSchema(Schema):
    id: int
    nombre: str
    estado: int

class ProyectoPostSchema(Schema):
    nombre: str = None
    descripcion: str = None

class ValidaPostSchema(Schema):
    validado: bool = False

class ProyectoDetailSchema(Schema):
    id: int
    nombre: str
    descripcion: str
    estado: int
    pasos: List[PasoSchema]




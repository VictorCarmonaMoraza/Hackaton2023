from django.shortcuts import get_object_or_404
from django.http import Http404
from ninja import Router
from typing import List
from proyectos.models import Paso, Proyecto, Trabajador
from proyectos.schemas import ProyectoSchema, ProyectoDetailSchema, ProyectoPostSchema, PasoPostSchema, PasoSchema, ValidaPostSchema, Error

router = Router()

@router.get('/', response=List[ProyectoDetailSchema])
def lista_proyectos(request):
    queryset = Proyecto.objects.all()
    return list(queryset)

# @router.get('/', response=List[ProyectoSchema])
# def listar(request):
#     proyectos_ids = Trabajador.objects.filter(usuario=request.user).values_list('proyecto')
#     queryset = Proyecto.objects.filter(pk__in=proyectos_ids)
#     return list(queryset)


@router.post('/{id_proyecto}/paso', response=PasoSchema)
def crea_paso(request, id_proyecto: int, item: PasoPostSchema):
    proyecto = get_object_or_404(Proyecto, pk=id_proyecto)
    orden = max(proyecto.pasos.values_list('orden'))[0] + 1
    proyecto = Paso.objects.create(proyecto=proyecto, nombre=item.nombre, descripcion=item.descripcion, orden=orden)
    proyecto.save()
    return proyecto

@router.post('/', response=ProyectoDetailSchema)
def crea(request, item: ProyectoPostSchema):
    proyecto = Proyecto.objects.create(nombre=item.nombre, descripcion=item.descripcion)
    proyecto.save()
    return proyecto

@router.post('/{id}/', response=ProyectoDetailSchema)
def actualiza(request, id: int, item: ProyectoPostSchema):
    proyecto = get_object_or_404(Proyecto, pk=id)
    for clave, valor in item:
        if valor is not None:
            setattr(proyecto, clave, valor)
    proyecto.save()


@router.get('/{id}/', response=ProyectoDetailSchema)
def get(request, id: int):
    proyecto = get_object_or_404(Proyecto, pk=id)
    return proyecto



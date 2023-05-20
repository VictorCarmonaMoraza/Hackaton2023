from django.contrib import admin

from proyectos.models import Proyecto, Paso, Trabajador
# Register your models here.

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    pass
@admin.register(Paso)
class PasoAdmin(admin.ModelAdmin):
    pass
@admin.register(Trabajador)
class TrabajadorAdmin(admin.ModelAdmin):
    pass

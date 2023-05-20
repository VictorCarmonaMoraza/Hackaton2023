from django.db import models

# Create your models here.

class Proyecto(models.Model):
    SIN_EMPEZAR = 0
    EN_CURSO = 1
    FINALIZADO = 2
    VALIDADO = 3

    OPCIONES_ESTADO = [
        (0, 'Sin empezar'),
        (1, 'En curso'),
        (2, 'Finalizado'),
        (3, 'Validado'),
    ]

    nombre = models.CharField(max_length=50, null=True, blank=True)
    descripcion = models.TextField()
    estado = models.PositiveSmallIntegerField(choices=OPCIONES_ESTADO, default=SIN_EMPEZAR)

    class Meta:
        verbose_name = "Proyecto"
        verbose_name_plural = "Proyectos"

    def __str__(self):
        return self.nombre

class Paso(models.Model):
    OPCIONES_ESTADO = [
        (0, 'Sin empezar'),
        (1, 'En curso'),
        (2, 'Finalizado'),
        (3, 'Validado'),
    ]
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE, related_name="pasos")
    nombre = models.CharField(max_length=100,null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    estado = models.PositiveSmallIntegerField(choices=OPCIONES_ESTADO, default=0)
    orden = models.PositiveSmallIntegerField(default=0)
    comentarios = models.TextField(null=True, blank=True)

class Trabajador(models.Model):
    ROLES = [
        (0, 'Observador'),
        (1, 'Trabajador'),
        (2, 'Validador'),
    ]
    OPCIONES_ESTADOS = [
        (0, 'No validado'),
        (1, 'Validado'),
    ]
    usuario = models.ForeignKey("auth.User", on_delete=models.CASCADE, null=True, blank=True)
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE, null=True, blank=True)
    paso = models.ForeignKey(Paso, on_delete=models.CASCADE, null=True, blank=True, related_name="trabajadores")
    rol = models.PositiveSmallIntegerField(choices=ROLES, null=True, blank=True)
    estado = models.PositiveSmallIntegerField(choices=OPCIONES_ESTADOS, default=0)
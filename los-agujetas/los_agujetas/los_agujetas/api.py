from ninja import NinjaAPI

from proyectos.api import router as proyectos_router

api = NinjaAPI()

api.add_router("/proyectos/", proyectos_router)
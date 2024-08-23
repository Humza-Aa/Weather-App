from django.urls import path
from .views import get_current_weather

urlpatterns = [
    path('weather/', get_current_weather, name='get_current_weather'),
]

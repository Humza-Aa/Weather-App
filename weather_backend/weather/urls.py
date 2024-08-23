from django.urls import path
from .views import get_current_weather, get_image

urlpatterns = [
    path('weather/', get_current_weather, name='get_current_weather'),
    path('image/', get_image, name='get_image'),

]

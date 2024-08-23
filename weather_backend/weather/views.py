import requests
from django.http import JsonResponse
from django.conf import settings

def get_current_weather(request):
    city = request.GET.get('city', 'London')
    api_key = settings.WEATHER_API_KEY
    base_url = 'http://api.openweathermap.org/data/2.5/weather'

    params = {
        'q': city,
        'appid': api_key,
        'units': 'metric'
    }

    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        data = response.json()
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Unable to fetch weather data'}, status=response.status_code)

def get_image(request):
    description = request.GET.get('description')
    if not description:
        return JsonResponse({'error': 'Description is required'}, status=400)

    # Using OpenWeatherMap's icon as the image
    image_url = f"http://openweathermap.org/img/wn/{description}@2x.png"
    return JsonResponse({'image_url': image_url})
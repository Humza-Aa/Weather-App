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

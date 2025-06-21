from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

class FeedbackView(APIView):
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')
        if not (name and email and message):
            return Response({'error': 'Все поля обязательны'}, status=status.HTTP_400_BAD_REQUEST)
        subject = f'Обратная связь от {name}'
        body = f'Имя: {name}\nEmail: {email}\nСообщение:\n{message}'
        send_mail(
            subject,
            body,
            'rediskaSgryadki@yandex.ru',
            ['rediskaSgryadki@yandex.ru'],
            fail_silently=False,
        )
        return Response({'success': 'Сообщение отправлено!'}) 

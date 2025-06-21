from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMultiAlternatives
from rest_framework.permissions import AllowAny
from django.utils.html import escape

class FeedbackView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        topic = request.data.get('topic')
        message = request.data.get('message')
        file = request.FILES.get('file')
        if not (name and email and message and topic):
            return Response({'error': 'Все поля обязательны'}, status=status.HTTP_400_BAD_REQUEST)
        subject = f'Обратная связь: {topic} — {name}'
        text_body = f'Имя: {name}\nEmail: {email}\nТема: {topic}\nСообщение:\n{message}'
        html_body = f'''
            <h2>Новое сообщение обратной связи</h2>
            <p><strong>Имя:</strong> {escape(name)}</p>
            <p><strong>Email:</strong> {escape(email)}</p>
            <p><strong>Тема:</strong> {escape(topic)}</p>
            <p><strong>Сообщение:</strong></p>
            <div style="background:#f7f7f7;padding:10px;border-radius:8px;">{escape(message).replace('\n', '<br>')}</div>
        '''
        email_message = EmailMultiAlternatives(
            subject,
            text_body,
            'rediskaSgryadki@yandex.ru',
            ['rediskaSgryadki@yandex.ru'],
        )
        email_message.attach_alternative(html_body, "text/html")
        if file:
            email_message.attach(file.name, file.read(), file.content_type)
        email_message.send()
        return Response({'success': 'Сообщение отправлено!'}) 

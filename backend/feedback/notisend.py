import requests

NOTISEND_API_KEY = '957c8b116d7c2d3a3629e3b822efbcdc'
DEVELOPER_EMAIL = 'rediskaSgryadki@yandex.ru'

# Замените на ваш подтверждённый адрес отправителя в NotiSend
FROM_EMAIL = 'rediskasgryadki@yandex.ru'

def send_feedback_email(user_email, message):
    url = 'https://api.notisend.ru/v1/email/send'
    headers = {
        'Authorization': f'Bearer {NOTISEND_API_KEY}',
        'Content-Type': 'application/json',
    }
    data = {
        'from': FROM_EMAIL,
        'to': DEVELOPER_EMAIL,
        'subject': 'Новое сообщение обратной связи',
        'text': f"Email пользователя: {user_email or 'не указан'}\n\nСообщение:\n{message}",
    }
    response = requests.post(url, headers=headers, json=data, timeout=10)
    return response.ok 

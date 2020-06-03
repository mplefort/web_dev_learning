# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import sys

print(sys.executable)

client = Client(username="SID",
                password="KEY")


for msg in client.messages.list():
    print(msg.body)


message = client.messages.create(from_='+12057402339',
                                 body='Hello from Python',
                                 to='+19517952993'
                                 )

# print("Created new message: {}".format(message.sid))

# message.delete()

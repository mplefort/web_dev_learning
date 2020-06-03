# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import sys

print(sys.executable)

client = Client(username="AC91634388320341f0028027d6041c2ba3",
                password="ef17ed77758b796a173ab212697e9c83")


for msg in client.messages.list():
    print(msg.body)


message = client.messages.create(from_='+12057402339',
                                 body='Hello from Python',
                                 to='+19517952993'
                                 )

# print("Created new message: {}".format(message.sid))

# message.delete()

from django.test import TestCase
from builder.models import Order


class OrderTestCase(TestCase):
    def setUp(self):
        order = Order.objects.all()
        order.lang.add(lang='Python')
        print order
        return order
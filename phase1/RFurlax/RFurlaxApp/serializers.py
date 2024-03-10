from .models import *
from rest_framework import serializers

class CustomerSerialilizer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields=('__all__')
        extra_kwargs = {
            'password': {'write_only': True},  
        }

class CategorySerialilizer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=('__all__')

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model= Product
        fields=('__all__')

class InvoiceSerializer(serializers.ModelSerializer):

    class Meta:
        model= Invoice
        fields=('__all__')
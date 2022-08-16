from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from .routines import RoutineSerializer
from ..models.user import User

class UserSerializer(serializers.ModelSerializer):
    routines = RoutineSerializer(many=True, read_only=True)
    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'password', 'routines']
        extra_kwargs = {'password': {'write_only': True, 'required': True, 'min_length': 5}}
    
    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)
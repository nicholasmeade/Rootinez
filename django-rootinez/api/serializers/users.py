from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .routine import Routine
from .users import User
from django.db import models
from ..serializers.routine import RoutineSerializer
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    routines = RoutineSerializer(many=True, read_only=True)
    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'password', 'routines']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
    
    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        Token.objects.create(user = user)
        return user
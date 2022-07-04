from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .routine import Routine
from .users import User
from django.db import models
from ..serializers.routine import RoutineSerializer

class UserSerializer(serializers.ModelSerializer):
    tasks = RoutineSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'tasks']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user = user)
        return user
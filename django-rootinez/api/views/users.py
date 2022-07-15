from rest_framework import viewsets
from django.contrib.auth.models import User
from ..serializers.users import UserSerializer
from django.contrib.auth import get_user_model

class UserView(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
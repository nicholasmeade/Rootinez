from rest_framework import serializers
from ..models.routine import Routine

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['name', 'description', 'owner']
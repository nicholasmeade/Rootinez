from django.db import models
from django.contrib.auth.models import User

class Routine(models.Model):
    name = models.CharField(max_length=70)
    description = models.CharField(max_length=500)
    user = models.ForeignKey(User, related_name='routines', null=False, on_delete=models.CASCADE)
from django.db import models
from django.contrib.auth import get_user_model

class Routine(models.Model):
    name = models.CharField(max_length=70)
    description = models.CharField(max_length=500)
    owner = models.ForeignKey(
        get_user_model(),
        related_name='routines',
        on_delete=models.CASCADE
    )
from django.db import models

class Routine(models.Model):
    name = models.CharField(max_length=70)
    description = models.CharField(max_length=500)
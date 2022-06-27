from django.urls import path
from .views.routine import RoutinesView, RoutineView

urlpatterns = [
    path('routines/', RoutinesView.as_view(), name='index'),
    path('routines/<int:pk>', RoutineView.as_view(), name='routine')
]
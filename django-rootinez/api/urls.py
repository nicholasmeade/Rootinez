from django.urls import path, include
from api.views.users import UserView
from .views.routine import RoutinesView, RoutineView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserView)

urlpatterns = [
    path('routine/', RoutinesView.as_view(), name='index'),
    path('routine/<int:pk>', RoutineView.as_view(), name='routine'),
    path('', include(router.urls)),
]
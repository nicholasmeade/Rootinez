from django.urls import path, include
from api.views.users import UserView
from .views.routine import RoutinesView, RoutineView, AccountView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserView)

urlpatterns = [
    path('routine/', RoutinesView.as_view(), name='index'),
    path('routine/<int:pk>', RoutineView.as_view(), name='routine'),
    path('account/', AccountView.as_view(), name='index'),
    path('account/<int:pk>', AccountView.as_view(), name='account'),
    path('', include(router.urls)),
]
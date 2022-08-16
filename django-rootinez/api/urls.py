from getpass import getuser
from django.urls import path, include
from .views.user import SignUp, SignIn, SignOut, ChangePassword
from .views.user import UserView
from .views.routine import RoutinesView, RoutineView, AccountView, GetUserView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserView)

urlpatterns = [
    path('sign-up/', SignUp.as_view(), name='sign-up'),
    path('sign-in/', SignIn.as_view(), name='sign-in'),
    path('sign-out/', SignOut.as_view(), name='sign-out'),
    path('change-password/', ChangePassword.as_view(), name='change-password'),
    path('routine/', RoutinesView.as_view(), name='index'),
    path('routine/<int:pk>', RoutineView.as_view(), name='routine'),
    path('account/<int:pk>', AccountView.as_view(), name='index'),
    path('users/<int:pk>', AccountView.as_view(), name='account'),
    path('userID/', GetUserView.as_view(), name='account'),
    path('', include(router.urls)),
]
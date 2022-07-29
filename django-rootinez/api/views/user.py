from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from ..serializers.user import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import status, generics

class SignUp(generics.CreateAPIView):
    authentication_classes = ()
    permission_classes = ()

    def post(self, request):
        new_user = UserSerializer(data=request.data)
        if new_user.is_valid():
            new_user.save()
            return Response({'user': new_user.data}, status=status.HTTP_201_CREATED)
        else:
            print(new_user.data)
            return Response(new_user.errors, status=status.HTTP_400_BAD_REQUEST)

class SignIn(generics.CreateAPIView):
    authentication_classes = ()
    permission_classes = ()

    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            Token.objects.filter(user=user).delete()
            token = Token.objects.create(user=user)
            user.token = token.key
            user.save()
            return Response({
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'token': token.key
                }
            })
        else:
            return Response({ 'msg': 'The username and/or password is incorrect.' }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class SignOut(generics.DestroyAPIView):
    def delete(self, request):
        user = request.user
        Token.objects.filter(user=user).delete()
        user.token = None
        user.save()
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)

class ChangePassword(generics.UpdateAPIView):
    def patch(self, request):
        user = request.user
        old_pw = request.data['passwords']['old']
        new_pw = request.data['passwords']['new']
        if not user.check_password(old_pw):
            return Response({ 'msg': 'Wrong password' }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        user.set_password(new_pw)
        user.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserView(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
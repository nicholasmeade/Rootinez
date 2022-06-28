from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from ..models.routine import Routine
from ..serializers.routine import RoutineSerializer

class RoutinesView(APIView):
    # get all routines
    def get(self, request):
        routines = Routine.objects.all()
        data = RoutineSerializer(routines, many=True).data
        return Response(data)
    
    # create a new routine
    def post(self, request):
        routines = RoutineSerializer(data=request.data)
        if routines.is_valid():
            routines.save()
            return Response(routines.data, status=status.HTTP_201_CREATED)
        else:
            return Response(routines.errors, status=status.HTTP_400_BAD_REQUEST)
    
class RoutineView(APIView):
    # get a single routine
    def get(self, request, pk):
        routine = get_object_or_404(Routine, pk=pk)
        data = RoutineSerializer(routine).data
        return Response(data)
    
    # delete a single routine
    def delete(self, request, pk):
        routine = get_object_or_404(Routine, pk=pk)
        routine.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    # edit a single routine
    def put(self, request, pk):
        routine = get_object_or_404(Routine, pk=pk)
        updated_routine = RoutineSerializer(routine, data=request.data)
        if updated_routine.is_valid():
            updated_routine.save()
            return Response(updated_routine.data)
        else:
            return Response(updated_routine.errors, status=status.HTTP_400_BAD_REQUEST)

# def home(request):
#     return render(request, 'main/home.html')

# def index(request):
#     return render(request, 'rootinez_backend/index.html')

# def register(request):
#     if request.method == 'POST':
#         form = UserCreationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data['username']
#             password = form.cleaned_data['password1']
#             user = authenticate(username = username, password = password)
#             login(request, user)
#             return redirect('index')
#     else:
#         form = UserCreationForm()
#     context = {'form': form}
#     return render(request, 'templates/rootinez_backend/registration/register.html', context)
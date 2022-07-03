from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
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
            routines.user = request.user.id
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
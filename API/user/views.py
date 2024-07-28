from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from .models import Profile
from django.contrib.auth.models import User
from .serializers import ProfileSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
import json

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    
    def create(self, request, *args, **kwargs):
        user_data = json.loads(request.data.get('user'))
        profile_data = request.data
        print(profile_data)
        user = User(
            username=user_data['username'],
            email=user_data['email'],
            first_name=user_data['first_name'],
            last_name=user_data['last_name']
        )
        user.set_password(user_data['password'])
        user.save()

        # Create Profile
        profile = Profile(
            user=user,
            dob=profile_data.get('dob'),
            bio=profile_data.get('bio', ''),
            profile_picture=profile_data.get('profile_picture', 'media/profilePicture/default.svg')
        )
        
        profile.save()

        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def update(self,request,*args,**kwargs):
        instance = self.get_object()
        profile, created = Profile.objects.get_or_create(instance)
        user_data = json.loads(request.data.get('user'))
        profile_data = request.data
        for attr,value in user_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance,attr,value)
        
        instance.save()

        for attr,value in profile_data.items():
            if attr != 'user':
                setattr(profile,attr,value)
        profile.save()

        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
    
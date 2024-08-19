from rest_framework import serializers
from .models import Subreddit
from django.contrib.auth.models import User
from user.serializers import UserSerializer
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

class SubredditSerializer(serializers.ModelSerializer):
    owner = UserSerializer()

    class Meta:
        model = Subreddit
        fields = ['id', 'name', 'description', 'owner', 'picture']

    def retrieve(self, request, pk=None):
        queryset = Subreddit.objects.all()
        subreddit = get_object_or_404(queryset, pk=pk)
        serializer = SubredditSerializer(subreddit)
        return Response(serializer.data)
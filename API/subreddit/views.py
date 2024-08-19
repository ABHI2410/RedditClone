from django.shortcuts import render
from rest_framework import viewsets, status
from subreddit.models import Subreddit
from subreddit.serializers import SubredditSerializer
# Create your views here.
class SubredditViewSet(viewsets.ModelViewSet):
    queryset = Subreddit.objects.all()
    serializer_class = SubredditSerializer
    
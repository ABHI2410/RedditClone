from rest_framework import serializers
from .models import Subreddit
from django.contrib.auth.models import User
from user.serializers import UserSerializer


class SubredditSerializer(serializers.ModelSerializer):
    owner = UserSerializer()

    class Meta:
        model = Subreddit
        fields = ['id', 'name', 'description', 'owner', 'picture']
from rest_framework import serializers
from .models import Subreddit
from django.contrib.auth.models import User
from user.serializers import ProfileSerializer


class SubredditSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Subreddit
        fields = ['id', 'name', 'description', 'owner', 'picture']
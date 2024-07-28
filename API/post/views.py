from django.shortcuts import render
from rest_framework import viewsets, status
from post.models import Post,Vote,Media,Comment
from post.serializers import PostSerializer,VoteSerializer,MediaSerializer,CommentSerializer

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
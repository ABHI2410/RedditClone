from django.db import models
from user.models import Profile
from subreddit.models import Subreddit
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255,unique=True)
    description = models.TextField(null=True,blank=True)
    created_at = models.DateField(auto_now_add=True)
    modified_at = models.DateField(auto_now=True)
    subreddit = models.ForeignKey(Subreddit,on_delete=models.CASCADE,related_name='post')
    user = models.ForeignKey(Profile, on_delete=models.CASCADE,related_name='posts')

class Media(models.Model):
    file = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='media')

class Comment(models.Model):
    content = models.TextField()
    createdAt = models.DateField(auto_now_add=True)
    modifiedAt = models.DateTimeField(auto_now=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE,related_name='comments')
    user = models.ForeignKey(Profile,on_delete=models.CASCADE,related_name='comments')


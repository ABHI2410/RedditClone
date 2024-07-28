from django.db import models
from user.models import Profile
from subreddit.models import Subreddit
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255,unique=True)
    description = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    subreddit = models.ForeignKey(Subreddit,on_delete=models.CASCADE,related_name='post')
    visibility = models.TextField(choices=(('Public','public'),('Private','private'),('Members','members')), default='Public')
    user = models.ForeignKey(Profile, on_delete=models.CASCADE,related_name='posts')

class Media(models.Model):
    def user_directory_path(instance,filename):
        return f"user_{instance.user.id}/{filename}"
    file = models.FileField(upload_to=user_directory_path)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='media')

class Comment(models.Model):
    content = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    modifiedAt = models.DateTimeField(auto_now=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE,related_name='comments')
    user = models.ForeignKey(Profile,on_delete=models.CASCADE,related_name='comments')

class Vote(models.Model):
    UPVOTE = 1
    DOWNVOTE = -1

    VOTE_CHOICES = (
        (UPVOTE, 'Upvote'),
        (DOWNVOTE, 'Downvote')
    )

    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='votes')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='votes', null=True, blank=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='votes', null=True, blank=True)
    vote_type = models.SmallIntegerField(choices=VOTE_CHOICES)

    class Meta:
        unique_together =('user', 'post', 'comment')

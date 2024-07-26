from django.db import models
from django.contrib.auth.models import User
from subreddit.models import Subreddit
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=255,unique=True,primary_key=True)
    dob = models.DateField(null=False, blank=False)
    bio = models.TextField(null=True, blank=True)
    profilePicture = models.TextField(default="./static/profilePricture/default.svg")
    subscribedSubreddits = models.ManyToManyField(Subreddit,related_name='subscribers')
    moderator = models.ManyToManyField(Subreddit, related_name='Moderator')

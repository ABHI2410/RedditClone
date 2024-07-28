from django.db import models
from django.contrib.auth.models import User
from subreddit.models import Subreddit
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dob = models.DateField(null=False, blank=False)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to="media/profilePicture",default="media/profilePricture/default.svg")
    subscribed_subreddits = models.ManyToManyField(Subreddit,related_name='subscribers')
    moderator = models.ManyToManyField(Subreddit, related_name='Moderator')

from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Subreddit(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True,blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to="media/subredditPicture",default="media/subredditPricture/default.svg")

    
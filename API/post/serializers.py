from rest_framework import serializers
from post.models import Post, Comment, Media, Vote
from user.serializers import ProfileSerializer
from user.models import Profile

class VoteSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.all())
    class Meta:
        model = Vote
        fields = ['id', 'user', 'post', 'comment', 'vote_type']

class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ['id', 'file']

class PostSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.all())
    media = MediaSerializer(many=True, required=False)
    votes = VoteSerializer(many=True, required=False)
    class Meta:
        model = Post
        fields = ['id','title','description', 'created_at', 'modified_at', 'subreddit', 'user', 'votes', 'media']


class CommentSerializer(serializers.ModelSerializer):
    votes = VoteSerializer(many = True)
    user = ProfileSerializer(many=False)
    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at', 'modified_at', 'post', 'user', 'votes']





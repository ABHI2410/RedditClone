from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile
import re


class UserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True, required=True,style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['id','username','email', 'first_name', 'last_name', 'password','date_joined']
        extra_kwargs = {'password': {'write_only': True, 'required': True, 'style':{'input_type': 'password'}}}
    
    def validate(self,data):
        if not data['username'].isalnum():
            raise serializers.ValidationError("username should only have alphabet and numbers")
        if not all(char.isalpha() or char.isspace() for char in data['first_name']):
            raise serializers.ValidationError("first name should only have alphabet or space")
        if not all(char.isalpha() or char.isspace() for char in data['last_name']):
            raise serializers.ValidationError("last name should only have alphabet or space")
        regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
        special_characters = set('''!@#$%^&*()_+{}<>?|[]\\;',./:"''')
        if not re.fullmatch(regex,data['email']):
            raise serializers.ValidationError("Invalid email")
        if len(data['password']) < 8 and len(data['password'] > 25):
            raise serializers.ValidationError("Password must have atleast 8 charaters and atmost 25 characters")
        if not any(char.isdigit() for char in data['password']):
            raise serializers.ValidationError("Password must have at least one numeric charater")
        if not any(char.islower() for char in data['password']):
            raise serializers.ValidationError("Password must have at least one lower case charater")
        if not any(char.isupper() for char in data['password']):
            raise serializers.ValidationError("Password must have at least one upper case charater")
        if not special_characters.intersection(data['password']):
            raise serializers.ValidationError("Password must have atleast one special charater")
        return data
        

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many = False)
    class Meta:
        model = Profile 
        fields = ['id', 'user', 'dob', 'bio', 'profile_picture']
    

    def create(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
        user = instance.user

        for attr, value in user_data.items():
            if attr == 'password':
                user.set_password(value)
            setattr(user, attr, value)
        user.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance


    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
        user = instance.user

        for attr, value in user_data.items():
            if attr == 'password':
                user.set_password(value)
            setattr(user, attr, value)
        user.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance
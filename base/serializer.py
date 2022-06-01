from django.db import models
from django.db.models import fields
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken, Token
from django.contrib.auth.models import User
from .models import Part1,Part2,Part3,Part4


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get__id(self, obj):
        return obj.id

    def get_name(self, obj):
        name = obj.first_name
        if name == "":
            name = obj.email
        return name



class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class Part1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Part1
        fields = '__all__'

class Part2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Part2
        fields = '__all__'


class Part3Serializer(serializers.ModelSerializer):
    class Meta:
        model = Part3
        fields = '__all__'

class Part4Serializer(serializers.ModelSerializer):
    class Meta:
        model = Part4
        fields = '__all__'



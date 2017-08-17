from builder.models import (Language, Framework, Time, Level, Order, )
from rest_framework import serializers


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'lang_name')


class FrameworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Framework
        fields = ('id', 'frame_name', 'frame_lang')


class WorktimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = ('id', 'time_name')


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ('id', 'lvl_name')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['lang', 'frame', 'time', 'level']

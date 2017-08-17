# coding=utf-8
from __future__ import unicode_literals
from django.db import models


class Language(models.Model):
    class Meta:
        db_table = 'language'
        verbose_name = 'Programming language'

    lang_name = models.CharField(max_length=50)

    def __unicode__(self):
        return self.lang_name


class Framework(models.Model):
    class Meta:
        db_table = 'framework'
        verbose_name = 'Framework'

    frame_name = models.CharField(max_length=50)
    frame_lang = models.ForeignKey(Language)

    def __unicode__(self):
        return self.frame_name


class Time(models.Model):
    time_name = models.CharField( max_length=50)

    class Meta:
        db_table = 'time'
        verbose_name = 'Work time'

    def __unicode__(self):
        return self.time_name


class Level(models.Model):
    lvl_name = models.CharField(max_length=50, db_index=True)

    class Meta:
        db_table = 'level'
        verbose_name = 'Job level'

    def __unicode__(self):
        return self.lvl_name


class Order(models.Model):
    class Meta:
        db_table = 'order'
        verbose_name = 'Order'

    manager = models.NullBooleanField(verbose_name='Manager request')
    email_address = models.EmailField(max_length=200, blank=True)
    project_description = models.TextField(max_length=300, blank=True)
    langs = models.ManyToManyField(Language, related_name='order', verbose_name='Language')
    frames = models.ManyToManyField(Framework, related_name='order', verbose_name='Framework')
    times = models.ManyToManyField(Time, related_name='order', verbose_name='Time')
    levels = models.ManyToManyField(Level, related_name='order', verbose_name='Level')

    def __unicode__(self):
        return "order №:" + str(self.pk)


class Developers(models.Model):
    class Meta:
        db_table = 'developer'
        verbose_name = 'Developer'

    dev_name = models.CharField(max_length=100, verbose_name='Dev')
    dev_lang = models.ManyToManyField(Language, related_name='developers', verbose_name='Language')
    dev_frame = models.ManyToManyField(Framework, related_name='developers', verbose_name='Framework')
    dev_time = models.ManyToManyField(Time, related_name='developers', verbose_name='Time')
    dev_lvl = models.ManyToManyField(Level, related_name='developers', verbose_name='Job level')
    dev_file = models.FileField(blank=True)

    def __unicode__(self):
        return self.dev_name

# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-05 13:05
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Developers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dev_name', models.CharField(max_length=100, verbose_name='Dev')),
                ('dev_file', models.FileField(blank=True, upload_to=b'')),
            ],
            options={
                'db_table': 'developer',
                'verbose_name': 'Developer',
            },
        ),
        migrations.CreateModel(
            name='Framework',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('frame_name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'framework',
                'verbose_name': 'Framework',
            },
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lang_name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'language',
                'verbose_name': 'Programming language',
            },
        ),
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lvl_name', models.CharField(db_index=True, max_length=50)),
            ],
            options={
                'db_table': 'level',
                'verbose_name': 'Job level',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('manager', models.NullBooleanField(verbose_name='Manager request')),
                ('email_address', models.EmailField(blank=True, max_length=200)),
                ('project_description', models.TextField(blank=True, max_length=300)),
                ('frames', models.ManyToManyField(related_name='order', to='builder.Framework', verbose_name='Framework')),
                ('langs', models.ManyToManyField(related_name='order', to='builder.Language', verbose_name='Language')),
                ('levels', models.ManyToManyField(related_name='order', to='builder.Level', verbose_name='Level')),
            ],
            options={
                'db_table': 'order',
                'verbose_name': 'Order',
            },
        ),
        migrations.CreateModel(
            name='Time',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'time',
                'verbose_name': 'Work time',
            },
        ),
        migrations.AddField(
            model_name='order',
            name='times',
            field=models.ManyToManyField(related_name='order', to='builder.Time', verbose_name='Time'),
        ),
        migrations.AddField(
            model_name='framework',
            name='frame_lang',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='builder.Language'),
        ),
        migrations.AddField(
            model_name='developers',
            name='dev_frame',
            field=models.ManyToManyField(related_name='developers', to='builder.Framework', verbose_name='Framework'),
        ),
        migrations.AddField(
            model_name='developers',
            name='dev_lang',
            field=models.ManyToManyField(related_name='developers', to='builder.Language', verbose_name='Language'),
        ),
        migrations.AddField(
            model_name='developers',
            name='dev_lvl',
            field=models.ManyToManyField(related_name='developers', to='builder.Level', verbose_name='Job level'),
        ),
        migrations.AddField(
            model_name='developers',
            name='dev_time',
            field=models.ManyToManyField(related_name='developers', to='builder.Time', verbose_name='Time'),
        ),
    ]

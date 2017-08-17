from django.contrib import admin

# Register your models here.
from builder.models import (Language, Framework, Time, Level, Order, Developers, )


class OrderAdmin(admin.ModelAdmin):
    # list_display = ['manager','email_address']
    list_filter = ['langs']
    filter_horizontal = ['langs', 'frames', 'times', 'levels']


class DevelopersAdmin(admin.ModelAdmin):
    filter_horizontal = ['dev_lang', 'dev_frame', 'dev_time', 'dev_lvl']


admin.site.register(Order, OrderAdmin)
admin.site.register(Language)
admin.site.register(Framework)
admin.site.register(Level)
admin.site.register(Time)
admin.site.register(Developers, DevelopersAdmin)

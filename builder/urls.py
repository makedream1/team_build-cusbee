from django.conf.urls import url
from builder import views
from builder.views import Information

app_name = 'builder'
urlpatterns = [
    url(r'^information/?$', Information.as_view(), name='information'),
    url(r'^$', views.index, name='post'),

]

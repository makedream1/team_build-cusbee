from django.shortcuts import render_to_response


# Create your views here.
def index(request):
    return render_to_response('blog/index.html')


def home(request):
    return render_to_response('blog/views/home.html')

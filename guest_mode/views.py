from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def landing(request):
    return render(request,'guest_mode/index.html')
def registration(request):
    return render(request,'guest_mode/registration.html')
def events(request):
    return render(request,'guest_mode/events.html')

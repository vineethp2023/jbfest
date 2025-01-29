from django.urls import include, path
from . import views

urlpatterns = [
    path('',views.landing,name='landing'),
    path('events/',views.events,name='events'),
]

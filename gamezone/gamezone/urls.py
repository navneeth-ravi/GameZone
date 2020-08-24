from django.contrib import admin
from django.urls import path,include
from games import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index, name="index"),
    path('game/',include('games.urls')),
    path('logout/',views.user_logout,name='logout'),
    path('special/',views.special,name='special'),
    path('tic/',views.tic,name='tic')
]

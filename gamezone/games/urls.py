from django.conf.urls import url
from . import views
app_name="games"

urlpatterns=[
url(r'^register/$',views.register,name='register'),
url(r'^login/$',views.user_login,name='user_login'),
url(r'^tictactoe/$',views.tic,name='tictactoe'),
url(r'^connect4/$',views.connect4,name='connect4')
]

from django.shortcuts import render
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required


from .forms import userform

def index(request):
    return render(request,'games/home.html')

@login_required
def special(request):
    return render(request,'games/home.html')

@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))


@login_required
def tic(request):
    return render(request,'games/tictoctoe.html')


@login_required
def connect4(request):
    return render(request,'games/connect4.html')

def register(request):
    registered=False;
    if request.method=='POST':
        p=userform(data=request.POST)
        if p.is_valid():
            user=p.save()
            user.set_password(user.password)
            user.save()
            registered=True
        else:
            print(p.errors)
    else:
        p=userform()
    return render(request,'games/register.html',{'form':p,'registered':registered})


def user_login(request):
    if request.method=='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        print(username)
        print(password)
        user=authenticate(username=username,password=password)
        print(user)
        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('index'))
            else:
                return HttpResponse("Account not active")
        else:
            print("login failed")
            return HttpResponse("invalid")
    else:
        return render(request,'games/login.html',{})

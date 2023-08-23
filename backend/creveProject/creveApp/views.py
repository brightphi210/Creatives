from rest_framework.exceptions import PermissionDenied
from rest_framework import status
from django.shortcuts import render
from rest_framework.decorators import api_view

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics, filters, permissions
from .serializers import *
from .models import *
# Create your views here.


@api_view(['GET'])
def endpoint(request):
    data = {
        'endpoint': 'api/',
        'Creative List Create': 'creative/register/',
        'Creative Profile List Create': 'creative/profile/'

    }
    return Response(data)


# ================== GET AND CREATE CREATIVES ====================
class CreativeRegistrationView(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = CreativeAccountSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'username', 'email']

    def create(self, request, *args, **kwargs):
        request.data['is_creative'] = True
        return super().create(request, *args, **kwargs)


# ================== GET AND UPDATE CREATIVES ====================
class CreativeUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = CreativeAccountSerializer
    lookup_field = 'pk'

    def creative_update(self, serializer):
        instance = serializer.save()

    def creative_destroy(self, instance):
        return super().perform_destroy(instance)


# ================== GET CREATIVES PROFILE  ====================
class GetCreativeProfileView(generics.ListAPIView):
    queryset = CreativeAccount.objects.all()
    serializer_class = CreativeProfileSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['account__name', 'account__email']


# ================== GET UPDATE AND DELETE CREATIVE PROFILE  ====================
class CreativeEdithProfile(generics.RetrieveUpdateDestroyAPIView):
    queryset = CreativeAccount.objects.all()
    serializer_class = CreativeProfileSerializer
    lookup_field = 'pk'

    def creativeProfile_update(self, serializer):
        instance = serializer.save()

    def creativeProfile_destroy(self, instance):
        return super().perform_destroy(instance)


# ================== GET AND CREATE USER  ====================
class UserRegistrationView(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = UserAccountSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'username', 'email']

    def create(self, request, *args, **kwargs):
        # request.data._mutable = True
        request.data['is_user'] = True
        return super().create(request, *args, **kwargs)


# ================== GET AND CREAT PRODUCT  ====================
class ProductGetCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [IsAuthenticated]

    filter_backends = [filters.SearchFilter]
    search_fields = ['productName',
                     'cobbling__categoryName', 'funitures__categoryName']

    def perform_create(self, serializer):
        creator = self.request.user

        print(creator)

        # Check if the user is a creative user
        if not creator.is_creative:
            raise PermissionDenied(
                "You are not authorized to create a product.")
        serializer.save(creator=creator)


# ================== GET, UPDATE, AND DELETE PRODUCT  ====================
class ProductGetUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'pk'

    def creativeProfile_update(self, serializer):
        instance = serializer.save()

    def creativeProfile_destroy(self, instance):
        return super().perform_destroy(instance)


# ================== GET AND CREATE WEB AND MOBILE  ====================
class WebMobileGetCreate(generics.ListCreateAPIView):
    queryset = WebMobile.objects.all()
    serializer_class = WebMobileSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
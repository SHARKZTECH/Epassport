from ..views.users_views import *
from django.urls import path


urlpatterns = [
    path("register/", registerUser, name="register"),
    path("login/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("profile/", getUserProfile, name="users-profile"),
    path("profile/update/", updateUserProfile, name="user-profile-update"),
    path("", getUsers, name="users"),
    path("<str:pk>/", getUserById, name="user"),
    path("update/<str:pk>/", updateUser, name="update-user"),
    path("delete/<str:pk>/", deleteUser, name="delete-user"),
]

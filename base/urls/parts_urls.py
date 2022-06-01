from ..views.parts_views import *
from django.urls import path

urlpatterns = [
    path("create_part1/", createPart1, name="part1-create"),
    path("create_part2/", createPart2, name="part2-create"),
    path("create_part3/", createPart3, name="part3-create"),
    path("upload/", uploadImage, name="upload-image"), 
]

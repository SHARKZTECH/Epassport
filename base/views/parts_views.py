from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from ..models import Part1,Part2,Part3,Part4
from ..serializer import Part1Serializer,Part2Serializer,Part3Serializer,Part4Serializer
from rest_framework import status



@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPart1(request):
    user = request.user
    data=request.data
    part1 = Part1.objects.create(
        user=user,
        name=data["name"],
        birthPlace=data["birthPlace"],
        birthPlace=data["birthDate"],
        pin=data["pin"],
        nameChanged=data["nameChanged"],
        address=data["address"],
        phone=data["phone"],
        home_phone=data["home_phone"],
        estate_sublocation=data["estate_sublocation"],
        plot_village=data["plot_village"],
        email=data["email"],

        citizenBy=data["citizenBy"],

        marriage_status=data["marriage_status"],
        partner_name=data["partner_name"],
        maiden_name=data["maiden_name"],
        marriage_detail=data["marriage_detail"],

        reason_travel=data["reason_travel"],

        id_number=data["id_number"],
        country=data["country"],
        job=data["job"],
        height=data["height"],
        eye_color=data["eye_color"],
        mark=data["mark"],

        mother_name=data["mother_name"],
        mother_id=data["mother_id"],
        mother_passport=data["mother_passport"],
        mother_birthPlace=data["mother_birthPlace"],
        mother_address=data["mother_address"],
        mother_phone=data["mother_phone"],

        father_name=data["father_name"],
        father_id=data["father_id"],
        father_passport=data["father_passport"],
        father_birthPlace=data["father_birthPlace"],
        father_address=data["father_address"],
        father_phone=data["father_phone"]       

    )
    serializer = Part1Serializer(part1, many=False)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart1(request):
    user = request.user
    part1 = user.part1_set.all()
    serializer = Part1Serializer(part1, many=False)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPart2(request):
    user = request.user
    data=request.data
    part2 = Part2.objects.create(
        user=user,
        name=data["name"],
        division=data["division"],
        location=data["birthDate"],
        relationship=data["pin"],
        id_number=data["nameChanged"],
        address=data["address"],
        phone=data["phone"],      
        email=data["email"]     

    )
    serializer = Part2Serializer(part2, many=False)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart2(request):
    user = request.user
    part2 = user.part2_set.all()
    serializer = Part1Serializer(part2, many=False)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPart3(request):
    user = request.user
    data=request.data
    part3 = Part3.objects.create(
        user=user,
        name=data["name"],
        job=data["job"],
        address=data["address"],
        id_number=data["nameChanged"],
        email=data["email"],     
        phone=data["phone"]      

    )
    serializer = Part3Serializer(part3, many=False)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart3(request):
    user = request.user
    part3 = user.part3_set.all()
    serializer = Part1Serializer(part3, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def uploadImage(request):
    data = request.data
    image = request.FILES.get("image")
   
    return Response("Image was uploaded successfully")



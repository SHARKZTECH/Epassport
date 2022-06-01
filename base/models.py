from django.db import models
from django.contrib.auth.models import User


class Part1(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True) 
    birthPlace = models.CharField(max_length=200, null=True, blank=True)
    birthDate = models.DateTimeField()  
    pin = models.IntegerField(null=True, blank=True, default=0)
    nameChanged = models.CharField(max_length=200, null=True, blank=True)
    address = models.IntegerField(null=True, blank=True, default=0)
    phone = models.IntegerField(null=True, blank=True, default=0)
    home_phone = models.IntegerField(null=True, blank=True, default=0)
    estate_sublocation = models.CharField(max_length=200, null=True, blank=True)
    plot_village = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)

    citizenBy = models.CharField(max_length=200, null=True, blank=True)

    marriage_status = models.CharField(max_length=200, null=True, blank=True)
    partner_name = models.CharField(max_length=200, null=True, blank=True)
    maiden_name = models.CharField(max_length=200, null=True, blank=True)
    marriage_detail = models.CharField(max_length=200, null=True, blank=True)

    reason_travel = models.CharField(max_length=200, null=True, blank=True)

    id_number = models.IntegerField(null=True, blank=True, default=0)
    country = models.CharField(max_length=200, null=True, blank=True)
    job = models.CharField(max_length=200, null=True, blank=True)
    height = models.IntegerField(null=True, blank=True, default=0)
    eye_color = models.CharField(max_length=200, null=True, blank=True)
    mark = models.CharField(max_length=200, null=True, blank=True)

    mother_name = models.CharField(max_length=200, null=True, blank=True)
    mother_id = models.IntegerField(null=True, blank=True, default=0)
    mother_passport = models.IntegerField(null=True, blank=True, default=0)
    mother_birthPlace = models.CharField(max_length=200, null=True, blank=True)
    mother_address = models.IntegerField(null=True, blank=True, default=0)
    mother_phone = models.IntegerField(null=True, blank=True, default=0)

    father_name = models.CharField(max_length=200, null=True, blank=True)
    father_id = models.IntegerField(null=True, blank=True, default=0)
    father_passport = models.IntegerField(null=True, blank=True, default=0)
    father_birthPlace = models.CharField(max_length=200, null=True, blank=True)
    father_address = models.IntegerField(null=True, blank=True, default=0)
    father_phone = models.IntegerField(null=True, blank=True, default=0)

    craetedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Part2(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    division = models.CharField(max_length=200, null=True, blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    relationship = models.CharField(max_length=200, null=True, blank=True)
    id_number = models.IntegerField(null=True, blank=True, default=0)
    address = models.CharField(max_length=200, null=True, blank=True)
    phone = models.IntegerField(null=True, blank=True, default=0)
    email = models.CharField(max_length=200, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class Part3(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    job = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    id_number = models.IntegerField(null=True, blank=True, default=0)
    email = models.CharField(max_length=200, null=True, blank=True)
    phone = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)

class Part4(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png') 
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class Part5(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)  
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.createdAt)

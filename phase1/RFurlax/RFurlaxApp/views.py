from django.shortcuts import get_object_or_404, render
from .models import Customer,Category,Product,Invoice
from rest_framework.views import APIView
from .serializers import CustomerSerialilizer,CategorySerialilizer,ProductSerializer,InvoiceSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


class register_view(APIView):
    def get(self, request, *args, **kwargs):
        
        id = kwargs.get('id')
        if id:
            try:
                result = Customer.objects.get(id=id)
                serializer = CustomerSerialilizer(result)
                return Response({'status': 'success', 'customers': serializer.data}, status=status.HTTP_200_OK)
            except Customer.DoesNotExist:
                return Response({'status': 'error', 'message': 'Customer does not exists!!!'}, status=status.HTTP_404_NOT_FOUND)
        else:
            result = Customer.objects.all()
            serializer = CustomerSerialilizer(result, many=True)
            return Response({'status': 'success', 'customers': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            serializer = CustomerSerialilizer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'status': 'success!! Data Added Successfully!!', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'status': 'error', 'message': "Enter Unique & Correct data!!"}, status=status.HTTP_400_BAD_REQUEST)



class login_view(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        try:
            user=Customer.objects.get(username=username)
            if user.password==password:
                return Response({"status": "success","username":username,"password":password},status=status.HTTP_200_OK)
            else:
                return Response({"error":"Invalid password"},status=status.HTTP_404_NOT_FOUND)
        except:
                 return Response({'error': 'User Doesn\'t Exists'},status=status.HTTP_400_BAD_REQUEST)



class create_category_view(APIView):
   # permission_classes=[IsAuthenticated]  
    def post(self,request):
        try:    
            serializer=CategorySerialilizer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'status':'success','data':serializer.data},status=status.HTTP_200_OK)
        except:
                return Response({'status':'error','data':"Category already exists"},status=status.HTTP_400_BAD_REQUEST)



class get_category_view(APIView):
    def get(self, request, *args, **kwargs):
        id = kwargs.get('id')
        if id:
            try:
                result = Category.objects.get(id=id)
                serializer = CategorySerialilizer(result)
                return Response({ 'categories': serializer.data}, status=status.HTTP_200_OK)
            except Category.DoesNotExist:
                return Response({ 'message': 'Category does not exists!!!'}, status=status.HTTP_404_NOT_FOUND)
        else:
            result = Category.objects.all()
            serializer = CategorySerialilizer(result, many=True)
            return Response({'categories': serializer.data}, status=status.HTTP_200_OK)
        

class add_product_view(APIView):
   # permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            serializer = ProductSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'status': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'status': 'error', 'message': 'Invalid data', 'errors': serializer.errors},
                            status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


class get_products_bycategory_view(APIView):
    def get(self, request, *args, **kwargs):
        categoryname= kwargs.get("category")
        try:
            id= Category.objects.get(type=categoryname).id
            products= Product.objects.filter(category=id)
            serializer= ProductSerializer(products, many=True)
            return Response({'products': serializer.data}, status=status.HTTP_200_OK)
        except:
            return Response({ 'products': "category doesnot exists"}, status=status.HTTP_400_BAD_REQUEST)


class createInvoiceView(APIView):  
    def post(self, request):
            serializer = InvoiceSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'data':serializer.data}, status=status.HTTP_201_CREATED)
            return Response({"error"}, status=status.HTTP_400_BAD_REQUEST)


class getInvoiceView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            status = kwargs.get("status")
            if status in ["ORDERED", "DELIVERED", "CANCELLED"]:
                result = Invoice.objects.filter(status=status)
                serializer = InvoiceSerializer(result, many=True)
                if len(serializer.data) != 0:
                    return Response({ "invoices": serializer.data})
                else:

                    result = Invoice.objects.all()
                    serializer = InvoiceSerializer(result, many=True)
                    return Response({ "invoices": serializer.data})
            else:
                    result = Invoice.objects.all()
                    serializer = InvoiceSerializer(result, many=True)
                    

                    return Response({ "invoices": serializer.data})
        except Invoice.DoesNotExist:
            return Response({"message": "No invoices with the given status found."})
    

        

class getidfromusernameView(APIView):
    def get(self,request,*args,**kwargs):
        try:
            username=kwargs.get("username")
            id= Customer.objects.get(username=username).id
            address=Customer.objects.get(username=username).address
            firstname=Customer.objects.get(username=username).first_name
            lastname=Customer.objects.get(username=username).last_name
            email=Customer.objects.get(username=username).email
            datalist={
                "id":id,
                "address":address,
                "firstname":firstname,
                "lastname":lastname,
                "email":email

            }
            return Response({"data":datalist})
        except:
            return Response({"message":"error"})

        
        

        

     
        

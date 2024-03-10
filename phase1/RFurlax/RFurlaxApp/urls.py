from django.urls import path
from .views import *
urlpatterns = [

    path('register/',register_view.as_view()),                      #REGISTERING THE DATA
    path('register/<int:id>',register_view.as_view()),              #GETTING THE DATA OF DESIRED CUSTOMER
    path('login/',login_view.as_view()),                            #LOGIN USING CORRECT CREDENTIALS
    path('category/',create_category_view.as_view()),               #FOR CREATING THE CATEGORIES
    path('categories/',get_category_view.as_view()),                #VIEWING THE CATEGORIES THAT WERE CREATED
    path('categories/<int:id>',get_category_view.as_view()),        #VIEWING THE DESIRED CATEGORY BY SENDING THE ID
    path('product/',add_product_view.as_view()),                    #FOR ADDITION OF PRODUCTS
    path('invoice/',createInvoiceView.as_view()),                   #FOR CREATION OF INVOICES
    path('invoices/<str:status>',getInvoiceView.as_view()),         #VIEWING THE INVOICES BASED ON STATUS
    path('username/<str:username>',getidfromusernameView.as_view()),
    path('<str:category>/',get_products_bycategory_view.as_view()), #VIEWING THE PRODUCTS UNDER SPECIFIED CATEGORY
]
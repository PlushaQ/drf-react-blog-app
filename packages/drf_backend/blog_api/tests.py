from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User

from blog.models import Post, Category

class PostTests(APITestCase):

    def test_view_posts(self):
        url = reverse('blog_api:list_create')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def create_post(self):
        self.test_category = Category.objects.create(name='django')
        self.test_user = User.objects.create_user(username='test_user', password='123456')
        data = {'title': 'new', 'author': 'new', 'excerpt': 'new', 'content': 'new',}
        url = reverse('blog_api:list_create')
        response = self.client.post(url, data, format='json',)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth.models import User

from blog.models import Post, Category

class PostTests(APITestCase):
    def setUp(self) -> None:
        self.client = APIClient()

        self.test_category = Category.objects.create(name='django')
        self.test_user = User.objects.create_user(username='test_user', password='123456')
        self.test_user2 = User.objects.create_user(username='test_user2', password='123456')
        self.test_post = Post.objects.create(category_id=1, title='Post Title', excerpt='Post excerpt', content='Post content', slug='post-title', author_id=1, status='published')

    def test_view_posts(self):
        url = reverse('blog_api:list_create')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_post(self):
        self.client.login(username=self.test_user.username, password='123456')

        data = {'title': 'new', 'author': 1, 'excerpt': 'new', 'content': 'new',}
        url = reverse('blog_api:list_create')

        response = self.client.post(url, data, format='json',)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    
    def test_post_update_by_owner_user(self):
        self.client.login(username=self.test_user.username, password='123456')

        url = reverse(('blog_api:detail_create'), kwargs={'pk': 1})

        response = self.client.put(url, {
            "id": 1,
            "title": "New",
            "author": 1,
            "excerpt": "new",
            "content": "new",
            "status": "published"
        }, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_post_update_by_not_owner_user(self):
        self.client.login(username=self.test_user2.username, password='123456')

        url = reverse(('blog_api:detail_create'), kwargs={'pk': 1})

        response = self.client.put(url, {
            "id": 1,
            "title": "New",
            "author": 1,
            "excerpt": "new",
            "content": "new",
            "status": "published"
        }, format='json')

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


        
        
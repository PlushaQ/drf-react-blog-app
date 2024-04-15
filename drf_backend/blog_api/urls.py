from .views import PostList, PostListDetailFilter
from rest_framework.routers import DefaultRouter
from django.urls import path

app_name = 'blog_api'

router = DefaultRouter()
router.register('', PostList, basename='post')

urlpatterns = [
    path('search/custom/', PostListDetailFilter.as_view(), name='postsearch')
]

urlpatterns += router.urls
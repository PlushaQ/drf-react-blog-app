from .views import PostList, PostListDetailFilter, CreatePost, DeletePost, EditPost, AdminPostDetail
from rest_framework.routers import DefaultRouter
from django.urls import path

app_name = 'blog_api'

router = DefaultRouter()
router.register('', PostList, basename='post')

urlpatterns = [
    path('search/', PostListDetailFilter.as_view(), name='postsearch'),
    path('admin/create', CreatePost.as_view(), name='createpost'),
    path('admin/edit/postdetail/<int:pk>', AdminPostDetail.as_view(), name='admindetailpost'),
    path('admin/edit/<int:pk>/', EditPost.as_view(), name='editpost'),
    path('admin/delete/<int:pk>', DeletePost.as_view(), name='deletepost'),
]
urlpatterns += router.urls
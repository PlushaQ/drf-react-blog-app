from rest_framework import generics, viewsets, filters, status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.response import Response
from django.shortcuts import get_object_or_404



from blog.models import Post
from .serializers import PostSerializer


class PostUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        
        return obj.author == request.user


class PostList(viewsets.ModelViewSet):
    permission_classes = [PostUserWritePermission, IsAuthenticated]
    serializer_class = PostSerializer
    
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, slug=item)

    def get_queryset(self):
        return Post.objects.all()


class PostListDetailFilter(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^slug']


# Post Admin

# class CreatePost(generics.CreateAPIView):
#     permission_classes = [IsAuthenticated]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

class CreatePost(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    
    def post(self, request, format=None):
        print(request.data)
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AdminPostDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class EditPost(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DeletePost(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
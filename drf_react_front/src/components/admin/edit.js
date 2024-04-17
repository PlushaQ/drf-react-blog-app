import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const MyContainer = styled(Container)({
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const MyForm = styled('form')({
  width: '100%',
  marginTop: '24px',
});

const MySubmitButton = styled(Button)({
  margin: '24px 0',
});

export default function Create() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
  });

  useEffect(() => {
    axiosInstance.get(`admin/edit/postdetail/${id}`).then((res) => {
      setFormData({
        ...formData,
        author: res.data.author,
        title: res.data.title,
        excerpt: res.data.excerpt,
        slug: res.data.slug,
        content: res.data.content,
      });
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.put(`admin/edit/${id}/`, formData).then(() => {
      navigate('/admin/');
      window.location.reload();
    });
  };

  return (
    <MyContainer component="main" maxWidth="sm">
      <Typography component="h1" variant="h5">
        Edit Post
      </Typography>
      <MyForm onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="title"
              label="Post Title"
              name="title"
              autoComplete="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="excerpt"
              label="Post Excerpt"
              name="excerpt"
              autoComplete="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              multiline
              rows={8}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="slug"
              label="Slug"
              name="slug"
              autoComplete="slug"
              value={formData.slug}
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="content"
              label="Content"
              name="content"
              autoComplete="content"
              value={formData.content}
              onChange={handleChange}
              multiline
              rows={8}
            />
          </Grid>
        </Grid>
        <MySubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Update Post
        </MySubmitButton>
      </MyForm>
    </MyContainer>
  );
}

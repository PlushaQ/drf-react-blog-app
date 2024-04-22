import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const FormContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FormAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const Form = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export default function Create() {
    function slugify(string) {
        const a =
          'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
        const b =
          'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
        const p = new RegExp(a.split('').join('|'), 'g');
      
        const slug = string
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[^\w\-]+/g, '') // Remove all non-word characters
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
          .replace(/^-+/, '') // Trim - from start of text
          .replace(/-+$/, ''); // Trim - from end of text
      
        console.log('Slug:', slug); // Log the generated slug
        return slug;
      }
      

  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
  });

  const [postData, updateFormData] = useState(initialFormData);
  const [postImage, setPostImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name == 'image')
    {
      setPostImage({
        image: e.target.files,
      });
      console.log(e.target.files)
    }
    if (e.target.name === 'title') {
      updateFormData({
        ...postData,
        [e.target.name]: e.target.value.trim(),
        slug: slugify(e.target.value.trim()),
      });
    } else {
      updateFormData({
        ...postData,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  
  const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('title', postData.title);
		formData.append('slug', postData.slug);
		formData.append('author', 1);
		formData.append('excerpt', postData.excerpt);
		formData.append('content', postData.content);
		formData.append('image', postImage.image[0]);
		axiosInstance.post(`admin/create/`, formData, {
      headers: {
      'Content-Type': 'multipart/form-data',
    }});
		navigate('/admin/');
    window.location.reload()
	};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormContainer>
        <FormAvatar></FormAvatar>
        <Typography component="h1" variant="h5">
          Create New Post
        </Typography>
        <Form noValidate>
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
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="slug"
                label="Slug"
                name="slug"
                autoComplete="slug"
                value={postData.slug}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="content"
                label="Content"
                name="content"
                autoComplete="content"
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept='image/*'
                className='input'
                id='post-image'
                onChange={handleChange}
                name='image'
                type='file' />
            </Grid>

          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Create Post
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}

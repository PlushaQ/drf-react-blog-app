import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';

// Define styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[400],
  borderRadius: theme.shape.borderRadius,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  textAlign: 'left',
}));

const StyledPostText = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  fontSize: '12px',
  textAlign: 'left',
}));


const Posts = (props) => {
  const { posts } = props;

  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} md={4}>
              <StyledCard>
                <StyledCardMedia
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <StyledCardContent>
                  <StyledTypography gutterBottom variant="h6" component="h2">
                    {post.title.substr(0, 50)}...
                  </StyledTypography>
                  <StyledPostText>
                    <Typography component="p" color="textPrimary"></Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.excerpt.substr(0, 60)}...
                    </Typography>
                  </StyledPostText>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Posts;

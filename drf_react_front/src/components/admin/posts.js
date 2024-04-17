import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
}));

const PostTitle = styled('div')(({ theme }) => ({
  fontSize: '16px',
  textAlign: 'left',
}));

const PostText = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  fontSize: '12px',
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}));

const Posts = (props) => {
  const { posts } = props;

  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;

  return (
    <Container maxWidth="md" component="main">
      <StyledPaper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                    <TableCell component="th" scope="row">
                        {post.id}
                    </TableCell>
                    <TableCell align="left">
                        {post.category}
                    </TableCell>
                  <TableCell align="left">
                    <StyledLink color="textPrimary" href={'/post/' + post.slug}>
                      <PostTitle>{post.title}</PostTitle>
                    </StyledLink>
                  </TableCell>
                  <TableCell align="left">
                    <StyledLink color="textPrimary" href={'/admin/edit/' + post.id}>
                      <EditIcon />
                    </StyledLink>
                    <StyledLink color="textPrimary" href={'/admin/delete/' + post.id}>
                      <DeleteForeverIcon />
                    </StyledLink>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="right">
                  <Button href={'/admin/create'} variant="contained" color="primary">
                    New Post
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </Container>
  );
};

export default Posts;

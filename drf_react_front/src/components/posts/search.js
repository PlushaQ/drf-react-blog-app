import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';

// Material UI
import styled from '@emotion/styled';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Container} from '@mui/material';
import { Link } from '@mui/material';

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: '56.25%', // 16:9
  }));
  
const StyledLink = styled(Link)(({ theme }) => ({
    margin: theme.spacing(1, 1.5),
  }));
  
// const StyledCardHeader = styled.div(({ theme }) => ({
//     backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
//   }));
  
const StyledPostTitle = styled(Typography)({
    fontSize: '16px',
    textAlign: 'left',
  });
  
const StyledPostText = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    fontSize: '12px',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  }));


const Search = () => {
	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{appState.posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card className='card'>
									<StyledLink
										color="textPrimary"
										href={'/post/' + post.slug}
									>
										<StyledCardMedia
											image="https://source.unsplash.com/random"
											title="Image title"
										/>
									</StyledLink>
									<CardContent className='card-content'>
										<StyledPostTitle
											gutterBottom
											variant="h6"
											component="h2"
										>
											{post.title.substr(0, 50)}...
										</StyledPostTitle>
										<StyledPostText>
											<Typography color="textSecondary">
												{post.excerpt.substr(0, 40)}...
											</Typography>
                                        </StyledPostText>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Search;
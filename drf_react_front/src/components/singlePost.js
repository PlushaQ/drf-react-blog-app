import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';


//MaterialUI
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const StyledPaper = styled('div')(({theme}) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))


export default function Post() {
	const { slug } = useParams();
	const [data, setData] = useState({ posts: [] });

	useEffect(() => {
		axiosInstance.get(slug).then((res) => {
			setData({ posts: res.data });
			console.log(res.data);
		});
	}, [setData, slug]);

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<StyledPaper />
			<div className='heroContent'>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						{data.posts.title}
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						{data.posts.excerpt}
					</Typography>
				</Container>
			</div>
		</Container>
	);
}

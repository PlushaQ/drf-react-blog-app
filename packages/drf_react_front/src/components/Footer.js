import { styled } from '@mui/system'; // Import the styled function from @mui/system
import { Container, Grid, Link, Typography, Box } from '@mui/material'; // Import necessary components from MUI

// Define a styled footer component using the styled function
const StyledFooter = styled('footer')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`, // Border top with theme palette divider color
  marginTop: theme.spacing(8), // Margin top using theme spacing
  paddingTop: theme.spacing(3), // Padding top using theme spacing
  paddingBottom: theme.spacing(3), // Padding bottom using theme spacing
  [theme.breakpoints.up('sm')]: { // Media query for breakpoints up 'sm'
    paddingTop: theme.spacing(6), // Adjusted padding top for larger screens
    paddingBottom: theme.spacing(6), // Adjusted padding bottom for larger screens
  },
}));

// Component for displaying copyright information
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Data for footer sections
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

// Main footer component
function Footer() {
    return (
      <StyledFooter>
        <Container maxWidth="md" component="footer">
          <Grid container spacing={4} justifyContent="space-evenly">
            {/* Mapping through footers data */}
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                {/* Section title */}
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                {/* List for section items */}
                <ul>
                  {/* Mapping through section items */}
                  {footer.description.map((item) => (
                    <li key={item}>
                      {/* Section item link */}
                      <Link href="#" variant="subtitle1" color="text.secondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          {/* Box for copyright information */}
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </StyledFooter>
    );
  }
  

export default Footer; // Export the Footer component

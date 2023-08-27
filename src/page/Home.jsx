// const Home = () => {
//   return (
//     <>
//       <h1>Welcome to the Phonebook page!</h1>
//       <p>
//         Our Phonebook is point for all your important contact information. Here
//         you can conveniently manage all your contacts, store additional
//         information and easily find the data you need.
//       </p>
//     </>
//   );
// };

// export default Home;

import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" style={{ marginTop: '90px' }}>
        Welcome to the Phonebook page!
      </Typography>
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        Our Phonebook is a central hub for all your important contact
        information. Here you can conveniently manage all your contacts, store
        additional information, and easily find the data you need.
      </Typography>
    </Container>
  );
};

export default Home;

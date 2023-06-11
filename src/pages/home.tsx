import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import PostDetail from '../../components/Posts/myfeed/postDetail';

const Home = ()=> {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={8}>
      <PostDetail />
    </Grid>
  );
};

export default Home
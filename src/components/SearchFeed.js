import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom'


import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
      const { searchTerm } = useParams();
      const [videos, setVideos ] = useState([])

      useEffect(() => {
            fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
                  .then((data) => setVideos(data.items))
                  .catch(error =>console.log('⚠️',error.message))
      }, [searchTerm])

      return (
            <Box p={2} sx={{ overFlowY: 'auto', height: '90vh', flex: 2 }}>
                  <Typography variant="h4"
                        fontWeight='bold' mb={2} sx ={{ color : 'white'}}
                  >
                        Search Results for : <span style={{ color : '#F31503'}}>{searchTerm }</span> videos
                  </Typography>
                  <Videos videos={ videos} />
            </Box>
      );
};

export default Feed;

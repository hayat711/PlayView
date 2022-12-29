import React, { useEffect, useState } from 'react';
import { Typography, Stack, Box } from '@mui/material';

import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
      const [selectedCategory, setSelectedCategory] = useState('New');
      const [videos, setVideos] = useState([]);

      useEffect(() => {
            // setVideos(null);

            fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
                  .then((data) => setVideos(data.items))
                  .catch((error) => console.log('⚠️', error.message));
      }, [selectedCategory]);

      return (
            <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
                  <Box
                        sx={{
                              height: { sx: 'auto', md: '92vh' },
                              borderRight: '1px solid #3d3d3d',
                              px: { sx: 0, md: 2 },
                        }}
                  >
                        <Sidebar
                              selectedCategory={selectedCategory}
                              setSelectedCategory={setSelectedCategory}
                        />

                        <Typography
                              className="copyright"
                              variant="body2"
                              sx={{ mt: 1.5, color: '#fff' }}
                        >
                              Copyright © 2022 HYT ☺️
                        </Typography>
                  </Box>

                  <Box
                        p={2}
                        sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
                  >
                        <Typography
                              variant="h4"
                              fontWeight="bold"
                              mb={2}
                              sx={{ color: 'white' }}
                        >
                              {selectedCategory}{' '}
                              <span style={{ color: '#FC1503' }}>videos</span>
                        </Typography>

                        <Videos videos={videos} />
                  </Box>
            </Stack>
      );
};

export default Feed;

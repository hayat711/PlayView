import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';

import{ Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';



function App() {
      return (
            <Router >
                  <Box sx={{ backgroundColor : '#000'}}>
                        <Navbar />
                        <Routes>
                              <Route path="/" exact element={<Feed />} />
                              <Route path="/video/:id" element ={<VideoDetail />} />
                              <Route path="/chanel/:id" element={<ChannelDetail />} />
                              <Route path="/search/:searchTerm" element={ <SearchFeed />} />
                        </Routes>
                  </Box>
            </Router>
      );
}

export default App;

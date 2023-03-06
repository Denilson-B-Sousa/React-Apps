import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material'
import React from 'react';
/*Atalho para criar a estrurura básica é
rafce
*/


import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components/Index.js';


export function App() {
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            Navbar
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/search/:serchTerm" element={<SearchFeed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>


            </Routes>
        </Box>
    </BrowserRouter>
};
   

export default App;


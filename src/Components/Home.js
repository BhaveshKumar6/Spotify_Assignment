import React from 'react';
import TopSongs from './Top/TopSongs';
import TopArtist from './Top/TopArtist';

function Home() {
  return (
    <div style={{padding: "1rem"}}>
        <TopSongs />
        <TopArtist />
    </div>
  )
}

export default Home
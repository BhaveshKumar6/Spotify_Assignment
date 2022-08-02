import React from "react";
import "./Songs.css";
import { SongList, ArtistList } from "../List";
import ReactStars from "react-rating-stars-component";


function Songs() {

  return (
    <>
    <h1 className="song_title">Songs</h1> 
    <div className="songs">
    
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {SongList.map((e) => {
            return (
              <tr key={e}>
                <td>{e.id}</td>
                <td>
                  <img className="song_cover" src={e.cover} alt={e.cover} />
                </td>
                <td>{e.name}</td>
                <td>{e.date}</td>
                <td>
                  {e.artist.map((a) => {
                    return <ul key={a}> {ArtistList[a - 1].artist} </ul>;
                  })}
                </td>
                <td>
                <ReactStars
                value={e.rating}
                count={5}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
 </> );
}

export default Songs;

import React from "react";
import "./Top.css";
import { SongList, ArtistList } from "../List";
import { Link } from "react-router-dom";
import AddSong from "../AddSong";
import ReactStars from "react-rating-stars-component";

function TopSongs() {
  return (
    <div className="top">
      <div className="headingdivision">
        <h2 className="topheading">Top 10 Songs</h2>
        <Link to="/addsong" component={AddSong} className="AddSongs">
          Add Songs
        </Link>
      </div>
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
          {}
          {SongList.sort((a, b) => b.rating - a.rating)
            .slice(0, 10)
            .map((e) => {
              // console.log(s.sort((a, b) => (a.ratting > b.ratting) ? 1 : -1));
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
  );
}

export default TopSongs;

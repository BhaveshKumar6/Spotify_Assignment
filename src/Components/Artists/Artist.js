import React from "react";
import "./Artist.css";
import { SongList, ArtistList } from "../List";
import ReactStars from "react-rating-stars-component";

function Artist() {
  return (
    <div className="artists">
      <h1 className="artist_heading">Artist</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Songs</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {ArtistList.map((i) => {
            return (
              <tr key={i}>
                <td>{i.id}</td>
                <td>{i.artist}</td>
                <td>{i.dob}</td>
                <td>
                  {SongList.map((b) => {
                    return (
                      <ul>
                        {b.artist.map((c) => {
                          if (i.id === c) {
                            return <div>{b.name}</div>;
                          }
                        })}
                      </ul>
                    );
                  })}
                </td>
                <td>
                  <ReactStars
                    value={i.rating}
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

export default Artist;

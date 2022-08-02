import React from "react";
import "./Top.css";
import { SongList, ArtistList } from "../List";
import ReactStars from "react-rating-stars-component";

function TopArtist() {
  return (
    <div className="top">
      <h2 className="topheading">Top 10 Artist</h2>
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
          {ArtistList
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 10)
            .map((i) => {
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

export default TopArtist;

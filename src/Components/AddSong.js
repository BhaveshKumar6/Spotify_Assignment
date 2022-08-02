import React from "react";

function AddSong() {
  return (
    <div>
      <h2>Adding a New Song</h2>
      <form>
        <span>Song Name</span>
        <div>
          <input placeholder="Enter Song Name" />
        </div>
        <span>Date Released</span>
        <div>
          <input type="Date" placeholder="Enter Date" />
        </div>
        <span>Artwork</span>
        <div>
          <input type="text" placeholder="Upload Image" />
        </div>
        <div>
          <span>Artists</span>
          <div>
            <input placeholder="Enter Song Name" />
          </div>
          <button>Add Songs</button>
        </div>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddSong;

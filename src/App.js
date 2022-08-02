import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSong from "./Components/AddSong";
import Navbar from "./Components/Navbar/Navbar";
import Songs from "./Components/Song/Songs";
import Artist from "./Components/Artists/Artist";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(true);

  return (
    <div>
      <BrowserRouter>
      {!login && <Navbar name={name} email={email}/>}
        <Routes>
          <Route
            path="/"
            element={
              login ? (
                <div>
                  <Login
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    setLogin={setLogin}
                  />
                </div>
              ) : (
                <Home />
              )
            }
          />
          <Route path="/song" element={<Songs /> } />
          <Route path="/addsong" element={<AddSong />} />
          <Route path="/artists" element={<Artist />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

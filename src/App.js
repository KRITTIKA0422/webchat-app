import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import socketIO from 'socket.io-client';
import {host} from './utils/APIRoutes';
import "./App.css";
const socket = socketIO.connect(host);
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Register socket={socket} />}></Route>
          <Route path="/login" element={<Login socket={socket} />}></Route>
          <Route path="/chat" element={<Chat socket={socket} />}></Route>
        </Routes>            
    </div>
     
  );
}

export default App;
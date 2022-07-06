import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
const [message, setMessage] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <input
        placeholder="message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      ></input>
      <button onClick={sendMessage}>send message</button>
    </div>
  );
}

export default App;

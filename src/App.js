import React, { useState } from "react";
import "./App.css";
import UrlService from "./services/url";

function App() {
  const [longUrl, setLongUrl] = useState("");

  const baseURL = "http://localhost:8080/";
  const handleUrlInput = (event) => {
    setLongUrl(event.target.value);
    console.log(longUrl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UrlService.getShortUrl(longUrl).then((res) => {
      alert(baseURL + res.data);
    });
  };

  return (
    <div>
      <form>
        <input type="text" value={longUrl} onChange={handleUrlInput}></input>
        <button type="submit" onClick={handleSubmit}>
          Get short Url
        </button>
      </form>
    </div>
  );
}

export default App;

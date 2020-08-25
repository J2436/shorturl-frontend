import React, { useState } from "react";
import "./App.css";
import UrlService from "./services/url";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);

  const baseUrl = "localhost:8080/";

  const handleUrlInput = (event) => {
    setLongUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UrlService.getShortUrl(longUrl).then((res) => {
      const newUrl = { destination: longUrl, shortUrl: baseUrl + res.data };
      setShortUrls(shortUrls.concat(newUrl));
    });
  };

  return (
    <div className="container">
      <h1 className="title">Shorturl</h1>
      <form>
        <input
          className="url-input"
          placeholder="Enter the link here "
          type="text"
          value={longUrl}
          onChange={handleUrlInput}
        ></input>
        <div className="submit-btn">
          <button type="submit" onClick={handleSubmit}>
            Get short Url
          </button>
        </div>
      </form>
      <ul>
        {shortUrls.map((pair) => (
          <li key={pair.shortUrl}>
            Long Url: {pair.destination}
            Short Url: {pair.shortUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

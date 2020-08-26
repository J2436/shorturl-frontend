import React, {useState} from 'react';
import './App.css';
import UrlService from './services/url';
import LinkList from './components/LinkList';
function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);

  const baseUrl = 'localhost:8080/';

  const handleUrlInput = event => {
    setLongUrl(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Check if the longUrl link has already been shortened
    if (!shortUrls.some(element => element.longUrl === longUrl)) {
      UrlService.getShortUrl(longUrl).then(res => {
        const newUrl = {longUrl, shortUrl: baseUrl + res.data};
        setShortUrls(shortUrls.concat(newUrl));
      });
    } else {
    }
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
        <div>
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            Get short Url
          </button>
        </div>
      </form>
      <ul>
        <LinkList links={shortUrls} />
      </ul>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [albums, setAlbums] = useState([]);
    const [covers, setCovers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => setAlbums(data));
    }, []);

    const selectAlbum = (e) => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.selectedIndex}`)
            .then(res => res.json())
            .then(data => setCovers(data));
    };

    return (
    <div className="App">
      <h1>Select an Album</h1>
        <select name="albums" id="albums" onChange={selectAlbum}>
            <option selected>Select an album from the list</option>
            {albums.map((album, i) => <option key={i} value={album.title}>{album.title}</option>)}
        </select>
        <br />
        <br />
        {covers.map((cover, i) => <img key={i} src={cover.thumbnailUrl} alt={cover.title} />)}
    </div>
  );
}

export default App;

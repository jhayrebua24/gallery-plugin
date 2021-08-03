import "./App.css";
import { getPhotos } from "./actions";
import { useEffect, useMemo, useState } from "react";
import ImageDetails from "./components/ImageDetails";

function App() {
  const [photos, setPhotos] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const handleClose = () => setSelectedPhoto({});
  const [filter, setFilter] = useState("new");

  const filteredPhotos = useMemo(() => {
    if (photos[filter] && Array.isArray(photos[filter])) return photos[filter];
    return [];
  }, [photos, filter]);
  useEffect(() => {
    getPhotos().then(setPhotos);
  }, []);
  return (
    <div className="gallery-container">
      {filteredPhotos.map((photos) => (
        <div key={photos.id}>
          <img
            onClick={() => setSelectedPhoto(photos)}
            src={photos.img}
            alt={photos.title}
          />
        </div>
      ))}
      <ImageDetails data={selectedPhoto} handleClose={handleClose} />
    </div>
  );
}

export default App;

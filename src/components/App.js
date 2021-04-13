import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import "./App.css";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <main className="ui container">
      <SearchBar onFormSubmit={search} />
      <section className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

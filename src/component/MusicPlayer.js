import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./MusicPlayer.css";
import axios from "axios";
import config from "./config/config";
import { Modal, Button, message } from "antd";

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState("");
  const [tracks, setTracks] = useState([]);

  const fetchMusic = async () => {
    try {
      const response = await axios.get(`${config.API}/api/v1/music/getAll`);
      setTracks(response.data);
    } catch (error) {
      console.error("Error fetching music:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.API}/api/v1/music/deleteMusic`, {
        data: { id },
      });
      fetchMusic();      
      message.success("Delete successfully");
    } catch (error) {
      console.error("Error deleting music:", error);
    }
  };

  const showDeleteConfirm = (id, src) => {
    Modal.confirm({
      title: "Are you sure you want to delete this track?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(id);
        fetchMusic();
        if (src === currentTrack) {
          setCurrentTrack("");
        }
      },
    });
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div className="music-player-container">
      <div className="music-player-header">
        <h1>Music Player</h1>
      </div>

      <div className="track-list">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`track-item ${
              currentTrack === track.src ? "active" : ""
            }`}
            onClick={() => setCurrentTrack(track.src)}
          >
            <div className="track-info">
              <div className="track-name">{track.name}</div>
              <div className="track-author">{track.author}</div>
            </div>

            <Button
              className="delete-button"
              type="danger"
              onClick={() => showDeleteConfirm(track.id, track.src)}
            >
              X
            </Button>
          </div>
        ))}
      </div>
      <div className="audio-player-container">
        <ReactAudioPlayer
          src={currentTrack}
          controls
          autoPlay
          className="audio-player"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;

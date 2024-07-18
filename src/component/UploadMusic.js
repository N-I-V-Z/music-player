import { useState } from "react";
import { uploadMusic } from "./utils/upFb";
import axios from "axios";
import { message, Progress } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./UploadMusic.css"; // Import file CSS

function UploadMusic() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [author, setAuthor] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!file || !name || !author) {
      message.warning("Vui lòng nhập đầy đủ thông tin");
    } else {
      setUploading(true);
      const src = await uploadMusic(file, setUploadProgress);
      const response = await axios.post(
        `http://localhost:5000/api/v1/music/addMusic`,
        {
          name,
          author,
          src,
        }
      );
      setUploading(false);
      if (response.data.err === 0) {
        message.success("Thêm thành công");
        navigate("/");
      } else {
        message.error("Thêm thất bại");
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="upload-music-container">
      <h2>Upload Music</h2>
      <div className="upload-music-form">
        <div className="form-group">
          <label>Tên bài hát</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tác giả</label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>File</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control"
          />
        </div>
        {uploading && <Progress percent={uploadProgress} status="active" />}
        <button onClick={handleSubmit} className="upload-button">
          Upload
        </button>
      </div>
    </div>
  );
}

export default UploadMusic;

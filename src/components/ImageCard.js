import React from "react";
import "./ImageCard.css";
import { saveAs } from "file-saver";

const ImageCard = ({
  imageLink,
  setOutputLink,
  setInputImage,
  setInputLink,
}) => {
  const handleShow = () => {
    setOutputLink(imageLink);
  };
  const handleDownload = () => {
    const url = imageLink;
    saveAs(url, url.substring(url.lastIndexOf("/") + 1));
  };
  const handleInput = async () => {
    const blob = await fetch(imageLink).then((r) => r.blob());
    blob.name = imageLink.substring(imageLink.lastIndexOf("/") + 1);
    setInputImage(blob);
    setInputLink((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(blob);
    });
  };
  return (
    <div className="image-card-root">
      <img className="image-card-img" src={imageLink} alt="broken" />
      <div className="image-card-buttons">
        <button onClick={handleInput}>Use As Input</button>
        <button id="middle-btn" onClick={handleShow}>
          Show In Output
        </button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default ImageCard;

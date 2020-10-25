import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import "./messagesender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      profilePic: user.photoURL,
      image: imgUrl,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
    });

    setInput("");
    setImgUrl("");
  };
  const handleChangeInput = (e) => {
    setInput(e.currentTarget.value);
  };
  const handleChangeImgurl = (e) => {
    setImgUrl(e.currentTarget.value);
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={handleChangeInput}
            className="MessageSender__input"
            placeholder={`what is on your mind ${user.displayName}`}
          />
          <input
            value={imgUrl}
            onChange={handleChangeImgurl}
            placeholder="image url(optional)"
          />
          <button onClick={handleSubmit} type="submit">
            HiddenSubmit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>live video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>live video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "red" }} />
          <h3>live video</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

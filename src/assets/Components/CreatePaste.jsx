import { useState } from "react";
import "./Paste.css";
import catImg from "./Kitty.png";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [expire, setExpire] = useState(10);
  const [url, setUrl] = useState("");
  const [maxViews, setMaxViews] = useState(5);
  const handleSubmit = async () => {
    const res = await fetch(
      "https://backend-pastebin-production.up.railway.app/api/paste",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, maxViews }),
      },
    );
    const data = await res.json();
    setUrl(data.url);
  };
  return (
    <div className="page cat-theme">
      {" "}
      <div className="card">
        {" "}
        <img src={catImg} alt="cat" className="cat-img" />{" "}
        <h2>Create Your Paste</h2>{" "}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something fun..."
        />{" "}
        <div className="input-row">
          {" "}
          <label>Expire (minutes):</label>{" "}
          <input
            type="number"
            min="1"
            value={expire}
            onChange={(e) => setExpire(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="input-row">
          {" "}
          <label>Max Views:</label>{" "}
          <input
            type="number"
            min="1"
            value={maxViews}
            onChange={(e) => setMaxViews(e.target.value)}
          />{" "}
        </div>{" "}
        <button onClick={handleSubmit}>Create Paste</button>{" "}
        {url && (
          <div className="link-box">
            {" "}
            🎀 Shareable Link: <a href={url}>{url}</a>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
}

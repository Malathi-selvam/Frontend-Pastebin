import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Paste.css";
import catImg from "./Kitty.png";

export default function ViewPaste() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/paste/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Paste not found or expired 😿");
        return res.json();
      })
      .then((data) => setContent(data.content))
      .catch((err) => setError(err.message));
  }, [id]);

  return (
    <div className="page cat-theme">
      <div className="card rolling-paper">
        <img src={catImg} alt="cat" className="cat-img" />
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <pre className="paste-view">{content}</pre>
        )}
      </div>
    </div>
  );
}

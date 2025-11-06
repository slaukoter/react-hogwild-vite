// src/components/HogCard.jsx
import { useState } from "react";

function HogCard({ hog, onHide }) {
  const [open, setOpen] = useState(false);

  const { name, image, specialty, weight, greased } = hog;
  const highestMedal = hog["highest medal achieved"];

  return (
    <div
      className="ui card"
      aria-label="hog card"
      onClick={() => setOpen((o) => !o)}
      style={{ cursor: "pointer" }}
    >
      <div className="image" style={{ padding: 12 }}>
        <img
          src={image}
          alt={`Photo of ${name}`}
          style={{ objectFit: "cover", width: "100%", borderRadius: 8 }}
        />
      </div>

      <div className="content">
        <h3 className="header">{name}</h3>

        {open && (
          <div className="description" style={{ marginTop: 8 }}>
            <p>{`Specialty: ${specialty}`}</p>
            <p>{String(weight)}</p>
            <p>{greased ? "Greased" : "Nongreased"}</p>
            <p>{highestMedal}</p>
          </div>
        )}
      </div>

      <div className="extra content">
        <button
          className="ui tiny button"
          onClick={(e) => {
            e.stopPropagation();
            onHide(name);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;

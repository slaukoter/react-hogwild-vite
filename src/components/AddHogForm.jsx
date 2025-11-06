import { useState } from "react";

const initial = {
  name: "",
  weight: "",
  specialty: "",
  greased: false,
  image: "",
  "highest medal achieved": "",
};

function AddHogForm({ onAdd }) {
  const [form, setForm] = useState(initial);
  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  function handleSubmit(e) {
    e.preventDefault();
    const newHog = {
      name: form.name.trim(),
      weight: form.weight === "" ? 0 : Number(form.weight),
      specialty: form.specialty.trim(),
      greased: !!form.greased,
      image: form.image.trim(),
      "highest medal achieved": form["highest medal achieved"].trim(),
    };
    if (!newHog.name) return;
    onAdd(newHog);
    setForm(initial);
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="fields">
        <div className="four wide field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>

        <div className="four wide field">
          <label htmlFor="weight">Weight:</label>
          <input
            id="weight"
            type="number"
            value={form.weight}
            onChange={(e) => set("weight", e.target.value)}
          />
        </div>

        <div className="four wide field">
          <label htmlFor="specialty">Specialty:</label>
          <input
            id="specialty"
            type="text"
            value={form.specialty}
            onChange={(e) => set("specialty", e.target.value)}
          />
        </div>

        <div
          className="four wide field"
          style={{ display: "flex", alignItems: "end" }}
        >
          <div className="ui checkbox">
            <input
              id="greased"
              type="checkbox"
              checked={form.greased}
              onChange={(e) => set("greased", e.target.checked)}
            />
            <label htmlFor="greased">Greased?</label>
          </div>
        </div>
      </div>

      <div className="fields">
        <div className="eight wide field">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            type="url"
            value={form.image}
            onChange={(e) => set("image", e.target.value)}
          />
        </div>
        <div className="eight wide field">
          <label htmlFor="medal">Highest medal achieved</label>
          <input
            id="medal"
            type="text"
            value={form["highest medal achieved"]}
            onChange={(e) => set("highest medal achieved", e.target.value)}
          />
        </div>
      </div>

      <button className="ui primary button" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default AddHogForm;

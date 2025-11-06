import { useMemo, useState } from "react";
import hogsData from "../porkers_data";
import HogList from "./HogList.jsx";
import Controls from "./Controls.jsx";
import AddHogForm from "./AddHogForm.jsx";
import Nav from "./Nav.jsx";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState(""); // "", "name", "weight"
  const [hiddenNames, setHiddenNames] = useState(() => new Set());

  function handleHide(name) {
    setHiddenNames((prev) => {
      const next = new Set(prev);
      next.add(name);
      return next;
    });
  }

  function handleAdd(newHog) {
    setHogs((prev) => [...prev, newHog]);
  }

  const visibleHogs = useMemo(() => {
    let list = hogs.filter((h) => (showGreasedOnly ? h.greased : true));
    list = list.filter((h) => !hiddenNames.has(h.name));

    if (sortBy === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      list = [...list].sort((a, b) => a.weight - b.weight);
    }
    return list;
  }, [hogs, showGreasedOnly, sortBy, hiddenNames]);

  return (
    <div className="App">
      <Nav />
      <div
        className="ui container"
        style={{ paddingTop: 24, paddingBottom: 48 }}
      >
        <div className="ui segment">
          <Controls
            showGreasedOnly={showGreasedOnly}
            setShowGreasedOnly={setShowGreasedOnly}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        <div className="ui segment">
          <AddHogForm onAdd={handleAdd} />
        </div>

        <HogList hogs={visibleHogs} onHide={handleHide} />
      </div>
    </div>
  );
}

export default App;

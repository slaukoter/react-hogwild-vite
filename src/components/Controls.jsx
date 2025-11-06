function Controls({ showGreasedOnly, setShowGreasedOnly, sortBy, setSortBy }) {
  return (
    <form className="ui form">
      <div className="fields">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="greasedOnly"
              type="checkbox"
              checked={showGreasedOnly}
              onChange={(e) => setShowGreasedOnly(e.target.checked)}
            />
            <label htmlFor="greasedOnly">Greased Pigs Only?</label>
          </div>
        </div>

        <div className="field">
          <label htmlFor="sortBy">Sort by:</label>
          <select
            id="sortBy"
            className="ui dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">(none)</option>
            <option value="name">name</option>
            <option value="weight">weight</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Controls;

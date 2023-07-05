import { useState } from "react";

import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h2> {people.length} Birthdays Today</h2>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;

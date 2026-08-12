import "./App.css";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <button type="button" onClick={setIsModalOpen(true)}>
      {" "}
      Открыть модалку
    </button>
  );
}

export default App;

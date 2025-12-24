import { useState } from "react";
import Modal from "./Modal";

function App() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{width:"100%", height:"100%"}}>
      <h1>User Details Modal</h1>
      <button onClick={() => setOpen(true)}>Open Form</button>
      <div style={{width:"100%"}}>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} />
      </div>

    </div>
  );
}

export default App;
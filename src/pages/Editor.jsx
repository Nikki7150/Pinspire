// actual screen

import { useState } from "react";
import BoardCanvas from "../components/BoardCanvas";
import CanvasToolbar from "../components/CanvasToolbar";

function Editor() {
  const [canvas, setCanvas] = useState(null); 
    // canvas stores the Fabric canvas object
    // setCanvas lets you update it
    // line needed cuz BoardCanvas creates canvas and CanvasToolBar needs to use it
    // so store in shared place Editor

  return (
    <div>
      <CanvasToolbar canvas={canvas} /> {/* recieves canvas and uses it */}
      <BoardCanvas setCanvas={setCanvas} />  {/* creates canvas and gives it back to Editor */}
    </div>
  );
}

export default Editor;
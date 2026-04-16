// creates the canvas

import { useEffect, useRef } from "react";
import { Canvas } from "fabric";

function BoardCanvas({ setCanvas }) {
  const canvasElRef = useRef(null); // takes access of actual html canvas element

  useEffect(() => {
    const fabricCanvas = new Canvas(canvasElRef.current, { // run when component loads, create Fabric canvas on <canvas>
      width: 1000,
      height: 650,
      backgroundColor: "#b98b62",
      preserveObjectStacking: true,
    });

    setCanvas(fabricCanvas); // sends canvas back to editor

    return () => {
      fabricCanvas.dispose();
    }; // if component disappears, dispose of it
  }, [setCanvas]);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "24px" }}>
      <canvas
        ref={canvasElRef}
        style={{
          border: "2px solid #8a5a44",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}

export default BoardCanvas;
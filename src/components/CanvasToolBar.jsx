// needs to use the canvas 

import {
  addTextToCanvas,
  addStickerToCanvas,
  deleteSelectedObject,
  exportCanvasAsImage,
} from "../utils/canvasHelpers";

function CanvasToolbar({ canvas }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        padding: "16px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <button onClick={() => addTextToCanvas(canvas)}>Add Text</button>

      <button
        onClick={() =>
          addStickerToCanvas(
            canvas,
            "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
          )
        }
      >
        Add Sticker
      </button>

      <button onClick={() => deleteSelectedObject(canvas)}>Delete</button>

      <button onClick={() => exportCanvasAsImage(canvas)}>Download</button>
    </div>
  );
}

export default CanvasToolbar;
import { Textbox, FabricImage } from "fabric";

export function addTextToCanvas(canvas) { // function to add text to board
  if (!canvas) return;

  const text = new Textbox("New text", { // creates text object
    left: 100,
    top: 100,
    fontSize: 28,
    fill: "#3d2b1f",
  });

  canvas.add(text); // adds it to board
  canvas.setActiveObject(text); // selects it to drag
  canvas.renderAll(); // updates the screen
}

export async function addStickerToCanvas(canvas, imageUrl) {
  if (!canvas) return;

  const img = await FabricImage.fromURL(imageUrl);

  img.set({ // creates image object
    left: 150,
    top: 150,
    scaleX: 0.3,
    scaleY: 0.3,
  });

  canvas.add(img); // adds it to board
  canvas.setActiveObject(img); // selects it to drag
  canvas.renderAll(); // updates the screen
}

export function deleteSelectedObject(canvas) {
  if (!canvas) return;

  const activeObject = canvas.getActiveObject(); // finds selected thing
  if (!activeObject) return;

  canvas.remove(activeObject); // removes it
  canvas.renderAll();
}

export function exportCanvasAsImage(canvas) {
  if (!canvas) return;

  const dataURL = canvas.toDataURL({
    format: "png",
    quality: 1,
  }); // turns board into png

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "pinspire-board.png"; // downloads it
  link.click();
}
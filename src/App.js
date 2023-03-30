import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import "./App.css";
import { faEraser, faPen } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

function App() {
  const [brushSize, setBrushSize] = useState(3);
  const [brushColor, setBrushColor] = useState('');
  const [eraserBrushSize, setEraserBrushSize] = useState(3);
  const [erase, setErase] = useState(true);
  const canvasRef = useRef(null);
  const canvas = useRef(null);

  useEffect(() => {
    canvas.current = new fabric.Canvas(canvasRef.current); 
    canvas.current.setHeight(window.innerHeight);
    canvas.current.setWidth(window.innerWidth);
    canvas.current.isDrawingMode = true;
    canvas.current.freeDrawingBrush.color = "#0052cc";
  }, []);

  const handleBrushSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setBrushSize(size);
    console.log(size);
    canvas.current.freeDrawingBrush.width = size;
  };

  const handleEraserBrushSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setEraserBrushSize(size);
    console.log(size);
    canvas.current.freeDrawingBrush.width = size;
  };

  const handleErase = (e) => {
    setErase(!erase);
    if (erase) {
      canvas.current.freeDrawingBrush.color = "white";
      canvas.current.freeDrawingBrush.width = eraserBrushSize;
    } else {
      canvas.current.freeDrawingBrush.color = "#0052cc";
      canvas.current.freeDrawingBrush.width = brushSize;
    }
  };

  const handleColor = (color) => {
    setBrushColor(color);
    canvas.current.freeDrawingBrush.color = color;
  };

  return (
    <div>
<button><FontAwesomeIcon icon={faPen} /></button>      <input
        id="brush-size"
        type="range"
        min="1"
        max="50"
        value={brushSize}
        onChange={handleBrushSizeChange}
      />

      <div className="round" style={{backgroundColor:"black"}} onClick={() => handleColor('black')}></div>
      <div className="round" style={{backgroundColor:"green"}} onClick={() => handleColor('green')}></div>
      <div className="round" style={{backgroundColor:"yellow"}} onClick={() => handleColor('yellow')}></div>
      <div className="round" style={{backgroundColor:"blue"}} onClick={() => handleColor('blue')}></div>
      <div className="round" style={{backgroundColor:"red"}} onClick={() => handleColor('red')}></div>

      <button onClick={handleErase}><FontAwesomeIcon icon={faEraser} /></button>

      <input
        id="brush-size"
        type="range"
        min="1"
        max="50"
        value={eraserBrushSize}
        onChange={handleEraserBrushSizeChange}
      />
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default App;

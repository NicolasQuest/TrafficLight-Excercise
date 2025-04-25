import React, { useState,useEffect } from "react";

// Estilos de bootstrap y personalizados
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../../styles/index.css';

const Lighted = () => {
  const [color, setColor] = useState(null);
  const [visible, setVisible] = useState(false);

  const turnRed = () => setColor("red");
  const turnYellow = () => setColor("yellow");
  const turnGreen = () => setColor("green");
  const turnPurple = () => setColor("purple");

  const addPurple = () => setVisible(true);
  const removePurple = () => setVisible(false);




let [primerRender,setPrimerRender] = useState(true);

let intervalo = null;

 useEffect(()=>{
		
		if (primerRender == false){
			intervalo = setInterval(() => {
				if (color == null){turnRed()};
				if (color == "red"){turnYellow()};
				if (color == "yellow"){turnGreen()};
				if (color == 'green' && visible == false) {
					setPrimerRender(true) 
					setColor(null)
					
					
				};
				if (visible == true && color == "green"){
					turnPurple()
				}
				if (color == "purple") {
					setPrimerRender(true) 
					setColor(null)
				}
				clearInterval(intervalo)
			   
			  },1000);
			
		}	
},[color,primerRender]) 


  return (
    <div className="text-center contenedorSemaforo">
      <div className="video-lluvia">
	  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWk5c3N2Z3VtYmw3N3ZuMmoyYzltbzlidmRjeWNqb2doY2d1Y3FmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UVTMFrWQBsRyctpP0R/giphy.gif" alt="Lluvia" />

      </div>

      {/* Título */}
      <h1 className="text-center mt-5">
        <span className="border-bottom border-warning text-white">Traffic Light!</span>
      </h1>

      {/* Contenido de las luces */}
      <div className="d-flex justify-content-center">
        <div className="cable"></div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center semaforo">
        <div
          onClick={ () => { if (primerRender) turnRed();

		  }}
          className={`rojo circle my-1 ${color === "red" ? "active1" : ""}`}
        ></div>
        <div
          onClick= {() => {if (primerRender) turnYellow();}}
          className={`amarillo circle my-1 ${color === "yellow" ? "active2" : ""}`}
        ></div>
        <div
          onClick={
			() =>{
				if (primerRender)turnGreen();
			}}
          className={`verde circle my-1 ${color === "green" ? "active3" : ""}`}
        ></div>
        <div 
          onClick={ () =>{
			if (primerRender)turnPurple();
			 }}
          className={`purple circle ${visible ? "purpleVisible" : "purpleInvisible"} ${color === "purple" ? "active4" : ""}`}
        ></div>
      </div>
	  <div className="d-flex justify-content-center">
	  <button disabled = {!primerRender} className="btn btn-dark my-5 mx-1" onClick={ () => {
			clearInterval(intervalo);
			setColor("red");
			setPrimerRender(false);
	  }}>
        Activate the Traffic Light 
      </button >
      {visible ? (
        <button disabled = {!primerRender} onClick={removePurple} className="btn btn-dark my-5 mx-1">
          Remove Purple color
        </button>
      ) : (
        <button disabled = {!primerRender} onClick={addPurple} className="btn btn-dark my-5 mx-1">
          Add a Purple color
        </button>
      )}
    </div>
		</div>
  );
};

export default Lighted;

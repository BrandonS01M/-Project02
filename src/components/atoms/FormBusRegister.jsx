import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import '../../assets/styles/FormBusRegister.css'
import Logo from "../../assets/img/Bus.png"

function FormBusRegister() {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = " http://34.225.239.102/api/autobus/register";

  const handlerClick = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);
    if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){
        alert("campos vacios");
    }else{
        
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: newForm.get("clave"),
        placa: newForm.get("placa"),
        numasientos: newForm.get("numasientos"),
        fecha: newForm.get("fecha"),
        tipo: newForm.get("tipo"),
        nombre: newForm.get("nombre"),
        licencia: parseInt(10000 + Math.random() * 90000),
      }),
    };

    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
      
        if(data.status === true){
            navigate("/");
          }
      });
    }
  };

    return (  
        <>
            <center>
                <form ref={Form}>
                    <div className="containerBusRegister">
                        <img src={Logo} alt="Logo" id='logoBus'/>
                        <div className="form_Bus1">
                            <div className='con1'>
                                <p htmlFor="" id='buskey' className='labelForm1'>Bus Key</p>
                                <input type="text" className='inputsForm1' name='clave' />
                                <p htmlFor="" id='busplate' className='labelForm1'>Bus Plate</p>
                                <input type="text" className='inputsForm1' name='placa' />
                            </div>
                                <div className="con2">
                                <p htmlFor="" id='numberseats' className='labelForm1'>Number of Seats</p>
                                <input type="text" className='inputsForm1' id='numberSeat' name='numasientos'/>
                                <p htmlFor="" id='date' className='labelForm1'>Registratio Date</p>
                                <input type="text" className='inputsForm1' id='dateRe' name='fecha'/>
                            </div>
                        </div>
                        <div className="form_Bus2">
                            <p htmlFor="" className='labelform2' id='type'>Type</p>
                            <input type="text" className='inputsForm2' name='tipo'/>
                            <p htmlFor="" className='labelform2' id='dName'>Drive's Name</p>
                            <input type="text" className='inputsForm2' name='nombre'/>
                            <p htmlFor="" className='labelform2' id='lNumber'>License Number</p>
                            <input type="text" className='inputsForm2' name='licencia'/><br /><br />

                            <button className='btnBusRegister' onClick={handlerClick} >Register Bus</button>
                        </div>
                    </div>
                </form>
            </center>
        </>
    );
}

export default FormBusRegister;
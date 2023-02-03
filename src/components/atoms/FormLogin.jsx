import { Link, redirect, useNavigate } from "react-router-dom"; 
import { useRef } from 'react';
import '../../assets/styles/FormLogin.css'
import Logo from '../../assets/img/Bus.png'


function FormLogin() {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = "http://34.225.239.102/api/iniciar";
  
    const handlerClick = (e) => {
      e.preventDefault();
      const newForm = new FormData(Form.current);
      if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
        alert("campos vacios");
      }else{
        
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: newForm.get("usuario"),
          contrasenia: newForm.get("contrasenia"),
        }),
      };
  
      fetch(endPoint, options)
        .then((response) => response.json())
  
        .then((data) => {
          if(data.status === true){
            navigate("/register");
          }else{
            alert("Datos incorrectos")
          }
        });
      }
    };

    return ( 

        <>
        <center>
            <form id="formLogin" href={Form}>
                <div className="containerForm">
                    <img src={Logo} alt="logo" id='logo'/>
                    
                    <label htmlFor="userName" id='labeluser'>Username</label>
                    <input type="text" id="userName" className='inputsLogin' name='usuario'/>
                    
                    <label htmlFor="userPassword" id='labelpassword' className='inputs'>Password</label>
                    <input type="password" id="userPassword" className='inputsLogin' name='contrasenia'/>
                    

                    <button id="btnLogin" className='loginBtn' >Login</button>

                    <p id='account'>Don't have an account? <Link to="/Register" id='accountRegister'>Singup</Link></p>
                </div>
            </form>
        </center>
        </>
        
     );
}

export default FormLogin;
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/FormRegister.css'
import Logo from '../../assets/img/Bus.png'

function FormRegister() {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = 'http://34.225.239.102/api/registrar/usuario'


    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
    
        if(newForm.get("nombre") === "" || newForm.get("usuario") === "" || newForm.get("correo") === "" || newForm.get("contrasenia") === ""){//el simbolo de pesos despues se nombra la variable
            alert("campos vacios");
        }else{
            
        const options = {
    
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: newForm.get("nombre"),
            usuario: newForm.get("usuario"),
            correo: newForm.get("correo"),
            contrasenia: newForm.get("contrasenia"),
          }),
        };
        fetch(endPoint, options)
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
            if(data.status === true){
                navigate("/");
              }else{
                alert("No se agrego")
              }
          });
        }
      }

    return ( 

        <>
            <center>
                <form ref={Form}>
                    <div className="containerFormRegister">
                        <img src={Logo} alt="logo" id='logoRegister'/>
                        <label htmlFor="" className='labelForInput' id='nameregister' required>Name</label>
                        <input type="text" className="inputsText" name="nombre"/>

                        <label htmlFor="" className='labelForInput' id='emailregister' required>E-mail</label>
                        <input type="email" className="inputsText" name="correo"/>

                        <label htmlFor="" className='labelForInput' id='userregister' required>Username</label>
                        <input type="text" className="inputsText" name="usuario"/>

                        <label htmlFor="" className='labelForInput' id='passregister' required>Password</label>
                        <input type="password" className="inputsText" name="contrasenia"/>

                        <button id='btnRegister' className='registerBtn' onClick={handlerClick}>Register</button>
                    </div>
                </form>
            </center>
        </>
     );
}

export default FormRegister;
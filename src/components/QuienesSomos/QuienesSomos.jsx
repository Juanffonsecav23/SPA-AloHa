import './QuienesSomos.css';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

function QuienesSomos() {
  return (
    <div className="boxQS" id="QuienesSomos">
        <h1 className="tituloQS animate__animated animate__slideInDown">Quiénes Somos</h1>
        <div className="flexQS">
            <p className="textoQS">
            Somos un emprendimiento familiar que comenzó a fines de 2022 con la expectativa de ofrecer soluciones de alojamiento tanto a turistas como a personas del sector empresarial, en un entorno comercial estratégicamente ubicado y con recursos disponibles. Esto nos permite garantizar que la experiencia de su hospedaje sea la más placentera posible.
            
            <br/><br/>
            
            En AloHa, nos esforzamos por brindarle una estancia agradable y cómoda durante su hospedaje, con instalaciones modernas a un costo que incluye servicios básicos, acceso a internet y uso de lavadora.</p>
            <img src="/imgRooms/alojamiento.png" alt="Logo AloHa" className="logoQS animate__animated animate__slideInRight" />
        </div>
        <CheckOutForm/>
    </div>
  )
}

export default QuienesSomos
import { Icon } from "@iconify/react"
import "./Contacto.css"
import CheckOutForm from "../CheckOutForm/CheckOutForm"

export function BotonosRedes() {
  return(
    <div style={{marginBottom:"3rem",}}>
      <div className="ContactTitle">
        <h3>Encuentranos en nuestras redes sociales</h3>
      </div>
          <div className="buttonsContacto">
          <a href="https://instagram.com/casaaloha152?igshid=MzRlODBiNWFlZA==" className="Instagram animate__animated animate__slideInLeft">
            <Icon icon="mdi:instagram" width={50} /><p style={{marginTop:"15px"}}>Instagram</p>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100087745636618" className="Facebook animate__animated animate__slideInRight">
            <Icon icon="ic:baseline-facebook" width={50} /><p style={{marginTop:"15px"}}>Facebook</p>
          </a>
          </div>
    </div>
      )
}

function Contacto() {

  return (
    <div style={{paddingTop:"100px"}}>
        <h1 style={{color:"orange"}} className="animate__animated animate__slideInDown">Contacto</h1>
        <BotonosRedes/>
        <CheckOutForm/>
        <div className="mapa"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15904.82915919686!2d-74.0427604!3d4.7340203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e54073e5ae47ebb%3A0x6860988c008d3b3!2sCasa%20AloHa%20152%20Alojamiento%20Habitacional!5e0!3m2!1sen!2sco!4v1698453773716!5m2!1sen!2sco" loading="lazy" width={1000} height={700} referrerPolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  )
}

export default Contacto
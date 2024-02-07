import { Icon } from "@iconify/react"
import "./WhatsappButton.css"
function WhatsappButton() {

  return (
    <a href="https://api.whatsapp.com/send?phone=573212402566&text=¡%20Hola%20Casa%20AloHa%20152%20!%20Estoy%20interesado%20en%20conocer%20más%20información%20sobre%20el%20hospedaje" target="_blank" rel="noreferrer" className="btnWsp">
    <Icon icon="ic:baseline-whatsapp" className="svgWsp" />
  </a>

  )
}

export default WhatsappButton
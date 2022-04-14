import React from "react"
import './card.css'

/* shorthand notation: passando propriedades para os componentes */
const Card = ({children}) => {
   return (
     <div className='card'>
       {children}
     </div>
   )
}

// -----------------------------------------------------------

/* shorthand notation: passando propriedades para os componentes */
// const Card = ({title}) => {
//   return (
//     <div className='card'>
//       <h3>{title}</h3>
//     </div>
//   )
// }

/* Função: passando propriedades para os componentes */
// const Card = (props) => {
//   return (
//     <div className='card'>
//       <h3>{props.title}</h3>
//       <p>Esse é um texto do card</p>
//     </div>
//   )
// }

// Props: passando propriedades para os componentes
// class Card extends React.Component {  
// render() {
//   return (
//     <div className='card'>
//       <h3>{this.props.title}</h3>
//       <p>Esse é um texto do card</p>
//     </div>
//   )
// }
// }
export default Card
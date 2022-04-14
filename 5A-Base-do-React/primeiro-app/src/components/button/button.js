import React from 'react'
import './button.css'

// const Button = (props) => {
//   return <button className='btn'>{props.label}</button>
// }

// Default usando classe
class Button extends React.Component{
  render(){
    return <button className='btn'> {this.props.label} </button>
  }
}

// propriedades padrão - default 
Button.defaultProps = {
  label: 'Clique aqui'
}

export default Button
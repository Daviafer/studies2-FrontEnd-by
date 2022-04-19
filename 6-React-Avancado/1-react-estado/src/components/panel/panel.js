import { Component } from 'react'
import './panel.css'

class Panel extends Component{
    constructor(){
        super() // método especial, para trazer propriedades e métodos do component que foi extendido, visto que state vem da classe component - Para componente de classe (componente de função não precisa)
        this.state = {
            title: 'Título do painel'
        }
    }
    render(){        
        return(
            //alterando comportamento no evento clique  
            <section className="panel" onClick={() =>       
                {              
                    this.setState(
                        {title: 'Título novo'}
                    )
                }
            }>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel
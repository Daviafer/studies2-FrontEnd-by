import { useState } from 'react'

const Form = (props ) => {
  
  const [inputs, setInputs] = useState({
    image: '',
    value: '',
    suit: ''
  })
  const handleInputChange = (event) =>{
    console.log(event.target.name)
    // aula - Trabalhando com vários inputs
    const {target} = event
    const {name} = target
    const {value} = target
    
    setInputs({
      //atualizando 
      ...inputs,
      [name]:value
    })
  }
  const handleSubmit = (event) => {
      event.preventDefault()
      props.addCard(inputs)
  }
  return (
    <>
      <h1>Formulário com React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Endereço da imagem da carta</label>
          <input type="text" id="image" name="imagem" onChange={handleInputChange} value={inputs.image}/>
        </div>
        <div>
          <label htmlFor="value">Nome da carta</label>
          <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value}/>
        </div>
        <div>
          <label htmlFor="suit">Naipe da carta</label>
          <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit}/>
        </div>
        <input type="submit" />
      </form>
    </>
  )
}

export default Form
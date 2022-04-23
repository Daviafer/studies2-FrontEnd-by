import { useState } from "react/";

const Form = (props ) => {
  
  const [inputs, setInputs] = useState({
    image: ''
  })
  const handleInputChange = (event) =>{
    setInputs({
      image:event.target.value
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
        <input type="submit" />
      </form>
    </>
  )
}

export default Form
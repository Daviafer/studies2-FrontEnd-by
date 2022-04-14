import './App.css';
import Button   from './components/button/button'
import Card     from './components/card/card'
import Cards    from './components/cards/cards'

function App() {
  return (
    <>
    {/* Propriedades default de componentes */}
      <Button label='Baixar CV'/>
      <Button />

      <br/>
      <Cards/>

      {/* Usando Prop children */}
      <h3>Prop children nos cards</h3>
      <Card>
        <h3>Título card 1</h3>
        <p>Esse é um texto do card 1</p>
      </Card>
      <Card>
        <h3>Título card 2</h3>
        <p>Esse é um texto do card 2</p>
      </Card>
      <Card>
        <h3>Título card 3</h3>
        <p>Esse é um texto do card 3</p>
      </Card> 
      


      {/* Props: passando propriedades para os componentes */}
      {/* <Card title='Título card 1'/>      
      <Card title='Título card 2'/>      
      <Card title='Título card 3'/>       */}
    </>
  );
}

export default App;

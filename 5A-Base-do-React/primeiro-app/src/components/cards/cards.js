import Card from '../card/card'

//Listas no React e a prop "key"
const cardsTitle = ['Título card 1', 'Título card 2', 'Título card 3']

//função para o evento ao clicar
const showCardColor = (color) => {
  console.log(color) 
}

const Cards = () => {
  return ( 
    <div>
      <h2> Meus cards</h2>

      <div>
        {
          cardsTitle.map((cardTitle) => {
            return (
              <Card key={cardTitle} showCardColor={showCardColor}>
                <h3>{cardTitle}</h3>
                <p>Esse é um texto do card</p>
              </Card>
            )
          })
        }

          <Card color='blue' showCardColor={showCardColor}>
                <h3>Card com fundo azul</h3>
                <p>Esse é um texto do card</p>
          </Card>
      </div>
    </div>
  )
}
export default Cards 
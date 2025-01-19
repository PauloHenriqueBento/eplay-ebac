import Game from '../../models/Games'
import Products from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Products
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              info={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList

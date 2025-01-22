import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetStportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetStportGamesQuery()
  const { data: fightGame } = useGetFightGamesQuery()
  const { data: rpgGame } = useGetRPGGamesQuery()
  const { data: simulationGame } = useGetSimulationGamesQuery()

  if (actionGames && sportGames && fightGame && rpgGame && simulationGame) {
    return (
      <>
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={sportGames}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={fightGame}
          title="Luta"
          background="black"
        />
        <ProductsList id="rpg" games={rpgGame} title="RPG" background="gray" />
        <ProductsList
          id="simulation"
          games={simulationGame}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories

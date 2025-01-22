import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItems {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItems[]
  }
}

const Home = () => {
  const { data: onSaleGame } = useGetOnSaleQuery()
  const { data: soonGame } = useGetSoonQuery()

  if (onSaleGame && soonGame) {
    return (
      <>
        <Banner />
        <ProductsList
          id="on-sale"
          games={onSaleGame}
          title="Promoções"
          background="gray"
        />
        <ProductsList
          id="coming-soon"
          games={soonGame}
          title="Em breve"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Home

import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  info: string[]
  image: string
}

const Products = ({
  title,
  category,
  system,
  description,
  info,
  image
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {info.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{description}</Descricao>
    </Card>
  )
}

export default Products

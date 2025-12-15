
import { Logo } from '../Component/Logo'
import { Card } from '../Component/Card'

const Home = ({pokemondata}) => {


  

  return (
    <div>
      <Logo />
      <Card pokemondata={pokemondata} />
    </div>
  )
}

export default Home
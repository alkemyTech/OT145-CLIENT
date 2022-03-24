import React,{useState} from 'react'
import { Container } from '@mui/material'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import NosotrosText from './NosotrosText'
import Title from './../Title/Title'
import NosotrosList from './NosotrosList'
import Spinner from '../../shared/Spinner/Spinner'
import ShowModal from '../../Utils/AlertsProps'
import { getMembers } from '../../redux/NosotrosReducer/nosotrosReducer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const nosotrosMockInfo = {
  title: 'Nosotros',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  image:
    'https://res.cloudinary.com/danb0chax/image/upload/v1645801942/SomosMas/Foto_6_1_dzfrhc.jpg'
}

const nosotrosPersons = nosotrosMockInfo.cardsInfo

const Nosotros = () => {
  const dispatch = useDispatch()
  const {members} = useSelector(state => state.members)
  const [loading, setloading] = useState(false);
	const [error, seterror] = useState(false);
  const [miembros,setMembers] = useState([])

  
  useEffect(() =>{
    dispatch(getMembers())
    setMembers(members)
  },[miembros])

	return loading ? (
		<Spinner />
	) : error ? (
		<ShowModal
			icon="error"
			title="Hubo un error al cargar el sitio"
			text="Intenta recargar el sitio nuevamente en unos instantes"
		/>
	) : (
    <>
      <Title title={nosotrosMockInfo.title} imgSrc={nosotrosMockInfo.image} />
      <Container>
        <NosotrosText text={nosotrosMockInfo.text} />
        <NosotrosList miembros={members} />
        <DecorativeLine />
      </Container>
    </>
	);
}
export default Nosotros

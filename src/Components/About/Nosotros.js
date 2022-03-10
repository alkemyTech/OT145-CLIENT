import React from 'react'
import { Container } from '@mui/material'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import NosotrosText from './NostrosText'
import Title from './../Title/Title'
import NosotrosList from './NosotrosList'
import Spinner from '../Spinner/Spinner'
import ShowModal from '../../Utils/AlertsProps'
import { useState } from 'react'

const nosotrosMockInfo = {
  title: 'Nosotros',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  image:
    'https://res.cloudinary.com/danb0chax/image/upload/v1645801942/SomosMas/Foto_6_1_dzfrhc.jpg',
  cardsInfo: [
    {
      id: 1,
      name: 'Rodrigo Fuentes',
      image:
        'https://res.cloudinary.com/danb0chax/image/upload/v1645810205/SomosMas/Rodrigo_Fuente_njugnt.jpg',
      description: 'Descripcion de prueba',
      linkName1: 'Facebook',
      linkName2: 'Linkedin',
      facebookUrl: 'http://facebookurlprueba',
      linkedinUrl: 'http://linkedinurlprueba',
    },
    {
      id: 2,
      name: 'María Iraola',
      image:
        'https://res.cloudinary.com/danb0chax/image/upload/v1645712768/SomosMas/Mari%CC%81a_Irola_cmqmbt.jpg',
      description: 'Descripcion de prueba',
      linkName1: 'Facebook',
      linkName2: 'Linkedin',
      facebookUrl: 'http://facebookurlprueba',
      linkedinUrl: 'http://linkedinurlprueba',
    },
    {
      id: 3,
      name: 'Miriam Rodriguez',
      image:
        'https://res.cloudinary.com/danb0chax/image/upload/v1645712768/SomosMas/Miriam_Rodriguez_vw8wcb.jpg',
      description: 'Descripcion de prueba',
      linkName1: 'Facebook',
      linkName2: 'Linkedin',
      facebookUrl: 'http://facebookurlprueba',
      linkedinUrl: 'http://linkedinurlprueba',
    },
    {
      id: 4,
      name: 'Marita Gomez',
      image:
        'https://res.cloudinary.com/danb0chax/image/upload/v1645712767/SomosMas/Marita_Gomez_bonyfk.jpg',
      description: 'Descripcion de prueba',
      linkName1: 'Facebook',
      linkName2: 'Linkedin',
      facebookUrl: 'http://facebookurlprueba',
      linkedinUrl: 'http://linkedinurlprueba',
    },
    {
      id: 5,
      name: 'María García',
      image:
        'https://res.cloudinary.com/danb0chax/image/upload/v1645810226/SomosMas/Mari%CC%81a_Garcia_skhdtt.jpg',
      description: 'Descripcion de prueba',
      linkName1: 'Facebook',
      linkName2: 'Linkedin',
      facebookUrl: 'http://facebookurlprueba',
      linkedinUrl: 'http://linkedinurlprueba',
    },
    {
      id: 6,
      name: 'Cecilia Mendez',
      image:
        'https://res.cloudinary.com/danb0chax/image/upload/v1645712767/SomosMas/Cecilia_Mendez_rbelds.jpg',
      description: 'Descripcion de prueba',
      linkName1: 'Facebook',
      linkName2: 'Linkedin',
      facebookUrl: 'http://facebookurlprueba',
      linkedinUrl: 'http://linkedinurlprueba',
    },
    {
      id: 7,
      name: 'Marco Fernandez',
      image:
        'https://res.cloudinary.com/danb0chax/image/upload/v1645712766/SomosMas/Marco_Fernandez_xhueow.jpg',
      description: 'Descripcion de prueba',
      linkName1: 'Facebook',
      linkName2: 'Linkedin',
      facebookUrl: 'http://facebookurlprueba',
      linkedinUrl: 'http://linkedinurlprueba',
    },
  ],
}

const nosotrosPersons = nosotrosMockInfo.cardsInfo

const Nosotros = () => {

  const [loading, setloading] = useState(false);
	const [error, seterror] = useState(false);

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
        <NosotrosList nosotrosPersons={nosotrosPersons} />
        <DecorativeLine />
      </Container>
    </>
	);
}
export default Nosotros

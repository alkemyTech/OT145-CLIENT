import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import useStyles from '../styles/novedadesStyles'
import Title from '../../Title/Title';
import { useLocation } from "react-router-dom";

const NewsDetail = ({ newsTitle }) => {

const classes = useStyles()

    //State de los detalles de la noticia
  const [newsDetail, setNewsDetail] = useState({
    content: '',
    image: '',
  });

  //Mock de una peticion GET
  const getNewsDetails = () => ({
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus omnis dolor illum error quas iusto eum, rerum, ad at quis perferendis fuga. Dolorem repellat, quae qui quisquam perspiciatis numquam nesciunt!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus omnis dolor illum error quas iusto eum, rerum, ad at quis perferendis fuga. Dolorem repellat, quae qui quisquam perspiciatis numquam nesciunt!',
    image:
      'https://images.unsplash.com/photo-1592060036126-1b6d5139dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  });

  //Set del state de los detalles de la noticia
  const updateCurrentNews = () => {
    const currentNews = getNewsDetails();

    setNewsDetail(currentNews);
  };

  useEffect(() => {
      //Llama a la funcion de actualizar la noticia actual en el primer momento de renderizar el componente
    updateCurrentNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { state: {title} } = useLocation();

  return (
    <div>
      <Title title={title} imageUrl={newsDetail.image} />
      <Box component="div" className={classes.container}>
        <Box component="div" className={classes.content}>
          <Typography variant="body1" className={classes.typographySize}>
            {newsDetail.content}
          </Typography>
        </Box>
        <Box component="div" className={classes.image}>
          <img src={newsDetail.image} alt="niños pintando" className={classes.photo} />
        </Box>
      </Box>
    </div>
  );
};

export default NewsDetail;
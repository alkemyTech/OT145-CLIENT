import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, Divider, Typography, Box, Toolbar } from '@mui/material';
import useStyles from './styles/sideBarStyles';




const Sidebar = ({open}) => {

    const classes = useStyles();

    const rutasMokeadas = [
        {   
            name:"Create Activity",
            link: "/backoffice/activities/create-activity"
        },
        
        {
            name:"Create Category",
            link: "/backoffice/category/create-category"
        },
        {
            name:"Create News",
            link: "/backoffice/news/create-news"
        },
        {
            name:"Create Slide",
            link: "/backoffice/slides/create"
        },
        {
            name:"Create Testimonials",
            link: "/backoffice/testimonials/create-testimonials"
        },
        {
            name:"Create User",
            link: "/backoffice/users/create-user"
        },
        {
            name:"Create Member",
            link: "/backoffice/members/edit"
        },
        {
            name:"Create Proyect",
            link: "/backoffice/create-project"
        }

    ]

    return(
        
        <Drawer 
            variant="temporary"
            anchor="left" 
            open={open} 
            PaperProps={{
                sx: {
                width: {
                    xs: '100vw',
                    sm: "100vw",
                    md: "30vw",
                    xl: "20vw"
                }
                }
          }}
        >
            <Toolbar></Toolbar>
            <Box>
                <Box className={classes.containerText}>
                    <img src="/images/LOGO-SOMOS-MAS.png" alt='Logo Ong' className={classes.logoOng}/>
                    <Typography variant='h6' className={classes.headerText}>Somos Mas</Typography>
                </Box>
            </Box>
            <Divider variant="middle" />
                <List> 
                    {
                        rutasMokeadas.map((element, index) => (
                            <ListItem button key={index}>
                                <Link key={index} to={element.link} className={classes.item}>{element.name}</Link>
                            </ListItem>
                            ))
                    }
                 </List>
        </Drawer>
    )
};


export default Sidebar;
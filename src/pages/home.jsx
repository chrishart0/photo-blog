import {React} from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'


import misty_mountain from 'content/june-19/misty_mountain.jpg';
import foggy_road_ga from 'content/june-19/foggy-road-ga.jpg';
import green_trail from 'content/june-19/green_trail.jpg';
import brass_town_bald_from_lookout from 'content/june-19/brass_town_bald_from_lookout.jpg';
import dead_tree from 'content/june-19/dead_tree.jpg';

// ------- Styles -------
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(10,0,4)
    },

    carouselImage: {
        // height: '50vh'
        width: '100%'
    },
    
}));

// ----- End Styles -----

function Item(props) {
    const classes = useStyles();

    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img className={classes.carouselImage} src={props.item.image} alt="image" />
            <p>{props.item.description}</p>
        </Paper>
    )
}

function Home() {
    const classes = useStyles();

    var items = [
        {
            name: "Foggy Road",
            image: foggy_road_ga
        },
        {
            name: "Misty Mountain",
            image: misty_mountain
        },
        {
            name: "Green Trail",
            image: green_trail
        },
        {
            name: "Brass Town Bald",
            image: brass_town_bald_from_lookout
        },
        {
            name: "Dead Tree",
            image: dead_tree
        }
    ]

    return(
        <Container maxWidth="lg" className={classes.root}>
            <Typography variant ='h2'>
                Day Trip to the Mountains
            </Typography>
            <Typography>
                June 19th, 2021
            </Typography>
            <Carousel interval='10000' navButtonsAlwaysVisible={true}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            
        </Container>
    )
};

export default Home;

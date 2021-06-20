import {React, useState, useEffect} from 'react'
import { Container, Typography, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

import CircularProgress from '@material-ui/core/CircularProgress';

//June 19
import misty_mountain from 'content/june-19/misty_mountain.jpg';
import misty_mountain_compressed from 'content/june-19/misty_mountain_compressed.jpg';
import foggy_road_ga from 'content/june-19/foggy_road_ga.jpg';
import foggy_road_ga_compressed from 'content/june-19/foggy_road_ga_compressed.jpg';
import green_trail from 'content/june-19/green_trail.jpg';
import green_trail_compressed from 'content/june-19/green_trail_compressed.jpg';
import brass_town_bald_from_lookout from 'content/june-19/brass_town_bald_from_lookout.jpg';
import brass_town_bald_from_lookout_compressed from 'content/june-19/brass_town_bald_from_lookout_compressed.jpg';
import dead_tree from 'content/june-19/dead_tree.jpg';
import dead_tree_compressed from 'content/june-19/dead_tree_compressed.jpg'

//Nashville



import FullPageImage from 'components/FullPageImage'

// ------- Styles -------
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(10,0,4)
    },

    imageCarousel: {
        padding: theme.spacing(4,0,4)
    },

    carouselImage: {
        width: '100%'
    },

    loadingDiv:{
        height: '50vh'
    },

    loadingIcon:{
        position: 'absolute', 
        left: '47%', 
        top: '50%',
    },
    
}));

// ----- End Styles -----

const AsyncImage = (props) => {
    const classes = useStyles();
    const [loadedSrc, setLoadedSrc] = useState(null);
    const [fullScreenImageOpen, setFullScreenImageOpen] = useState(false);

    const openFullScreenImage = () => {
        setFullScreenImageOpen(true);
        console.log('openFullScreenImage')

    };


    useEffect(() => {
        setLoadedSrc(null);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return (
            <div>
                <img onClick={openFullScreenImage} {...props} />
                <FullPageImage image={foggy_road_ga} title="foggy_road_ga"  />
            </div>
        );
    } else {
        return (
            <Container className={classes.loadingDiv}>
                <CircularProgress size='5em' className={classes.loadingIcon} />
            </Container>
        )
    }
};

function Item(props) {
    const classes = useStyles();

    return (
        <Paper>
            <Typography variant ='h5'>
                {props.item.name}
            </Typography>
            <AsyncImage className={classes.carouselImage} src={props.item.image} />
            <p>{props.item.description}</p>
        </Paper>
    )
}

function Home() {
    const classes = useStyles();

    

    var items = [
        {
            name: "Foggy Road",
            image: foggy_road_ga_compressed
        },
        {
            name: "Misty Mountain",
            image: misty_mountain_compressed
        },
        {
            name: "Green Trail",
            image: green_trail_compressed
        },
        {
            name: "Brass Town Bald",
            image: brass_town_bald_from_lookout_compressed
        },
        {
            name: "Dead Tree",
            image: dead_tree_compressed
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

            {/* https://www.npmjs.com/package/react-material-ui-carousel */}
            <Carousel className={classes.imageCarousel} interval='10000' navButtonsAlwaysVisible={true}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            
        </Container>
    )
};

export default Home;

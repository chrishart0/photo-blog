import React from 'react';
import { Route, Switch } from "react-router-dom";
import { CssBaseline, Typography} from '@material-ui/core';

import {ThemeProvider } from '@material-ui/core';

import useThemes from 'themes';
import Home from 'pages/home.jsx';
import error404 from 'pages/404.jsx';

// ------- Components -------
import Navbar from 'components/Navbar';

// ------- Styles -------
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ContentToRender: {
        backgroundColor: theme.palette.background.paper,
    },
}));
// ----- End Styles -----

const App = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={useThemes}>
            <CssBaseline />
            <main>
                <Navbar/>
                <Typography>
                    test
                </Typography>
                <div className={classes.ContentToRender}>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route component={error404}/>
                    </Switch>
                </div>   
                {/* <Footer/> */}
            </main>
        </ThemeProvider>
    );
}

export default App;
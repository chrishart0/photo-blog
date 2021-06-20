import React, {
    useState,
    useEffect
} from "react";
import {
    Link as RouterLink
} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import logo from 'assets/logo.png';

// ------- Styles -------
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    PrettyTitles: {
        textDecoration: "none", 
        color: "inherit",
        '&:hover': {
            backgroundColor: "inherit",
        },
    },
    ToolbarIcon: {
        marginRight: '20px',
        marginTop: '5px',
        color: 'white',
        backgroundColor: 'black'
    },
    title: {
        display: "inline-flex",
        alignItems: "center"
    },
    header: {
        paddingRight: "5%",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
            paddingRight: "0%",
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));
// ----------------------

const headersData = [{
        label: "Home",
        href: "/",
    },
    {
        label: "Technical Blog",
        href: "arcadian.cloud",
    },
    {
        label: "Signet Seal",
        href: "signetseal.com",
    },
];


function Navbar() {
    const {
        header,
        menuButton,
        toolbar,
        drawerContainer,
        ToolbarIcon,
        PrettyTitles,
        title
    } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const {
        mobileView,
        drawerOpen
    } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 ?
                setState((prevState) => ({
                    ...prevState,
                    mobileView: true
                })) :
                setState((prevState) => ({
                    ...prevState,
                    mobileView: false
                }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const logoButton = () => {
        return (
            <RouterLink to="/" className={PrettyTitles}  style={{textDecoration: "none"}}>
                <div className={title}>
                    <img src={logo} alt="Logo" width="60" className={ToolbarIcon} />
                    <Typography noWrap variant="h4">
                        Blog
                    </Typography>
                </div>
            </RouterLink>
        )
    }

    const displayDesktop = () => {
        return ( 
        <Toolbar className = {toolbar}>
            {logoButton()}
            <Grid container justify = "flex-end"  >
                <div>{getMenuButtons()} 
                </div> 
            </Grid> 
        </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({
                ...prevState,
                drawerOpen: true
            }));
        const handleDrawerClose = () =>
            setState((prevState) => ({
                ...prevState,
                drawerOpen: false
            }));

        return ( 
        <Toolbar >
            {logoButton()}
            <Grid container justify = "flex-end" >
                <IconButton {
                    ...{
                        edge: "end",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }
                }>
                    <MenuIcon/>
                </IconButton>
            </Grid> 
            
        {/* <ClickAwayListener onClickAway={handleDrawerClose}> */}
            <Drawer {
                    ...{
                        anchor: "right",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }
                } >
                <div className = { drawerContainer }> {getDrawerChoices()} </div> 
            </Drawer>
        {/* </ClickAwayListener> */}

            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({
            label,
            href
        }) => {
            return ( 
                <Link {
                        ...{
                            component: RouterLink,
                            to: href,
                            color: "inherit",
                            style: {
                                textDecoration: "none"
                            },
                            key: label,
                        }
                    } >
                      <MenuItem> {label} </MenuItem> 
                    </Link>
            );
        });
    };

    const getMenuButtons = () => {
        return headersData.map(({
            label,
            href
        }) => {
            return ( <Button {
                    ...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }
                } >
                {
                    label
                } </Button>
            );
        });
    };

    return ( 
        <header >
            <AppBar position="fixed" className = { header }>
                {
                    mobileView ? displayMobile() : displayDesktop()
                } 
            </AppBar> 
        </header>
    );
}

export default Navbar;
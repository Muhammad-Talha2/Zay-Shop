import React from 'react'
import Nav from "./Nav"
import { Box, CardMedia, Typography } from "@mui/material"
import hero from "./images/about-hero.svg"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PercentIcon from '@mui/icons-material/Percent';
import PersonIcon from '@mui/icons-material/Person';
import Footer from './Footer'




const About = () => {
    return (
        <>
            <Nav />
            <Box sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "rgb(89,171,110)",
                position: 'relative',

            }}>
                <Box sx={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    left: "50%",
                    top: { lg: "50%", md: "50%", sm: "60%", xs: "60%", },
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: { lg: "row", md: "row", xs: "column", },
                }}>
                    {/* .............Text-Box............. */}

                    <Box
                        sx={{
                            width: { md: "55%", sm: "90%", xs: "100%" }, // Adjust width for different breakpoints
                            height: "auto",
                            padding: { md: "20px", sm: "15px", xs: "10px" }, // Responsive padding
                            paddingLeft: { md: "20px", sm: "15px", xs: "10px" }, // Adjust left padding
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { md: "40px", sm: "30px", xs: "24px" }, // Adjust font size for screen sizes
                                color: "white",
                                fontWeight: "bold",
                                marginBottom: "10px", // Add spacing below the heading
                            }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                fontSize: { md: "18px", sm: "16px", xs: "14px" }, // Adjust font size for paragraph
                                lineHeight: { md: "1.6", sm: "1.5", xs: "1.4" }, // Responsive line height
                                color: "white",
                                marginTop: "10px", // Add spacing above the paragraph
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>

                    <CardMedia
                        component="img"
                        image={hero}
                        sx={{
                            width: { md: "30%", sm: "50%", xs: "70%" }, // Adjust width for various breakpoints
                            height: "auto", // Maintain aspect ratio
                            maxWidth: "100%", // Prevent image overflow
                            margin: "0 auto", // Center the image
                            display: "block", // Ensure proper centering in flexbox
                            borderRadius: "10px", // Add subtle rounded corners for a modern look
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow for visual depth
                        }}
                    />


                </Box>
            </Box>

            {/* ..........................Our/Services................................... */}

            <Box sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                paddingBottom: "20px",
            }}>

                <Box sx={{
                    width: "100%",
                    height: "auto",
                    textAlign: "center",
                    paddingTop: "35px",
                    paddingBottom: "25px",
                }}>

                    <Typography varient="h1" sx={{
                        fontSize: { md: "80px", xs: "35px", },
                        color: "gray",
                        fontWeight: "100",
                    }}>
                        Our Services

                    </Typography>
                    <Typography varient="P" sx={{
                        width: { md: "40%", xs: "100%", },
                        margin: "auto",
                        fontSize: { md: "18px", xs: "13px", },
                        color: "gray",
                        fontWeight: "100",
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.
                    </Typography>
                </Box>
                {/* ......................................Boxess.......................................................... */}

                <Box sx={{
                    width: "85%",
                    height: "auto",
                    margin: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    paddingBottom: "50px",
                    paddingTop: "50px",
                }}>
                    {/* .....................FIRST-bOX......................... */}

                    <Box sx={{
                        width: { md: "300px", sm: "300px", xs: "100%", },
                        height: "200px",
                        backgroundColor: "white",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: { md: "20px", xs: "20px", },
                        boxShadow: "0px 0px 20px 4px gray",

                    }}  >

                        <LocalShippingIcon sx={{
                            fontSize: "70px",
                            color: "rgb(89,171,110)",

                        }} />
                        <Typography varient="h5" sx={{
                            fontSize: { md: "22px", xs: "19px", },
                            color: "rgb(33,37,41)",
                            fontWeight: "bolder",

                        }}>
                            Delivery Services
                        </Typography>
                    </Box>
                    {/* ............................................ */}
                    <Box sx={{
                        width: { md: "300px", sm: "300px", xs: "100%", },
                        height: "200px",
                        backgroundColor: "white",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: { md: "20px", xs: "20px", },
                        boxShadow: "0px 0px 20px 4px gray",



                    }}  >

                        <KeyboardReturnIcon sx={{
                            fontSize: "70px",
                            color: "rgb(89,171,110)",

                        }} />
                        <Typography varient="h5" sx={{
                            fontSize: { md: "22px", xs: "19px", },
                            color: "rgb(33,37,41)",
                            fontWeight: "bolder",

                        }}>
                            Shopping & Return
                        </Typography>
                    </Box>
                    {/* .................................................. */}
                    <Box sx={{
                        width: { md: "300px", sm: "300px", xs: "100%", },
                        height: "200px",
                        backgroundColor: "white",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: { md: "20px", xs: "20px", },
                        boxShadow: "0px 0px 20px 4px gray",



                    }}  >

                        <PercentIcon sx={{
                            fontSize: "70px",
                            color: "rgb(89,171,110)",

                        }} />
                        <Typography varient="h5" sx={{
                            fontSize: { md: "22px", xs: "19px", },
                            color: "rgb(33,37,41)",
                            fontWeight: "bolder",

                        }}>
                            Promotion
                        </Typography>
                    </Box>
                    {/* ................................................... */}
                    <Box sx={{
                        width: { md: "300px", sm: "300px", xs: "100%", },
                        height: "200px",
                        backgroundColor: "white",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: { md: "20px", xs: "20px", },
                        boxShadow: "0px 0px 20px 4px gray",



                    }}  >

                        <PersonIcon sx={{
                            fontSize: "70px",
                            color: "rgb(89,171,110)",

                        }} />
                        <Typography varient="h5" sx={{
                            fontSize: { md: "22px", xs: "19px", },
                            color: "rgb(33,37,41)",
                            fontWeight: "bolder",

                        }}>
                            24 Hours Service
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default About

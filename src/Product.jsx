import React from "react";
import { Box, Typography } from "@mui/material";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import light from "./images/feature_prod_01.jpg"
import watchw from "./images/feature_prod_02.jpg"
import camera from "./images/feature_prod_03.jpg"


function Product() {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "rgb(233,238,245)",
                paddingBottom: "100px",
            }}>

                <Typography varient="h1" sx={{
                    width: "100%",
                    height: "max-content",
                    color: "black",
                    fontSize: { md: "36px", xs: "22px" },
                    fontWeight: "300",
                    textAlign: "center",
                    padding: "29px",

                }}>Featured Product
                    <Typography varient="p">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />Excepteur sint occaecat cupidatat non proident.</Typography>
                </Typography>

                <Box sx={{
                    width: "100%",
                    height: "max-content",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: { md: "row", xs: "column", },
                    alignItems: "center",
                    paddingBottom: "30px",
                    paddingTop: "30px",

                }}></Box>
                {/* .......................Boxes-prnt............................. */}
                <Box sx={{
                    width: "85%",
                    height: "auto",
                    backgroundColor: "transparent",
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    flexDirection: { md: "row", xs: "column", },
                    alignItems: "center",
                    margin: "auto",

                }}>

                    {/* ....................................First-Box.................................... */}

                    <Box sx={{
                        width: { md: "420px", sm: "420px", xs: "100%", },
                        height: "550px",
                        borderRadius: "10px",
                        backgroundColor: "rgb(255,255,255)",
                        marginTop: { md: "0", xs: "20px", },
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "50%",
                            backgroundImage: `url(${light})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        </Box>

                        <Box sx={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px",
                        }}>
                            <Box sx={{
                                width: "55%",
                                height: "auto",
                            }}>

                                < StarHalfIcon sx={{
                                    color: "yellow",
                                }} />
                                < StarHalfIcon sx={{
                                    color: "yellow",
                                }} /> < StarHalfIcon sx={{
                                    color: "yellow",
                                }} /> < StarHalfIcon sx={{
                                    color: "yellow",
                                }} />
                            </Box>

                            <Typography varient="p" sx={{
                                color: "gray",
                                fontSize: "22px",
                            }}>
                                $240.00
                            </Typography>

                        </Box>

                        <Typography variant="h2" sx={{
                            color: "black",
                            fontSize: "35px",
                            fontWeight: "100",
                            padding: "10px",
                        }}>
                            Gym Weight
                        </Typography>
                        <Typography varient="p" sx={{
                            color: "gray",
                            fontSize: "15px",
                            fontWeight: "100",
                            padding: "10px",
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt
                        </Typography>
                        <Typography varient="p" sx={{
                            color: "gray",
                            fontSize: "18px",
                            fontWeight: "600",
                            padding: "10px",

                        }}>
                            Reviews (24)
                        </Typography>




                    </Box>

                    {/* ...................................Snd-Box..................................... */}

                    <Box sx={{
                        width: { md: "420px", sm: "420px", xs: "100%", },
                        height: "550px",
                        borderRadius: "10px",

                        backgroundColor: "rgb(255,255,255)",
                        marginTop: { md: "0", xs: "20px", },
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "50%",
                            backgroundImage: `url(${watchw})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        </Box>

                        <Box sx={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px",

                        }}>
                            <Box sx={{
                                width: "55%",
                                height: "auto",
                            }}>

                                < StarHalfIcon sx={{
                                    color: "yellow",
                                }} />
                                < StarHalfIcon sx={{
                                    color: "yellow",
                                }} /> < StarHalfIcon sx={{
                                    color: "yellow",
                                }} /> < StarHalfIcon sx={{
                                    color: "yellow",
                                }} />
                            </Box>

                            <Typography varient="p" sx={{
                                color: "gray",
                                fontSize: "22px",
                            }}>
                                $480.00
                            </Typography>

                        </Box>

                        <Typography variant="h2" sx={{
                            color: "black",
                            fontSize: "35px",
                            fontWeight: "100",
                            padding: "10px",
                        }}>
                            Smart Watch
                        </Typography>
                        <Typography varient="p" sx={{
                            color: "gray",
                            fontSize: "15px",
                            fontWeight: "100",
                            padding: "10px",
                        }}>
                            Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                        </Typography>
                        <Typography varient="p" sx={{
                            color: "gray",
                            fontSize: "18px",
                            fontWeight: "600",
                            padding: "10px",

                        }}>
                            Reviews (48)
                        </Typography>




                    </Box>

                    {/* ....................................Third-Box........................................... */}

                    <Box sx={{
                        width: { md: "420px", sm: "420px", xs: "100%", },
                        height: "550px",
                        borderRadius: "10px",
                        backgroundColor: "rgb(255,255,255)",
                        marginTop: { md: "0", xs: "20px", },
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "50%",
                            backgroundImage: `url(${camera})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        </Box>

                        <Box sx={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px",
                        }}>
                            <Box sx={{
                                width: "55%",
                                height: "auto",
                            }}>

                                < StarHalfIcon sx={{
                                    color: "yellow",
                                }} />
                                < StarHalfIcon sx={{
                                    color: "yellow",
                                }} /> < StarHalfIcon sx={{
                                    color: "yellow",
                                }} /> < StarHalfIcon sx={{
                                    color: "yellow",
                                }} />
                            </Box>

                            <Typography varient="p" sx={{
                                color: "gray",
                                fontSize: "22px",
                            }}>
                                $240.00
                            </Typography>

                        </Box>

                        <Typography variant="h2" sx={{
                            color: "black",
                            fontSize: "35px",
                            fontWeight: "100",
                            padding: "10px",
                        }}>
                            Camera
                        </Typography>
                        <Typography varient="p" sx={{
                            color: "gray",
                            fontSize: "15px",
                            fontWeight: "100",
                            padding: "10px",
                        }}>
                            Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                        </Typography>
                        <Typography varient="p" sx={{
                            color: "gray",
                            fontSize: "18px",
                            fontWeight: "600",
                            padding: "10px",

                        }}>
                            Reviews (74)
                        </Typography>




                    </Box>




                </Box>

                {/* ................................. */}
            </Box>

        </>
    )
}
export default Product
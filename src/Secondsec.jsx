import React from "react";
import { Box, Typography } from "@mui/material"
import { Button } from '@mui/material'
import watch from './images/category_img_01.jpg'
import shoes from './images/category_img_02.jpg'
import glass from './images/category_img_03.jpg'

function Secondsec() {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                // position: "relative",
            }}>

                <Typography varient="h1" sx={{
                    width: "100%",
                    height: "max-content",
                    color: "black",
                    fontSize: { md: "36px", xs: "22px" },
                    fontWeight: "300",
                    textAlign: "center",
                    padding: "29px",

                }}>Categories of The Month
                    <Typography varient="p">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. F</Typography>
                </Typography>

                <Box sx={{
                    width: "100%",
                    height: "max-content",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: { md: "row", xs: "column", },
                    alignItems: "center",
                    paddingBottom: "100px",
                    paddingTop: "100px",

                }}>
                    {/* ................................................................................. */}
                    <Box sx={{
                        width: "max-content",
                        height: "max-content",
                        textAlign: "center",
                    }}>

                        <Box sx={{
                            width: { md: "300px", sm: "330px", xs: "250px" },
                            height: { md: "300px", sm: "330px", xs: "250px", },
                            backgroundColor: "purple",
                            borderRadius: "50%",
                            backgroundImage: `url(${watch})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        </Box>
                        <Typography varient="p" sx={{
                            fontSize: { md: "24px", xs: "18px" },
                            color: "black",
                            fontWeight: "bolder",
                            padding: "10px",
                        }}>Watches</Typography>
                        <Button
                            sx={{
                                width: "max-content",
                                height: "auto",
                                backgroundColor: "rgb(89,171,110)",
                                color: "white",
                                fontSize: "19px",
                                padding: "5px 30px",
                                "&:hover": {
                                    backgroundColor: "rgb(70,140,90)", // Optional hover style
                                },
                            }}
                        >
                            Shop
                        </Button>
                    </Box>
                    {/* ............................................................................................... */}
                    <Box sx={{
                        width: "max-content",
                        height: "max-content",
                        textAlign: "center",
                        marginTop: { md: "0px", xs: "20px", },

                    }}>

                        <Box sx={{
                            width: { md: "300px", sm: "330px", xs: "250px" },
                            height: { md: "300px", sm: "330px", xs: "250px", },
                            backgroundColor: "purple",
                            borderRadius: "50%",
                            backgroundImage: `url(${shoes})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        </Box>
                        <Typography varient="p" sx={{
                            fontSize: { md: "24px", xs: "18px" },
                            color: "black",
                            fontWeight: "bolder",
                            padding: "10px",
                        }}>Shoes</Typography>
                        <Button
                            sx={{
                                width: "max-content",
                                height: "auto",
                                backgroundColor: "rgb(89,171,110)",
                                color: "white",
                                fontSize: "19px",
                                padding: "5px 30px",
                                "&:hover": {
                                    backgroundColor: "rgb(70,140,90)", // Optional hover style
                                },
                            }}
                        >
                            Shop
                        </Button>
                    </Box>



                    {/* ......................................... */}

                    <Box sx={{
                        width: "max-content",
                        height: "max-content",
                        textAlign: "center",
                        marginTop: { md: "0px", xs: "30px", },

                    }}>

                        <Box sx={{
                            width: { md: "300px", sm: "330px", xs: "250px" },
                            height: { md: "300px", sm: "330px", xs: "250px", },
                            backgroundColor: "purple",
                            borderRadius: "50%",
                            backgroundImage: `url(${glass})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        </Box>
                        <Typography varient="p" sx={{
                            fontSize: { md: "24px", xs: "18px" },
                            color: "black",
                            fontWeight: "bolder",
                            padding: "10px",
                        }}>Acessories</Typography>
                        <Button
                            sx={{
                                width: "max-content",
                                height: "auto",
                                backgroundColor: "rgb(89,171,110)",
                                color: "white",
                                fontSize: "19px",
                                padding: "5px 30px",
                                "&:hover": {
                                    backgroundColor: "rgb(70,140,90)", // Optional hover style
                                },
                            }}
                        >
                            Shop
                        </Button>
                    </Box>


                </Box>

            </Box >
        </>
    )

}
export default Secondsec
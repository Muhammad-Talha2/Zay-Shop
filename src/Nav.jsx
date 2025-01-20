import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";


function Nav() {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }


    return <>

        {open && (

            <Box
                sx={{
                    width: "250px",
                    height: "100vh",
                    backgroundColor: "#f9f9f9",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    zIndex: "100",
                    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    gap: "15px",
                    transition: "transform 0.4s all linear ease", // Smooth transition effect
                }}

            >
                {/* Close Icon */}
                <CloseIcon
                    sx={{
                        alignSelf: "flex-end",
                        cursor: "pointer",
                        fontSize: "30px",
                        color: "#333",
                        marginBottom: "10px",
                    }}
                    onClick={toggle} // Function to close the sidebar
                />

                {/* Sidebar Content */}
                <h1
                    style={{
                        margin: "0 0 20px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333",
                    }}
                >
                    Menu
                </h1>

                <Typography
                    variant="p"
                    sx={{
                        cursor: "pointer",
                        transition: "0.3s all linear",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { color: "green" },
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={"/"}
                    >
                        Home
                    </Link>
                </Typography>

                <Typography
                    variant="p"
                    sx={{
                        cursor: "pointer",
                        transition: "0.3s all linear",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { color: "green" },
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={"/about"}
                    >
                        About
                    </Link>
                </Typography>

                <Typography
                    variant="p"
                    sx={{
                        cursor: "pointer",
                        transition: "0.3s all linear",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { color: "green" },
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={"/shop"}
                    >
                        Shop
                    </Link>
                </Typography>

                <Typography
                    variant="p"
                    sx={{
                        cursor: "pointer",
                        transition: "0.3s all linear",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { color: "green" },
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={"/contact"}
                    >
                        Contact
                    </Link>
                </Typography>
            </Box>
        )}


        <Box sx={{
            width: "100%",
            height: " 100px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
            boxShadow: "0px 0px 6px 0px gray",

        }}>
            <Typography variant="h2" sx={{
                color: "rgb(89,171,110)",
                fontSize: { md: "62px", xs: "50px", },
                fontWeight: "500",
            }}>
                <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={"/"}
                >
                    Zay
                </Link>
            </Typography>
            {/* ............................/Unorder-List/.................................. */}
            <Box sx={{
                width: "600px",
                height: "auto",
                // border: "1px solid blue",
                display: { md: "flex", xs: "none", },
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "23px",

            }} >
                <Typography variant="p" sx={{
                    cursor: "pointer", transition: "0.3s all linear",
                    '&:hover': { color: "green", }
                }}>
                    <Link style={{ textDecoration: "none", color: "black", }} to={"/"}>Home</Link>
                </Typography>
                <Typography variant="p" sx={{
                    cursor: "pointer", transition: "0.3s all linear",
                    '&:hover': { color: "green", }
                }}>
                    <Link style={{ textDecoration: "none", color: "black", }} to={"/about"}>About</Link>

                </Typography>
                <Typography variant="p" sx={{
                    cursor: "pointer", transition: "0.3s all linear",
                    '&:hover': { color: "green", }
                }}>
                    <Link style={{ textDecoration: "none", color: "black", }} to={"/shop"} >Shop</Link>
                </Typography>
                <Typography variant="p" sx={{
                    cursor: "pointer", transition: "0.3s all linear",
                    '&:hover': { color: "green", }
                }}>
                    <Link style={{ textDecoration: "none", color: "black", }} to={"/contact"} >Contact</Link>
                </Typography>
            </Box>

            {/* ...................................................... */}
            <Box sx={{
                width: { lg: "140px", md: "140px", },
                height: "auto",
                alignItems: "center",
            }}>
                <Box sx={{
                    width: "100%", justifyContent: "space-between",
                    display: { md: "flex", xs: "none" },
                    color: "black",
                }}>
                    <SearchIcon sx={{
                        fontWeight: "bold",
                        fontSize: "35px",
                    }} />
                    <AddShoppingCartIcon sx={{
                        fontWeight: "bold",
                        fontSize: "35px",
                    }} />
                    <PersonIcon sx={{
                        fontWeight: "bold",
                        fontSize: "35px",
                    }} />

                </Box>
                <MenuIcon sx={{
                    width: "max-content",
                    display: { md: "none", xs: "flex" },
                    fontSize: { md: "35px", xs: "24px", },
                    fontWeight: "bold",
                }} onClick={toggle} />

            </Box>
        </Box>
    </>
}
export default Nav
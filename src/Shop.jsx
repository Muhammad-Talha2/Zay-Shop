import React from "react";
import { Box, Typography } from "@mui/material";
import Nav from "./Nav";
import Accordian from "./Accordian";
import Shomimg from "./Shomimg";
import Footer from "./Footer"
const Shop = () => {
    return (
        <>
            <Nav />
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "10px", sm: "20px" }, // Add padding for smaller screens
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1800px", // Limit the container width for large screens
                        background: "white",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        marginTop: "100px",
                        // alignItems: "center",
                        padding: "20px",
                        gap: { xs: "20px", md: "0" }, // Add gap for smaller screens
                        borderRadius: "8px", // Add border radius for a polished look
                    }}
                >
                    {/* Categories Section */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "30%" },
                            borderRadius: "8px",
                            overflow: "hidden", // Ensures content doesn't overflow
                        }}
                    >
                        <Typography
                            variant="h4" // Corrected 'varient' to 'variant'
                            sx={{
                                textAlign: "center",
                                color: "gary",
                                padding: "10px",
                                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                                fontWeight: "bold",
                            }}
                        >
                            Categories
                        </Typography>
                        <Accordian />
                    </Box>

                    {/* Image Section */}
                    <Shomimg />
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Shop;

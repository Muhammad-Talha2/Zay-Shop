import React from "react";
import { Box, Container, Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "rgb(33,41,52)", // Dark background
                color: "#FFFFFF",          // White text
                py: 0,                     // Padding for top and bottom
                mt: 0,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Section 1: Contact Info */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{ color: "rgb(89,171,110)", fontSize: "30px", fontWeight: "bold", mb: 2 }}>
                            Zay Shop
                        </Typography>
                        <Typography variant="body2" sx={{
                            fontSize: "25px",
                            color: "gray",
                            fontWeight: "100",
                        }} >
                            123 Consectetur at ligula 10660
                        </Typography>
                        <Typography variant="body2"
                            sx={{
                                fontSize: "25px",
                                color: "gray",
                                fontWeight: "100",
                                paddingTop: "12px",
                                paddingBottom: "12px",
                            }} >010-020-0340</Typography>
                        <Typography variant="body2"
                            sx={{
                                fontSize: "25px",
                                color: "gray",
                                fontWeight: "100",
                            }} >info@company.com</Typography>
                    </Grid>

                    {/* Section 2: Products */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{
                            mb: 2,
                            color: "gray",
                            fontSize: "32px",
                            fontWeight: "200",

                        }}>
                            Products
                        </Typography>
                        {["Luxury", "Sport Wear", "Men's Shoes", "Women's Shoes", "Popular Dress", "Gym Accessories", "Sport Shoes"].map((item, index) => (
                            <Typography variant="body2" key={index} sx={{
                                fontSize: "15px",
                                color: "gray",
                                fontWeight: "100",
                                marginBottom: "10px",

                            }}>
                                <Link href="#" color="inherit" underline="hover">
                                    {item}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Section 3: Further Info */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" sx={{
                            mb: 2,
                            color: "gray",
                            fontSize: "32px",
                            fontWeight: "200",

                        }}>
                            Further Info
                        </Typography>
                        {["Home", "About Us", "Shop Locations", "FAQs", "Contact"].map((item, index) => (
                            <Typography variant="body2" key={index}>
                                <Link href="#" color="inherit" underline="hover" sx={{
                                    fontSize: "15px",
                                    color: "gray",
                                    fontWeight: "100",

                                }}>
                                    {item}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>

                {/* Social Media and Subscription */}
                <Box sx={{ mt: 4, textAlign: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
                        <Facebook sx={{ cursor: "pointer" }} />
                        <Instagram sx={{ cursor: "pointer" }} />
                        <Twitter sx={{ cursor: "pointer" }} />
                        <LinkedIn sx={{ cursor: "pointer" }} />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                            flexDirection: { xs: "column", sm: "row" },
                        }}
                    >
                        <TextField
                            placeholder="Email address"
                            variant="outlined"
                            size="small"
                            sx={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 1,
                                width: { xs: "100%", sm: "300px" },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "green",
                                color: "#FFFFFF",
                                mt: { xs: 1, sm: 0 },
                                "&:hover": { backgroundColor: "darkgreen" },
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Box>

                {/* Copyright Section */}
                <Box sx={{ mt: 4, borderTop: "1px solid #555", pt: 2, textAlign: "center" }}>
                    <Typography variant="body2">
                        Copyright © {new Date().getFullYear()} Company Name | Designed by{" "}
                        <Link href="#" color="inherit" underline="hover">
                            TemplateMo
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;

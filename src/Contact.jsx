import React from "react";
import { Box, Typography, TextField, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Nav from "./Nav"
import Footer from "./Footer";

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

    return (
        <>
            <Nav />
            <Box sx={{ marginTop:"90px", backgroundColor: "#f5f7fa", py: 6, px: 2 }}>
                {/* Header Section */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography
                        variant={isMobile ? "h5" : "h4"} // Adjust text size for smaller screens
                        sx={{ fontWeight: "bold", mb: 2 }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#666",
                            maxWidth: "600px",
                            margin: "0 auto",
                            fontSize: isMobile ? "14px" : "16px", // Smaller font size for mobile
                        }}
                    >
                        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.
                    </Typography>
                </Box>

                {/* Map Section */}
                <Box
                    sx={{
                        width: "100%",
                        height: isMobile ? "200px" : "300px", // Adjust map height for mobile
                        maxWidth: "1000px",
                        margin: "0 auto",
                        mb: 4,
                    }}
                >
                    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                </Box>

                {/* Contact Form */}
                <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
                    <Grid container spacing={isMobile ? 1 : 2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                placeholder="Name"
                                size={isMobile ? "small" : "medium"} // Smaller input on mobile
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                placeholder="Email"
                                size={isMobile ? "small" : "medium"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                placeholder="Subject"
                                size={isMobile ? "small" : "medium"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                placeholder="Message"
                                multiline
                                rows={isMobile ? 3 : 4} // Fewer rows on mobile
                                size={isMobile ? "small" : "medium"}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, px: isMobile ? 3 : 5, py: isMobile ? 1 : 1.5 }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Contact;



import React from "react";
import Nav from "./Nav";
import Slider from "./Slider";
import { Box} from "@mui/material";


function Main() {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "rgb(239,239,239)",
                position: "relative",
            }}>
            </Box>

            <Nav />
            <Slider />

        </>
    )
}
export default Main
import { Box, Typography } from "@mui/material"

export default function NotSupported() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <img src={"/sadtify.png"} />
            <Typography
                fontFamily={"LinikSans"}
                fontSize={40}
            >Browser is not supported</Typography>
            <Typography
                fontFamily={"LinikSans"}
                fontSize={20}
                //don't let it get to the sides too much
                style={{ maxWidth: "60vw" }}

            >Looks like you are using an old browser, which is not supported by this website. Please, only use Google Chrome or make sure your browser is updated to the latest version for the best user experience.</Typography>
        </Box>
    )
}
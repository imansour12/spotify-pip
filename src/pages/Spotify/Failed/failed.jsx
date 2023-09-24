import { Button, Typography } from "@mui/material";

export default function Failed() {
    const {
        VITE_CLIENT_ID,
        VITE_REDIRECT_URI,
        VITE_AUTH_ENDPOINT,
        VITE_RESPONSE_TPYPE,
    } = import.meta.env;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#3d4242",
                height: "100vh",
                width: "100vw",
            }}
        >
            <Typography
                style={{ fontFamily: "GothamBook" }}
                variant="h2"
                color={"#fff"}

            >Oops, that didn't quite work.</Typography>
            <br />
            <Typography

                style={{ fontFamily: "GothamBook" }}
                variant="h3"
                color={"#fff"}

            >Try again ?</Typography>
            <br />
            <Button
                href={`${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TPYPE}`}
                variant="contained"
                style={{ color: "white", backgroundColor: "#1DB954", textTransform: "none", borderRadius: "50px", fontFamily: "GothamBook", fontSize: 20 }}
            >
                Login to Spotify
            </Button>
        </div>
    );
}

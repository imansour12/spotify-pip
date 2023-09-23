export default function Home() {

    const {
        VITE_CLIENT_ID,
        VITE_REDIRECT_URI,
        VITE_AUTH_ENDPOINT,
        VITE_RESPONSE_TPYPE,
    } = import.meta.env;

    return (
        <>
            <a
                href={`${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TPYPE}`}
            >
                Login to Spotify
            </a>

            <h1 style={{ colo: "black" }}>hello</h1>
        </>
    )
}
import Counter from "../../pip/Counter"
import ReactDOM from "react-dom/client";

export default function Home() {

    const {
        VITE_CLIENT_ID,
        VITE_REDIRECT_URI,
        VITE_AUTH_ENDPOINT,
        VITE_RESPONSE_TPYPE,
    } = import.meta.env;

    async function openPictureInPicture() {
        const pipWindow = await window.documentPictureInPicture.requestWindow();
        const pipDiv = pipWindow.document.createElement("div");
        pipDiv.setAttribute("id", "pip-root");
        pipWindow.document.body.append(pipDiv);
        const PIP_ROOT = ReactDOM.createRoot(pipWindow.document.getElementById("pip-root"));
        PIP_ROOT.render(<Counter />);
    }

    return (
        <>
            <a
                href={`${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TPYPE}`}
            >
                Login to Spotify
            </a>

            <div onClick={openPictureInPicture}>Open counter</div>
        </>
    )
}
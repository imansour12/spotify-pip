import signedIn from "@hooks/signedIn";
import Counter from "../../pip/PictureInPicture"
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
        const style = pipWindow.document.createElement("style");
        style.innerHTML = `
        @font-face{
            font-family: 'GothamBold';
            src: url('/GothamBold.ttf');
        }
        @font-face{
            font-family: 'LinikSans';
            src: url('/LinikSans.ttf');
        }
        body {
            margin: 0;
            padding: 0;
        }
        `
        pipWindow.document.head.append(style);
        const PIP_ROOT = ReactDOM.createRoot(pipWindow.document.getElementById("pip-root"));
        PIP_ROOT.render(<Counter />);
    }
    console.log(signedIn())

    return (
        <>
            {!signedIn() ?
                <a
                    href={`${VITE_AUTH_ENDPOINT}?client_id=${VITE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}&response_type=${VITE_RESPONSE_TPYPE}&scope=user-read-currently-playing`}
                >
                    Login to Spotify
                </a> : <></>}

            <div onClick={openPictureInPicture}>Open counter</div>
        </>
    )
}
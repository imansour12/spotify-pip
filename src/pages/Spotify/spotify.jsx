import { useSearchParams, useNavigate } from "react-router-dom";
import Failed from "./Failed/failed";
import getSpotToken from "@hooks/getSpotToken";
import { useEffect } from "react";

export default function Spotify() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (searchParams.get("error")) {
            navigate("/failed");
        }
        if (getSpotToken()) {
            console.log(getSpotToken(), window.location.href)
            navigate("/");
        }
    }, [])
    if (!getSpotToken()) {
        return <Failed />
    }
    return <h1>spotify</h1>
}
import { useSearchParams } from "react-router-dom";
import Failed from "./Failed/failed";

export default function Spotify() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("error"))
    if (searchParams.get("error")) {
        return (<Failed />)
    }

    return <h1>spotify</h1>
}
import { useSearchParams } from "react-router-dom";

export default function Spotify() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("error"))
    return <h1>spotify</h1>
}
export default function signedIn() {
    const spotToken = localStorage.getItem('spotToken');
    if (spotToken) {
        return true;
    }
    return false;
}
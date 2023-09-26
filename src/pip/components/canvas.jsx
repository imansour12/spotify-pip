export default function Canvas(image) {
    return (
        <img
            style={{
                position: "fixed",
                bottom: 0,
                right: 0,
                minWidth: "100%",
                minHeight: "100%",
                zIndex: -1,
                maxWidth: "100%",
                maxHeight: "100%",
            }}
            src={image.image} />
    )
}

const Gallery = (props) => {
    const memList = props.memlist
    console.log(props, memList)

    return (
        <>
            {memList.map((title) => (
                <li>{title}</li>
            ))}
        </>
    )
}
export default Gallery;
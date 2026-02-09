

const Map = () => {

    const mobile = ["samsung", "iphone", "android"]
    
    
    return( <div>
        <h1>Map Component</h1>
        <li>
            {mobile.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </li>














    </div>);
}

export default Map;
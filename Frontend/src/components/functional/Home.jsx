function Home(properties){
    var style = {
        textAlign:"center",
        backgroundColor:"Blue",
        color:"silver"

    }
    return (<div>
        {/* <h1 style={style}>Home Page</h1> */}
        <h2>Below tag is for property</h2>
        <h3>Props:{properties.properties}</h3>
    </div>);
}
export default Home;
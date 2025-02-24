// eslint 
const trackingmybutton =(Component)=>{
    return(props)=>{
        const handleClick=()=>{
            alert("The tracking into on clicking the button"+props.trackingInfo.CustID)
        };
        return(
            <form onClick={handleClick}>
                Email:<input type="text" /><br/>
                Password:<input type="text" /><br/>
                <Component {...props}/>
            </form>
        );
    };
};
export default trackingmybutton;
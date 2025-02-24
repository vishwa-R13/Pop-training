import Button from "./Button";
import trackingmybutton from "./trackingmybutton";
const Hoc=()=>{
    const ButtonTrack = trackingmybutton(Button)
    return (<div>
        <h1 >Welcome to higher oder Component(Hoc)</h1>
        <Button value={"Login"} />
        <ButtonTrack value={"Login"} trackingInfo={{"CustID":" Hello","password":" password"}}    />
    </div>)
}
export default Hoc;
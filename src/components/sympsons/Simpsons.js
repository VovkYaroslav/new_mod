import simpson from "./Simpson";
import Simpson from "./Simpson";

function Simpsons(props){
    return(
        <div>
            {
                simpson.map((simpson ,index)=><Simpson key={index} simpson={simpson}/>)
            }
        </div>
    );
}
export default Simpsons;
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css'
import ComponentName from './ComponentName.js'
import City from './City.js'
function Component(props){ //  props through data fetch .props is a object 
 


    return(
        <div>
          
        
            <div className="mt-5 d-flex justify-content-evenly box ">
             
         <h3>{props.serialNo}</h3>
          <h1>{props.name}</h1>
         <h2>{props.title}</h2>
            <div className="expense-item-price">{props.Amount}</div>
            <ComponentName ></ComponentName>
          <City></City>
         
            </div>
        </div>
    )
}
export default Component;
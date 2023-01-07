import './App.css';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {Inc,Dec} from './states/reducer/index';
function App() {
  const curstate=useSelector((state)=>state.number);
  const dispatch=useDispatch();
  return (<>
     <h1>react redux tutorial</h1>
      <div style={{display:'flex',width:'100%',alignItems:'center',flexDirection:'column'}}>
    
       <h1>{curstate}</h1>
       <div> 
      <button onClick={()=>dispatch(Inc(10))}>Inc</button>
      <button onClick={()=>dispatch(Dec(5))}>Dec</button>
      </div>
    
        </div>
 
  
  
  </>
 

  );
}

export default App;

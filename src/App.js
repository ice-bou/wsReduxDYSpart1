import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import HomeCounter from './Components/HomeCounter';
import { handleShow } from './Redux/Action';


function App() {
  const show = useSelector(state=>state.show)
  const dispatch= useDispatch()
  return (
    <div style={{fontSize: '50px', margin: '50px'}}>
 {
  show && <HomeCounter/>
 }
    <button onClick={()=>dispatch(handleShow())}> Show </button> 


    </div>
  );
}

export default App;

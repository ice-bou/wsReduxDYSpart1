import { useDispatch, useSelector } from "react-redux"
import { decrement, increment,addNumber, reset, secInput, showMore } from "../Redux/Action"
import { useState } from "react"

const HomeCounter = ()=> {
const count = useSelector(state=>state.count)
const newInput = useSelector (state=>state.newInput) 
const [recInput,setRecInput] = useState(1)
const secinput = useSelector(state=>state.secinput)
const dispatch = useDispatch ()
const showM = useSelector(state => state.showM)
    return (
        <div>

            <input value={newInput} type= 'number' onChange={(e)=>{dispatch(addNumber(e.target.value));setRecInput(e.target.value)}} />  
               <br/> 
                <button onClick={()=>count>0 && dispatch(decrement(recInput))}> - </button>
                <span>{count}</span>
                <button onClick={()=> dispatch(increment())}> + </button>
                <br/>
                <button onClick={()=>dispatch(reset())}> Reset </button> 
                    <br/>
                    <br/>
            <input type="text" onChange={(e)=> dispatch(secInput(e.target.value))}/>

            <h1>{showM ? secinput  : secinput.substring(0,10)}</h1>
            {
                secinput.length > 5 && <button  onClick={()=>dispatch(showMore())} >showMore</button>
            }
            
        </div>
    )
}
export default HomeCounter
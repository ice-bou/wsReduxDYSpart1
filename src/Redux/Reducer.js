import { ADDNUMBER, DECREMENT, HANDLESHOW, INCREMENT, RESET, SECINPUT, SHOWMORE } from "./ActionTypes"

const initialState = {
    count : 0,
    newInput : 1, 
    show : false ,
    secinput : '',
    showM : false

}
const Reducer =(state=initialState,action)=>{
    switch (action.type) {
         
        case DECREMENT : return {...state,count : state.count - action.payload}
        case INCREMENT : return {...state, count : state.count + Number(state.newInput)}
        case ADDNUMBER : return {...state, newInput: action.payload} 
        case RESET : return { ...state,count: 0, newInput: 1 }
        case HANDLESHOW : return {...state,show:!state.show}
        case SECINPUT : return {...state, secinput : action.payload}
        case SHOWMORE : return {...state, showM : !state.showM}
        default: return state 
            

    }

    
}
export default Reducer
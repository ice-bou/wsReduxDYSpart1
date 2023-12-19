import { ADDNUMBER, DECREMENT, HANDLESHOW, INCREMENT, RESET , SECINPUT, SHOWMORE} from "./ActionTypes"

export const handleShow=()=>{
    return (
        {
            type : HANDLESHOW
        }
    )
}

export const reset=()=> {
return ( 
    {
        type : RESET 
     }
    
)
}

export const decrement=(payload)=>{

    return (

        {
            type : DECREMENT ,
            payload
        }
    )
}

export const increment =()=> {
    return (
        {
            type : INCREMENT 
        }
    )
}

export const addNumber =(payload)=> {
    return (
        {
            type: ADDNUMBER, 
            payload 
        }
    )
}

export const secInput =(payload)=>{
    return (
        {
        type : SECINPUT ,
        payload
        }
        )
}
export const showMore=()=>{
    return(
        {
            type : SHOWMORE
        }
    )
}
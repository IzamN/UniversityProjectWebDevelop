import { createStore } from "redux"
const defaultState={
    isFetching:false,
}
export const reducer=(state=defaultState, action)=>{
    switch(action.type){
        case 'ISFETCHING':{
            return {...state, isFetching:action.payload}
        }
        default:return state
    }
}

export const store=createStore(reducer)

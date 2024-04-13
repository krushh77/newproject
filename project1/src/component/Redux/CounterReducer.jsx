const initialstate = {krushna: 123}

const constreducer = (state = initialstate, action) => {
    switch (action.type){
             case "INCRIMENT" : 
             return {...state, krushna: state.krushna + 1}
             case "DECRIMENT" : 
             return {...state, krushna: state.krushna - 1}

             default: 
             return state
    }
}
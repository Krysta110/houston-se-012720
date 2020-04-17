let initialS = {
    count: 0
}

export default function CounterReducer(state = initialS,action){
    console.log("State form Counter Reducer:", state)
    console.log("action form CR", action)

    switch(action.type){
        case "inc":
            return{
                ...state,
                count: state.count + 1
            }
        case "dec":
            return{
                ...state,
                count: state.count - 1
            }
        default: 
            return state
    }

}
export default function reducer(state = {count: 0, test: "test"}, action){

    switch(action.type){
      case "inc":
        return { 
          ...state,
          count: state.count + action.payload
        }
      case "dec":
        return {
          ...state,
          count: state.count - action.payload
        }
      default:
        return{
          count: state.count,
          test: state.test
        }
    }
}
  
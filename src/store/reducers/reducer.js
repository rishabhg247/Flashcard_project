
function initialState(){
    let list=localStorage.getItem('mainObj');
    console.log(list);
    if(list){return JSON.parse(localStorage.getItem('mainObj'))}
    else{return []}
}

function mainReducer(state=initialState(),action){
    switch (action.type) {
        case "MAIN_OBJ":return [...state,action.payload]
        case "REMOVE_ALL":return state=[];
        case "REMOVE_ONE":let newArry=state.filter((i,I)=>I!==action.payload);
        return state=newArry;
        default:return state
    }
}
export default mainReducer;
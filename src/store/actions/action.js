function mainObj(data){return {type:'MAIN_OBJ',payload:data}}

function removeAll(){return{type:'REMOVE_ALL'}}

function removeOne(data){return{type:"REMOVE_ONE",payload:data}}


export {mainObj,removeAll,removeOne}

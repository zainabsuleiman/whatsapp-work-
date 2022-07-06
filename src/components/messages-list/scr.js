
function loadCal(){
    const input =document.getElementById("input");
    if(input.placeholder){
     input.addEventListener('focus',(e)=>{
         input.placeholder= '';
     });
    }else{
     input.placeholder.preventDefault()
    }; 
}

function onInpuFocus (evt){
    const input = evt.target;
    input.placeholder= '';
}  
// function onchangeinput (evt){
//     const change = evt.target;
//     change.b

// }

const loadmyscript= () => window.addEventListener('load', ()=>loadCal());
export default onInpuFocus
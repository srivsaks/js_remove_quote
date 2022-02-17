console.log("heyyy")
let delegateElement=document.getElementById("delegation");

delegateElement.addEventListener("click",deleteQuote);

let quotes=document.body;
console.log(quotes)

function deleteQuote(e){
    if(e.target.tagName==="BUTTON"){
        // the parent of button is the child of the delegate div
e.target.parentElement.remove();
    }
}
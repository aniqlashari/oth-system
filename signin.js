function conditon(){

    let name2   = document.getElementById("name2")
    let name3   = document.getElementById("name3")

let work2 = localStorage.getItem("hi")
let work3 = localStorage.getItem("by")

if ( work2===name2.value&&work3===name3.value){
    alert("you done")
}
else{

alert("sorry try again later")


}
}
function conditon(){
    let name = document.getElementById("name")
    let work = localStorage.getItem("name")
  

    if (name.value === work) {
               
alert("work done")

     
}

else(
console.log("Work Submiting fails")
)

}
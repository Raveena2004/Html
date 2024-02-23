function Addtask(){
    var input=document.querySelector('.input')
    console.log(input.value)
    var ele=document.getElementById("Taskcontainer")
    console.log(ele.textContent)
    var newele=document.createElement('div') //create inner container
    newele.setAttribute('id','ind-Task')   //set attributes-id
    newele.innerHTML=`<p>${input.value}</p><button> Delete</button> `//content
    ele.append(newele)
    
}
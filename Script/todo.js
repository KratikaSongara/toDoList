var a=JSON.parse(localStorage.getItem("data"));
// console.log(arr)

a.map(function(el){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=el.task;
    var td2=document.createElement("td");
    td2.innerText=el.quantity;
    var td3=document.createElement("td");
    td3.innerText=el.itempriority;
    var td4=document.createElement("td");
    td4.innerText="Completed";
    td4.style.color="red";
    td4.style.cursor="pointer";

    td4.addEventListener("click",function(){
        markCompleteFunction(el)
    })

    tr.append(td1,td2,td3,td4);
    document.querySelector("#body").append(tr);
})

var completed;
if(completed==null)
{
    completed=[];
}
else
{
    completed=localStorage.setItem("completedToDo",JSON.stringify(completed));
}
function markCompleteFunction(el)
{
    completed.push(el);
    // console.log(completed)
    localStorage.setItem("completedToDo",JSON.stringify(completed));
}
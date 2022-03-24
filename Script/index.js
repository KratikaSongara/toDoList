document.querySelector("#form").addEventListener("submit",myFunction);

var arr;
if (localStorage.getItem("data")==null)
{
    arr=[];
}
else
{
    arr=JSON.parse(localStorage.getItem("data"));
}

function myFunction()
{
    event.preventDefault();
    var task=document.querySelector("#name").value;
    var qty=document.querySelector("#qty").value;
    var priority=document.querySelector("#priority").value;
    var obj={
        task:task,
        quantity:qty,
        itempriority:priority
    }
    arr.push(obj);
    console.log(arr)
    localStorage.setItem("data",JSON.stringify(arr));
}



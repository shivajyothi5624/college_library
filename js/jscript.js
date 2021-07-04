let add = document.getElementById("add");
let a= new Date();
let type;
date= (a.getDate())+"/"+(a.getMonth()+1)+"/"+a.getFullYear();

function afterreload()
{
  let arr = [];
  if(localStorage.getItem("itemsjson")!=null)
   {
    arr = JSON.parse(localStorage.getItem("itemsjson"));
    localStorage.setItem("itemsjson",JSON.stringify(arr));
   }
   str = '';
   arr.forEach( (element, index) => {
     console.log("enterde array loop")
     if(arr.length == 0)
     {
       document.getElementById("tablebody").innerHTML="";
     }
     else
     {
   
       str+=`
       <tr>
       <td>${element[0]}</td>
       <td>${element[1]}</td>
       <td>${element[2]}</td>
       <td>${element[3]}</td>
       <td id="b${index}"><button   class="btn btn-success btn-sm"  onclick="changeduedate(${index})">clik if returned</button></td>
       </tr>`
       document.getElementById("tablebody").innerHTML=str;
     }
   });
   afterreload2();
}
afterreload();
add.addEventListener("click", ()=>{
  console.log("clicked....")
   let nametxt = document.getElementById("name").value;
   let authortxt =document.getElementById("authour").value;
   python2 =document.getElementById("python");
   java =document.getElementById("java");
   web =document.getElementById("web");
   if(python2.checked)
   {
     type = python2.value;
   } 
   if(java.checked)
   {
     type =java.value;
   }
   if(web.checked)
   {
     type = web.value;
   }
   let arr = [];
   if(localStorage.getItem("itemsjson")==null)
   {
     arr.push([nametxt,authortxt,type,date]);
     localStorage.setItem("itemsjson",JSON.stringify(arr));
   }
   else{
     arr = JSON.parse(localStorage.getItem("itemsjson"));
     arr.push([nametxt,authortxt,type,date]);
     localStorage.setItem("itemsjson",JSON.stringify(arr));
   };
   afterreload();
});

  function afterreload2()
  {
    if(localStorage.getItem("dateitems") != null)
    {
        arr = JSON.parse(localStorage.getItem("dateitems"));
    }
    arr.forEach(element => {
      td1 = document.getElementById(element[0]);
      td1.innerHTML = ` <p>${element[1]}</p>`
    });
  }
  afterreload2();
function changeduedate(index)
{
  console.log("cliked...");
    idd = "b"+index;
    let arr =[]
    date2 = date;
    if(localStorage.getItem("dateitems") == null)
    {
    arr.push([idd,date]);
    localStorage.setItem("dateitems",JSON.stringify(arr));
    }
    if(localStorage.getItem("dateitems") != null)
    {
      arr = JSON.parse(localStorage.getItem("dateitems"));
      arr.push([idd,date]);
    localStorage.setItem("dateitems",JSON.stringify(arr));
    }
    td1 =document.getElementById(idd);
    td1.innerHTML = ` <p>${date}</p>`
};


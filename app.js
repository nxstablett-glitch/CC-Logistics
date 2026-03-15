function getUsers(){
 let users = localStorage.getItem("users")

 if(!users){
  users=[{username:"admin",password:"admin"}]
  localStorage.setItem("users",JSON.stringify(users))
 }else{
  users=JSON.parse(users)
 }

 return users
}

function login(){

 const u=document.getElementById("user").value
 const p=document.getElementById("pass").value

 const users=getUsers()

 const user=users.find(x=>x.username===u && x.password===p)

 if(!user){
  alert("Wrong login")
  return
 }

 localStorage.setItem("logged",u)

 location.href="dashboard.html"
}

function getInventory(){

 let inv=localStorage.getItem("inventory")

 if(!inv){
  inv=[]
  localStorage.setItem("inventory",JSON.stringify(inv))
 }else{
  inv=JSON.parse(inv)
 }

 return inv
}

function saveInventory(data){
 localStorage.setItem("inventory",JSON.stringify(data))
}

function addItem(){

 const name=document.getElementById("name").value
 const stock=Number(document.getElementById("stock").value)
 const min=Number(document.getElementById("min").value)
 const max=Number(document.getElementById("max").value)

 const inv=getInventory()

 inv.push({id:Date.now(),name,stock,min,max})

 saveInventory(inv)

 loadInventory()
}

function loadInventory(){

 const table=document.getElementById("items")
 if(!table) return

 const inv=getInventory()

 table.innerHTML=""

 inv.forEach(i=>{

  let status="OK"

  if(i.stock<i.min) status="LOW"
  if(i.stock>i.max) status="OVER"

  const row=document.createElement("tr")

  row.innerHTML=`
  <td>${i.name}</td>
  <td>${i.stock}</td>
  <td>${status}</td>
  `

  table.appendChild(row)

 })

}

function loadDashboard(){

 const inv=getInventory()

 const items=inv.length
 const stock=inv.reduce((a,b)=>a+b.stock,0)
 const low=inv.filter(i=>i.stock<i.min).length

 if(document.getElementById("items"))
 document.getElementById("items").innerText=items

 if(document.getElementById("stock"))
 document.getElementById("stock").innerText=stock

 if(document.getElementById("low"))
 document.getElementById("low").innerText=low
}

function createUser(){

 const u=document.getElementById("newuser").value
 const p=document.getElementById("newpass").value

 const users=getUsers()

 users.push({username:u,password:p})

 localStorage.setItem("users",JSON.stringify(users))

 alert("User created")
}

function addWarehouse(){

 let list=localStorage.getItem("warehouses")

 if(!list) list=[]
 else list=JSON.parse(list)

 const name=document.getElementById("wname").value
 const loc=document.getElementById("wloc").value

 list.push({name,loc})

 localStorage.setItem("warehouses",JSON.stringify(list))
}

loadInventory()
loadDashboard()
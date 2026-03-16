function login(){

const u=document.getElementById("user").value
const p=document.getElementById("pass").value

if(u=="admin" && p=="admin"){

localStorage.setItem("session","admin")
location.href="dashboard.html"

}else{

alert("Wrong Login")

}

}

async function loadDashboard(){

const data=await loadData()

document.getElementById("matCount").innerText=data.inventory.length

const total=data.inventory.reduce((a,b)=>a+b.stock,0)

document.getElementById("stockTotal").innerText=total

document.getElementById("prodLogs").innerText=data.logs.length

}

async function addItem(){

const data=await loadData()

data.inventory.push({

id:Date.now(),
name:document.getElementById("name").value,
stock:Number(document.getElementById("stock").value),
min:Number(document.getElementById("min").value),
max:Number(document.getElementById("max").value)

})

alert("Item added")

}

async function loadProduction(){

const data=await loadData()

const select=document.getElementById("weaponSelect")

data.production.forEach(w=>{

const option=document.createElement("option")

option.text=w.weapon

select.add(option)

})

}

async function produceWeapon(){

const weapon=document.getElementById("weaponSelect").value

alert("Produced "+weapon)

}

function transfer(){

alert("Transfer completed")

}
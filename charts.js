async function loadCharts(){

 const data=await loadData()

 const names=data.inventory.map(i=>i.name)
 const stock=data.inventory.map(i=>i.stock)

 new Chart(
 document.getElementById("stockChart"),
 {
  type:"bar",
  data:{
   labels:names,
   datasets:[{
    label:"Material Stock",
    data:stock
   }]
  }
 })

}
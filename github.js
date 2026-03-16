const REPO="nxstablett-glitch/CC-Logistics"
const FILE="data/logistics.json"

async function loadData(){

 const res=await fetch(
 `https://api.github.com/repos/${REPO}/contents/${FILE}`
 )

 const data=await res.json()

 window.sha=data.sha

 const decoded=atob(data.content)

 return JSON.parse(decoded)

}
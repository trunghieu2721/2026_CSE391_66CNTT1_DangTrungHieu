let students=[]
let filteredStudents=[]

let sortAsc=true

function rank(score){

if(score>=8.5) return "Giỏi"
if(score>=7) return "Khá"
if(score>=5) return "Trung bình"
return "Yếu"

}

function addStudent(){

const name=document.getElementById("name").value.trim()
const score=parseFloat(document.getElementById("score").value)

if(name===""){
alert("Họ tên không được trống")
return
}

if(isNaN(score)||score<0||score>10){
alert("Điểm phải từ 0 đến 10")
return
}

students.push({
name:name,
score:score
})

document.getElementById("name").value=""
document.getElementById("score").value=""
document.getElementById("name").focus()

applyFilters()

}

function applyFilters(){

const keyword=document.getElementById("search").value.toLowerCase()
const filter=document.getElementById("filterRank").value

filteredStudents=students.filter(sv=>{

const matchName=sv.name.toLowerCase().includes(keyword)

const matchRank=
filter==="all"||rank(sv.score)===filter

return matchName && matchRank

})

filteredStudents.sort((a,b)=>{

return sortAsc ? a.score-b.score : b.score-a.score

})

renderTable()

}

function renderTable(){

const tbody=document.getElementById("tableBody")
tbody.innerHTML=""

if(filteredStudents.length===0){

tbody.innerHTML=`<tr>
<td colspan="5" class="no-result">Không có kết quả</td>
</tr>`

return
}

let total=0

filteredStudents.forEach((sv,index)=>{

total+=sv.score

const tr=document.createElement("tr")

if(sv.score<5){
tr.classList.add("yeu")
}

const realIndex=students.indexOf(sv)

tr.innerHTML=`

<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${rank(sv.score)}</td>
<td>
<button data-index="${realIndex}">Xóa</button>
</td>

`

tbody.appendChild(tr)
})
const avg=(total/filteredStudents.length).toFixed(2)
document.getElementById("stats").textContent=
`Tổng SV: ${filteredStudents.length} | Điểm TB: ${avg}`
}
document.getElementById("addBtn").onclick=addStudent
document.getElementById("search").addEventListener("input",applyFilters)
document.getElementById("filterRank").addEventListener("change",applyFilters)
document.getElementById("sortScore").addEventListener("click",function(){
    sortAsc=!sortAsc
    this.textContent=sortAsc ? "Điểm ▲" : "Điểm ▼"
    applyFilters()

})
document.getElementById("score").addEventListener("keypress",function(e){
if(e.key==="Enter"){
    addStudent()
}
})
document.getElementById("tableBody").addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
    const index=e.target.dataset.index
    students.splice(index,1)
    applyFilters()
}
})
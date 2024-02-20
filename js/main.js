var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")
var submitBtn = document.getElementById("submitBtn")
var siteInfoList=[]
var mainIndex = 0
if (localStorage.getItem("siteInfoList") != null) {
    siteInfoList = JSON.parse(localStorage.getItem("siteInfoList"))
    showData(siteInfoList)
}

function submitInfo(){
    if (submitBtn.innerHTML == "Update") {
        submitBtn.innerHTML = "Submit"
        var siteIinfo ={
            name:siteName.value,
            url:siteUrl.value
            }
            siteInfoList.splice(mainIndex,1,siteIinfo)
    }else{
        if (/^(http(s):\/\/)?(www\.)?[A-za-z0-9_\.]{1,}\.[a-z]{2,6}$/.test(siteUrl.value)){
        var siteIinfo ={
            name:siteName.value,
            url:siteUrl.value
            }
            siteInfoList.push(siteIinfo)
    }else{
    alert("You Entered Invalid URL")
}
        }
        showData(siteInfoList)
        localStorage.setItem("siteInfoList", JSON.stringify(siteInfoList))
        clearForm()
    
}
function updateProduct(i){
siteName.value = siteInfoList[i].name
siteUrl.value = siteInfoList[i].url
console.log("helooooooo worldddd")
submitBtn.innerHTML = "Update"
mainIndex = i

}
function deleteProduct(x){
    siteInfoList.splice(x,1)
        showData(siteInfoList)
        localStorage.setItem("siteInfoList", JSON.stringify(siteInfoList))
}
function clearForm(){
    siteName.value = ''
    siteUrl.value = ''
}
function openInNewTab() {
        var url = (siteInfoList[i].url)
        var win = window.open(url, '_blank');
        win.focus();
}
function search(term){
    var wantedBook= []
    for (let i = 0; i < siteInfoList.length; i++) {
        if (siteInfoList[i].name.toLowerCase().includes(term)) {
            wantedBook.push(siteInfoList[i])
        }
        
    }
    showData(wantedBook)

}

function showData(anyArray){
var temp = "";
for (var i = 0; i < anyArray.length; i++) {
    temp+= `<tr>
    <td>`+i+`</td>
    <td>`+anyArray[i].name+`</td>
    <td>
        <button onclick="openInNewTab()" class="visit btn btn-success">
            <i class="fa-solid fa-eye"></i>
            Visit
        </button>
    </td>
    <td>
    <button  onclick="updateProduct(`+i+`)" class="btn btn-warning">
        <i class="fa-solid fa-eye"></i>
        Update
    </button>
    </td>
    <td>
        <button onclick="deleteProduct(`+i+`)" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
            Delete
        </button>
    </td>
</tr>`
}
document.getElementById("tableData").innerHTML=temp

}
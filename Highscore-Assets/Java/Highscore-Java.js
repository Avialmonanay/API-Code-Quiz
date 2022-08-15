// list element for creation of list items
var listEl = document.getElementById("list")





// Event listener watches for page load.
window.addEventListener('load', function() {
    const userName = JSON.parse(localStorage.getItem("userJSON"));
    const userScore = JSON.parse(localStorage.getItem("scoreJSON"));



    createScore(userScore, userName)
})


//create score functions pull json variables based on interval and then create list items.
function createScore (userScore, userName) {


    var nameEl = []
    var score = []
    nameEl.push(userName)
    score.push(userScore)
    localStorage.setItem("nameStorage", JSON.stringify(nameEl));
    localStorage.setItem("scoreStorage",JSON.stringify(score));



    for (var i = 0; i < nameEl.length; i++) {
        
        var scoreDisplay = score[i];
        var nameDisplay = nameEl[i];
  


    var listItem = document.createElement("li")
    listItem.setAttribute("class", "row")

    var initial = document.createElement("h1")
    initial.setAttribute("class", "border initials")
    initial.innerText = nameDisplay

    var score = document.createElement("h1")
    score.setAttribute("class", "border score")
    score.innerText = scoreDisplay

    listEl.append(listItem)
    listItem.append(initial)
    listItem.append(score)
}
    }

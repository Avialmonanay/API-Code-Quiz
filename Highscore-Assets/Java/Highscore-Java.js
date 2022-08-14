var listEl = document.getElementById("list")

var nameStorage = [];
var scoreStorage = [];



window.addEventListener('load', function() {
    const userName = JSON.parse(localStorage.getItem("userJSON"));
    const userScore = JSON.parse(localStorage.getItem("scoreJSON"));

    
    console.log(userScore)
    console.log(userName)
    nameStorage.push(userName)
    scoreStorage.push(userScore)

    createScore(userScore, userName)
})


function createScore (userScore, userName) {


    for (var i = 0; i < userScore.length; i++) {
        
        var scoreDisplay = userScore[i];
        var nameDisplay = userName[i];
  


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

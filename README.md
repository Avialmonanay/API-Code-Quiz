# API Code Quiz


Questions: 5
Time Limit: 90 seconds



This quiz is made to test the the knowledge level of the user on web API's. 


Upon opening the Main-page the user will be presented with 2 options, Start Quiz and Highscores.
<<<<<<< HEAD
![alt text](\ReadME-Assets\Home Page.PNG)
=======
![Home Page](https://user-images.githubusercontent.com/108016215/185544206-e0f72571-d5ba-4bb3-a253-0e5fe88ab637.PNG)


The Start Quiz Option will redirect them to the Game-Page HTML file. Once loaded a Countdown timer with 90 seconds will start. A question with 4 possible answers will be dynamically displayed using js. If the user selecs the correct answer 5 seconds will be added to their remaining time. If they choose an incorrect answer then the user will have 15 seconds deducted from their time. This is to encourage the user to think about the answer as you will loose valuable time. A timer, correct, and incorrect score are displayed and updated as the user progresses through the quiz at the top of the page so the user can see how they are doing.
![Play Page](https://user-images.githubusercontent.com/108016215/185545178-391ebed5-b077-4e3e-964f-80c776b85389.PNG)


Once they quiz is over by running out of time or answering all 5 questions js is used to update the contents of the page. This will allow the user to enter there name or initials to be logged on the highscores page. Once they submit there name it is then stored in local storage and the user has the ability to look at the highscores page where there name will be displayed along with others who have also taken the quiz.
![Log score](https://user-images.githubusercontent.com/108016215/185545360-905fbcaa-ff13-4e7d-ac73-04793580114b.PNG)


On the highscore page the user is presented with 2 options. They can either Try again or return to the Main Page. Below these options the user can view other peoples score who have also completed the quiz and entered their name on the previous page. This page uses js to pull the items from local storage and dynamically display them onto the page in order that they were received.
![HighScore Page](https://user-images.githubusercontent.com/108016215/185545539-ed17f7ea-2698-4ea9-aba0-0ac02f4b116d.png)




This quiz was built to showcase my js coding abilities by dynamically displaying items, logging information to local storage, and utilizing local storage on another page that dynamically displays that data.
>>>>>>> e01a517f7fb35f5c661f48ae414d3f25b4e18bce

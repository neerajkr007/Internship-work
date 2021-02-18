

var correct_Answers = [
    ["q1o1", "q2o4", "q3o2", "q4o2", "q5o3", "q6o4","q7o4","q8o4", "q9o1", "q0o2"]
   ,["q1o3", "q2o1", "q3o3", "q4o3", "q5o1", "q6o2","q7o1","q8o4", "q9o2", "q0o2"]
   ,["q1o4", "q2o3", "q3o3", "q4o1", "q5o4", "q6o3","q7o2","q8o2", "q9o1", "q0o1"]
   ,["q1o1", "q2o1", "q3o4", "q4o4", "q5o3", "q6o1","q7o4","q8o1", "q9o1", "q0o3"]
   ,["q1o3"]
   ];


var markedCorrect = 0;
var completed = [false, false, false, false];
var marked = [0,0,0,0];
var quizCompleted = 0;
var current_quiz = 0;
var allDone = false;
var quiz5Questions = ["My primary reason for trading ", "I regarded myself as a ", "I considered myself as a ", "At a social event do you:", "I read books and magazines about trading and investing:", "are you more impressed ", "are you more attracted to", "which appeal to you more :", "Are you more comfortable making:", "I have been trading for:", "Would you say you are more:", "Before making a phone call do you:", "I would be prefer to be trading ", "Are visionaries:", "Are you more often a:", "Should events occur:", "I currently make my living from:", "In company do you:", "Common sense is:", "In making decisions do you feel more comfortable with:", "Are you more:", "Do you prefer:", "do you put more value on :", "are you  more likely to :", "which rules you more", "I learn better:", "do you trend to look for :", "do you prefer:", "Are you interested in:", "I most often:", "Do you more often prefer the:", "Are you more likely to trust on", "Are you more inclined to be:", "What appeals to you more:"]
var quiz5Options1 = ["Because I love doing it", "novice trader", "active trader", "interact with many, including strangers?", "Often", "principles?", "sensible people", "consistency of thought?", "logical judgments?", "5 years or less", "serious and determined", "rarely question that everything will be said?", "full time ", "somewhere annoying", "cool ", "be careful selection", "trading exclusive", "initiate conversation?", "rarely questionable?", "standards ", "firm than gentle", "the ability to organize and be methodical?", "the definite", "see how others are useful?", "your head ", "Studying at home by myself", "the orderly?", "many friends with brief contact?", "design and research?", "Make Money", "the tentative and preliminary?", "experience?", "easy to approach?", "the structured and scheduled?"]
var quiz5Options2 = ["to make money ", "seaoned trade", "passive trader", 'be "stuck in a routine?"', "ocassionaly", "emotions", "imaginative people", "harmonious human relationships?", "value judgments?", "more than 5 years ", "easy going ", "rehearse what you will say?", "part time", "rather fascinating", "warm", "randomly", "something else", "wait to be approached?", "frequently questionbale", "feelings", "gentle than firm?", "the ability to adapt and make do", "the open minded ", "see how others see?", "your heart ?", "In a group with other people", "whatever turns ups", "a few friends with more lengthy contact?", "production and distribution?", "Lose Money", "final and unalterable?", "gut instinct?", "somewhat reserved?", "the unstructured and unscheduled?"]
var submision = new Array(34);
for(let i = 0; i < 34; i++){
submision[i] = new Array(1);
submision[i][0] = -1;
}
var type = [
[1,1,1,1,1,0,0,0,1,0,1,0,1,1,-2,0,-2,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0],
[0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,-2,1,1,1,1,1,0,1,1,0,1,1,1],
[1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0]
];
var similar = [0,0,0];

var quiz6ans = [3, 1, 1, 3, 3, 1, 3]

function optionchosen(option, n){
current_quiz = n;
document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[option[3]-1].onclick = null;
document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[option[3]-1].style.backgroundColor = "#444444";
marked[n-1]++;
let options = document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].childElementCount
for(let j = 0; j < options; j++){
document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].onclick = null;
document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].classList.remove("hov");
}
for(var i in correct_Answers[n-1]){
if(option == correct_Answers[n-1][i]){
document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#bcf5bc";//console.log(document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].childElementCount)
markedCorrect++;
if(marked[0]+marked[1]+marked[2]+marked[3] == 40){
document.getElementById("quizButton"+n).classList.remove("btn-outline-success");
document.getElementById("quizButton"+n).classList.remove("btn-warning");
document.getElementById("quizButton"+n).classList.add("btn-success");
if(markedCorrect <= 15){
 document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> Below Average</strong></h4>";
}
else if(16 <= markedCorrect && markedCorrect <= 25)
{
 document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> Average</strong></h4>";
}
else if(26 <= markedCorrect && markedCorrect <= 40){
 document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> Above Average</strong></h4>";
}
document.getElementById("cancel").onclick = null;
document.getElementById("cancel").innerHTML = "Close";
$('#Modal1').modal('toggle')
}
if(marked[n-1] == 10 && quizCompleted != 3){
quizCompleted++;
completed[n-1] = true;
document.getElementById("quizButton"+n).classList.remove("btn-outline-success");
document.getElementById("quizButton"+n).classList.remove("btn-warning");
document.getElementById("quizButton"+n).classList.add("btn-success");
document.getElementById("modalBody").innerHTML = "<h4>Congratulations, Quiz "+n+" completed. continue to another quiz</h4>";
document.getElementById("cancel").innerHTML = "Next";
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
$('#Modal1').modal('toggle')

}
else if(marked[n-1] == 1){
document.getElementById("quizButton"+n).classList.remove("btn-outline-success");
document.getElementById("quizButton"+n).classList.add("btn-warning");
}
return 1;
}
}
document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#ee9090";
if(marked[0]+marked[1]+marked[2]+marked[3] == 40){
document.getElementById("quizButton"+n).classList.remove("btn-outline-success");
document.getElementById("quizButton"+n).classList.remove("btn-warning");
document.getElementById("quizButton"+n).classList.add("btn-success");
if(markedCorrect <= 15){
document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> Below Average</strong></h4>";
}
else if(16 <= markedCorrect && markedCorrect <= 25)
{
document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> Average</strong></h4>";
}
else if(26 <= markedCorrect && markedCorrect <= 40){
document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> Above Average</strong></h4>";
}
document.getElementById("cancel").onclick = null;
document.getElementById("cancel").innerHTML = "Close";
$('#Modal1').modal('toggle')
}
if(marked[n-1] == 10 && quizCompleted != 3){
quizCompleted++;
completed[n-1] = true;
document.getElementById("quizButton"+n).classList.remove("btn-outline-success");
document.getElementById("quizButton"+n).classList.remove("btn-warning");
document.getElementById("quizButton"+n).classList.add("btn-success");
document.getElementById("modalBody").innerHTML = "<h4>Congratulations, Quiz "+n+" completed. continue to another quiz</h4>";
document.getElementById("cancel").innerHTML = "Next";
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
$('#Modal1').modal('toggle')
}
else if(marked[n-1] == 1){
document.getElementById("quizButton"+n).classList.remove("btn-outline-success");
document.getElementById("quizButton"+n).classList.add("btn-warning");
}
}


function startQuiz(nm){
if(!completed[nm-1]){
for(var i = 1; i<7; i++){
if(i == nm)
{
document.getElementById("quiz"+nm).style.display = "block";
}
else{
document.getElementById("quiz"+i).style.display = "none";
}
}
}
else{
startNextQuiz();
}

}


function startNextQuiz(){
if(current_quiz == 4){
current_quiz = 1;
startQuiz(1);
}
else{
current_quiz++;
startQuiz(current_quiz)


}

}


function optionchosen2(option, n){
document.getElementById("q"+n+"q"+option[1]+option[2]).style.backgroundColor = "#FFFFFF"
for(let i = 0; i < document.getElementById("q"+n+"q"+option[1]+option[2]).children[0].children.length; i++){
if(i == option[4]-1){
document.getElementById("q"+n+"q"+option[1]+option[2]).children[0].children[i].style.backgroundColor = "#444444";
}
else{
document.getElementById("q"+n+"q"+option[1]+option[2]).children[0].children[i].style.backgroundColor = "gray";
}
}
}


function enterQuestion(qid, question, option1, option2)
{
var _question = document.getElementById("personality_quiz");
var li = document.createElement('li');
li.setAttribute("id", qid);
li.setAttribute("class", "list-group-item");
li.setAttribute("style", "max-width: 80vw;");
li.appendChild(document.createTextNode(qid[3]+qid[4]+". "+question));
var ul = document.createElement('ul');
ul.setAttribute("class", "list-group mt-3");
var li2 = document.createElement('li');
li2.setAttribute("class", "list-group-item option_Style hov text-white")
li2.setAttribute("style", "max-width: 300px !important;");
li2.setAttribute("onclick", "optionchosen2('q"+qid[3]+qid[4]+"o1', 5)");
li2.appendChild(document.createTextNode(option1));
var li3 = document.createElement('li');
li3.setAttribute("class", "list-group-item option_Style hov text-white")
li3.setAttribute("style", "max-width: 300px !important;");
li3.setAttribute("onclick", "optionchosen2('q"+qid[3]+qid[4]+"o2', 5)");
li3.appendChild(document.createTextNode(option2));
ul.appendChild(li2);
ul.appendChild(li3);
li.appendChild(ul);
_question.appendChild(li);
}

function drawQuiz(){
document.getElementById("personality_quiz_submit").style.display = "flex";
for(let i = 0; i < 34; i++){
if(i<9)
enterQuestion("q5q0"+(i+1), quiz5Questions[i], quiz5Options1[i], quiz5Options2[i]);
else
enterQuestion("q5q"+(i+1), quiz5Questions[i], quiz5Options1[i], quiz5Options2[i]);
}
//document.getElementById("quizButton5").disabled = true;
//     var submit = document.createElement('button');
//     submit.setAttribute("class", "btn btn-success mt-3");
//     submit.appendChild(document.createTextNode("Submit"));
//     document.getElementById("quiz5").appendChild(submit);
}


function personality_result()
{
for(let i = 0; i < 34; i++)
{
var test = false;
if(i<9){
if(document.getElementById("q5q0"+(i+1)).children[0].children[0].style.backgroundColor == "rgb(68, 68, 68)"){
submision[i][0] = 0;
}
else if(document.getElementById("q5q0"+(i+1)).children[0].children[1].style.backgroundColor == "rgb(68, 68, 68)")
submision[i][0] = 1;
else{
document.getElementById("q5q0"+(i+1)).style.backgroundColor = "#ee9090";
document.getElementById("modalTitle").innerHTML = "Warning !";
document.getElementById("modalBody").innerHTML = "Please complete the whole quiz";
document.getElementById("cancel").onclick = "$('#Modal1').modal('toggle')";
document.getElementById("cancel").innerHTML = "Okay";
$('#Modal1').modal('toggle')
test = true;
}
}
else{
if(document.getElementById("q5q"+(i+1)).children[0].children[0].style.backgroundColor == "rgb(68, 68, 68)"){
submision[i][0] = 0;
}
else if(document.getElementById("q5q"+(i+1)).children[0].children[1].style.backgroundColor == "rgb(68, 68, 68)")
submision[i][0] = 1;
else{
document.getElementById("q5q"+(i+1)).style.backgroundColor = "#ee9090";
document.getElementById("modalTitle").innerHTML = "Warning !";
document.getElementById("modalBody").innerHTML = "Please complete the whole quiz";
document.getElementById("cancel").onclick = "$('#Modal1').modal('toggle')";
document.getElementById("cancel").innerHTML = "Okay";
$('#Modal1').modal('toggle')
test = true;
}
}
}
if(!test){
document.getElementById("personality_quiz_submit").disabled = true;
document.getElementById("modalTitle").innerHTML = "Result";
document.getElementById("modalBody").innerHTML = '<div class="d-flex align-items-center"><strong>Please wait while we calculate your result...</strong><div class="spinner-border ml-auto" role="status" aria-hidden="true"></div></div>';
//document.getElementById("cancel").onclick = "$('#Modal1').modal('toggle')";
document.getElementById("cancel").style.display = "none";
$('#Modal1').modal('toggle')
for (let i = 0; i < 3; i++) {
for (let j = 0; j < 34; j++) {
if (submision[j][0] == type[i][j]) {
 //console.log(i + " " + j + " " + submision[j][0])
 similar[i]++;
}
}
}
if(similar[0]==0 && similar[1]==0 && similar[2]==0){
document.getElementById("modalBody").innerHTML = "please complete atleast one of the questions";
}
else if (similar[0] >= similar[1] && similar[0] >= similar[2]) {
document.getElementById("modalBody").innerHTML = "You are a ADMINISTRATIVE Trader";
}
else if (similar[1] >= similar[0] && similar[1] >= similar[2]) {
document.getElementById("modalBody").innerHTML = "You are a SPONTANEOUS Trader";
}
else {
document.getElementById("modalBody").innerHTML = "You are a FacilITATIVE Trader";
}
document.getElementById("cancel").style.display = "block";
document.getElementById("cancel").onclick = "$('#Modal1').modal('toggle');";
similar[0] = 0; 
similar[1] = 0; 
similar[2] = 0;
}
}

function optionchosen3(option, n){
if(option[1] == 1){
document.getElementById("q"+n+"q"+option[1]).children[0].children[0].children[option[3]-1].onclick = null;
document.getElementById("q"+n+"q"+option[1]).children[0].children[0].children[option[3]-1].style.backgroundColor = "#444444";
let options = document.getElementById("q"+n+"q"+option[1]).children[0].children[0].children.length
for(let j = 0; j < options; j++){
document.getElementById("q"+n+"q"+option[1]).children[0].children[0].children[j].onclick = null;
document.getElementById("q"+n+"q"+option[1]).children[0].children[0].children[j].classList.remove("hov");
}
if(option == "q1o3"){
document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#bcf5bc";
}
else{
document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#ee9090";
}
}
else{
document.getElementById("q"+n+"q"+option[1]).children[2].children[0].children[option[3]-1].onclick = null;
document.getElementById("q"+n+"q"+option[1]).children[2].children[0].children[option[3]-1].style.backgroundColor = "#444444";
let options = document.getElementById("q"+n+"q"+option[1]).children[2].children[0].children.length
for(let j = 0; j < options; j++){
document.getElementById("q"+n+"q"+option[1]).children[2].children[0].children[j].onclick = null;
document.getElementById("q"+n+"q"+option[1]).children[2].children[0].children[j].classList.remove("hov");
}
document.getElementById("Modal2").classList.add("modal-lg");
$('#Modal1').modal('toggle')
setTimeout(()=>{
if(option[3] == quiz6ans[option[1]-1])
{
document.getElementById("result").innerHTML = "Yay, Correct Answer."+"<br>"+" correct answer :";
var correctAns = document.getElementById("correctAnsImage")
correctAns.setAttribute("src", "./quizGraphs/g"+(option[1]-1)+"a.png");
let maxwidth = document.getElementsByClassName("modal-body")[0].getBoundingClientRect().width;
//console.log(maxwidth)
correctAns.setAttribute("style", "width: "+(maxwidth*95/100)+"px !important")
document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#bcf5bc";
}
else
{
document.getElementById("result").innerHTML = "oops, Wrong Answer."+"<br>"+" correct answer :";
var correctAns = document.getElementById("correctAnsImage")
correctAns.setAttribute("src", "./quizGraphs/g"+(option[1]-1)+"a.png");
let maxwidth = document.getElementsByClassName("modal-body")[0].getBoundingClientRect().width;
//console.log(maxwidth)
correctAns.setAttribute("style", "width: "+(maxwidth*95/100)+"px !important")
document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#ee9090";
}
},150);
document.getElementById("cancel").onclick = "$('#Modal1').modal('toggle')";
}   
}
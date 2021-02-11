var correct_Answers = [
                       ["q1o1", "q2o4", "q3o2", "q4o2", "q5o3", "q6o4","q7o4","q8o4", "q9o1", "q0o2"]
                      ,["q1o3", "q2o1", "q3o3", "q4o3", "q5o1", "q6o2","q7o1","q8o4", "q9o2", "q0o2"]
                      ,["q1o4", "q2o3", "q3o3", "q4o1", "q5o4", "q6o3","q7o2","q8o2", "q9o1", "q0o1"]
                      ,["q1o1", "q2o1", "q3o4", "q4o4", "q5o3", "q6o1","q7o4","q8o1", "q9o1", "q0o3"]
                      ];


var markedCorrect = 0;
var marked = [0,0,0,0];
var quizCompleted = 0;

function optionchosen(option, n){
    document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[option[3]-1].onclick = null;
    document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[option[3]-1].style.backgroundColor = "#444444";
    marked[n-1]++;
    let options = document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].childElementCount
    for(var i in correct_Answers[n-1]){
        if(option == correct_Answers[n-1][i]){
            document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#bcf5bc";//console.log(document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].childElementCount)
            for(let j = 0; j < options; j++){
                document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].onclick = null;
                document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].classList.remove("hov");
            }
            markedCorrect++;
            console.log(markedCorrect);
            console.log(marked[0]+marked[1]+marked[2]+marked[3]);
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
                document.getElementById("cancel").innerHTML = "Close";
                $('#Modal1').modal('toggle')
            }
            if(marked[n-1] == 10 && quizCompleted != 3){
                quizCompleted++;
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
    for(let j = 0; j < options; j++){
        document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].onclick = null;
        document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].classList.remove("hov");
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
        document.getElementById("cancel").innerHTML = "Close";
        $('#Modal1').modal('toggle')
    }
    if(marked[n-1] == 10 && quizCompleted != 3){
        quizCompleted++;
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
    for(var i = 1; i<5; i++){
        if(i == nm)
        {
            document.getElementById("quiz"+nm).style.display = "block";
        }
        else{
            document.getElementById("quiz"+i).style.display = "none";
        }
    }
}
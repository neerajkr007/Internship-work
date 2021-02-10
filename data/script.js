var correct_Answers = [["q1o1", "q2o4", "q3o2", "q4o2", "q5o3", "q6o4","q7o4","q8o4", "q9o1", "q0o2"]
                      ,["q1o3", "q2o1", "q3o3", "q4o3", "q5o1", "q6o2","q7o1","q8o4", "q9o2", "q0o2"]
                      ,["q1o4", "q2o3", "q3o3", "q4o1", "q5o4", "q6o3","q7o2","q8o2", "q9o1", "q0o1"]
                      ,["q1o1", "q2o1", "q3o4", "q4o4", "q5o3", "q6o1","q7o4","q8o1", "q9o1", "q0o3"]];


var markedCorrect = 0;
var marked = 0;
var red = [];
var green = [];
var quizNumber = 0;

function optionchosen(option, n){
    document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[option[3]-1].onclick = null;
    marked++;
    let options = document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].childElementCount
    for(var i in correct_Answers[n-1]){
        if(option == correct_Answers[n-1][i]){
            document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#bcf5bc";
            //console.log(document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].childElementCount)
            for(let j = 0; j < options; j++){
                document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].onclick = null;
                document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].classList.remove("hov");
            }
            //green.push("q"+n+"q"+option[1]);
            markedCorrect++;
            if(marked%10 == 0 && quizNumber != 3){
                quizNumber++;
                document.getElementById("modalBody").innerHTML = "<h4>Congratulations, Quiz "+quizNumber+" completed. continue to next quiz</h4>";
                document.getElementById("cancel").innerHTML = "Next";
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                $('#Modal1').modal('toggle')

            }
            if(marked == 40){
                if(markedCorrect <= 15){
                    document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> below average</strong></h4>";
                }
                else if(16 <= markedCorrect <= 25)
                {
                    document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> average</strong></h4>";
                }
                else{
                    document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> above average</strong></h4>";
                }
                document.getElementById("cancel").innerHTML = "Close";
                $('#Modal1').modal('toggle')
            }
            return 1;
        }
    }
    for(let j = 0; j < options; j++){
        document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].onclick = null;
        document.getElementById("q"+n+"q"+option[1]).childNodes[1].childNodes[1].children[j].classList.remove("hov");
    }
    document.getElementById("q"+n+"q"+option[1]).style.backgroundColor = "#ee9090";
    if(marked%10 == 0 && quizNumber != 3){
        quizNumber++;
        document.getElementById("modalBody").innerHTML = "<h4>Congratulations, Quiz "+quizNumber+" completed. continue to next quiz</h4>";
        document.getElementById("cancel").innerHTML = "Next";
        document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
        $('#Modal1').modal('toggle')

    }
    if(marked == 40){
        if(markedCorrect <= 15){
            document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> below average</strong></h4>";
        }
        else if(16 <= markedCorrect <= 25)
        {
            document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> average</strong></h4>";
        }
        else{
            document.getElementById("modalBody").innerHTML = "<h5>Congratulations, Quiz completed !!!</h5>"+ "<h4>Your performance was<strong> above average</strong></h4>";
        }
        document.getElementById("cancel").innerHTML = "Close";
        $('#Modal1').modal('toggle')
    }
}

function startQuiz(n){
    // for(var i in red){
    //     document.getElementById(red[i]).style.backgroundColor = "#FFFFFF";
    // }
    // for(var i in green){
    //     document.getElementById(green[i]).style.backgroundColor = "#FFFFFF";
    // }
    //document.getElementById("quizButton"+n).disabled = true;
    if(n == 1){
        document.getElementById("quiz1").style.display = "block";
        document.getElementById("quiz2").style.display = "none";
        document.getElementById("quiz3").style.display = "none";
        document.getElementById("quiz4").style.display = "none";}
    else if(n == 2){
        document.getElementById("quiz1").style.display = "none";
        document.getElementById("quiz2").style.display = "block";
        document.getElementById("quiz3").style.display = "none";
        document.getElementById("quiz4").style.display = "none";}
    else if(n == 3){
        document.getElementById("quiz1").style.display = "none";
        document.getElementById("quiz2").style.display = "none";
        document.getElementById("quiz3").style.display = "block";
        document.getElementById("quiz4").style.display = "none";}
    else{
        document.getElementById("quiz1").style.display = "none";
        document.getElementById("quiz2").style.display = "none";
        document.getElementById("quiz3").style.display = "none";
        document.getElementById("quiz4").style.display = "block";}
}
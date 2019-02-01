
        var aws = []
        var time = 30;
        $("#time").text(time)
        var isOn = false

        setInterval(() => {
            if (isOn) {
                time--
                if (time == 0) {
                    isOn = false
                    //lost
                    $("#score").text(":(")
                    $("#end").show()
                    $("#questions").hide()
                }
                $("#time").text(time)
            }

        }, 1000);
        $.ajax({
            url: "https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=boolean",
            method: "GET"
        }).then(function (response) {
            console.log(response.results);


            response.results.forEach((element, index) => {
                aws.push(element.correct_answer)
                var objZero = (element["question"]);
                var q = `<div>
                    ${objZero}
                    <div>
                    <input type="radio" name="question${index}" value="True">True 
                    <input type="radio" name="question${index}" value="False">False
                    </div>
                    </div>`



                document.getElementById("demo").innerHTML += q;
            });




        });

        //debugger;
        $("#startBtn").on("click", () => {
            $("#start").hide()
            $("#questions").show()
            isOn = true
        })



        $("#submitBtn").on("click", () => {
            var userScore = 0
            aws.forEach((trueAnswer, index) => {
                var pickedAnswer = $(`input:radio[name=question${index}]:checked`).val()
                console.log(trueAnswer);
                console.log($(`input:radio[name=question${index}]:checked`).val() + "\n");

                if (trueAnswer == pickedAnswer) {
                    userScore++

                }

            })
            console.log(userScore);
            $("#score").text(userScore)
            $("#end").show()
            $("#questions").hide()


        })
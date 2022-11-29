let row1 = document.querySelectorAll("#container #row1");
let row2 = document.querySelectorAll("#container #row2");
let row3 = document.querySelectorAll("#container #row3");
let row4 = document.querySelectorAll("#container #row4");
let row5 = document.querySelectorAll("#container #row5");
let questionRow = document.querySelector("#questionRow");
let scoreKeeper = document.querySelector("#scoreKeeper");
let input = document.querySelector("#userInput");
let submitButton = document.querySelector("#submitButton");
let score = 0;

//Function to read/parse Jeopardy data
let readJeopardyData = async () => {
    let rawJeopardyData = await fetch ("jeopardy.json");
    let data = await rawJeopardyData.json();
    //following will group data by value
    let groupedData = _.groupBy(data, "value");
    console.log(groupedData);//to show all grouped data
    console.log(groupedData.$200);//to show $200 questions

    //EVENT LISTENERS/LOOPS
    for (let i = 0; i < 5; i++){
        row1[i].addEventListener("click", (event) => {
            event.preventDefault();
            let array = [];
            array.push(groupedData.$100[Math.round(Math.random() * 500)]);
            let answer = array[0].answer;
            questionRow.innerHTML = array[0].question;
            console.log(array[0].question);
            console.log(answer);

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(input.value.toLowerCase() === answer.toLowerCase()){
                    score += parseInt(array[0].value.substr(1));
                    scoreKeeper.innerHTML = `Your Score: $${score}`;
                    questionRow.innerHTML = "Correct!";
                }else{
                    questionRow.innerHTML = `Incorrect! The correct answer is ${answer}`;
                }
            })
        })
    }

    for (let i = 0; i < 5; i++){
        row2[i].addEventListener("click", (event) => {
            event.preventDefault();
            let array = [];
            array.push(groupedData.$200[Math.round(Math.random() * 500)]);
            let answer = array[0].answer;
            questionRow.innerHTML = array[0].question;
            console.log(array[0].question);
            console.log(answer);

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(input.value.toLowerCase() === answer.toLowerCase()){
                    score += parseInt(arr[0].value.substr(1));
                    scoreKeeper.innerHTML = `Your Score: $${score}`;
                    questionRow.innerHTML = "Correct!";
                }else{
                    questionRow.innerHTML = `Incorrect! The correct answer is ${answer}`;
                }
            })
        })
    }
    
    for (let i = 0; i < 5; i++){
        row3[i].addEventListener("click", (event) => {
            event.preventDefault();
            let array = [];
            array.push(groupedData.$400[Math.round(Math.random() * 500)]);
            let answer = array[0].answer;
            questionRow.innerHTML = array[0].question;
            console.log(array[0].question);
            console.log(answer);

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(input.value.toLowerCase() === answer.toLowerCase()){
                    score += parseInt(array[0].value.substr(1));
                    scoreKeeper.innerHTML = `Your Score: $${score}`;
                    questionRow.innerHTML = "Correct!";
                }else{
                    questionRow.innerHTML = `Incorrect! The correct answer is ${answer}`;
                }
            })
        })
    }

    for (let i = 0; i < 5; i++){
        row4[i].addEventListener("click", (event) => {
            event.preventDefault();
            let array = [];
            array.push(groupedData.$600[Math.round(Math.random() * 500)]);
            let answer = array[0].answer;
            questionRow.innerHTML = array[0].question;

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(input.value.toLowerCase() === answer.toLowerCase()){
                    score += parseInt(array[0].value.substr(1));
                    scoreKeeper.innerHTML = `Your Score: $${score}`;
                    questionRow.innerHTML = "Correct!";
                }else{
                    questionRow.innerHTML = `Incorrect! The correct answer is ${answer}`;
                }
            })
        })
    }

    for (let i = 0; i < 5; i++){
        row5[i].addEventListener("click", (event) => {
            event.preventDefault();
            let array = [];
            array.push(groupedData.$800[Math.round(Math.random() * 500)]);
            let answer = array[0].answer;
            questionRow.innerHTML = array[0].question;

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(input.value.toLowerCase() === answer.toLowerCase()){
                    score += parseInt(array[0].value.substr(1));
                    scoreKeeper.innerHTML = `Your Score: $${score}`;
                    questionRow.innerHTML = "Correct!";
                }else{
                    questionRow.innerHTML = `Incorrect! The correct answer is ${answer}`;
                }
            })
        })
    }
}
readJeopardyData();

//add mouseover/mouseout/highlight function
container.addEventListener("mouseover", (event) => {
    event.target.style.background = "gray";
})

container.addEventListener("mouseout", (event) => {
    event.target.style.background = "rgb(5, 5, 136)";
})

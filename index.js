const object = {
    0: {
        question: "JavaScript Supports?",
        option0: "Functions",
        option1: "XHTML",
        option2: "CSS",
        option3: "HTML",
        answer: "Functions"
    },
    1: {
        question: "Which is not a JS Framework?",
        option0: "JQuery",
        option1: "NodeJs",
        option2: "React",
        option3: "Django",
        answer: "Django"
    },
    2: {
        question: "Which language is used to Style web page?",
        option0: "jQuery",
        option1: "HTML",
        option2: "CSS",
        option3: "XML",
        answer: "CSS"
    },
    3: {
        question: "What is the result of typeof null?",
        option0: "null",
        option1: "object",
        option2: "undefined",
        option3: "number",
        answer: "object"
    },
    4: {
        question: "Which operator is used for equality comparison in JavaScript?",
        option0: "==",
        option1: "=",
        option2: "===",
        option3: "!==",
        answer: "==="
    },
    5: {
        question: "Which keyword is used to define a function in JavaScript?",
        option0: "func",
        option1: "function",
        option2: "def",
        option3: "fn",
        answer: "function"
    },
    6: {
        question: "How do you check the type of a variable in JavaScript?",
        option0: "typeof",
        option1: "type",
        option2: "varType",
        option3: "valueType",
        answer: "typeof"
    },
    7: {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        option0: "push()",
        option1: "add()",
        option2: "append()",
        option3: "insert()",
        answer: "push()"
    },
    8: {
        question: "What does the 'NaN' keyword represent in JavaScript?",
        option0: "Not a Node",
        option1: "Not a Null",
        option2: "Not a Number",
        option3: "Not a Name",
        answer: "Not a Name"
    },
    9: {
        question: "What does the 'this' keyword refer to in JavaScript?",
        option0: "Current function",
        option1: "Global scope",
        option2: "Current object",
        option3: "Current loop",
        answer: "Current object"
    }

}

const objectLength = Object.keys(object).length;

let currentIndex = 0;
var score = 0;

function showData(currentIndex) {
    console.log('CurrentIndex of '+ currentIndex);

    let quest = document.querySelector('.question');
    quest.innerText = object[currentIndex].question;

    let opt0 = document.querySelector('#option0');
    opt0.innerText = object[currentIndex].option0;

    let opt1 = document.querySelector('#option1');
    opt1.innerText = object[currentIndex].option1;

    let opt2 = document.querySelector('#option2');
    opt2.innerText = object[currentIndex].option2;

    let opt3 = document.querySelector('#option3');
    opt3.innerText = object[currentIndex].option3;

    updateFooter(currentIndex);
} 

showData(currentIndex);

function scorechecker(currentIndex,opt){
    if(object[currentIndex].answer === opt){
        score++;
    }

    currentIndex++;
    result(currentIndex,score);

    return currentIndex;
}


function result(currentIndex,score){
    quest.innerText = `You score is ${score * 10 }% from ${objectLength * 10 }%`;

    if(currentIndex>=Object.keys(object).length){
        console.log("QUIZ COMPLETE "+currentIndex + "  " + objectLength)
        const hideButton = document.getElementsByClassName('button');
        for(let i=0; i < hideButton.length; i++)
        hideButton[i].style.display = 'none'; 
    }
}


const optclick0 = document.getElementById('option0');
optclick0.addEventListener('click',function(){
    currentIndex = scorechecker(currentIndex,object[currentIndex].option0);
    showData(currentIndex);
});
const optclick1 = document.getElementById('option1');
optclick1.addEventListener('click',function(){
    currentIndex = scorechecker(currentIndex,object[currentIndex].option1);
    showData(currentIndex);
});
const optclick2 = document.getElementById('option2');
optclick2.addEventListener('click',function(){
    currentIndex = scorechecker(currentIndex,object[currentIndex].option2);
    showData(currentIndex);
});
const optclick3 = document.getElementById('option3');
optclick3.addEventListener('click',function(){
    currentIndex = scorechecker(currentIndex,object[currentIndex].option3);
    showData(currentIndex);
});

function updateFooter(currentIndex){
    let footer = document.querySelector('.current-progress');
    footer.innerText = `Question ${currentIndex+1} of ${objectLength}`;
}

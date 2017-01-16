let btn = document.getElementById("btn");
let div = document.getElementById("div");

btn.addEventListener('click', function () {

    // we create first request to the master url
    let firstRequest = new XMLHttpRequest();
    firstRequest.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/filelist.json', true);
    firstRequest.send(null);
    firstRequest.onload = function () {
        let firstData = JSON.parse(firstRequest.responseText);
        //------------------------------------------ 

        // randomly select any Json file.
        let randomJson = firstData[Math.floor(Math.random() * firstData.length)];
        let randomUrl = "https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/" + randomJson;
        //------------------------------------------

        // we create second request so we can access random json files
        let secondRequest = new XMLHttpRequest();
        secondRequest.open('GET', randomUrl, true);
        secondRequest.send(null);
        secondRequest.onload = function () {
            let secondData = JSON.parse(secondRequest.responseText);
        //------------------------------------------  
            
            // Here we have all functions that are doing calculations and writing in our Html
            function calculateLog() {
                if (secondData.operation == "log") {
                    let result = 0;
                    for (let i = 0; i < secondData.data.length; i++) {
                        result += Math.log(secondData.data[i]);
                    }
                    div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " " + result);
                }
            }
            calculateLog();

            function calculateSine() {
                if (secondData.operation == "sine") {
                    let result = 0;
                    for (let i = 0; i < secondData.data.length; i++) {
                        result += Math.sin(secondData.data[i]);
                    }
                    div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " " + result);
                }
            }
            calculateSine();

            function calculateCosine() {
                if (secondData.operation == "cosine") {
                    let result = 0;
                    for (let i = 0; i < secondData.data.length; i++) {
                        result += Math.cos(secondData.data[i]);
                    }
                    div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " " + result);
                }
            }
            calculateCosine();

            function calculateSquare() {
                if (secondData.operation == "square") {
                    let result = 0;
                    for (let i = 0; i < secondData.data.length; i++) {
                        result += Math.sqrt(secondData.data[i]);
                    }
                    div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " " + result);
                }
            }
            calculateSquare();

            function calculateCube() {
                if (secondData.operation == "cube") {
                    let result = 0;
                    for (let i = 0; i < secondData.data.length; i++) {
                        result += Math.pow(secondData.data[i]);
                    }
                    div.innerHTML = ("The operation" + " " + "&quot;" + secondData.operation + "&quot;" + " " + "applied to the array" + " " + secondData.data + " " + "gives a result of" + " " + result);
                }
            }
            calculateCube();
            //------------------------------------------   
        }
    }
});

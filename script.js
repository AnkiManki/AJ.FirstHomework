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

        }
        //------------------------------------------








    }
























});

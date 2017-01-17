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

            let makeCalculations = function (array, operations) {
                let result = [];
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    result.push(operations(item));
                }
                return result;
            }

            let squared = makeCalculations(secondData.data, function (number) {
                if (secondData.operation === 'square') {return number * number}});

            let loged = makeCalculations(secondData.data, function (number) {
                if (secondData.operation === 'log') {return Math.log(number)}});

            let sined = makeCalculations(secondData.data, function (number) {
                if (secondData.operation === 'sine') {return Math.sin(number)}});

            let cosined = makeCalculations(secondData.data, function (number) {
                if (secondData.operation === 'cosine') {return Math.cos(number)}});

            let cubed = makeCalculations(secondData.data, function (number) {
                if (secondData.operation === 'cube') {return Math.pow(number)}});

            
            console.log(squared.reduce((all, item) => all + item));
            console.log(loged.reduce((all, item) => all + item));
            console.log(sined.reduce((all, item) => all + item));
            console.log(cosined.reduce((all, item) => all + item));
            console.log(cubed.reduce((all, item) => all + item));
        
        };
    }
});

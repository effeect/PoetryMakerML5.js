//ES6 Import for NDJSON API 

// Special thanks to https://learn.ml5js.org/docs/#/reference/charrnn

let rnn = ml5.charRNN("models/input/", modelLoaded);

let resultSample = "stuff";

// module.exports = resultFunc()

function modelLoaded() {
  rnn.generate(
    {seed : "The meaning of pizza is"},
    (err, results) => {
      //With this bit of code, I'm exporting the result of the poetry creation
      resultSample = results.sample
      console.log(resultSample);
    })
  console.log('Model Loaded!');
}

//fetchNdjson("poetry.ndjson").then(response => response.json()).then(json =>console.log(json));


function setup() {

  createCanvas(1920,1080);
}



function draw() {
  background(0);
  // Text(test.varTest,10,10);
}

function mousePressed(){


}
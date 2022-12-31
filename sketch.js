// Special thanks to https://learn.ml5js.org/docs/#/reference/charrnn

let rnn = ml5.charRNN("./models/input/", modelLoaded);

//Grabs the pastbin
let result = "world"

let word = result;
let wordTable = [];
let generation = false;
// module.exports = resultFunc()

function modelLoaded() {
  rnn.generate(
    {seed : result},
    (err, results) => {
      //With this bit of code, I'm exporting the result of the poetry creation
      resultSample = results.sample
    })
  console.log('Model Loaded!');
}

function setup() {
  createCanvas(1920,1080);
}

function generateWord(word)
{
  
}

function draw() {
  if(generation == true ){
  rnn.generate(
    {seed : word},
    (err, results) => {
      console.log(results.sample)
      text(results.sample,500,500);
      console.log(results)
      generation = false
    }
  )
  }
background(0);
}

function mousePressed(){
  generation = true;
}
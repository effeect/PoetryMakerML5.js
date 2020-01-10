// Special thanks to https://learn.ml5js.org/docs/#/reference/charrnn

let rnn = ml5.charRNN("models/input/", modelLoaded);

//Grabs the pastbin
let word = result;
let wordTable = [];

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

//fetchNdjson("poetry.ndjson").then(response => response.json()).then(json =>console.log(json));


function setup() {
  createCanvas(1920,1080);
}

function generateWord(word)
{
  
}

function draw() {
  //Generation algorithm
  if(word != wordTable)
  {
    wordTable.push(word)
    generation = true
  }
  if(generation == true)
    {
      rnn.generate(
        {seed : word},
        (err, results) => {
          text(results.sample,500,500);
          console.log(results)
          generation = false
        }
      )
    }
  background(0);
  // Text(test.varTest,10,10);
  console.log(result)

}

function mousePressed(){


}
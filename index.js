var w = 1300
var h = 400
var lineInterval = 30

function setup(){
  createCanvas(w, h)
  noLoop()
  frameRate(0.3);
}

function draw(){
  fill("lightgray")
  rect(0,0,w,h)
  drawScore()
  drawNote(Math.floor(Math.random() * 7), Math.floor(Math.random()*2))
}

//五線譜
function drawScore(){
  i = 0
  while(i < 5){
    line(300, i * lineInterval + 100, 600, i * lineInterval + 100)
    i += 1
  }
}

//音符
function drawNote(score_num, sharp_num){
  var scores = ["ド", "レ", "ミ", "ファ", "ソ", "ラ", "シ"]
  var sharp = ["", "#"]
  fill(0,0,0);
  textSize(32);
  text(sharp[sharp_num] + scores[score_num], 200, 100);
  var noteHeight = 5*lineInterval + 100 - score_num * lineInterval * 0.5
  text(sharp[sharp_num], 450 - lineInterval, noteHeight+5);
  if(score_num == 0){
    line(450 - lineInterval/2 - 10, noteHeight, 450 + lineInterval/2 + 10,noteHeight)
  }
  ellipse(450, noteHeight, lineInterval);
  $("#history").append(sharp[sharp_num] + scores[score_num]+",")
}

$("#start").on("click", function(){
  loop()
})


$("#stop").on("click",function(){
  noLoop()
})

$("#speed").on("change", function(){
  rate = parseFloat($("#speed").val())
  frameRate(rate)
})

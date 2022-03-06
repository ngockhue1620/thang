var data = "Chúc em vui vẽ"
var dataLength = data.length
var index = 0
var x = document.getElementById("autoplay");


function writeWord(value) {
  document.getElementById('editText').innerHTML = data.substring(0, value)
}



function runWrite() {
  // const a = data.substring(0, index)
  writeWord(index)
  index += 1
  if (index === dataLength + 1) {
    clearInterval(isRun)
  }
}

const isRun = setInterval(() => {
  runWrite()
}, 300);
// document.getElementById("autoplay").autoplay

function playAudio() {
  x.play()
}

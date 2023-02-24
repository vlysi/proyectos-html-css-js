const body = document.body
const switchBtn = document.querySelector(".switch")
const switchPara = document.querySelector(".color")

switchBtn.addEventListener('click', function(){
  let color1 = getRandomNum()
  let color2 = getRandomNum()
  let color3 = getRandomNum()

  const colorString = `rgb(${color1}, ${color2}, ${color3})`

  body.style.backgroundColor = colorString
  switchPara.innerText = colorString
})

function getRandomNum(){
  return Math.floor(Math.random() * 256)
}
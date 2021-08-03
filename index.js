const carousel = document.querySelector(".carousel")
const prevBtn = carousel.querySelector(".previous-button")
const nextBtn = carousel.querySelector(".next-button")
const contents = carousel.querySelector(".carousel__image-ul")
const slide = Array.from(contents.querySelectorAll(".carousel-img"))
const dot = carousel.querySelector(".carousel__dots")
const carouselDot = Array.from(dot.querySelectorAll(".carousel-dot"))

const slideWidth = slide[0].getBoundingClientRect().width
slide.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px"
})


nextBtn.addEventListener("click", event => {
   const currentSlide = carousel.querySelector(".is-selected")
   const nextSlide = currentSlide.nextElementSibling
   const destination = getComputedStyle(nextSlide).left
   contents.style.transform = "translateX(-" + destination + ")"

   currentSlide.classList.remove("is-selected")
   nextSlide.classList.add("is-selected")
   prevBtn.removeAttribute("hidden")
   if(nextSlide.nextElementSibling === null) {
     nextBtn.setAttribute("hidden", true)
   }
  
   //updating dot selected state 
   const currentDot = dot.querySelector(".is-selected")
   const nextDot = currentDot.nextElementSibling
   currentDot.classList.remove("is-selected")
   nextDot.classList.add("is-selected")
 
})

prevBtn.addEventListener("click", event => {
  const currentSlide = carousel.querySelector(".is-selected")
  const previousSlide = currentSlide.previousElementSibling
  const destination = getComputedStyle(previousSlide).left
  contents.style.transform = "translateX(-" + destination + ")"

  currentSlide.classList.remove("is-selected")
  previousSlide.classList.add("is-selected")
  
  nextBtn.removeAttribute("hidden")
  if(previousSlide.previousElementSibling === null) {
    prevBtn.setAttribute("hidden", true)
  }
  
  //updating dot selected state
  const currentDot = dot.querySelector(".is-selected")
  const prevDot = currentDot.previousElementSibling
  currentDot.classList.remove("is-selected")
  prevDot.classList.add("is-selected")
})


carouselDot.forEach(dot => {
  dot.addEventListener("click", event => {
    let indexDot = 0

    for(let i=0; i<carouselDot.length; i++) {
      if(carouselDot[i] === dot) {
           indexDot = i
      }
    }

   const currentSlide = slide[indexDot]
   const destination = getComputedStyle(currentSlide).left
   contents.style.transform = "translateX(-" + destination + ")"

   slide.forEach(d => {d.classList.remove("is-selected")})
   currentSlide.classList.add("is-selected")

   carouselDot.forEach(d => {d.classList.remove("is-selected") })
   dot.classList.add("is-selected")
   
   if(indexDot === 0){
       prevBtn.setAttribute("hidden", true)
       nextBtn.removeAttribute("hidden")
   } else if(indexDot === carouselDot.length -1) {
     nextBtn.setAttribute("hidden", true)
     prevBtn.removeAttribute("hidden")
   } else {
     prevBtn.removeAttribute("hidden")
     nextBtn.removeAttribute("hidden")
   }

  })
})

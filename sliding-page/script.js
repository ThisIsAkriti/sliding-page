const slides = document.querySelectorAll(".slide");
const headlines = document.querySelectorAll(".heading");

var counter = 0;
slides.forEach(
    (slides , index) => {
        slides.style.top = `${index * 100}%`
    }
)
headlines.forEach(
    (headlines,index) => {
        headlines.style.top =`${index * 100}%`
    }
)

const backward = () => {
    if(counter == 0){
        counter = slides.length - 1;
        counter = headlines.length-1;
        slideshow();
    }
    else{
        counter--;
        slideshow();
    }
} 

const forward = () => {
    if(counter == slides.length - 1 & counter == headlines.length-1){
        counter = 0;
        slideshow();
    }else{
        counter++;
        slideshow();
    }
} 

const slideshow = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(-${counter * 100}%)`
        }
    )
    headlines.forEach(
        (heading) =>{
            heading.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}
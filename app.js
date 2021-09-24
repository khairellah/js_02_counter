// set initial count
let count = 0;

// get elements from html
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn){
btn.addEventListener("click", function(event){
//verify classes : console.log(event.currentTarget.classList)
// get classe liste of the btn ==> write '.classList' and '.contains' manually because it's not found on suggestions ! 
const styles = event.currentTarget.classList;
if(styles.contains('decrease')) {count--;}
else if(styles.contains('increase')){count++;}
else {count=0;}

// change the color according to the values
if(count > 0 ){value.style.color="green";}
if(count < 0){value.style.color="red";}
if(count === 0){value.style.color="#222";}
value.textContent = count;      
});
});
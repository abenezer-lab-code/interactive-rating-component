
const form = document.querySelector(".form");
const main = document.querySelector(".main");
const radioBtns = document.querySelectorAll('input[type="radio"]');

radioBtns.forEach(radio=>{
    
  radio.addEventListener("click", () => {

    radioBtns.forEach(btn => {
      btn.parentElement.classList.remove("active");
    });

    radio.parentElement.classList.add("active");

  });

});

const submitForm = (e)=>{
e.preventDefault()
const value = document.querySelector("input[type='radio']:checked")?.value;
if(value){
main.innerHTML=`
<div class="tnks-container" aria-live="polite">
<img class="tnk-image" src="images/illustration-thank-you.svg" alt="Rating submitted successfully">
<p class="selected-text">you selected ${value} out of 5</p>
<h2 >Thank you!</h2>
<p class="tnks-detail-text">We appreciate you taking the time to give a rating.
  If you ever need more support, don't hesitate to get in touch. </p>
</div>

`

   
}
else{
    alert("Please select a rating")
}

}

form.addEventListener("submit",submitForm)

const welcomeButton=document.getElementByld("welcomeButton");
Const welcomeMessage=document.getElementByLd("welcomeMessage");
if (WelcomeButton && welcomeMessage){
  welcomeButton.addEventListener("click', function() {
                       welcomeMessage.textContent= "Welcome! Thank You for visiting my website.";
});
}
    const contactForm = document.getElementByld("contactForm");
      const formFeedback= document.getElementByld("formFeedback");

if(contactForm && formFeedback){
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name= document.getElementByld("name".value.trim();

    formFeedback.textContent="Thank you," +name+ "Your message has be received.";
    contactForm.reset()
                                 
  
  

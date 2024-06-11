document.getElementById("contactForm").addEventListener("submit", function(event) 
{
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var confirmation = "Thank you, " + name + "We have received your message.";
    alert(confirmation);  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
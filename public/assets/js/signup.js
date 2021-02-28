$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("#login-btn");
  console.log("help");
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function (event) {
    console.log("work now!!");
    event.preventDefault();
    var emailInput = $("#email");
    var passwordInput = $("#password");
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password,
    })
      .then(function (data) {
        if (data.status === 200) {
          window.location.replace("page2_restaurant");
        } else {
          //append an element that just displays an error message
        }
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

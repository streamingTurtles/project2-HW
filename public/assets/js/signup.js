$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("#login-btn");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function (event) {
    console.log("work now!!");
    event.preventDefault();

    var nameInput = $("#name");
    var emailInput = $("#email");
    var usernameInput = $("#username");
    var passwordInput = $("#password");

    var userData = {
      name: nameInput.val().trim(),
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (
      !userData.name ||
      !userData.username ||
      !userData.email ||
      !userData.password
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.name,
      userData.email,
      userData.password,
      userData.username
    );
    nameInput.val("");
    usernameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, name, username) {
    $.post("/api/signup", {
      email: email,
      name: name,
      username: username,
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

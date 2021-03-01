document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

const addButtons = document.querySelectorAll(".add-buttons");
addButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //put the server code here
    var newItem = document.createElement("li")
    newItem.classList.add("list-group-item")
    newItem.innerText = e.target.dataset.name
    document.querySelector(".ordercontainer").append(newItem)
  })
})

const submitNote = document.querySelector(".textarea");








const deleteBurgerBtns = document.querySelectorAll(".delete-burger");
deleteBurgerBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      // Send the delete request
      fetch(`/api/burger/${id}`, {
        method: "DELETE",
      }).then((res) => {
        // Reload the page
        location.reload();
      });
    });
  });
});
  
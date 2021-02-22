// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeEatenBtns = document.querySelectorAll('.change-eaten');
  
    // Set up the event listener for the create button
    if (changeEatenBtns) {
      changeEatenBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newEating = e.target.getAttribute('data-newEating');
  
          const newEatingState = {
            devoured: newEating,
          };
  

          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newEatingState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed eating state to: ${newEating}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          // finally found bug here - fixed and working - syntax issue with burger_name
          burger_name: document.getElementById('ca').value.trim(),
          devoured: document.getElementById('devoured').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('ca').value = '';
  
          // Reload the page so the user can see the new burger to eat
          console.log('Made a new Burger to eat!');
          location.reload();
        });
      });
    }
  
    // DELETE
    const deleteCatBtns = document.querySelectorAll('.delete-burger');
  
    // Set up the event listeners for each delete button
    deleteCatBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
  
        // Send the delete request
        fetch(`/api/burgers/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Deleted burger: ${id}`);
  
          // Reload the page
          location.reload();
        });
      });
    });
  });
  
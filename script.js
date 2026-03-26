const items = document.getElementsByTagName("li");

/*
    1. Listen for clicks (event) on our items
    2. When an item is clicked, we remove it
*/

for (i=0; i<items.length; i++) {
    items[i].addEventListener("click", (event) => {
        event.target.remove();
    });
}

const form = document.getElementsByTagName("form")[0];

/*
    1. Add an event listener to the form
    2. Prevent the normal form stuff from running
    3. Get input
    4. Make a new list item
    5. Add the new item to the li
    6. add to list
    7. Add remove event listener
*/

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItemInput = document.getElementById("new-item");
    const newItemText = newItemInput.value;
    newItemInput.value = "";

    const items = document.getElementsByTagName("li");
    for (i=0; i<items.length; i++) {
        if (items[i].innerText === newItemText) return;
    }
    const li = document.createElement("li");
    const coldItemCheckbox = document.getElementById("cold-item");
    if (coldItemCheckbox.checked) li.classList = ["cold"];
    coldItemCheckbox.checked = false;
    li.innerText = newItemText;
    li.addEventListener("click", (event) => {
        event.target.remove();
    });    
    const list = document.getElementsByTagName("ul")[0];
    list.appendChild(li);
});

const clock = document.getElementById("clock");
clock.innerText = new Date();

setInterval(() => {
    clock.innerText = new Date();
}, 1000); // one second
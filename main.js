// FORM APPLICATION
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''||emailInput.value===''){
        msg.classList.add('error'); // add error css class styling
        msg.innerHTML = 'Please enter both fields';
        setTimeout(()=>msg.remove(),3000); //remove msg after 3 seconds.
    }else{
        //add email as a list item
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        // append li to ul
        userList.appendChild(li);
        // clear fields.
        nameInput.value = '';
        emailInput.value = '';
    }
    console.log(nameInput.value); // value submitted to the form
}
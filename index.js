// Uses DOM to add click event listener to the exit button
document.getElementById('exit').addEventListener('click', function(){
    document.querySelector('.bg-modal-thanks').style.display = 'none'
});
//uses DOM to add click event listener to the donate button to pop up modal
document.getElementById('donate-btn').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none'
    document.querySelector('.bg-modal-thanks').style.display = 'flex';
    
});

//opens modal on click
document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex'
});
//closes modal on click
document.getElementById('close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none'
});









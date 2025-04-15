const sectionContact = document.getElementById('section-contact')

const btnContact = document.getElementById('button-contact')
const btnEmail = document.getElementById('button-email')
const btnLinktree = document.getElementById('button-linktree')

const email = 'tranthanhhthao@gmail.com'

let isContact = false;
btnEmail.style.display = 'none';
btnLinktree.style.display = 'none';

// btnContact.addEventListener('mouseover', () => {
//     if(isContact == false) {
//         isContact = true 

//         btnEmail.style.display = 'flex';
//         btnLinktree.style.display = 'flex'; 
// })

sectionContact.addEventListener('mouseover', () => {
    if(isContact == false) {
        isContact = true 

        btnEmail.style.display = 'flex';
        btnLinktree.style.display = 'flex'; 
    } 
})
sectionContact.addEventListener('mouseout', () => {
    if(isContact == true) {
        isContact = false 

        btnEmail.style.display = 'none';
        btnLinktree.style.display = 'none'; 
    } 
})

// 

sectionContact.addEventListener('touchend', () => {
    if(isContact == false) {
        isContact = true 

        btnEmail.style.display = 'flex';
        btnLinktree.style.display = 'flex'; 
    } 
})

// 

btnEmail.addEventListener('click', () => {
    navigator.clipboard.writeText(email)
    console.log(getComputedStyle(btnEmail, ':before').getPropertyValue('content'));
    btnEmail.querySelector('span.copied').style.opacity = 1;
    
    setTimeout(() => {
        btnEmail.querySelector('span.copied').style.opacity = 0;
    }, 1000)
})
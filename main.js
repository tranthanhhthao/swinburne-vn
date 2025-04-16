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

btnContact.addEventListener('touchend', () => {
    let isLinktree = false;
    let isEmail = false;

    if(isContact == true) {
        isContact = false 

        btnEmail.style.display = 'none';
        btnLinktree.style.display = 'none'; 
    } else {
        isContact = true 

        btnEmail.style.display = 'flex';
        btnLinktree.style.display = 'flex'; 

        btnEmail.addEventListener('click', () => {
            navigator.clipboard.writeText(email)
            // console.log(getComputedStyle(btnEmail, ':before').getPropertyValue('content'));
            btnEmail.querySelector('span.copied').style.opacity = 1;
            
            setTimeout(() => {
                btnEmail.querySelector('span.copied').style.opacity = 0;
            }, 1000)

            if(isEmail == false) {
                isEmail = true

                // event.preventDefault();
                
                btnEmail.querySelector('a').removeAttribute('href');

                return false
            } else {
                btnEmail.querySelector('a').href = 'mailto:tranthanhhthao@gmail.com';

                return true
            }
    })

        btnLinktree.addEventListener('touchend', (event) => {

            if(isLinktree == false) {
                isLinktree = true

                // event.preventDefault();
                
                btnLinktree.querySelector('#a-linktree').removeAttribute('href');

                return false
            } else {
                btnLinktree.querySelector('#a-linktree').href = 'https://linktr.ee/tranthanhhthao';

                return true
            }
        })

    }
})

// 



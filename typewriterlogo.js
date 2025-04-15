const logo = document.getElementById('logo');

const fullname = 'trần thanh thảo';
const lastname = 'tran trân trần';
const middlename = 'thanh';
const firstname = 'thảo';

let index = 0;

function typingName(delay) {
    let typing = '';

    setTimeout(() => {
        index++;

        if(index < 4) {
            typing = lastname.substring(0, index)
            typingName(200)
        } else if(index == 4) {
            typing = lastname.substring(0, index)
            typingName(200)
        } else if(index == 5) {
            typing = lastname.substring(5, 9)
            typingName(300)
        } else if (index == 6) {
            typing = lastname.substring(10, 15)
            typingName(400)
        } else if (index < 12) {
            typing = lastname.substring(10, 15) + '&nbsp' + middlename.substring(0, index-6)
            typingName(100)
        } else if (index == 12) {
            index = 12
            typing = lastname.substring(10, 15) + '&nbsp' + middlename.substring(0, index-6)
            backspacing(4000)
        }
        logo.innerHTML = typing + '&nbsp' + firstname;

    }, delay);

    function backspacing(delay) {
        let remaining = 'trần thanh '
        index--;

       setTimeout(() => {
            if (index == 0) {
                index = 0
                logo.innerHTML = remaining.substring(remaining.length - index) + firstname
                typingName(4000)
            } else {
                logo.innerHTML = remaining.substring(remaining.length - index) + firstname
                backspacing(50)
            }
       }, delay)

    //    console.log('backspacing', index)
    }

    // console.log(index);

}

typingName(0)


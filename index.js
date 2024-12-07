const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const submitButton = document.getElementById('submit-btn');
const userYear = document.getElementById('user-year');
const userMonth = document.getElementById('user-month');
const userDay = document.getElementById('user-day');

const yearErr = document.getElementById('year-err');
const monthErr = document.getElementById('month-err');
const dayErr = document.getElementById('day-err');


function checkFields(e) {
    if (dayInput.value == 0 || monthInput.value == 0 || yearInput.value == 0) {
        e.preventDefault();
        const btnErr = document.getElementById('btn-err');
        btnErr.textContent = 'Please fill out all fields';
        setTimeout(() => {
            btnErr.textContent = '';
        }, 3000);
    }
}
submitButton.addEventListener('click', (e) => {
    checkFields(e)
    const time = new Date();
    const timeYear = time.getFullYear();
    const timeMonth = time.getMonth();
    const timeDay = time.getDay() + 1;

    const age = ((timeYear - yearInput.value));
    const month = (timeMonth - monthInput.value);
    const day = (timeDay + 30) - dayInput.value;

    function ageCalc(input, data) {

        let counter = 0;
        const ageTimer = setInterval(() => {
            counter++;


            input.textContent = counter;


            if (dayInput.value == 0 || yearInput.value == 0 || monthInput.value == 0) {
                input.textContent = '- -';
            }


            if (counter == data) {
                clearInterval(ageTimer);
            } else if (counter > data) {
                clearInterval(ageTimer);
            } else if (counter == 0) {
                clearInterval(ageTimer);
            }


        }, 100);
    }
    ageCalc(userYear, age);
    ageCalc(userMonth, month);
    ageCalc(userDay, day);
})

dayInput.addEventListener('blur', () => {
    if (dayInput.value > 31) {
        dayErr.textContent = 'please enter a valid date between 1-31'
        dayInput.classList.add('err-border')
        setTimeout(() => {
            dayErr.textContent = '';
            dayInput.classList.remove('err-border')
        }, 3000);
    }
})
monthInput.addEventListener('blur', () => {
    if (monthInput.value > 12) {
        monthErr.textContent = 'please input a valid month between 1-12'
        monthInput.classList.add('err-border')
        setTimeout(() => {
            monthErr.textContent = '';
            monthInput.classList.remove('err-border')
        }, 3000);
    }
})
yearInput.addEventListener('blur', () => {
    const year = new Date().getFullYear();
    if (yearInput.value > year) {
        yearErr.textContent = 'please input a valid year'
        yearInput.classList.add('err-border')
        setTimeout(() => {
            yearErr.textContent = '';
            yearInput.classList.remove('err-border')
        }, 3000);
    }
})
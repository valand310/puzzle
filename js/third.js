let presents = document.querySelectorAll('.present')
const body = document.querySelector('.body')
let answer = document.querySelector('.answer')
const modal = document.querySelector('.modal')

for( let i = 0; i < presents.length; i++) {
    presents[i].addEventListener('click', (e) => {
        // console.log(e.target.closest('.present'))

        let presentClick = e.target.closest('.present')


        if(presentClick.classList.contains('present1')) {
            body.classList.add('open-modal')
            answer.innerHTML = '2'
            let deletePresent = presentClick.closest('.present1')
            
            deletePresent.style.display = 'none'
        }
        if(presentClick.classList.contains('present2')) {
            body.classList.add('open-modal')
            answer.innerHTML = '0'
            let deletePresent = presentClick.closest('.present2')
            deletePresent.style.display = 'none'
        }
        if(presentClick.classList.contains('present3')) {
            body.classList.add('open-modal')
            answer.innerHTML = '9'
            let deletePresent = presentClick.closest('.present3')
            deletePresent.style.display = 'none'
        }
        if(presentClick.classList.contains('present4')) {
            body.classList.add('open-modal')
            answer.innerHTML = '1'
            let deletePresent = presentClick.closest('.present4')
            deletePresent.style.display = 'none'
        }
        if(presentClick.classList.contains('present5')) {
            body.classList.add('open-modal')
            answer.innerHTML = '5'
            let deletePresent = presentClick.closest('.present5')
            deletePresent.style.display = 'none'
        }
        if(presentClick.classList.contains('present6')) {
            body.classList.add('open-modal')
            answer.innerHTML = '8'
            let deletePresent = presentClick.closest('.present6')
            deletePresent.style.display = 'none'
        }

    }) 
}

modal.addEventListener('click', (event) => {
    let target = event.target
    if(target.classList.contains('modal__close') || target.closest('.modal__close')) {
        body.classList.remove('open-modal')
    }
})

document.querySelector('.help').addEventListener('click', () => {
    alert('Здесь тебе нужно поймать все подарки. В каждом из них хранится ключ (одна цифра). Тебе нужно собрать все ключи и ввести их в input снизу по ВОЗРАСТАНИЮ')
})


const input = document.querySelector('.input')
const button = document.querySelector('.input__button')
const result = document.querySelector('.input__result')

button.addEventListener('click', () => {
    if(input.value === '012589') {
        result.innerHTML = 'ДА!!!'
        result.style.color = 'rgb(43, 255, 0)'
        alert('Конечный ответ к моей головоломке: Lorem ipsum')
    } else {
        result.innerHTML = 'НЕТ ('
        result.style.color = 'red'
    }
})





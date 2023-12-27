// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
let count1 = 0
let count2 = 0
let count3 = 0
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
document.addEventListener('click', isCount)
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
function isCount(e) {
    let target = e.target
    if(target.closest('.count')) {
        
        let count = target.closest('.count')

        
        if(target.closest('.plus')) {
            if(target.closest('.count1')) {
                if(count1 < 90) {
                    count1++
                    count.querySelector('.number').innerHTML = count1
                }
            }
            if(target.closest('.count2')) {
                if(count2 < 244) {
                    count2++
                    count.querySelector('.number').innerHTML = count2
                }
            }
            if(target.closest('.count3')) {
                if(count3 < 255) {
                    count3++
                    count.querySelector('.number').innerHTML = count3
                }
            }
        }

        if(target.closest('.minus')) {
            if(target.closest('.count1')) {
                if(count1 > 0) {
                    count1--
                    count.querySelector('.number').innerHTML = count1
                }
            }
            if(target.closest('.count2')) {
                if(count2 > 0) {
                    count2--
                    count.querySelector('.number').innerHTML = count2
                }
            }
            if(target.closest('.count3')) {
                if(count3 > 0) {
                    count3--
                    count.querySelector('.number').innerHTML = count3
                }
            }
        }
        
        

    }
}
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!

document.querySelector('.result__button').addEventListener('click', () => {
    let value1 = document.querySelector('.input1').value
    let value2 = document.querySelector('.input2').value
    let value3 = document.querySelector('.input3').value
    if( value1 === '90' && value2 === '244' && value3 === '255' ) {
        document.querySelector('.form__result').innerHTML = `верно`
        document.querySelector('.form__result').style.color = `#2bff00`
        document.querySelector('body').style.background = `rgb(${value1}, ${value2}, ${value3})`
        document.querySelector('.correct').innerHTML = 'Ответ: Lorem ipsum'


    } else {
        document.querySelector('.form__result').innerHTML = `Не верно`
        document.querySelector('.form__result').style.color = `red`
    }
})
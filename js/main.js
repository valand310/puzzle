
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
document.addEventListener('keydown', event => {
    if(event.key === 'a' || event.key === 'A' ) {
        let newEl = document.querySelector('.in')
        newEl.innerHTML = 'me'

// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
        const quesion = document.querySelector('.quesion')
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
        let ques2 = document.createElement(`div`)
        ques2.classList.add('quesion_sec')
        // НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
        ques2.innerHTML = `Молодец, а теперь "Кто последний ?"`
        quesion.after(ques2)
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!

// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
        let help = document.createElement('div')
        help.classList.add('help')
        help.innerHTML = 'подсказка'
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
        quesion.after(help)
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!
        help.addEventListener('click', () => {
            alert('Не по алфавиту )')
        })
// НЕ ЛЕЗЬ СЮДА, ГАД !!!!!!!!!!!!!!!!!

        newEl.addEventListener('click', () => {
            alert('sec.html')
        })

    }
})
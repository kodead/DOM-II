import './less/index.less'

// Your code goes here!
// 1 - Load
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! ready to go`)
    const heading = document.querySelector('h1')
    console.log(heading)
    heading.textContent = 'READY TO GO!!'
    // 2 - Copy

    window.addEventListener('copy', () =>{
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })
}

// 3 - click
document.body.addEventListener('click', evt => { 
    evt.target.classList.toggle('mirror')
})
// 4 - dbl click
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

// 5 - keyDown
window.addEventListener('keydown', evt => {
    if(evt.key == 6) {
        document.body.innerHTML = '<h1>Program Deleted</h1>'
    }
})

// 6 - mousemove
// 7 - mouseleave
document.body.addEventListener('mousemove', evt => {
    
    const { clientX, clientY} = evt
    // console.log(`mouse is at ${clientX}, and ${clientY}`)
})
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
destination.addEventListener('mouseenter', evt => {
destination.style.fontWeight = 'bold'
})
destination.addEventListener('mouseleave', () => {
destination.style.fontWeight = 'initial' 
})
}
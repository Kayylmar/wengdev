var deleteBtn = document.getElementsByClassName('task-delete')
var popUp = document.getElementsByClassName('task pop-up')
var noBtn = document.getElementsByClassName('task no-btn')

console.log(deleteBtn[0]);
console.log(popUp[0]);
console.log(noBtn);

for (let index = 0; index < deleteBtn.length; index++) {
    deleteBtn[index].addEventListener('click', function (e) {
        popUp[index].classList.add('visible')
    })

    noBtn[index].addEventListener('click', function (e) {
        popUp[index].classList.remove('visible')
    })
}


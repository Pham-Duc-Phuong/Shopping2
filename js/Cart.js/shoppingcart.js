function getElement(selector) {
    return document.querySelector(selector)
}
getElement('#btn-showCart').onclick = function () {
    document.querySelector('.buying').classList.add("show-buying")
}
getElement('#btn-closeCart').onclick = function () {
    document.querySelector('.buying').classList.remove("show-buying")
}
getElement('#btn-closeCart').onclick = function () {
    document.querySelector('.buying').classList.remove("show-buying")
}
function render(quality) {
    document.querySelector('#sth-number').value = +quality
    document.querySelector('#sth-number').innerHTML = quality
}
// document.querySelector("#sth-plus").onclick = function(){
//     var quality = +document.querySelector('#sth-number').value;
//     quality++
//     render(quality) 
// }
// document.querySelector("#sth-minus").onclick = function(){
//     var quality = +document.querySelector('#sth-number').value;
//     if (quality>0){
//         quality--
//     } else {
//         quality = 0
//     }
//     render(quality) 
// }
var btnPlus = document.querySelectorAll(".btn-plus")
for (var i = 0; i < btnPlus.length; i++) {
    btnPlus[i].onclick = function () {
        var quality = +document.querySelector('#sth-number').value;
        quality++
        render(quality)
    }
}
var btnMinus = document.querySelectorAll(".btn-minus")
for (var i = 0; i < btnMinus.length; i++) {
    btnMinus[i].onclick = function () {
        var quality = +document.querySelector('#sth-number').value;
        if (quality > 0) {
            quality--
        } else {
            quality = 0
        }
        render(quality)
    }
}


let nameEl = document.getElementById('name');
let weightEl = document.getElementById('weight');
let heightEl = document.getElementById('height');
let msgEl = document.getElementById('title');
let formEl = document.getElementById('form-body');

form-body.addEventListener('submit', (e)=> {
    e.preventDefault()
    let nameBro = nameEl.value;
    let name = nameBro.charAt(0).toUpperCase() + nameBro.slice(1).toLowerCase();
    let heightBro = heightEl.value;
    let height = heightBro / 100;
    let weight = weightEl.value;
    let calc = (weight / height ** 2).toFixed(1);

    if (calc <= 18.5) {
        msgEl.texContent = `${name} you are thin person !`
    } else if (18.5 < calc && calc < 24.9) {
        msgEl.texContent = `${name} you are normal person !`
    } else if (25 < calc && calc < 29.9) {
        msgEl.texContent = `${name} you are fat person  !`
    } else {
        msgEl.texContent = `${name} you are very fat person !`
    }
    nameEl.value = ''
    heightEl.value = ''
    weightEl.value = ''
})

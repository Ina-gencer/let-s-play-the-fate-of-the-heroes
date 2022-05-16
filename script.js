const willBe = document.querySelector('.willBe');
const choice = document.querySelector('.choice');
const image = document.querySelector('#image');
const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');

btnOne.addEventListener('click', jacob);
btnTwo.addEventListener('click', edward);

function jacob() {
    image.setAttribute('src', 'Bella_jacob.jpg');
    willBe.textContent = 'Он предложит ей руку и сердце';
    choice.textContent = 'Белла согласиться выйти замуж за Джейкоба?';
    btnOne.innerHTML = 'Нет';
    btnTwo.innerHTML = 'Да';
    btnOne.addEventListener('click', noMarried);
    btnTwo.addEventListener('click', yesMarried);
}
function noMarried() {
    image.setAttribute('src', 'noMarried.jpg');
    willBe.textContent = 'Они навсегда останутся близкими друзьями';
    choice.textContent = 'Что будет связывать их судьбы?';
    btnOne.innerHTML = 'Любовь';
    btnTwo.innerHTML = 'Дружба';
    btnOne.addEventListener('click', love);
    btnTwo.addEventListener('click', friendship);
}
function yesMarried() {
    image.setAttribute('src', 'jacob-bella-married.jpg');
    willBe.textContent = 'Вскоре они поженяться';
    choice.textContent = 'Будут ли они счастливы в браке?';
    btnOne.innerHTML = 'Нет';
    btnTwo.innerHTML = 'Да';
    btnOne.addEventListener('click', unhappy);
    btnTwo.addEventListener('click', happy);
}

function unhappy() {
    image.setAttribute('src', 'unhappy.jpg');
    willBe.textContent = 'Белла так и не сможет забыть Эдварда, поэтому вскоре пара расстанется';
    choice.textContent = 'Но в браке у них родится сын Джейми';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}

function happy() {
    image.setAttribute('src', 'HAPPYwithJacob.jpg');
    willBe.textContent = 'Белла и Джейкоб будут счастливы в браке';
    choice.textContent = 'У них родится трое детей';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}
function love() {
    image.setAttribute('src', 'love.jpg');
    willBe.textContent = 'Джейкоб так и не сможет забыть Беллу';
    choice.textContent = 'Он всегда будет её защищать от опасностей';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}

function friendship(){
    image.setAttribute('src', 'friendship.jpg');
    willBe.textContent = 'Джейкоб женится на другой';
    choice.textContent = 'Они будут видеться пару раз в год';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}

// EDWARD 
function edward() {
    image.setAttribute('src', '1.jpg');
    willBe.textContent = 'Эдвард предложит ей руку и сердце';
    choice.textContent = 'Белла согласится?';
    btnOne.innerHTML = 'Нет';
    btnTwo.innerHTML = 'Да';
    btnOne.addEventListener('click', noMarriedEdward);
    btnTwo.addEventListener('click', yesMarriedEdward);
}
function noMarriedEdward() {
    image.setAttribute('src', 'noEdward.jpg');
    willBe.textContent = 'Белла выйдет замуж за Джейкоба';
    choice.textContent = 'Что будет делать Эдвард?';
    btnOne.innerHTML = 'Женится на другой';
    btnTwo.innerHTML = 'Будет добиваться руки Беллы';
    btnOne.addEventListener('click',  marriedWithOther);
    btnTwo.addEventListener('click', choiceTwo);
}
// --//
function marriedWithOther() {
    image.setAttribute('src', 'withOther.jpg');
    willBe.textContent = 'Эдвард жениться на Качири из клана амазонок';
    choice.textContent = 'Они уедут жить в Южную Америку';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}
function choiceTwo() {
    image.setAttribute('src', 'choiceTwo.jpg');
    willBe.textContent = 'Эдвард попытается убить Джейкоба';
    choice.textContent = 'Но Белла останется верна мужу и навсегда разорвёт отношения с Эдвардом';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}
function yesMarriedEdward() {
    image.setAttribute('src', 'edward.jpg');
    willBe.textContent = 'Они поженяться';
    choice.textContent = 'Будут ли они счастливы?';
    btnOne.innerHTML = 'Да';
    btnTwo.innerHTML = 'Hет';
    btnOne.addEventListener('click', yesEdward );
    btnTwo.addEventListener('click', noEdward);
}

function yesEdward(){
    image.setAttribute('src', 'renesmi.jpg');
    willBe.textContent = 'Им многое предстоит пройти. Но они будут счастливы';
    choice.textContent = 'У них родится дочь Ренесми';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}

function noEdward() {
    image.setAttribute('src', 'final.jpg');
    willBe.textContent = 'Им предёться вскоре расстаться из-за преследований Вольтури';
    choice.textContent = 'Белла с дочерью уедет навсегда';
    btnOne.style = 'display: none';
    btnTwo.style = 'display: none';
}
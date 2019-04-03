//Menu__gamburger
var menu = document.querySelector('.nav__gumburger');
menu.addEventListener('click', function() {
    var menuList = document.querySelector('.nav__menu');
    menuList.classList.toggle('gumburger');
});

    //Offers__choice
var a = document.querySelectorAll('.offers__list--item');
    for(i=0; i<a.length; i++) {
        a[i].addEventListener('click', itemActiv);
    };

    function itemActiv() {
        for(i=0; i<a.length; i++) {
            a[i].classList.remove('offers__list--item-activ');
        }
        this.classList.add('offers__list--item-activ');
        // var list = document.querySelectorAll('.services__wrap--price');
        // for(z=0; z<list.length; z++){
        //     this.classList.remove('price--activ');
        //     list[z].classList.add('price--activ');
        // }
    };

    //popup
var modalDiv = document.createElement('div');
    modalDiv.className = 'modal hidden';
var modalDivImg = document.createElement('div');
    modalDivImg.classList.add('modal__img');
var x = document.createElement('p');
    x.classList.add('close');
    x.innerHTML = 'X';
var img = document.createElement('img');
    modalDivImg.appendChild(x);
    modalDivImg.appendChild(img);
    modalDiv.appendChild(modalDivImg);

var slider = document.getElementsByClassName('slider');
    document.body.appendChild(modalDiv);

var smallImg = document.querySelectorAll('.slider__img img');
    for(i=0; i<smallImg.length; i++) {
        smallImg[i].addEventListener('click', openImg);
    }

    function openImg() {
        var url = this.getAttribute('src');

        var fullImg = document.querySelector('.modal__img img');
        fullImg.setAttribute('src', url);

        var modal = document.querySelector('.modal');
        modal.classList.remove('hidden');

        var close = document.querySelector('.modal__img p');
        close.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    };


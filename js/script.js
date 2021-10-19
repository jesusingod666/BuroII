const burger = document.querySelector('.burger__menu');
const menuList = document.querySelector('.header__menu__wrapper');
const closeBtn = document.querySelector('.close__button');
const userList  = document.querySelector('.login__icon');
const modal  = document.querySelector('.modal');
const userClose  = document.querySelector('.modal__close');

// BURGER

function openMenu () {
    menuList.classList.add('show');
    menuList.classList.remove('hide');
}

burger.addEventListener('click', openMenu);
 
function closeMenu () {
    menuList.classList.add('hide');
    menuList.classList.remove('show');
}

closeBtn.addEventListener('click', closeMenu);

// MODAL 

function openUserList () {
    modal.classList.add('show');
    modal.classList.remove('hide');
}

userList.addEventListener('click', (e)=> {
    e.preventDefault();
    openUserList();
});

function closeUserList () {
    modal.classList.add('hide');
    modal.classList.remove('show');
}

userClose.addEventListener('click', (e)=> {
    e.preventDefault();
    closeUserList();
});

document.addEventListener('keydown', (e)=>{
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeUserList();
    }
});

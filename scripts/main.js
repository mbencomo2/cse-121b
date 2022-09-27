// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}
document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

//copyright date
const cdate = new Date();
document.querySelector('#year').textContent = cdate.getFullYear();

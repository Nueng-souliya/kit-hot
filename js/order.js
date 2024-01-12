window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active'); 
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active'); 
}
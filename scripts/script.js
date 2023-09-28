
const toggle = document.getElementById('tog');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const line = document.getElementById('line');
const search = document.getElementById('searchDiv');
const mapFrame = document.getElementById('mapFrame');
const statCardId = document.getElementById('statCardId');
const cards = document.getElementsByClassName('centered-content'); 
const itemStat = document.getElementById('itemStaiId');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';

        // nav bar
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        navbar.style.backgroundColor = '#0D1F24';

        // line
        line.style.background = 'black';

        // search div
        search.style.background = 'black';

        // map
        mapFrame.style.filter = 'invert(0%)';

        //Card
        statCardId.style.backgroundColor = '#DCFFF9';

        // 8 cards
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '#DCFFF9';
        }

        // itemStat
        itemStat.style.backgroundColor = '#fbff79';



    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';

        // nav bar
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        navbar.style.backgroundColor = '#CEF4FF';

        // line
        line.style.background = 'white';

        // search div
        search.style.background = '#DBE3FF';

        // map
        mapFrame.style.filter = 'invert(100%)';

        //Card
        statCardId.style.backgroundColor = '#160E2E'

        // 8 cards
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = '#160E2E';
        }

        // itemStat
        itemStat.style.backgroundColor = '#670869';
    }
});


// sign up button

document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("btn-SignUp");
    const popup = document.querySelector(".popup");

    signUpButton.addEventListener("click", function() {
        popup.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("close-btn");
    const popup = document.querySelector(".popup");
    
    closeButton.addEventListener("click", function() {
        popup.classList.remove("active");
    });
});





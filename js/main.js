document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar');

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow);

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    $('.team-carousel').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    });
});

// async function change(value, offerNumber) {
//     await fetch(`https://blockchain.info/tobtc?currency=PLN&value=${value}`).then(function(response) {
//     response.text().then(function(text) {
//       let offer = document.document.querySelector(`.btc-offer-${offerNumber}`);
//       let nr = +text;
//       let rounded = +nr.toFixed(5);
//       offer.textContent = `od ${rounded} BTC/h`;
//     });
//   });
// }

let convert = document.querySelector('.convert');
function convertCurrency() {
    let plnOffer1 = document.querySelector('.pln-offer-1');
    let plnOffer2 = document.querySelector('.pln-offer-2');
    let plnOffer3 = document.querySelector('.pln-offer-3');
    let btcOffer1 = document.querySelector('.btc-offer-1');
    let btcOffer2 = document.querySelector('.btc-offer-2');
    let btcOffer3 = document.querySelector('.btc-offer-3');

    if (plnOffer1.style.display !== 'none') {
        plnOffer1.style.display = 'none';
        plnOffer2.style.display = 'none';
        plnOffer3.style.display = 'none';
        btcOffer1.style.display = 'inline';
        btcOffer2.style.display = 'inline';
        btcOffer3.style.display = 'inline';

        fetch(`https://blockchain.info/tobtc?currency=PLN&value=49`).then(function(response) {
            response.text().then(function(text) {
              let nr = +text;
              let rounded = +nr.toFixed(5);
              btcOffer1.innerHTML = `od <i class="fab fa-btc"></i>${rounded}/h`;
            });
          });

        fetch(`https://blockchain.info/tobtc?currency=PLN&value=46`).then(function(response) {
        response.text().then(function(text) {
            let nr = +text;
            let rounded = +nr.toFixed(5);
            btcOffer2.innerHTML = `od <i class="fab fa-btc"></i>${rounded}/h`;
        });
        });

        fetch(`https://blockchain.info/tobtc?currency=PLN&value=40`).then(function(response) {
        response.text().then(function(text) {
            let nr = +text;
            let rounded = +nr.toFixed(5);
            btcOffer3.innerHTML = `od <i class="fab fa-btc"></i>${rounded}/h`;
        });
        });
    } else {
        plnOffer1.style.display = '';
        plnOffer2.style.display = '';
        plnOffer3.style.display = '';
        btcOffer1.style.display = '';
        btcOffer2.style.display = '';
        btcOffer3.style.display = '';
    }
}
convert.addEventListener('click', convertCurrency);

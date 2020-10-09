'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { //i = 0 - по дефолту ставится 0
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    }); 

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
       }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Timer

    const deadLine = '2020-12-31';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
              return {
                  'total': t,
                  'days': days,
                  'hours': hours,
                  'minutes': minutes,
                  'seconds': seconds
              };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              // setInterval - обновляет каждую секунду переменую updateClock
              timeInterval = setInterval(updateClock, 1000); 
        
        // убирает мигание при обновлении страницы
        updateClock();
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    // Menu_item

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;       
            this.changetoUAH(); 
        }

        changetoUAH() {
            this.price = this.price * this.transfer;
        }
        
        render() {
            const element = document.createElement('div');
            
            element.innerHTML = `
                <div class="menu__item">    
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => {
      const res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
      }
      return await res.json();
    };

    getResource("http://localhost:3000/menu")
      .then(data => {

        // деструктуризация объекта
        data.forEach(({img, altimg, title, descr, price}) => {    
          new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
      });

    // getResource("http://localhost:3000/menu")
    //   .then(data => createCard(data));
    
    // function createCard(data) {
    //   data.forEach(({img, altimg, title, descr, price}) => { 
    //     const element = document.createElement('div');

    //     element.classList.add('menu__item');
    //     element.innerHTML = `
    //       <div class="menu__item">    
    //       <img src=${img} alt=${altimg}>
    //       <h3 class="menu__item-subtitle">${title}"</h3>
    //       <div class="menu__item-descr">${descr}</div>
    //       <div class="menu__item-divider"></div>
    //       <div class="menu__item-price">
    //           <div class="menu__item-cost">Цена:</div>
    //           <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //       </div>
    //     `;

    //     document.querySelector('.menu .container').append(element);
    //   }); 
    // }

    // Forms 

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Мы скоро свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
          display: block;
          margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));   

      postData('http://localhost:3000/requests', json)
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
      </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  // slider

  const slides = document.querySelectorAll('.offer__slide'),
        sliderCounter = document.querySelector('.offer__slider-counter'),
        current = sliderCounter.querySelector('#current'),
        total = sliderCounter.querySelector('#total'),
        nextSlider =sliderCounter.querySelector('.offer__slider-next'),
        prevSlider =sliderCounter.querySelector('.offer__slider-prev');
  
  // my code =>>>

  // let slideIndex = 1;

  // function hideSliderContent() {
  //   slides.forEach(item => {
  //     item.classList.add('hide');
  //     item.classList.remove('show', 'fade');
  //   });
  // }
  
  // function showSliderContent(i = 0) { 
  //   slides[i].classList.add('show', 'fade');
  //   slides[i].classList.remove('hide');
  // }

  // function counterMinus() {
  //   slideIndex--;
  //   if (slideIndex < 1) {
  //     slideIndex = slides.length;
  //   }
  //   return `0${slideIndex}`;
  // }

  // function counterPlus() {
  //   ++slideIndex;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  //   return `0${slideIndex}`;
  // }

  // hideSliderContent();
  // showSliderContent();

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }


  // total.innerHTML = `0${slides.length}`;
  // current.innerHTML = `0${slideIndex}`;

  // nextSlider.addEventListener('click', (e) => {
  //   current.innerHTML = counterPlus();
  //   hideSliderContent();
  //   showSliderContent(slideIndex-1);
  // });

  // prevSlider.addEventListener('click', (e) => {
  //   current.innerHTML = counterMinus();
  //   hideSliderContent();
  //   showSliderContent(slideIndex-1);
  // });
    
  //code task

  let slideIndex = 1;

  showSlides(slideIndex);

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n)  {
    if (n > slides.length)  {
      slideIndex = 1;
    }

    if (n < 1)  {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');  //все слайды скрыли 

    slides[slideIndex - 1].style.display = 'block';   //первый элемент появился

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlides(n)  {
    showSlides(slideIndex += n);
  }

  prevSlider.addEventListener('click', () =>  {
    plusSlides(-1);
  });

  nextSlider.addEventListener('click', () =>  {
    plusSlides(1);
  });
  
});
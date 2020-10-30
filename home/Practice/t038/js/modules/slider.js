function slider() {
    // Slider

    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        sliderCounter = document.querySelector('.offer__slider-counter'),
        current = sliderCounter.querySelector('#current'),
        total = sliderCounter.querySelector('#total'),
        nextSlider = sliderCounter.querySelector('.offer__slider-next'),
        prevSlider = sliderCounter.querySelector('.offer__slider-prev'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0; //отступ

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carusel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');

        dot.setAttribute('data-slide-to', i + 1); // будет устанвливать нумерацию начиная с 1
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function sliderDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function numberSliders() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }
    
    function deleteNotDigits(width) {return +width.replace(/\D/g, '');}

    nextSlider.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        numberSliders();
        sliderDots();
    });

    prevSlider.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        numberSliders();
        sliderDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            numberSliders();
            sliderDots();
        })
    })

    // my code =>>>

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


    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //   total.textContent = `0${slides.length}`;
    // } else {
    //   total.textContent = slides.length;
    // }

    // function showSlides(n)  {
    //   if (n > slides.length)  {
    //     slideIndex = 1;
    //   }

    //   if (n < 1)  {
    //     slideIndex = slides.length;
    //   }

    //   slides.forEach(item => item.style.display = 'none');  //все слайды скрыли 

    //   slides[slideIndex - 1].style.display = 'block';   //первый элемент появился

    //   if (slides.length < 10) {
    //     current.textContent = `0${slideIndex}`;
    //   } else {
    //     current.textContent = slideIndex;
    //   }
    // }

    // function plusSlides(n)  {
    //   showSlides(slideIndex += n);
    // }

    // prevSlider.addEventListener('click', () =>  {
    //   plusSlides(-1);
    // });

    // nextSlider.addEventListener('click', () =>  {
    //   plusSlides(1);
    // });
}

module.exports = slider;
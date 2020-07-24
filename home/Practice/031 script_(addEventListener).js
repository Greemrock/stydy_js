const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('click');
// };

let i = 0;
const delElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
 
    // i++;
    // if (i = 1) {
    //     btn.removeEventListener('click', delElement);
    // }
}; 

// btn.addEventListener('click', delElement);
// overlay.addEventListener('click', delElement);

btns.forEach(btn => {
    btn.addEventListener('click', delElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
})

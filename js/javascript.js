const $head = document.querySelectorAll('.accordion__head')

let isOpen = false

$head.forEach((head, i) => {
    head.addEventListener('click', e => {


        if (e.target.classList.contains('accordion__head--active') || e.target.parentElement.classList.contains('accordion__head--active')) {
            isOpen = true
        }

        $head.forEach(content => {
            content.classList.remove('accordion__head--active')
        });

        if (!isOpen) {
            head.classList.add('accordion__head--active')
        } else {
            isOpen = false
        }

    })
});



document.addEventListener('click', function () {

// layouts
    var body = document.body;
    var container1 = document.querySelector('.layout1-content');
    var container2 = document.querySelector('.layout2-content');
    var container3 = document.querySelector('.layout3-content');
    var container4 = document.querySelector('.layout4-content');

// layout switch conditions
    if (body.classList.contains('layout1')) {
        body.classList.remove('layout1');
        body.classList.add('layout2');
        container1.style.display = 'none';
        container2.style.display = 'block';
        fadeIn(container2);
    } else if (body.classList.contains('layout2')) {
        body.classList.remove('layout2');
        body.classList.add('layout3');
        container2.style.display = 'none';
        container3.style.display = 'block';
        fadeIn(container3);
    } else if (body.classList.contains('layout3')) {
        body.classList.remove('layout3');
        body.classList.add('layout4');
        container3.style.display = 'none';
        container4.style.display = 'block';
        fadeIn(container4);
    } else {
        body.classList.remove('layout4');
        body.classList.add('layout1');
        container4.style.display = 'none';
        container1.style.display = 'block';
        fadeIn(container1);
    }
});

// button click
document.querySelector('.pill-button').addEventListener('click', function() {
// button link
    window.location.href = 'https://camae358.github.io/ci2/p1_/01_library/library_3/index.html';
});

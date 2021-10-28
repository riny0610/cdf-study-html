window.addEventListener('load', () => {

    var message = "차장님 듣고있어여";
    // alert(message);
    var intro = document.querySelector("#intro");
    console.log(intro);
    // intro.innerHTML ="<span>" + message + "</span>";
    intro.innerHTML =`<span> ${message}</span>`;

    var hello = document.querySelector('#hello');
    hello.addEventListener('click', (event) => {
        console.log(event);
        window.location.href = 'http://www.naver.com';
    })
})
var calculator = (function () {
    var result = 0;
    //var resultDisplay = '0';
    document.querySelector('.one').addEventListener('click', function(){
        result += 1;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.two').addEventListener('click', function(){
        result +=2;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.three').addEventListener('click', function(){
        result +=3;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.four').addEventListener('click', function(){
        result +=4;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.five').addEventListener('click', function(){
        result +=5;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.six').addEventListener('click', function(){
        result +=6;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.seven').addEventListener('click', function(){
        result +=7;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.eight').addEventListener('click', function(){
        result +=8;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.nine').addEventListener('click', function(){
        result +=9;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.zero').addEventListener('click', function(){
        result +=0;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.doublezero').addEventListener('click', function(){
        result +='00';
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.dot').addEventListener('click', function(){
        result +='.';
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.plus').addEventListener('click', function(){
        result += '+';
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.minus').addEventListener('click', function(){
        result += '-';
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.multiplication').addEventListener('click', function(){
        result += '*';
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.division').addEventListener('click', function(){
        result += '/';
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.clear').addEventListener('click', function(){
        result =0;
        document.querySelector('.res').textContent=result;
    });
    document.querySelector('.equal').addEventListener('click', function(){
        result = eval(result);
        document.querySelector('.res').textContent=result;
        result = String(result);
    });
})();


var end = new Date('31 Mar 2016 12:00:00');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour *24;
var timer;

function showRemaining()
{
    var now = new Date();
    var distance = end - now;
    if (distance < 0 ) {
       // handle expiry here..
       clearInterval( timer ); // stop the timer from continuing ..
       //alert('Expired'); // alert a message that the timer has expired..
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor( (distance % _day ) / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;
    
    var countdownElement = document.getElementById('timer');
    countdownElement.innerHTML = days  + 'd ' + 
                                 hours + 'h ' +
                                 minutes + 'm ' +
                                 seconds + 's ' +
                                 milliseconds + 'ms';
}

timer = setInterval(showRemaining, 10);

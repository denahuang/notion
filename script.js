function date() {
    var today = new Date();
    var weekday = today.toLocaleString('default', {weekday: 'long'});
    var month = today.toLocaleString('default', {month: 'long'});
    var dayNum = today.getDate();
    var year = today.getFullYear();

    document.getElementById('date').innerHTML = weekday + ', ' + month + ' ' + dayNum + ', ' + year;
       
}

function clock() {
        var today = new Date();
        var hour = zeros(twelveHour(today.getHours()));
        var minutes = zeros(today.getMinutes());

        document.getElementById('hour').innerHTML = hour;
        document.getElementById('min').innerHTML = minutes;
}

function twelveHour(hour) {
    if (hour>12) {
        return hour -=12
    } else if (hour === 0) {
        return hour = 12;
    } else {
        return hour
    }
}

function zeros(num) {
    if (num <10) {
        num = '0' + num
    };
    return num;
}

function dateTime() {
    date();
    clock();
    setTimeout(dateTime, 500);
}

dateTime()
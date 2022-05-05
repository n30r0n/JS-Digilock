var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var time = setInterval(function() {
    var t = new Date();
    var get_time = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    var time_form = document.getElementById('time');
    time_form.innerHTML = get_time;
}, 1000);
function date(){
    var t = new Date();
    var year = new String(t.getFullYear());
    if (year.length == 4){
        year = year.slice(-2);
    };
    var get_date = t.getDate()+'-'+t.getMonth()+'-'+year;
    var date_form = document.getElementById('date');
    date_form.innerHTML = get_date;
    day_form = document.getElementById('day').innerHTML = days[t.getDay()]
};
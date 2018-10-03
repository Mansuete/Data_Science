
$( document ).ready(function() {

if ($(window).width() <= '800'){
   $(".comp").css({"display":"none"});
   $(".mobila").css({"display":"block"});
   lessTimer();

   function lessTimer(){
var date = new Date();

dayofweek = date.getDay();
hours = date.getHours();
minutes = date.getMinutes();

for(var i = 1; i < 6; i++) {
    if (dayofweek == i && ((hours == 15 && minutes <= 50) ||(hours < 15))) {
        // Закраска всього робочого дня
        for (j = 1; j < 9; j++) {
            $('tr').eq(9+j+((i-1)*9)).find('td').eq(1).addClass('now_week');
        }

        if ((hours == 8 && minutes <= 30) || (hours < 8)){
            $('tr').eq(10).find('td').eq(1).addClass('next_lesson');
        }

        // ПЕРШИЙ УРОК
       else if ((hours == 8 && minutes >= 30) || (hours == 9 && minutes <= 15)){
            $('tr').eq(10+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(10+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson')

        }
        // ПЕРША ПЕРЕРВА
        else if ((hours == 9 && minutes > 15) && (hours == 9 && minutes < 25)) {
            $('tr').eq(10+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
            $('tr').eq(11+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('next_lesson');
        }
        // ДРУГИЙ УРОК
        else if ((hours == 9 && minutes >= 25) || (hours == 10 && minutes <= 10)) {
            $('tr').eq(11+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(11+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson');
        }
        // ДРУГА ПЕРЕРВА
        else if ((hours == 10 && minutes > 10) && (hours == 10 && minutes < 20)) {
            $('tr').eq(11+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
            $('tr').eq(12+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('next_lesson');
        }
        // ТРЕТІЙ УРОК
        else if ((hours == 10 && minutes >= 20) || (hours == 11 && minutes <= 5)) {
            $('tr').eq(12+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(12+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson');
        }
        // ТРЕТЯ ПЕРЕРВА
        else if ((hours == 11 && minutes > 5) && (hours == 11 && minutes < 15)) {
            $('tr').eq(12+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
            $('tr').eq(13+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('next_lesson');
        }
        // ЧЕТВЕРТИЙ УРОК
        else if ((hours == 11 && minutes >= 15) || (hours == 12 && minutes <= 0)) {
            $('tr').eq(13+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(13+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson');
        }
        // ЧЕТВЕРТА ПЕРЕРВА
        else if ((hours == 12 && minutes > 0) && (hours == 12 && minutes < 20)) {
            $('tr').eq(13+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
            $('tr').eq(14+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('next_lesson');
        }
        // П'ЯТИЙ УРОК
        else if ((hours == 12 && minutes >= 20) || (hours == 13 && minutes <= 5)) {
            $('tr').eq(14+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(14+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson')
        }
        // П'ЯТА ПЕРЕРВА
        else if ((hours == 13 && minutes > 5) && (hours == 13 && minutes < 15)) {
            $('tr').eq(14+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
            $('tr').eq(15+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('next_lesson');
        }
        // ШОСТИЙ УРОК
        else if ((hours == 13 && minutes >= 15) || (hours == 14 && minutes <= 0)) {
            $('tr').eq(15+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(15+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson')
        }
        // ШОСТА ПЕРЕРВА
        else if ((hours == 14 && minutes > 0) && (hours == 14 && minutes < 10)) {
            $('tr').eq(15+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
            $('tr').eq(16+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('next_lesson');
        }
        // СЬОМИЙ УРОК
        else if ((hours == 14 && minutes >= 10) || (hours == 14 && minutes <= 55)) {
            $('tr').eq(16+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(16+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson')
        }

        // ВОСЬМА ПЕРЕРВА
        else if ((hours == 14 && minutes > 55) || (hours == 15 && minutes < 5)) {
            $('tr').eq(17+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
            $('tr').eq(17+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('next_lesson');
        }

        // ВОСЬМИЙ УРОК
        else if (hours == 15 && minutes >= 5) {
            $('tr').eq(17+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('next_lesson');
            $('tr').eq(17+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).addClass('now_lesson')
        }
    }
    // КІНЕЦЬ РОБОЧГО ДНЯ
    else if ((dayofweek <= 4 && dayofweek > 0) && ((hours == 15 && minutes > 50) ||(hours >= 16))) {
        $('tr').eq(17+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
        for (j = 1; j < 9; j++) {$('tr').eq(9+j+((dayofweek-1)*9)).find('td').eq(1).removeClass('now_week')}
        $('tr').eq(10+9*dayofweek).find('td').eq(1).addClass('next_lesson');

    }

    else if (dayofweek == 5 && ((hours == 15 && minutes > 50) ||(hours >= 16))) {
        $('tr').eq(17+8*(dayofweek-1)+dayofweek-1).find('td').eq(1).removeClass('now_lesson');
        for (j = 1; j < 8; j++) {$('tr').eq(9+j+((dayofweek-1)*9)).find('td').eq(1).removeClass('now_week')}
        $('tr').eq(10).find('td').eq(1).addClass('next_lesson');

    }

    else if (dayofweek == 6 || dayofweek == 0) {
        $('tr').eq(10).find('td').eq(1).addClass('next_lesson')
    }

}setTimeout(lessTimer, 250);
};
      }
else{
 $(".mobila").css({"display":"none"});
 $(".comp").css({"display":"block"});
 lessTimer();
 function lessTimer(){
var date = new Date();


    dayofweek = date.getDay();
    hours = date.getHours();
    minutes = date.getMinutes();

for(var i = 1; i < 6; i++) {
    if (dayofweek == i && ((hours == 15 && minutes <= 50) ||(hours < 15))) {
        // Закраска всього робочого дня
        for (i = 1; i < 9; i++) {
            $('tr').eq(i).find('td').eq(dayofweek).addClass('now_week');
        }

        if ((hours == 8 && minutes <= 30) || (hours < 8)){
            $('tr').eq(1).find('td').eq(1).addClass('next_lesson');
        }

        // ПЕРШИЙ УРОК
        else if ((hours == 8 && minutes >= 30) || (hours == 9 && minutes <= 15)) {
            $('tr').eq(1).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(1).find('td').eq(dayofweek).addClass('now_lesson')

        }
        // ПЕРША ПЕРЕРВА
        else if ((hours == 9 && minutes > 15) && (hours == 9 && minutes < 25)) {
            $('tr').eq(1).find('td').eq(dayofweek).removeClass('now_lesson');
            $('tr').eq(2).find('td').eq(dayofweek).addClass('next_lesson');
        }
        // ДРУГИЙ УРОК
        else if ((hours == 9 && minutes >= 25) || (hours == 10 && minutes <= 10)) {
            $('tr').eq(2).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(2).find('td').eq(dayofweek).addClass('now_lesson');
        }
        // ДРУГА ПЕРЕРВА
        else if ((hours == 10 && minutes > 10) && (hours == 10 && minutes < 20)) {
            $('tr').eq(2).find('td').eq(dayofweek).removeClass('now_lesson');
            $('tr').eq(3).find('td').eq(dayofweek).addClass('next_lesson');
        }
        // ТРЕТІЙ УРОК
        else if ((hours == 10 && minutes >= 20) || (hours == 11 && minutes <= 5)) {
            $('tr').eq(3).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(3).find('td').eq(dayofweek).addClass('now_lesson');
        }
        // ТРЕТЯ ПЕРЕРВА
        else if ((hours == 11 && minutes > 5) && (hours == 11 && minutes < 15)) {
            $('tr').eq(3).find('td').eq(dayofweek).removeClass('now_lesson');
            $('tr').eq(4).find('td').eq(dayofweek).addClass('next_lesson');
        }
        // ЧЕТВЕРТИЙ УРОК
        else if ((hours == 11 && minutes >= 15) || (hours == 12 && minutes <= 0)) {
            $('tr').eq(4).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(4).find('td').eq(dayofweek).addClass('now_lesson');
        }
        // ЧЕТВЕРТА ПЕРЕРВА
        else if ((hours == 12 && minutes > 0) && (hours == 12 && minutes < 20)) {
            $('tr').eq(4).find('td').eq(dayofweek).removeClass('now_lesson');
            $('tr').eq(5).find('td').eq(dayofweek).addClass('next_lesson');
        }
        // П'ЯТИЙ УРОК
        else if ((hours == 12 && minutes >= 20) || (hours == 13 && minutes <= 5)) {
            $('tr').eq(5).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(5).find('td').eq(dayofweek).addClass('now_lesson')
        }
        // П'ЯТА ПЕРЕРВА
        else if ((hours == 13 && minutes > 5) && (hours == 13 && minutes < 15)) {
            $('tr').eq(5).find('td').eq(dayofweek).removeClass('now_lesson');
            $('tr').eq(6).find('td').eq(dayofweek).addClass('next_lesson');
        }
        // ШОСТИЙ УРОК
        else if ((hours == 13 && minutes >= 15) || (hours == 14 && minutes <= 0)) {
            $('tr').eq(6).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(6).find('td').eq(dayofweek).addClass('now_lesson')
        }
        // ШОСТА ПЕРЕРВА
        else if ((hours == 14 && minutes > 0) && (hours == 14 && minutes < 10)) {
            $('tr').eq(6).find('td').eq(dayofweek).removeClass('now_lesson');
            $('tr').eq(7).find('td').eq(dayofweek).addClass('next_lesson');
        }
        // СЬОМИЙ УРОК
        else if (hours == 14 && (minutes >= 10 && minutes <= 55)) {
            $('tr').eq(7).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(7).find('td').eq(dayofweek).addClass('now_lesson')
        }

        // СЬОМА ПЕРЕРВА
        else if ((hours == 14 && minutes > 55) || (hours == 15 && minutes < 5)) {
            $('tr').eq(7).find('td').eq(dayofweek).removeClass('now_lesson');
            $('tr').eq(8).find('td').eq(dayofweek).addClass('next_lesson')
        }

        // ВОСЬМИЙ УРОК
        else if (hours == 15 && (minutes >= 5 && minutes < 50)) {
            $('tr').eq(8).find('td').eq(dayofweek).removeClass('next_lesson');
            $('tr').eq(8).find('td').eq(dayofweek).addClass('now_lesson')
        }
    }
    // КІНЕЦЬ РОБОЧГО ДНЯ
    else if ((dayofweek <= 4 && dayofweek > 0) && ((hours == 15 && minutes > 50) ||(hours >= 16))) {
        $('tr').eq(8).find('td').eq(dayofweek).removeClass('now_lesson');
        for (i = 1; i < 9; i++) {$('tr').eq(i).find('td').eq(dayofweek).removeClass('now_week')}
        $('tr').eq(1).find('td').eq(dayofweek + 1).addClass('next_lesson');

    }

    else if (dayofweek == 5 && ((hours == 15 && minutes > 50) ||(hours >= 16))) {
        $('tr').eq(8).find('td').eq(dayofweek).removeClass('now_lesson');
        for (i = 1; i < 9; i++) {$('tr').eq(i).find('td').eq(dayofweek).removeClass('now_week')}
        $('tr').eq(1).find('td').eq(1).addClass('next_lesson');

    }

    else if (dayofweek == 6 || dayofweek == 0) {
        $('tr').eq(1).find('td').eq(1).addClass('next_lesson')
    }

}setTimeout(lessTimer, 250);
};
 }

});


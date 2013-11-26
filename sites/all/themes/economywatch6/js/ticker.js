var tWidth='740px';                  // width (in pixels)
var tHeight='25px';                  // height (in pixels)
var tcolour='#ffffcc';               // background colour:
var moStop=true;                     // pause on mouseover (true or false)
var fontfamily = 'arial,sans-serif'; // font for content
var tSpeed=3;                        // scroll speed (1 = slow, 5 = fast)

// enter your ticker content here (use \/ and \' in place of / and ' respectively)
var content='Out of 6.2 billion people in the world today, 1.2 billion live on less that $1 per day. 70% of these people are women and girls. One half of the world population lives on less than $2 per day. 160 million live on less than 50 cents. At least 80% of humanity lives on less than $10 a day. The World Health Organization estimates that 1/3 of the world population is well-fed, 1/3 is under-fed, and 1/3 is starving. Nearly a billion people entered the 21st century unable to read or write. A quarter of the world population lives without electricity. The GDP of the 41 Heavily Indebted Poor Countries (567 million people) is less than the wealth of the 7 richest people in the world combined. Approximately half the population of the world lives in cities and towns. By 2005, one out of three of urban dwellers was living in slum conditions, approximately 1 billion or 1/6 of the population. There are about 14 million refugees (estimates range from 11 to 17 million) and 26 million internally displaced people (2007) in more than 50 countries.';

// Simple Marquee / Ticker Script
// copyright 3rd January 2006, Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the below code in this script (including this
// comment) is used without any alteration
var cps=tSpeed; var aw, mq; var fsz = parseInt(tHeight) - 4; function startticker(){if (document.getElementById) {var tick = '<div style="position:relative;width:'+tWidth+';height:'+tHeight+';overflow:hidden;background-color:'+tcolour+'"'; if (moStop) tick += ' onmouseover="cps=0" onmouseout="cps=tSpeed"'; tick +='><div id="mq" style="position:absolute;left:0px;top:0px;font-family:'+fontfamily+';font-size:'+fsz+'px;white-space:nowrap;"><\/div><\/div>'; document.getElementById('ticker').innerHTML = tick; mq = document.getElementById("mq"); mq.style.left=(parseInt(tWidth)+10)+"px"; mq.innerHTML='<span id="tx">'+content+'<\/span>'; aw = document.getElementById("tx").offsetWidth; lefttime=setInterval("scrollticker()",50);}} function scrollticker(){mq.style.left = (parseInt(mq.style.left)>(-10 - aw)) ?parseInt(mq.style.left)-cps+"px" : parseInt(tWidth)+10+"px";} window.onload=startticker;
                  
//добавить ставку в синию команду
function gameTimer(){
Dashboardtimer ();
$(".game-block-timer").css("display","block");
$(".block-title-center").css("display","none");
TotalBank();
	 setInterval(function () {
	 if ($("#dashboardtimer").text()=="00:00"){
	 	$(".game-block-timer").css("display","none");
	 	$(".game-block-animation").css("display","block");
	 	Roullet();
	 	StartRoullet();
	 	setTimeout(StopRoullet,5000);
	 	setTimeout(Finalmodal,8000);
		} 
    }, 1000);

}

$(document).ready(function(){
    $('#bluebetbtn').attr('disabled',true);
    $('#redbetbtn').attr('disabled',true);
    $("input[name=amount]").keyup(function(){
        if($(this).val().length !=0){
            $('#bluebetbtn').attr('disabled', false);
            $('#redbetbtn').attr('disabled', false)            
        }else{
            $('#bluebetbtn').attr('disabled',true);
            $('#redbetbtn').attr('disabled',true);}
    });
    
     $(".betsplit-message-btn").click(function() {
        FadeOutMessage();
    });
     
setTimeout(gameTimer,20000);
//setTimeout(StopRoullet,20000);
//setTimeout(Finalmodal,10000);
});

function TotalBank(){
	var totalblueamount = parseFloat($("#blueteam-container .progress-amount-block .progress-statistic-block-text").text()).toFixed(2);
	var totalredamount = parseFloat($("#redteam-container .progress-amount-block .progress-statistic-block-text").text()).toFixed(2);
	$("#totalAmount").text((parseFloat(totalblueamount)+parseFloat(totalredamount)).toFixed(2)+"₽");
	$(".text-span-2").text((parseFloat(totalblueamount)+parseFloat(totalredamount)).toFixed(2)+"₽");
}



function FadeOutMessage(){
$(".message.success").delay(2000);
}



function Roullet(){
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    loop:true,
	    margin:15,
	    nav:true,
	    autoWidth:true,
	    items:100,
	 	});
}

function StartRoullet(){
	var owl = $('.owl-carousel');
	owl.trigger('play.owl.autoplay',[100]);
}

function StopRoullet(){
	var owl = $('.owl-carousel');
	owl.trigger('stop.owl.autoplay');
}
function Finalmodal (){
	$(".game-bg").css("display","none");
	$(".final-modal").css("display","block");
	console.log('done!');
}



function BlueBet(){
$('<div class="game-table-row" id="mybet" style="background-color:#037aff;"><div class="game-table-header-text game-id">1085484</div><div class="game-table-header-text game-user"><img src="images/avatar4.png" height="50" width="50" srcset="images/avatar4-p-500.png 500w, images/avatar4.png 512w" sizes="30px" alt="" class="game-table-avatar"><a href="#" class="link game-table-profile-name">Larry Carpenter</a></div><div class="game-table-header-text game-amount">'+parseFloat($('input[name=amount]').val()).toFixed(2)+'₽</div><div class="game-table-header-text game-chanse">10%</div></div>').insertAfter("#blueteamtable .game-header-row");

var bluemembers = $("#blueteamtable").children().length - 1; // получить количество участников синей команды
var redmembers = $("#redteamtable").children().length - 1; // получить количество участников красной команды
console.log('количество синих участнико'+''+bluemembers);
console.log('количество красных участников'+''+redmembers);

// Вычисление количества участников в табилице и анимация прогресс баров
/*if (bluemembers>redmembers){
	var progresslength = parseFloat(100-(redmembers / bluemembers  * 100)).toFixed(2);
	$("#blueteam").animate({width: "50%"}, 500);
	$("#redteam").animate({width: 50-progresslength+"%"}, 500);
}
else if (redmembers>bluemembers)
{
	var progresslength =  parseFloat(100- (bluemembers / redmembers * 100)).toFixed(2);
	$("#redteam").animate({width: "50%"}, 500);
	$("#blueteam").animate({width: 50-progresslength+"%"}, 500);	
}
else{
	$("#redteam").animate({width: "50%"}, 500);
	$("#blueteam").animate({width: "50%"}, 500);	
}*/


var chanse = 0;
var betsamount = 0;

for (i=1; i <= bluemembers; i++){
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text());
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
}

for (i=1; i<=bluemembers; i++){
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text())
	$("#blueteamtable .game-chanse:eq("+i+")").text(parseFloat(amount/betsamount*100).toFixed(2)+"%")
}


// Добавление в прогресс бары пользователей и заполнение кол ставок суммы 


var chanse = 0;
var betsamount = 0;
$("#blueteam .members").html('');
for (i=1; i <= bluemembers; i++){
	if (i % 2 == 0){
	var size = parseFloat($("#blueteamtable .game-chanse:eq("+i+")").text()).toFixed(2);
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text());
	$("#blueteam .members").append('<div class="progress-members light bluemembersinprogress" style="width:'+size+'%"></div>');	
	}
	else{
	var size = parseInt($("#blueteamtable .game-chanse:eq("+i+")").text());	
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text());
	$("#blueteam .members").append('<div class="progress-members dark bluemembersinprogress" style="width:'+size+'%"></div>');			
	}
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
	chanse+=size;
}
$("#blueteam-container .progress-bets-block .progress-statistic-block-text").text(bluemembers); // кол ставок синей команды
$("#blueteam-container .progress-amount-block .progress-statistic-block-text").text(betsamount+"₽"); // cумма синей команды





var chanse = 0;
var betsamount = 0;

for (i=1; i <= redmembers; i++){
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text());
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
}

for (i=1; i<=redmembers; i++){
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text())
	$("#redteamtable .game-chanse:eq("+i+")").text(parseFloat(amount/betsamount*100).toFixed(2)+"%")
}

var chanse = 0;
var betsamount = 0;

$("#redteam .members").html('');

for (i=1; i<=redmembers; i++){
	if (i % 2 == 0){
	var size = parseFloat($("#redteamtable .game-chanse:eq("+i+")").text()).toFixed(2);
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text());
	$("#redteam .members").append('<div class="progress-members light redmembersinprogress" style="width:'+size+'%"></div>');	
	}
	else{
	var size = parseInt($("#redteamtable .game-chanse:eq("+i+")").text());
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text());
	$("#redteam .members").append('<div class="progress-members dark redmembersinprogress" style="width:'+size+'%"></div>');			
	}
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
	chanse+=size;
	
}

$("#redteam-container .progress-bets-block .progress-statistic-block-text").text(redmembers); // кол ставок синей команды
$("#redteam-container .progress-amount-block .progress-statistic-block-text").text(betsamount+"₽"); // cумма синей команды


 // шансы красной команды
var totalblue = parseFloat($("#blueteam-container .progress-amount-block .progress-statistic-block-text").text());
var totalred = parseFloat($("#redteam-container .progress-amount-block .progress-statistic-block-text").text());
var totalamount = totalblue + totalred;

var totalbluechanse = parseFloat(totalblue/totalamount*100).toFixed(2);
var totalredchanse = parseFloat(totalred/totalamount*100).toFixed(2);

$("#redteam-container .progress-chanse-block .progress-statistic-block-text").text(parseFloat(totalred/totalamount*100).toFixed(2)+"%");
$(".red .game-table-header-title-percent").text(parseFloat(totalred/totalamount*100).toFixed(2)+"%");
$("#blueteam-container .progress-chanse-block .progress-statistic-block-text").text(parseFloat(totalblue/totalamount*100).toFixed(2)+"%");
$(".blue .game-table-header-title-percent").text(parseFloat(totalblue/totalamount*100).toFixed(2)+"%");



$("#blueteam").animate({width: totalbluechanse+'%'}, 500);
$("#redteam").animate({width: totalredchanse+"%"}, 500);



//выдиление пользователя в таблице при наведении на прогресс
$( ".bluemembersinprogress" ).mouseover(function() {
var getindex= parseInt($(this).parent().children().index($(this)));

if (getindex == 0){
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#4ca0ff;");	
}else{
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.3);");
}
});

$( ".bluemembersinprogress" ).mouseout(function() {
var getindex= parseInt($(this).parent().children().index($(this)));

if (getindex == 0){
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#037aff;");
}else
{
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.1);");	
}
});


$( ".redmembersinprogress" ).mouseover(function() {
var getindex= parseInt($(this).parent().children().index($(this)));
if (getindex == 0){
$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#ff4259;");
}else{
	$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.3);");
}
});

$( ".redmembersinprogress" ).mouseout(function() {
var getindex= parseInt($(this).parent().children().index($(this)));
if (getindex == 0){
$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#e91731");
}else{
	$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.1);");
}
});




$(".message.success").fadeIn(400);
$(".message.success").delay(800).fadeOut(400);

}


function RedBet(){
	
	$('<div class="game-table-row" id="mybet" style="background-color:#e91731;"><div class="game-table-header-text game-id">1085484</div><div class="game-table-header-text game-user"><img src="images/avatar4.png" height="50" width="50" srcset="images/avatar4-p-500.png 500w, images/avatar4.png 512w" sizes="30px" alt="" class="game-table-avatar"><a href="#" class="link game-table-profile-name">Larry Carpenter</a></div><div class="game-table-header-text game-amount">'+parseFloat($('input[name=amount]').val()).toFixed(2)+'₽</div><div class="game-table-header-text game-chanse">10%</div></div>').insertAfter("#redteamtable .game-header-row");

var bluemembers = $("#blueteamtable").children().length - 1; // получить количество участников синей команды
var redmembers = $("#redteamtable").children().length - 1; // получить количество участников красной команды
console.log(bluemembers);
console.log(redmembers);

// Вычисление количества участников в табилице и анимация прогресс баров
/*if (bluemembers>redmembers){
	var progresslength = parseFloat(100-(redmembers / bluemembers  * 100)).toFixed(2);
	$("#blueteam").animate({width: "50%"}, 500);
	$("#redteam").animate({width: 50-progresslength+"%"}, 500);
	console.log(progresslength);
}
else if (redmembers>bluemembers)
{
	var progresslength =  parseFloat(100- (bluemembers / redmembers * 100)).toFixed(2);
	$("#redteam").animate({width: "50%"}, 500);
	$("#blueteam").animate({width: 50-progresslength+"%"}, 500);
	console.log(progresslength);		
}
else{
	$("#redteam").animate({width: "50%"}, 500);
	$("#blueteam").animate({width: "50%"}, 500);
	console.log(progresslength);		
}
*/

var chanse = 0;
var betsamount = 0;

for (i=1; i <= bluemembers; i++){
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text());
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
}

for (i=1; i<=bluemembers; i++){
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text())
	$("#blueteamtable .game-chanse:eq("+i+")").text(parseFloat(amount/betsamount*100).toFixed(2)+"%")
}


// Добавление в прогресс бары пользователей и заполнение шанса команды кол ставок суммы 

var chanse = 0;
var betsamount = 0;

$("#blueteam .members").html('');

for (i=1; i <= bluemembers; i++){
	if (i % 2 == 0){
	var size = parseFloat($("#blueteamtable .game-chanse:eq("+i+")").text()).toFixed(2);
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text());
	$("#blueteam .members").append('<div class="progress-members light bluemembersinprogress" style="width:'+size+'%"></div>');	
	}
	else{
	var size = parseInt($("#blueteamtable .game-chanse:eq("+i+")").text());	
	var amount = parseFloat($("#blueteamtable .game-amount:eq("+i+")").text());
	$("#blueteam .members").append('<div class="progress-members dark bluemembersinprogress" style="width:'+size+'%"></div>');			
	}
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
	chanse+=size;
}
$("#blueteam-container .progress-bets-block .progress-statistic-block-text").text(bluemembers); // кол ставок синей команды
$("#blueteam-container .progress-amount-block .progress-statistic-block-text").text(betsamount+"₽"); // cумма синей команды





var chanse = 0;
var betsamount = 0;

for (i=1; i <= redmembers; i++){
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text());
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
}

for (i=1; i<=redmembers; i++){
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text())
	$("#redteamtable .game-chanse:eq("+i+")").text(parseFloat(amount/betsamount*100).toFixed(2)+"%")
}

var chanse = 0;
var betsamount = 0;

$("#redteam .members").html('');

for (i=1; i<=redmembers; i++){
	if (i % 2 == 0){
	var size = parseFloat($("#redteamtable .game-chanse:eq("+i+")").text()).toFixed(2);;
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text());
	$("#redteam .members").append('<div class="progress-members light redmembersinprogress" style="width:'+size+'%"></div>');	
	}
	else{
	var size = parseInt($("#redteamtable .game-chanse:eq("+i+")").text());
	var amount = parseFloat($("#redteamtable .game-amount:eq("+i+")").text());
	$("#redteam .members").append('<div class="progress-members dark redmembersinprogress" style="width:'+size+'%"></div>');			
	}
	betsamount = (parseFloat(betsamount)+parseFloat(amount)).toFixed(2);
	chanse+=size;
	
}

$("#redteam-container .progress-bets-block .progress-statistic-block-text").text(redmembers); // кол ставок синей команды
$("#redteam-container .progress-amount-block .progress-statistic-block-text").text(betsamount+"₽"); // cумма синей команды


 // шансы красной команды
var totalblue = parseFloat($("#blueteam-container .progress-amount-block .progress-statistic-block-text").text());
var totalred = parseFloat($("#redteam-container .progress-amount-block .progress-statistic-block-text").text());
var totalamount = totalblue + totalred;

var totalbluechanse = parseFloat(totalblue/totalamount*100).toFixed(2);
var totalredchanse = parseFloat(totalred/totalamount*100).toFixed(2);

$("#redteam-container .progress-chanse-block .progress-statistic-block-text").text(parseFloat(totalred/totalamount*100).toFixed(2)+"%");
$(".red .game-table-header-title-percent").text(parseFloat(totalred/totalamount*100).toFixed(2)+"%");
$("#blueteam-container .progress-chanse-block .progress-statistic-block-text").text(parseFloat(totalblue/totalamount*100).toFixed(2)+"%");
$(".blue .game-table-header-title-percent").text(parseFloat(totalblue/totalamount*100).toFixed(2)+"%");


$("#blueteam").animate({width: totalbluechanse+'%'}, 500);
$("#redteam").animate({width: totalredchanse+"%"}, 500);

//выдиление пользователя в таблице при наведении на прогресс
$( ".bluemembersinprogress" ).mouseover(function() {
var getindex= parseInt($(this).parent().children().index($(this)));
if (getindex == 0){
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#4ca0ff;");	
}else{
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.3);");
}
});

$( ".bluemembersinprogress" ).mouseout(function() {
var getindex= parseInt($(this).parent().children().index($(this)));
if (getindex == 0){
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#037aff;");
}else
{
$("#blueteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.1);");	
}
});


$( ".redmembersinprogress" ).mouseover(function() {
var getindex= parseInt($(this).parent().children().index($(this)));

if (getindex == 0){
$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#ff4259");
}else{
	$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.3);");
}
});

$( ".redmembersinprogress" ).mouseout(function() {
var getindex= parseInt($(this).parent().children().index($(this)));

if (getindex == 0){
$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:#e91731;");
}else{
	$("#redteamtable .game-table-row:eq("+getindex+")").attr("style","background-color:rgba(255,255,255,0.1);");
}
});




$(".message.success").fadeIn(400);
$(".message.success").delay(800).fadeOut(400);


	
}
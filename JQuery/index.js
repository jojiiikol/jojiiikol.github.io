$(document).ready(function () {
    $("#but05").click(function () {
        $("p").hide();
    });
    $("#but1").click(function () {
        $("#test").hide();
    });
    $("#but2").click(function () {
        $("#test").show();
    });
    $("#but4").click(function () {
        $(".test").hide();
    });
    $("#but5").click(function () {
        $(".MsoNormal:odd").hide();
    });
    $("#but6").click(function () {
        $(".MsoNormal:odd").show();
    });
    $("p").click(function () {
        $(this).hide();
    });
    $("p").dblclick(function () {
        $(this).hide();
    });
    $("#p1").mouseenter(function () {
        alert("You entered p1!");
    });
    $("input").focus(function () {
     $(this).css("background-color", "#cccccc");
     });
     $("input").blur(function () {
     $(this).css("background-color", "#ffffff");
     });
    $("#but9").click(function () {
        $(".p9").hide(1000);
    });
    $("#but10").click(function () {
        $(".p10").toggle();
    });
    $("#input1").keypress(function () {
        var back = ["#ff0000","blue","gray", "yellow", "green"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $(this).css("background-color", rand)
    });
    $("#but11").click(function () {
         $("#div11_1").fadeIn();
         $("#div11_2").fadeIn("slow");
         $("#div11_3").fadeIn(3000);
     });
    $("#but12").click(function () {
         $("#div12_1").fadeOut();
         $("#div12_2").fadeOut("slow");
         $("#div12_3").fadeOut(3000);
     });
    $("#button13").click(function() {
        $("#div13_1").fadeIn(1000).fadeOut(500);
        $("#div13_2").fadeIn(2000).fadeOut(1000);
        $("#div13_3").fadeIn(3000).fadeOut(1500);
        $("#div13_4").fadeIn(4000).fadeOut(2000);
        $("#div13_5").fadeIn(5000).fadeOut(2500);
      });
        $("#flip").click(function () {
     $("#panel").slideDown("slow");
     });
    $("#but14").click(function () {
     $("#div14").animate({ left: '250px' });
     });
    $("#but15").click(function () {
     var links = $('li> a');
     // перебор результатов
     for (var i = 0; i < links.length; i++) {
     alert(links[i].href);
     }
    });
    $("#btn18_1").click(function () {
     alert("Text: " + $("#test").text());
     });
     $("#btn18_2").click(function () {
     alert("HTML: " + $("#test").html());
     });
$("#but19").click(function () {
 alert("Value: " + $("#inp19").val());
 });
    $("#but20").click(function () {
 alert($("#w3s").attr("href"));
 });
    
    $("#but21").click(function() {
        // Применение эффекта слайд-шоу к четным рисункам
        $("img:even").slideUp("slow").slideDown("slow");
      });
    
});
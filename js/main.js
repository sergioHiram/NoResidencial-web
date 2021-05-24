
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "main.html",
        success: function(data){
            $("#main").html(data)
            $(".mainLeft").addClass("animate__animated animate__backInLeft")
            $(".mainRight").addClass("animate__animated animate__backInRight")
            $("#inicioLinkNav").addClass("active")
        }
    })
})

$("#inicioLinkNav").click(function(){
    $(".mainLeft").addClass("animate__animated animate__backOutLeft")
    $(".mainRight").addClass("animate__animated animate__backOutRight")

setTimeout(function(){
    $.ajax({
        type: "GET",
        url: "main.html",
        success: function(data){
            $("#main").html(data)
            $(".mainLeft").addClass("animate__animated animate__backInLeft")
            $(".mainRight").addClass("animate__animated animate__backInRight")
            $(".nav-link").removeClass("active")
            $("#inicioLinkNav").addClass("active")
        }
    })
}, 250);
})




$("#unoNavDrop").click(function(){
    $(".mainLeft").addClass("animate__animated animate__backOutLeft")
    $(".mainRight").addClass("animate__animated animate__backOutRight")

setTimeout(function(){
    $.ajax({
        type: "GET",
        url: "internetFijo.html",
        success: function(data){
            $("#main").html(data)
            $(".mainLeft").addClass("animate__animated animate__backInLeft")
            $(".mainRight").addClass("animate__animated animate__backInRight")
            $(".nav-link").removeClass("active")
            $("#navbarDropdownMenuLink").addClass("active")
        }
    })
}, 250);
})

$("#dosNavDrop").click(function(){
    $(".mainLeft").addClass("animate__animated animate__backOutLeft")
    $(".mainRight").addClass("animate__animated animate__backOutRight")

setTimeout(function(){
    $.ajax({
        type: "GET",
        url: "televisionDePaga.html",
        success: function(data){
            $("#main").html(data)
            $(".mainLeft").addClass("animate__animated animate__backInLeft")
            $(".mainRight").addClass("animate__animated animate__backInRight")
            $(".nav-link").removeClass("active")
            $("#navbarDropdownMenuLink").addClass("active")
        }
    })
}, 250);
})

$("#tresNavDrop").click(function(){
    $(".mainLeft").addClass("animate__animated animate__backOutLeft")
    $(".mainRight").addClass("animate__animated animate__backOutRight")

setTimeout(function(){
    $.ajax({
        type: "GET",
        url: "internetFijoyTelefoniaFija.html",
        success: function(data){
            $("#main").html(data)
            $(".mainLeft").addClass("animate__animated animate__backInLeft")
            $(".mainRight").addClass("animate__animated animate__backInRight")
            $(".nav-link").removeClass("active")
            $("#navbarDropdownMenuLink").addClass("active")
        }
    })
}, 250);
})

$("#cuatroNavDrop").click(function(){
    $(".mainLeft").addClass("animate__animated animate__backOutLeft")
    $(".mainRight").addClass("animate__animated animate__backOutRight")

setTimeout(function(){
    $.ajax({
        type: "GET",
        url: "internetFijoyTelevisionDePaga.html",
        success: function(data){
            $("#main").html(data)
            $(".mainLeft").addClass("animate__animated animate__backInLeft")
            $(".mainRight").addClass("animate__animated animate__backInRight")
            $(".nav-link").removeClass("active")
            $("#navbarDropdownMenuLink").addClass("active")
        }
    })
}, 250);
})

$("#cincoNavDrop").click(function(){
    $(".mainLeft").addClass("animate__animated animate__backOutLeft")
    $(".mainRight").addClass("animate__animated animate__backOutRight")

setTimeout(function(){
    $.ajax({
        type: "GET",
        url: "internetFijoTelefoniaFijaTelevisionDePaga.html",
        success: function(data){
            $("#main").html(data)
            $(".mainLeft").addClass("animate__animated animate__backInLeft")
            $(".mainRight").addClass("animate__animated animate__backInRight")
            $(".nav-link").removeClass("active")
            $("#navbarDropdownMenuLink").addClass("active")
        }
    })
}, 250);
})


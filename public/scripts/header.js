console.log("header.js loaded")

$(".nav-item").on("mouseover", function () {
    $(this).addClass("nav-hover");
    if ($(this).attr("id") === "nav-search") {
        $(this).addClass("hovered");
    }
})

$(".nav-item").on("mouseout", function () {
    $(this).removeClass("nav-hover");
    if ($(this).attr("id") === "nav-search") {
        $(this).removeClass("hovered");
    }
})
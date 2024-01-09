//go through all the elements that have an attribute of data-click with value stay-open using jquery
$("[data-click='stay-open']").each(function () {
    //simulate a click on them, once done, make them unclickable by the user
    $(this).click().css("pointer-events", "none");
});
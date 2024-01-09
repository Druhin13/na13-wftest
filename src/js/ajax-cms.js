/*

//once document is ready
$(document).ready(function () {

    //get the current full url, and store the home page or index part of it
    var url = window.location.href;
    var urlArray = url.split("/");
    var homePage = urlArray[0] + "//" + urlArray[2] + "/";
    console.log(homePage);

    //now set target url to case-studies
    var targetUrl = homePage + "case-studies/";
    console.log(targetUrl);

    //here are the classes that we will be targeting on that target url
    
        // .auto-title
        // .auto-img
        // .auto-tag
        // .auto-link
    

    //use ajax to go and fetch the content of the target url. on by one go through all the elements that have those target classes and store the first element of each of those classes in an array
    var autoTitle = [];
    var autoImg = [];
    var autoTag = [];
    var autoLink = [];

    $.ajax({
        url: targetUrl,
        success: function (data) {
            // console.log(data);
            // console.log($(data).find(".auto-title"));
            $(data).find(".auto-title").each(function () {
                autoTitle.push($(this).text());
            });
            $(data).find(".auto-img").each(function () {
                autoImg.push($(this).attr("src"));
            });
            $(data).find(".auto-tag").each(function () {
                autoTag.push($(this).text());
            });
            $(data).find(".auto-link").each(function () {
                autoLink.push(homePage + $(this).attr("href"));
            });
            console.log(autoTitle[0]);
            console.log(autoImg[0]);
            console.log(autoTag[0]);
            console.log(autoLink[0]);
            //now that we have all the content, go through them and append them to the dom
        }
    });

    //now set the text of #auto-title to autoTitle[0]
    $("#auto-title").text(autoTitle[0]);
    //now set the src of #auto-img to autoImg[0]
    $("#auto-img").attr("src", autoImg[0]);
    //now set the text of #auto-tag to autoTag[0]
    $("#auto-tag").text(autoTag[0]);
    //now set the href of #auto-link to autoLink[0]
    $("#auto-link").attr("href", autoLink[0]);


});

*/


// simplified version

$(document).ready(function () {

    //case study auto generation for the nav

    var url = window.location.href;
    var urlArray = url.split("/");
    var homePage = urlArray[0] + "//" + urlArray[2] + "/";
    var targetUrl = homePage + "case-studies/";

    $.ajax({
        url: targetUrl,
        success: function (data) {
            var $data = $(data);

            // Find the first element with each target class
            var $autoTitle = $data.find(".auto-title").first();
            var $autoImg = $data.find(".auto-img").first();
            var $autoTag = $data.find(".auto-tag").first();
            var $autoLink = $data.find(".auto-link").first();

            // Update the elements in the current page
            if ($autoTitle.length > 0) {
                $("#auto-title").text($autoTitle.text());
            }
            if ($autoImg.length > 0) {
                $("#auto-img").attr("src", $autoImg.attr("src"));
            }
            if ($autoTag.length > 0) {
                $("#auto-tag").text($autoTag.text());
            }
            if ($autoLink.length > 0) {
                $("#auto-link").attr("href", homePage + $autoLink.attr("href"));
            }
        },
        error: function () {
            console.error("Error loading data from " + targetUrl);
        }
    });
});




$(document).ready(function () {
    // FAQ auto generation for the 404 page

    var url = window.location.href;
    var urlArray = url.split("/");
    var homePage = urlArray[0] + "//" + urlArray[2] + "/";
    var faqPage = homePage + "faq"; // URL of the FAQ page

    // Check if there is an element with the ID #auto-faq on the current page
    var $autoFaq = $("#auto-faq");

    if ($autoFaq.length > 0) {
        fetch(faqPage)
            .then(response => response.text())
            .then(data => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(data, 'text/html');
                var $faqSection = $(doc).find("#faq").first();

                // Append the FAQ section to the #auto-faq element
                $autoFaq.append($faqSection);

                // After appending the FAQ section, load the external script
                loadExternalScript("https://qohw4o.csb.app/payper/dropdown.js");
            })
            .catch(error => {
                console.error("Error loading FAQ from " + faqPage, error);
            });
    }
});

function loadExternalScript(scriptSrc) {
    var script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = function () {
        console.log("External script loaded successfully.");
    };
    script.onerror = function () {
        console.error("Error loading external script.");
    };
    document.body.appendChild(script);
}
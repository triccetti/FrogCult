// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function () {

    // setTimeout to simulate the delay from a real page load
    setTimeout(lazyLoad, 10);

    loadPortfolio();

});

function onSubmit(token) {
    document.getElementById("demo-form").submit();
    sendMinecraftReport();
}

function lazyLoad() {
    var card_images = document.querySelectorAll('.card-image');

    // loop over each card image
    card_images.forEach(function (card_image) {
        var image_url = card_image.getAttribute('data-image-full');
        var content_image = card_image.querySelector('img');

        if (!content_image.classList.contains('leaf')) {

            // change the src of the content image to load the new high res photo
            content_image.src = image_url;

            // listen for load event when the new photo is finished loading
            content_image.addEventListener('load', function () {
                // swap out the visible background image with the new fully downloaded photo
                card_image.style.backgroundImage = 'url(' + image_url + ')';
                // add a class to remove the blur filter to smoothly transition the image change
                card_image.className = card_image.className + ' is-loaded';
            });
        }
    });
}

function loadPortfolio() {
    var dir = "assets/portfolio/";
    var files = ["purrl.png", "peanut.png", "kirby.png", "killjoy.png", "TenaciousD.PNG", "kirb.png"];
    var photoHtml = document.getElementById('photos');
    if(photoHtml == null) return;
    var i = 0;
    files.forEach(photo => {

        var elem = document.createElement("img");
        elem.setAttribute("src", dir + photo);
        elem.setAttribute("class", "portfolioImage");
        elem.setAttribute("alt", i++);
        photoHtml.appendChild(elem);
    });

}

function sendMinecraftReport() {
 
}

function showCommissionForm() {
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('Commissions').style.display = 'none';
    document.getElementById('pricing').style.display = 'none';
    document.getElementById('commissionForm').style.display = '';
}

function showPortfolio() {

    document.getElementById('portfolio').style.display = '';
    document.getElementById('commissionForm').style.display = 'none';
    document.getElementById('pricing').style.display = 'none';
}

function showPricing() {
    document.getElementById('pricing').style.display = '';
    document.getElementById('commissionForm').style.display = 'none';
    document.getElementById('portfolio').style.display = 'none';
}

function showCommissionMenu() {
    document.getElementById('portfolio').style.display = '';
    document.getElementById('Commissions').style.display = '';
    document.getElementById('commissionForm').style.display = 'none'; 
}


function showForm() {
    document.getElementById('form-div').style.display = '';
    document.getElementById('reportSuccess').style.display = 'none';
}

/* MINECRAFT TAB */
function showMap() {
    document.getElementById('map').style.display = '';
    document.getElementById('join').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('report').style.display = 'none';
    document.getElementById('howTo').style.display = 'none';
}

function showJoin() {
    document.getElementById('join').style.display = '';
    document.getElementById('map').style.display = 'none';
    document.getElementById('report').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('howTo').style.display = 'none';
}
function showTutorials() {
    document.getElementById('join').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('report').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('howTo').style.display = '';
}


function showReport() {
    document.getElementById('join').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('howTo').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('report').style.display = '';
}

function showRules() {
    document.getElementById('join').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('howTo').style.display = 'none';
    document.getElementById('report').style.display = 'none';
    document.getElementById('rules').style.display = '';
}
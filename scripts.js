// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function() {
	
	// setTimeout to simulate the delay from a real page load
	setTimeout(lazyLoad, 10);
	
});

const discordReportHook = "https://discord.com/api/webhooks/988160587173363762/PwmMGa7Casg8BjDVSKUZCfAF8_IEVJQaWmdDU3Scr7oZzZtHpKGcvYHE6efJJJHv5sGd";

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// loop over each card image
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');

        if(!content_image.classList.contains('leaf')) {
            
            // change the src of the content image to load the new high res photo
            content_image.src = image_url;
            
            // listen for load event when the new photo is finished loading
            content_image.addEventListener('load', function() {
                // swap out the visible background image with the new fully downloaded photo
                card_image.style.backgroundImage = 'url(' + image_url + ')';
                // add a class to remove the blur filter to smoothly transition the image change
                card_image.className = card_image.className + ' is-loaded';
            });
        }
	});
}

function showMain() {; 
    document.getElementById('main').style.display = ''; 

    document.getElementById('minecraft').style.display = 'none'
}

function showMinecraft() {
    document.getElementById('minecraft').style.display = ''; 
    
    document.getElementById('main').style.display = 'none'; 
}

function showMap() { 
    document.getElementById('map').style.display = ''; 
    document.getElementById('join').style.display = 'none'; 
    document.getElementById('report').style.display = 'none'; 
}

function showJoin() { 
    document.getElementById('join').style.display = ''; 
    document.getElementById('map').style.display = 'none'; 
    document.getElementById('report').style.display = 'none'; 
}


function showReport() { 
    document.getElementById('join').style.display = 'none'; 
    document.getElementById('map').style.display = 'none'; 
    document.getElementById('report').style.display = ''; 
}



function sendMinecraftReport() { 
    var name = document.getElementById('reportName').value;
    if(name == "") {
        name = "Anonymous"
    }

    var issue = document.getElementById('reportIssue').value;

    if(issue === '') {
        document.getElementById('issueText').display='';
    } else {

        var report = "Report made by: **" + name + "**\n" +
        ">>> " +  issue;



        const request = new XMLHttpRequest();
        request.open("POST", discordReportHook); 
        request.setRequestHeader('Content-type', 'application/json');
        request.onreadystatechange = function() {
            if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
                // successful
                console.log("success!");
                document.getElementById('reportSuccess').display='';
            }
        }
        const params = {
            username: "Frog Cult Complaint Bot",
            avatar_url: "",
            content: report
        } 
        
        request.send(JSON.stringify(params));

        
    }
}

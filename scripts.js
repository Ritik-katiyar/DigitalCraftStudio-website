// Smooth scrolling for navigation links
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Form validation
$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var errorMessage = "";

        // Validate name
        if (name.trim() === '') {
            errorMessage += "Name is required.\n";
        }

        // Validate email
        if (email.trim() === '') {
            errorMessage += "Email is required.\n";
        } else if (!isValidEmail(email)) {
            errorMessage += "Invalid email address.\n";
        }

        // Validate message
        if (message.trim() === '') {
            errorMessage += "Message is required.\n";
        }

        if (errorMessage !== "") {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryOverlay = document.querySelector('.gallery-overlay');
    const expandedImage = document.querySelector('.expanded-image');
    const closeButton = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.querySelector('.gallery-image').getAttribute('src');
            expandedImage.setAttribute('src', imageSrc);
            galleryOverlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        galleryOverlay.style.display = 'none';
    });
});


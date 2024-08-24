
    //AFIA TABASSUM
    //extra card show or hide
    document.getElementById("toggleProducts").addEventListener("click", function() {
        var extraProducts = document.querySelector(".extra-product-grid");
        var button = document.getElementById("toggleProducts");
        
        if (extraProducts.style.display === "none" || extraProducts.style.display === "") {
            extraProducts.style.display = "grid";
            button.textContent = "See Less Products";
        } else {
            extraProducts.style.display = "none";
            button.textContent = "See More Products";
        }
    });

    //Subscription message
    document.getElementById('subscribe-btn').addEventListener('click', function() {
        var email = document.getElementById('email').value;
        var message = document.getElementById('message');
        
        if (email.trim() === "") {
            message.textContent = "Enter your email.";
            message.style.color = "red";
            message.style.display = "block";
        } else {
            message.textContent = "Subscription successful!";
            message.style.color = "white";
            message.style.display = "block";
        }
    });


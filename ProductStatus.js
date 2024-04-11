document.addEventListener('DOMContentLoaded', function() {
    // Sample product status data
    var productStatusData = [
        {
            product: 'Floral Beauty Palette',
            status: 'In Stock',
            availability: 'Ready to Ship',
            image: 'floral_beauty_palette',width:100,height:100 , // Replace with actual image file name
        
           },
        // Add more product status data as needed
    ];

    var productStatusContainer = document.querySelector('.product-status');

    // Loop through the product status data and create HTML elements
    productStatusData.forEach(function(item) {
        var productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        var image = document.createElement('img');
        image.src = 'product_3.jpeg' // Set the image source
        image.alt ='product_3'; // Set the alt attribute
        productDiv.appendChild(image);


        var title = document.createElement('h3');
        title.textContent = item.product;
        productDiv.appendChild(title);

        var status = document.createElement('p');
        status.textContent = 'Status: ' + item.status;
        productDiv.appendChild(status);

        var availability = document.createElement('p');
        availability.textContent = 'Availability: ' + item.availability;
        productDiv.appendChild(availability);

        productStatusContainer.appendChild(productDiv);
    });
});
function goToHomePage() {
  
    window.location.href = "client.html"; 
  }
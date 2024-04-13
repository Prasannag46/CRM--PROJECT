
function toggleProfileOptions() {
    var profileOptions = document.getElementById('profileOptions');
    if (profileOptions.style.display === 'none') {
        profileOptions.style.display = 'block';
    } else {
        profileOptions.style.display = 'none';
    }
}

function goToHomePage() {
  
    window.location.href = "client.html"; 

}
function showPastOrders(){
    window.location.href = "PastOrders.html"; 
}
function showProductStatus(){
    window.location.href= "ProductStatus.html";

}
function showRaiseComplaint(){
    window.location.href= "RaiseComplaint.html";

}
function showFAQ(){
    window.location.href= "FAQ.html";

}
function showFeedbackandReviews(){
    window.location.href= "FeedbackandReviews.html";

}
function showComplaintAnswers(){
    window.location.href= "ComplaintAnswers.html";

}



function showUserProfile() {
    // Assuming you have user data stored somewhere, replace these placeholders with actual user data retrieval
    var firstName = "John";
    var lastName = "Doe";
    var email = "john.doe@example.com";
    var mobileNumber = "+1234567890";

    // Construct user information HTML
    var userProfileHTML = "<h2>My Profile</h2>";
    userProfileHTML += "<p>First Name: " + firstName + "</p>";
    userProfileHTML += "<p>Last Name: " + lastName + "</p>";
    userProfileHTML += "<p>Email: " + email + "</p>";
    userProfileHTML += "<p>Mobile Number: " + mobileNumber + "</p>";
    userProfileHTML += "<button onclick='goToHomePage()'>Home</button>";

    // Display user profile information
    document.getElementById('profileOptions').innerHTML = userProfileHTML;
    document.getElementById('profileOptions').style.display = 'block';
    
}
document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Here you can add JavaScript code to handle form submission, like sending the data to a server or performing validation
    
    // For now, let's just display a message to indicate the form submission
    alert('Complaint submitted successfully!');
  });
  function goToHomePage() {
  
    window.location.href = "client.html"; 
  }
function showCompanyModule() {
    hideAllModules();
    document.getElementById("company-module").classList.remove("hidden");
}

function showClientModule() {
    hideAllModules();
    document.getElementById("client-module").classList.remove("hidden");
}


function hideAllModules() {
    document.getElementById("company-module").classList.add("hidden");
    document.getElementById("client-module").classList.add("hidden");
}

function showCompanySignup() {
    openDetailsPage("Company Registration", "Enter Company Details:",true);
}

function showCompanyLogin() {
    openDetailsPage("Company Login", "Enter Login Details:");
    
}
function showCompanyForgotPassword() {
    openDetailsPage("Forgot Password", "Enter Company Username for Password Reset:");
}



function showClientLogin() {
    openDetailsPage("Client Login", "Enter Login Details:");



}
function showClientForgotPassword() {
    openDetailsPage("Forgot Password", "Enter Client Username for Password Reset:");
}


function showClientSignup() {
    openDetailsPage("Client Registration", "Enter Client Details:",true);
}

function openDetailsPage(title, promptMessage,isRegistration) {
    hideAllModules();

    var detailsWindow = window.open("", "_blank", );
    detailsWindow.document.write(`
        <html>
            <head>
                <title>${title}</title>
                <style>
                    body {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        margin: 0;
                        background-image: url('crm\ image.jpeg');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        font-family: 'Arial', sans-serif;
                    }
                    form {
                        background-color:#16BBE9;
                        padding: 20px;
                        border-radius: 8px;
                        width:300px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    h2 {
                        text-align:center;
                        top:20px;
                        color:#191970;
                        position:absolute
                    
                    
                    }
                    label {
                       
                        margin-bottom: 8px;
                        color: #fff;
                    }
                    input {
                        padding: 10px;
                        margin-bottom: 16px;
                        width: 100%;
                        box-sizing: border-box;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    button {
                        padding: 10px;
                        background-color: #2ecc71;
                        color: #fff;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    button:hover {
                        background-color:#192841;
                    }
                    .link {
                        margin-top: 10px;
                        text-align: center;
                        color: #fff;
                        text-decoration:underline;
                        cursor:pointer;
                    }
                </style>
            </head>
            <body>
                <h2>${title}</h2>
               
                <form>
                    
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    
            
                    ${isRegistration ? `
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required>

                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" required>

                        <label for="mobile">Mobile:</label>
                        <input type="number" id="mobile" name="mobile" required>` : ''}


                    <button type="button" onclick="submitDetails()">Submit</button>
                    <div class="link" onclick="showCompanyLogin()">Back to Login</div>
                    <div class="link" onclick="showCompanyForgotPassword()">Forgot Password</div>
                </form>
                
            </body>
        </html>
    `);
    
    function submitDetails() {
        var username = detailsWindow.document.getElementById("username").value;
        var password = detailsWindow.document.getElementById("password").value;
        var firstName = detailsWindow.document.getElementById("firstName").value;
        var lastName = detailsWindow.document.getElementById("lastName").value;
        var mobile = detailsWindow.document.getElementById("mobile").value;

    
        alert('${title} - Feature to be implemented.\nUsername: ${username}\nFirst Name: ${firstName}\nLast Name: ${LastName}\nMobile:${mobile}');
        
        detailsWindow.close();
    }

    function openLogin() {
        detailsWindow.close();
        showClientLogin(); 
        showCompanyLogin();
    }
}
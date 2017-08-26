$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBbx5cWQJCYzT9zd8Q93YDOVAedyzhhGlw",
        authDomain: "portfolio-db-e196e.firebaseapp.com",
        databaseURL: "https://portfolio-db-e196e.firebaseio.com",
        projectId: "portfolio-db-e196e",
        storageBucket: "portfolio-db-e196e.appspot.com",
        messagingSenderId: "94909041126"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $('#form-submit').on('click', function (event) {
        var nameInput = $('#name').val().trim();

        var emailInput = $('#email').val().trim();

        var messageInput = $('#message').val().trim();

        database.ref().push({
            name: nameInput,
            email: emailInput,
            message: messageInput,
        });

    });

    database.ref().on('child_added', function(childSnapshot) {
        
        var name = childSnapshot.val().name;
        var email = childSnapshot.val().email;
        var message = childSnapshot.val().message;
    });

});
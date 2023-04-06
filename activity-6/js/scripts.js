var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
}

var data = [
    {
        type: messageType.out,
        user: 'Marcelo',
        message: 'Hey, you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'John Doe',
        message: 'Hi Marcelo! No, how about QDoba?'
    },
    {
        type: messageType.out,
        user: 'Marcelo',
        message: "Sound good! Let's go"
    }
];

function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
};

//function to create and return an element for the supplied message
function CreateMessageElement(message){
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type
    messageEl.className = message.type;

    return messageEl;
};

//Button clicked function
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    //Determine message type and set message
    switch(event.target.id){
        case 'send-button':
            user = 'Marcelo';
            type = messageType.out;
            break;

        case 'reply-button':
            user = 'John Doe';
            type = messageType.in;
            break;
        
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    //Create new message
    if(messageInput.value != ''){
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = CreateMessageElement(message);

        //Add message element to the DOM
        messageContainerEl.appendChild(el);

        //Reset input
        messageInput.value = '';
    }
};

//Load seed data array above
function loadSeedData(){
    for(var i = 0; i < data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //Load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for(var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = CreateMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
};

var init = function(){
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //Load seed data from data array
    loadSeedData();
};

init();

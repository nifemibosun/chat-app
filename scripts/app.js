const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const updateNameForm = document.querySelector('.update-username');
const updateMessage = document.querySelector('.name-update');
const rooms = document.querySelector('.rooms')


//adding new chats to UI
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    if (message){
        chatroom.addNewChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
    }
});


//update username
updateNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = updateNameForm.username.value.trim();
    chatroom.updateUsername(username)

    updateNameForm.reset();

    updateMessage.innerText = `Your username is now ${username}`

    //set timeout for showing name update
    setTimeout(() => updateMessage.innerText = '', 3000)
});

//Changing the chatroom according to users choice
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        UI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => UI.commit(chat));
    }
});


//Local Storage
const username = localStorage.username ? localStorage.username : '_Anon_';

//chatUI and ChatRoom instances
const UI = new chatUI(chatList);
const chatroom = new ChatRoom(username, 'Info');

//adding chats to the user interface
chatroom.getChats(data => UI.commit(data));



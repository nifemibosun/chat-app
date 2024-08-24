// Chatroom class 
class ChatRoom {
    constructor(username, room) {
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addNewChat(message) {
        const now = new Date();
        const chat = {
            message,
            room : this.room,
            username : this.username,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.chats.add(chat);
        return response;
    };

    getChats(onChatAdded){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        onChatAdded(change.doc.data())
                    }
                });
            });
    }

    updateUsername(username){
        this.username = username
        //save username in local storage
        localStorage.setItem('username', username)
    }

    updateRoom(room){
        this.room = room
        if(this.unsub){
            this.unsub();
        }
        
    }
}

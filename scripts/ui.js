// UI class

class chatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }

    commit(data){
        const time = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix : true }
        );
        const html = `
            <li class="list-group-item form-control">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${time}</div>
            </li>
        `;

        this.list.innerHTML += html;
    }

}
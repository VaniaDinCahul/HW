class User {

    static all = []

    static findByName (name) {
        return User.all.find(user => user.username === name)
    }

    static findByAgeRange(minAge, maxRange) {
        let list = []
        User.all.forEach(function(fUser) {
          if (fUser.age >= minAge && fUser.age <= maxRange) {
            list.push(fUser);
          }
        })
        return list
    }
    constructor(username, age, isOnline){
        this.username   = username
        this.age        = age
        this.isOnline   = isOnline
        this.friends    = []

        User.all.push(this)
    }

    findByFriendName (name) {
        return this.friends.find( user => user.username === name)
    }

    addFriend (user) {

        if (!(this.friends.find(user => user === user))) {
            this.friends.push(user)
        }
        if (!(user.friends.find(user => this === this))) {
            user.friends.push(this)
        }
    }

    removeFriend (user) {
        if (this.friends.find(user => user === user)) {
            this.friends.slice(user)
        }
        if (user.friends.find(user => this === this)) {
            user.friends.slice(this)
        }
    }

    removeFriendByName (name) {
        if (this.friends.find(user => user.username === name)) {
            this.friends.slice(name)
        }
        if (user.friends.find( user => this.username === this)) {
            user.friends.slice(this)
        }
    }

    render () {
        console.log('[$(this.name)] ${this.online ? "O": "o"}')
    }
}
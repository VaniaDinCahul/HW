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
        this.isOnline   = false
        this.friends    = {}

        User.all.push(this)
    }

    findByFriendName (name) {
        return this.friends.find( user => user.username === name)
    }

    addFriend (user) {
        if (!(this.friends.find(user))) {
            this.friends.push(user)
        }
        if (!(user.friends.find(this))) {
            user.friends.push(this)
        }
    }

    removeFriend (user) {
        if (this.friends.find(user)) {
            this.friends.slice(user)
        }
        if (user.friends.find(this)) {
            user.friends.slice(this)
        }
    }

    render () {
        console.log('[$(this.name)] ${this.online ? "O": "o"}')
    }
}
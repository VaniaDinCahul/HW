const friends = [
    "jonny",
    "marry",
    "ana"
]

const friendPanel = document.getElementById('friendsPanel')
const searchInput = friendPanel.children[1]

const renderFriends = (parentElement, friends) => {
    let ul = document.createElement("ul")
    friends.array.forEach(friend => {
        let li = document.createElement("li")
        li.innerText = friend
        ul.append(li)
    parentElement.append(ul)
    });
}

searchInput.onkeyup = () => {
 console.log(searchInput.value)
}
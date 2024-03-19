let Likes = 0;
const LikeText = document.getElementById("likePanel").children[0]
const onLikeBtnClick = () => {
    Likes = Likes + 1
    LikeText.innerText = 'Likes: ' + Likes
}

const onDislikeBtnClick = () => {
    if (Likes - 1 >= 0) {
        Likes = Likes - 1
        LikeText.innerText = 'Likes: ' + Likes
    }
}
export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);

        // Persis data in localStorange
        this.persisData();
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        // Persis data in localStorange
        this.persisData();
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persisData () {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorange() {
        const storange = JSON.parse(localStorage.getItem('likes'));

        // Restore likes from the localStorange
        if (storange) this.likes = storange;
    }
}
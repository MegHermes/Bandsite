const arrComment = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"
    }
];

function getCurrentTimeStamp() {
    const timeStamp = new Date();
    const mm = String(timeStamp.getMonth() + 1).padStart(2, "0");
    const dd = String(timeStamp.getDate()).padStart(2, "0");
    const yyyy = timeStamp.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
}

const form = document.querySelector(".comments__input-info-form");
const commentDiv = document.querySelector(".comments__section");

function createCommentElement(comment) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");

    const mainImg = document.createElement("img");
    mainImg.classList.add("comments__new-image");
    mainDiv.appendChild(mainImg);

    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    const mainName = document.createElement("h2");
    mainName.innerText = comment.name;
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    const mainTime = document.createElement("aside");
    mainTime.innerText = comment.date;
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    const mainP = document.createElement("p");
    mainP.innerText = comment.comment;
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);

    return mainDiv;
}

function displayComments(comments) {
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentDiv.appendChild(commentElement);
    });
}

displayComments(arrComment);

form.addEventListener("submit", newPost => {
    newPost.preventDefault();

    const newComment = {
        name: newPost.target.name.value,
        comment: newPost.target.comment.value,
        date: getCurrentTimeStamp()
    };

    const newCommentElement = createCommentElement(newComment);
    commentDiv.insertBefore(newCommentElement, commentDiv.childNodes[0]);

    form.reset();
});

console.log(arrComment);

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const container = document.getElementById("container");

for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    createElem(i)
    
}

// posts.forEach(() => {
//     createElem();
// })


/////// FUNZIONI //////

function createElem(index){
    // CREAZIONE POST
    const newDivPost = document.createElement("div");
    newDivPost.classList.add("post")
    // console.log(newDivPost);
    container.append(newDivPost);
    // console.log(container);

    //*********** CREAZIONE POST HEADER ****************/ 
    const divPostHeader = document.createElement("div");
    divPostHeader.classList.add("post__header");
    // console.log(divPostHeader);
    newDivPost.append(divPostHeader);
    // console.log(divPostHeader);

    // CREAZIONE BOX DETTAGLI
    // dentro div post-meta ci sono due div
    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");
    divPostHeader.append(postMeta);

    // ICONA
    // primo div post-meta__icon
    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");
    postMeta.append(postMetaIcon);
    // IMMAGINE ICONA
    // dentro al div post-meta__icon c'è un immagine
    const imgIcon = document.createElement("img");
    imgIcon.src = posts[index].author["image"];
    imgIcon.classList.add("profile-pic");
    postMetaIcon.append(imgIcon);


    // BOX INFO
    // secondo div post-meta__data
    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");
    postMeta.append(postMetaData);
    // in questo div post-meta__data abbiamo altri due div

    // AUTORE
    // primo div dentro post-meta__data
    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");
    postMetaData.append(postMetaAuthor);
    postMetaAuthor.innerText = posts[index].author["name"];

    // DATA
    // secondo div dentro post-meta__data
    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    postMetaData.append(postMetaTime);
    postMetaTime.innerText = posts[index].created;

    // *************************************

    // *************BODY POST*********//
    // PARAGRAFO BODY POST
    const postText = document.createElement("div");
    postText.classList.add("post__text");
    newDivPost.append(postText);
    postText.innerText = posts[index].content;

    // IMMAGINE BODY POST
    const imgPost = document.createElement("img");
    imgPost.classList.add("post__image");
    imgPost.src = posts[index].media;
    newDivPost.append(imgPost);
    // ************************************

    // ************** POST FOOTER *************//
    // POST FOOTER BOX
    const footerBox = document.createElement("div");
    footerBox.classList.add("post__footer");
    newDivPost.append(footerBox);

    //************* LIKE BOX ************/ 
    const likeBox = document.createElement("div");
    likeBox.classList.add("likes", "js-like");
    footerBox.append(likeBox);

    //****** LIKE CTA BOX ********/  
    const likeAction = document.createElement("div");
    likeAction.classList.add("likes__cta");
    likeAction.setAttribute("id","likeCTA");
    likeBox.append(likeAction);


    // LINK BOTTONI
    const linkButtons =document.createElement("a");
    linkButtons.classList.add("like-button","js-likes-button");
    linkButtons.href ="#";
    linkButtons.setAttribute("data-postid",posts[index].id);
    likeAction.append(linkButtons);

    // ****BOTTONI****//
    // BOTTONE MI PIACE
    const likeButton = document.createElement("i");
    likeButton.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    likeButton.setAttribute("id","thumbsUp");
    linkButtons.append(likeButton);

    // SCRITTA MI PIACE
    const likeText = document.createElement("span");
    likeText.classList.add("like-button__label");
    likeText.innerText = "Mi Piace";
    linkButtons.append(likeText);

    // ************
    // CONTATORE LIKES BOX
    const counterBox = document.createElement("div");
    counterBox.classList.add("likes__counter");
    likeBox.append(counterBox);

    // LIKE COUNTER
    const likeCounter = document.createElement("span");
    likeCounter.classList.add("js-likes-counter");
    likeCounter.setAttribute("id","like-counter-1");
    likeCounter.innerText = posts[index].likes;
    counterBox.innerText = `Piace a ${likeCounter} persone`;

}

// ********** EVENTI ********

document.getElementById("likeCTA").addEventListener("click",function(){
    const thumbsUp = document.getElementById("thumbsUp");
    thumbsUp.style.color = "red"
})
function getArticleGenerator(articles) {
let counter = 0;
let article = document.getElementById("content");

    function showNext() {
        debugger
        if(counter<articles.length) {
         a = document.createElement("article");
        a.textContent = articles[counter];
        console.log(a);
        counter++
        article.appendChild(a)
        return article;
    }
        return

    }

    return showNext;
}

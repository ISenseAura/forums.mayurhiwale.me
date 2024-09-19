let id = window.location.search.replace("?id=","").split("|")[0];
let cat = window.location.search.replace("?id=","").split("|")[1];


function loadContent() {
    fetch(API + "forums").then( async(res) => {
        let data = await res.json();
        setTopics(data[cat][id])
    })
}

function setTopics(forum) {
    let topics = forum
    console.log(topics.topics)
    let html = ``;
    document.getElementById("navF").innerHTML = `<span><a href="/">Forums</a> >> <a href="/posts.html?id=${id}|${cat}">${forum.name}</a> </span>
`
    if(topics.topics) {
        Object.values(topics.topics).forEach((topic) => {
html += ` <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="/detail.html?id=${id}|${cat}|${topic.id}">${topic.title}</a>
                    <br>
                    <span>Started by <b><a href="">${topic.user.name}</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">${topic.user.name}</a></b>
                </div>
            </div>`
        })
    }
    console.log(html)
    document.getElementById("topicsList").innerHTML += html
   


}





loadContent();
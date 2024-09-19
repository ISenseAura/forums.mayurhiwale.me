let id = window.location.search.replace("?id=","").split("|")[0];
let cat = window.location.search.replace("?id=","").split("|")[1];
let topic = window.location.search.replace("?id=","").split("|")[2];



function loadContent() {
    fetch(API + "forums").then( async(res) => {
        let data = await res.json();
        setMessages(data[cat][id])
    })
}


function setMessages(forum) {
let msgs = forum.topics[topic].messages;
let html = ``

document.getElementById("navF").innerHTML = `<span><a href="/">Forums</a> >> <a href="/posts.html?id=${id}|${cat}">${forum.name}</a> >> <a href="">${forum.topics[topic].title}</a></span>
`
document.getElementById("topicName").innerHTML = forum.topics[topic].title
msgs.forEach((msg) => {
    html += `  <div class="body">
                <div class="authors">
                    <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt=""> <br>
                    <a> ${msg.user.name} </a>
                    <div class="subtext">Admin</div>
                   
                </div>
                <div class="content">
                                    <div class="subtext"> ${new Date(msg.time)}</div>

                    ${msg.content}
                    <div class="comment">
                        <button onclick="showComment()">Comment</button>
                    </div>
                </div>
            </div>`
})

document.getElementById("msgsList").innerHTML += html
}

loadContent();
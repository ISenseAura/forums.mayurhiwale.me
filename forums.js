function loadContent() {
    fetch(API + "forums").then( async(res) => {
        let data = await res.json();
        console.log(data)
        setForums(data)
    })
}


function setForums(forums) {
    let cats = Object.keys(forums);
    let html = ``;
    cats.forEach((cat) => {
        html += ` <div class="subforum">
            <div class="subforum-title">
                <h1>${forums[cat].name}</h1>
            </div>`;

            let frs = forums[cat];
            console.log(frs)
            if(frs) Object.values(frs).forEach((fr) => {
                console.log(fr)
if(typeof fr == typeof {}){
    
    let highlightedTopics = ``;
   

    let topics = fr.topics;
    if(topics) {
highlightedTopics += ` <div style="display: inline-flex;">
    <ul style="margin: 4px;">`;
        Object.values(fr.topics).forEach((topic) => {
            highlightedTopics += `<li><a class="sublink" href="/detail.html?id=${fr.id}|${cat}|${topic.id}"> ${topic.title} </a></li>
`
        })
        highlightedTopics += `</ul> </div>`
    }

    html += `          <div class="subforum-row">
                <div class="subforum-icon subforum-column center">
                    <i class="fa fa-car center"></i>
                </div>
                <div class="subforum-description subforum-column">
                    <h4><a href="/posts.html?id=${fr.id}|${cat}">${fr.name}</a></h4>
                    ${highlightedTopics}
                </div>
                <div class="subforum-stats subforum-column center">
                    <span>24 Posts | 12 Topics</span>
                </div>
                <div class="subforum-info subforum-column">
                    <b><a href="">Last post</a></b> by <a href="">${fr.user.name}</a> 
                    <br>on <small>12 Dec 2020</small>
                </div>
            </div>
            <hr class="subforum-devider">`
}
            })

    })

    html += `</div>`

    document.getElementById("forumList").innerHTML = html;

}

loadContent()
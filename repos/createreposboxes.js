$.getJSON("repos.json", function(json) {
    let repoGrid = document.getElementsByClassName("repogrid")
    for (let item of json.repos) {
        // Create box
        let repoBox = document.createElement('div');
        repoBox.classList.add("repo");
        repoGrid[0].appendChild(repoBox);

        // Add title
        let repoTitle = document.createTextNode(item.title);
        //repoTitle.classList.add("repotext");
        repoBox.appendChild(repoTitle);
        
    }
});
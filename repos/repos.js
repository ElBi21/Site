document.addEventListener("DOMContentLoaded", function () {
    fetch('repos.json')
        .then(response => response.json())
        .then(data => {
            let repoGrid = document.getElementsByClassName("repogrid")
            for (let item of data.repos) {
                // Create box
                let repoBox = document.createElement('div');
                repoBox.classList.add("repo");
                repoGrid[0].appendChild(repoBox);

                // Create title DIV
                let repoTitleBox = document.createElement("div");
                repoTitleBox.classList.add("repotitlebox");
                repoBox.appendChild(repoTitleBox)

                // Add title
                let repoTextTitle = document.createElement("p");
                repoTextTitle.textContent = `${item.title}`;
                repoTextTitle.classList.add("repotext");
                repoTitleBox.appendChild(repoTextTitle);
                
                // Add link
                let repoLinkImg = document.createElement("img");
                repoLinkImg.src = "github.svg";
                repoLinkImg.classList.add("repolinkimage");
                repoTitleBox.appendChild(repoLinkImg);
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
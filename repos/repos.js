document.addEventListener("DOMContentLoaded", function () {
    fetch('repos/repos.json')
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

                // Add link
                let repoLinkImg = document.createElement("img");
                repoLinkImg.src = "repos/github.svg";
                repoLinkImg.classList.add("repolinkimage");
                repoTitleBox.appendChild(repoLinkImg);

                // Add title
                let repoTextTitle = document.createElement("p");
                repoTextTitle.textContent = `${item.title}`;
                repoTextTitle.classList.add("repotitle");
                repoTitleBox.appendChild(repoTextTitle);

                // Add languages
                let repoLangsBox = document.createElement("div");
                repoLangsBox.classList.add("repolangsbox");
                repoBox.appendChild(repoLangsBox);

                let repoLangBar = document.createElement("div");
                repoLangBar.classList.add("repolangsbar");
                repoLangsBox.appendChild(repoLangBar);

                let repoLangs = document.createElement("div");
                repoLangs.classList.add("repolangs");
                repoLangsBox.appendChild(repoLangs);

                fetch("repos/colors.json").then(responseCol => {
                    responseCol.json().then(dataCol => {
                        for (let lang in item.languages) {
                            langColor = dataCol[lang].color;
                            //console.log(`${item.title}: ${lang} (${item.languages[lang]}) - ${langColor}`);
                            let langDiv = document.createElement("div");
                            langDiv.style.cssText = "height: 10px; display: flex; flex-direction: row; align-items: center";

                            let langDot = document.createElement("div");
                            langDot.classList.add("repolangdot");
                            langDot.style.backgroundColor = `${langColor}`

                            let langName = document.createElement("p");
                            langName.textContent = `${lang}`;
                            langName.classList.add("repolangtext");

                            langDiv.appendChild(langDot);
                            langDiv.appendChild(langName);
                            repoLangs.appendChild(langDiv);
                            
                            let langBar = document.createElement("div");
                            langBar.classList.add("reposinglelangbar");
                            langBar.style.backgroundColor = `${langColor}`
                            langBar.style.width = item.languages[lang];
                            repoLangBar.appendChild(langBar);

                            function changeShadowIn(repoHovered) {
                                repoHovered.style.transform = `box-shadow: 0px 5px 10px ${langColor}`
                            }

                            function changeShadowOut(repoHovered) {
                                repoHovered.style.transform = "box-shadow: 0px 5px 10px rgb(134, 132, 132);"
                            }
                        }
                    })
                })
                
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
import repos from "repos.json"

for (let item in repos) {
    console.log(item.title)
}


//const app = document.getElementById("repotest");
/*    repos.forEach((obj) => {
        const node = document.createElement("P");                // Create a <p> node
        const textNode = document.createTextNode(obj.text);      // Create a text node
        node.appendChild(textNode);                              // Append the text to your <p> node
        node.setAttribute("id", obj.id);                         // Create an id

        app.appendChild(node);                                  // Append node that you created to the root <div>
    });
*/
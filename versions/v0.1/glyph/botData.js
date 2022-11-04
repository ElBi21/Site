function botGuilds () {
  fetch('https://discordapp.com/api/users/@me/guilds', { headers: { Authorization: "Bot ODAxNzUzMjQyNTkyNzM5MzI4.YAlQ5A.3_P18m9gTBjIAclWzuTPCeJI0Hg"}})
     .then(response => response.json())
     .then(data => document.getElementById('botGuildsString').innerHTML = `${data.length} Guilds`);
}

function test () {
  let result = fetch('https://ow-api.com/v1/stats/pc/us/ElBi21-2346/profile')
  console.log(result)
  document.getElementById('botGuildsString').innerHTML = result
}

botGuilds()
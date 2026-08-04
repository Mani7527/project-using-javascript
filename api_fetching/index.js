const btn = document.getElementById("searchBtn");
const input = document.getElementById("username");
const card = document.getElementById("card");

btn.addEventListener("click", getUser);

async function getUser() {

    const username = input.value.trim();

    if(username===""){
        alert("Please enter a username");
        return;
    }

    try{

        const response = await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok){
            throw new Error("User not found");
        }

        const data = await response.json();

        displayUser(data);

    }catch(error){

        card.innerHTML = `
        <p class="error">${error.message}</p>
        `;

    }

}

function displayUser(user){

    card.innerHTML = `
    <div class="card">

        <img src="${user.avatar_url}" alt="avatar">

        <h2>${user.name || "No Name"}</h2>

        <p>@${user.login}</p>

        <p>${user.bio || "No Bio Available"}</p>

        <br>

        <p>📦 Repositories : ${user.public_repos}</p>

        <p>👥 Followers : ${user.followers}</p>

        <p>➡ Following : ${user.following}</p>

        <p>📍 ${user.location || "Unknown"}</p>

        <br>

        <a href="${user.html_url}" target="_blank">
            Visit Profile
        </a>

    </div>
    `;
}
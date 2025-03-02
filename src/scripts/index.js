import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const inEnterKeyPressed = key === 13

    if(inEnterKeyPressed){
        getUserProfile(userName)
    }
})

async function getUserProfile(userName){



    const userResponse = await getRepositories(userName)
    user.setInfo(userResponse)
    user.repositories
    
    // .then(reposData => {
    // //     console.log(reposData)
    // })

    // getUser(userName).then(userData => {
    //     let userInfo =`
    //     <div class="info">
    //     <img src="${userData.avatar_url}" alt="Foto do Perfil do Usuário" />
    //         <div class="data">
    //             <h1>${userData.name ?? 'Não possui nome cadastrado 🥲'}</h1>
    //                 <p>${userData.bio ?? 'Não possui bio cadastrada 🥲'}</p>
    //         </div>
    //     </div>`

    //     document.querySelector('.profile-data').innerHTML = userInfo

    //     getUserRepositories(userName)
    // })
}

function getUserRepositories (userName){
    getRepositories(userName).then(reposData => {
        let repositoriesItens = ""
        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })

        document.querySelector('.profile-data').innerHTML += `
        <div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
        </div>`
    })

}


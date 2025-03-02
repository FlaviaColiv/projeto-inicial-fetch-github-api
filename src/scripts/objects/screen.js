const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(){
        let userInfo = `
        <div class="info">
        <img src="${userData.avatar_url}" alt="Foto do Perfil do Usuário" />
            <div class="data">
                <h1>${userData.name ?? 'Não possui nome cadastrado 🥲'}</h1>
                    <p>${userData.bio ?? 'Não possui bio cadastrada 🥲'}</p>
            </div>
        </div>`
    }
}

export { screen }
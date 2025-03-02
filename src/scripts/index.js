async function user(){
    const response = await fetch('https://api.github.com/users/FlaviaColiv')
    return await response.json()
}

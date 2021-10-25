const linksSocialMedia = {
  github: 'GabiLeme',
  youtube: 'channel/UC0ogFToUn3Ks-auxR9qjsqw',
  facebook: 'gabriela.leme.5',
  instagram: 'gabi_p.leme',
  twitter: 'GabrielaPLeme'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https:/${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  //templete string
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //fetch bate na API e pega o retorno e fica com ele
  //para acessarmos temos que utilizar os promises (promesas) .then()
  fetch(url)
    //se der certo faça
    //response é uma variavel de função anonima (arrow function)
    //preciso pegar o que o fetch pegou e transformar em JSON, pois fect pega a informação e mantem em um objeto
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login //arrumar
    })

  //alert('oi')
}

getGitHubProfileInfos()

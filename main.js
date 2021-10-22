const linksSocialMedia = {
  github: 'GabiLeme',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'maykbrito',
  twitter: 'maykbrito'
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

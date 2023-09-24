const elemProjects = document.getElementById('project_content')

const createImage = (projectImage)=> {

    const elemPicture = document.createElement('picture')
    const elemImg = document.createElement('img')
    elemImg.setAttribute('src',projectImage)

        elemPicture.appendChild(elemImg)

        return elemPicture
}

const createStrong = (projectName)=>{
    const elemStrong = document.createElement('strong')
    elemStrong.innerText = project.name
    return elemStrong
}

const createTags = (projecTags)=>{
    const elemTags = document.createElement('div')
        projectTags.forEach(tag =>{
            const elemTag = document.createElement('span')
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)
        })
        return elemTags

}



const createProject = (project) => { const elemProject = document.createElement('a')
        
elemProject.setAttribute('href' , project.link)
elemProject.setAttribute('target' , '_blank')

elemProject.classList.add('project')

// adiciona imagem de capa
elemProject.appendChild(createImage(projectImage))

const elemStrong = document.createElement('strong')
elemStrong.innerText = projectName
//add nome do projeto
elemProject.appendChild(createStrong(projectName))


// add tags do projeto
elemProject.appendChild(createTags(projecTags))

elemProjects.appendChild(elemProject)

return elemProject

}



const loadProjects = (projects) =>{
    projects.forEach(project => {
        elemProjects.appendChild(createProject(project))
    });

}



fetch('./projects.json').then(response => response.json()).then(loadProjects)
const basePath = window.location.pathname.includes('pages') ? '../' : './';

let count = 0;

if (window.location.pathname.includes('pages')) {

    fetch(`${basePath}projects.json`)

    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {

            let project_all = document.querySelector('.projects');

            let technologiesHTML = '';
                project.technologies.forEach(technology => {
                    technologiesHTML += `
                    <div>
                        <img src="../assets/technologies/${technology}.svg" width="20px" alt="${technology}">
                    </div>`;        
            });  


            project_all.innerHTML +=
            `<a class="project" href="${project.link}">
                <div class="project_image" id="${project.id}">
                    <p>Technologies :</p>
                    <div class="technologies">
                        ${technologiesHTML}
                    </div>
                    <p>En savoir plus</p>                    
                </div>
                <h3>${project.name}</h3>
            </a>`;

        });
    })
    .catch(error => console.error(error));
} else {

    fetch(`${basePath}projects.json`)

    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {

            if (count >= 3) {
                return;
            }

            let project_all = document.querySelector('.projects');

            let technologiesHTML = '';
                project.technologies.forEach(technology => {
                    technologiesHTML += `
                    <div>
                        <img src="./assets/technologies/${technology}.svg" width="20px" alt="${technology}">
                    </div>`;        
            });  


            project_all.innerHTML +=
            `<a class="project" href="./pages/${project.link}">
                <div class="project_image" id="${project.id}">
                    <p>Technologies :</p>
                    <div class="technologies">
                        ${technologiesHTML}
                    </div>
                    <p>En savoir plus</p>                    
                </div>
                <h3>${project.name}</h3>
            </a>`;

            count++;

        });
    })
    .catch(error => console.error(error));

}
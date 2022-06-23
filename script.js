//navbar show and hide functionality on mobile
const navBtn = document.querySelector('#navbarNavBtn');
const navNav = document.querySelector('#navbarNav');

navBtn.addEventListener('click', () => {
  navNav.classList.toggle('open');
});

//project preview
const projectGrid = document.querySelector('.project-grid');
function displayPorjects(projects) {
  projects.map((project) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('col-lg-4', 'mb-5');

    projectItem.innerHTML = `<div class="project-item" id=${project.id}>
                    <div class="project-image">
                        <img src=${project.img} alt="">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href=${project.live} target="_blank" class="btn btn-preview">Preview</a>
                        <a href=${project.download} class="btn btn-download" target="_blank">Download</a>
                    </div>
                </div>`;

    projectGrid.appendChild(projectItem);
  });
}

//project data came from data.js file
displayPorjects(projectData);

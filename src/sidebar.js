const sidebar = () => {
    const container = document.getElementById('container');

    let Sidebar = document.querySelector('.sidebar');
    if (!Sidebar) {
        Sidebar = document.createElement('div');
        Sidebar.classList.add('sidebar')
        container.appendChild(Sidebar);
    };

    const taskRegistration = document.getElementById('taskRegistration')
    const sidebarOptionsSection = document.createElement('div')
    sidebarOptionsSection.classList.add('sidebarOptionsSection')
    Sidebar.appendChild(sidebarOptionsSection);
    const projectSectiondiv = document.createElement('div')
    projectSectiondiv.classList.add('projectSectiondiv')
    Sidebar.appendChild(projectSectiondiv)

    function sidebarOptions() {

        const addTask = document.createElement('button')
        addTask.classList.add('addtask')
        addTask.textContent = 'Add Task'
        sidebarOptionsSection.appendChild(addTask);

        addTask.addEventListener('click', () => {
            taskRegistration.showModal();
        })
    }

    function projectSection() {
        const projectTemplate = document.createElement('p')
        projectTemplate.textContent = 'Projects'
        projectTemplate.classList.add('projectTemplate')
        projectSectiondiv.appendChild(projectTemplate)
    }

    sidebarOptions();
    projectSection();
}

export { sidebar }
const projectGenerator = () => {
    let projects = ['project'];
    const formdata = document.getElementById('formdata');

    formdata.addEventListener('submit', (event) => {
        event.preventDefault();
        const chooseProject = document.getElementById('chooseProject').value.trim();
        if (!projects.includes(chooseProject) && chooseProject !== '') {
            projects.push(chooseProject);

            const projectSectiondiv = document.querySelector('.projectSectiondiv');
            const addProjectSection = document.createElement('div');
            addProjectSection.classList.add('addProjectSection');
            projectSectiondiv.appendChild(addProjectSection);

            const anProject = document.createElement('button');
            anProject.classList.add('anproject');
            anProject.textContent = `${chooseProject}`;
            addProjectSection.appendChild(anProject);

            const deleteproject = document.createElement('button');
            deleteproject.classList.add('deleteproject');
            deleteproject.textContent = `D`;
            addProjectSection.appendChild(deleteproject)

            deleteproject.addEventListener('click', () => {
                anProject.remove();
                deleteproject.remove();
                addProjectSection.remove();
            })

            anProject.addEventListener('click', () => {
                const allTasks = document.querySelectorAll('.cards');
                allTasks.forEach(task =>{
                    if(task.dataset.project !== chooseProject){
                        task.classList.add('hidden');
                    }else{
                        task.classList.remove('hidden'); 
                    }
                });
            });
        }
    })

    const input = document.getElementById('chooseProject');
    input.addEventListener('keyup', (e) => {
        removeElements();
        for (let i of projects) {
            if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
                const listItems = document.createElement('li');
                listItems.classList.add('list-item');
                listItems.style.cursor = 'pointer';
                listItems.addEventListener('click', () => {
                    displayNames(i);
                })

                let word = i
                listItems.innerHTML = word;
                document.getElementById("list").appendChild(listItems);
            }
        }

    })

    function displayNames(value) {
        input.value = value;
    }

    function removeElements() {
        let items = document.querySelectorAll(".list-item");
        items.forEach((item) => {
            item.remove();
        })
    }

}

export { projectGenerator }
export let projects = ['project'];
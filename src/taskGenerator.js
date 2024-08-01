import { projects } from "./project";

const taskgeneratingProcess = () => {
    const emptyarray = [];
    const container = document.getElementById('container');
    const description = document.getElementById('description');
    const due = document.getElementById('due');
    const urgency = document.getElementById('urgency');
    const Projectadd = document.getElementById('Projectadd')
    const cardDialog = document.getElementById('cardDialog');

    let divContainer = document.querySelector('.divContainer');
    if (!divContainer) {
        divContainer = document.createElement('div');
        divContainer.classList.add('divContainer')
        container.appendChild(divContainer);
    }
    const formdata = document.getElementById('formdata');


    function Task(taskname, taskdescription, duedate, chooseProject ,priority) {
        this.taskname = taskname;
        this.taskdescription = taskdescription;
        this.duedate = duedate;
        this.chooseProject = chooseProject;
        this.priority = priority;
    };

    function taskgenerateLogic() {
        formdata.addEventListener('submit', function (event) {
            event.preventDefault()

            const closeDialog = document.getElementById('closeDialog');

            const taskname = document.getElementById('taskName').value
            const taskdescription = document.getElementById('taskDescription').value
            const duedate = document.getElementById('taskdue').value
            const priority = document.getElementById('priority').value
            const chooseProject = document.getElementById('chooseProject').value

            const newtask = new Task(taskname, taskdescription, duedate, chooseProject ,priority);
            emptyarray.push(newtask)
            taskRegistration.close()

            do {
                const taskcard = document.createElement('div');
                taskcard.classList.add('cards');
                taskcard.dataset.project = chooseProject;
                divContainer.appendChild(taskcard);

                const nameOfTask = document.createElement('p');
                nameOfTask.classList.add('nameOfTask');
                nameOfTask.textContent = `${taskname}`;
                taskcard.appendChild(nameOfTask);

                const view = document.createElement('button');
                view.classList.add('view');
                view.textContent = `View`;
                taskcard.appendChild(view);

                const Delete = document.createElement('button');
                Delete.classList.add('delete');
                Delete.textContent = `Delete`;
                taskcard.appendChild(Delete);

                view.addEventListener('click', () => {
                    description.textContent = `Description of the task: "${taskdescription}"`;
                    due.textContent = `Due date of the task: "${duedate}"`;
                    Projectadd.textContent = `This task is of: "${chooseProject}" Project`
                    urgency.textContent = `the priority of the task is: "${priority}"`;

                    cardDialog.showModal()
                })

                closeDialog.addEventListener('click', () => {
                    cardDialog.close();
                })

                Delete.addEventListener('click', () => {
                    taskcard.remove();
                })



            } while (length.emptyarray);

            console.log(emptyarray);
        })
    }
    taskgenerateLogic();
}
export { taskgeneratingProcess };
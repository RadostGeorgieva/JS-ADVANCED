document.body.innerHTML = `
<main>
    <!-- HTML code provided -->
</main>
`;

result();

let elements = {
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
}
elements["addButton"] = document.getElementById("add");

//add first task
elements.task.value = "JS Advanced Exam";
elements.description.value = "Lern DOM, Unit Testing and Classes";
elements.date.value = "2020.04.08";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections[1];
let inProgress = sections[2];
let complete = sections[3];

//testing if task is added
assert.equal(open.children[1].children[0].children[0].textContent, "JS Advanced Exam", "'JS Advanced Exam' is missing in 'Open' section ");

//moving the task to "In Progress" section
let startBtn = open.children[1].children[0].children[3].children[0];
startBtn.click();

//testing if the task is in "In Progress" section
assert.equal(inProgress.children[1].children[0].children[1].textContent, "Description: Lern DOM, Unit Testing and Classes", "'Lern DOM, Unit Testing and Classes' is missing in 'In Progress' section ");

//moving the task to "Completed" section
let finishBtn = inProgress.children[1].children[0].children[3].children[1];
finishBtn.click();

//testing the task in "Completed" section
assert.equal(complete.children[1].children[0].children[2].textContent, "Due Date: 2020.04.08", "'2020.04.08' is missing in 'Completed' section ");

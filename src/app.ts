import Project from "./project";

const divApp = document.getElementById("app")! as HTMLDivElement;
function showTemplate(id: string) {
    const template = document.getElementById(id) as HTMLTemplateElement;
    divApp.innerHTML = template?.innerHTML;
}

const projects = [
    new Project("Project 1", "This is the first project", 3),
    new Project("Project 2", "This is the second project", 1),
    new Project("Project 3", "This is the third project", 5),
];

function showProjectList() {
    showTemplate("project-list");
    const rowTemplate = document.getElementById("single-project")! as HTMLTemplateElement;
    const projectList = divApp.querySelector("ul")! as HTMLUListElement;
    for (const p of projects) {
        const item = document.importNode(rowTemplate, true)! as HTMLElement;
        item.querySelector("li")!.textContent = p.title+" ("+p.people+")";
        projectList.appendChild(item);
    }
}

showProjectList();
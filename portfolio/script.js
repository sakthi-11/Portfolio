document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            alert(You clicked on ${project.querySelector('h3').innerText});
        });
    });
});
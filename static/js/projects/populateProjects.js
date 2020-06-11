// temporary fix (encoding issue)
project_data = project_data.replace(/&#39;/g,'"'); 
project_data = project_data.replace(/&#34;/g,'"');

// parse and populate the stored projects
project_data = JSON.parse(project_data);

var projectsWrapper = document.getElementById("projects");  
for (let i = 0; i < project_data.length; i++) {
    projectsWrapper.innerHTML += "<p>" + project_data[i].title + "</p>";
    projectsWrapper.innerHTML += "<p>" + project_data[i].description + "</p>";
    projectsWrapper.innerHTML += "<p>" + project_data[i].tags + "</p>";
    projectsWrapper.innerHTML += "<hr>"; 
}

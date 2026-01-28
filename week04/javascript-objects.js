let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "1", enrolled: 50, instructor: "Mickey Mouse" },
        { section: "2", enrolled: 100, instructor: "Minnie Mouse" }
    ]
};

function setCourseInfo(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");
    let rows = "";
    for (const section of course.sections) {
        rows += `<tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        </tr>`;
    }
    tbody.innerHTML = rows;
}
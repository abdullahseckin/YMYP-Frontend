get();

function get() {
    document.getElementById("blog").style.display = "none";
    document.getElementById("blog-loading").style.display = "block";
    //document.getElementById("spinner").style.display = "flex";
    document.getElementById("error").style.display = "none";
    setTimeout(()=> {
        axios.get("http://localhost:5000/api/get")
        .then(res => {
            const myData = res.data;
            console.log(myData);
            setMyInformation(myData.person);
            setMySkills(myData.skills);
            setMySocialMedias(myData.socialMedias);
            setMyWorkExperiences(myData.workExperiences);
            setEducations(myData.educations);

            document.getElementById("blog").style.display = "block";
            document.getElementById("blog-loading").style.display = "none";
            document.getElementById("spinner").style.display = "none";
        })
        .catch(err=> {
            console.log(err);
            document.getElementById("blog-loading").style.display = "none";
            document.getElementById("spinner").style.display = "none";
            document.getElementById("error").style.display = "flex";
        })
        
    },3000)


    
}

function tryAgain(){
    document.location.reload();
}

function setMyInformation(person) {
    document.getElementById("name").innerText = person.name;
    document.getElementById("title").innerText = person.title;
    document.getElementById("avatar").src = person.avatar;
    document.getElementById("phone").innerText = person.phone;
    document.getElementById("email").innerText = person.email;
    document.getElementById("address").innerText = person.address;
    document.getElementById("aboutMe").innerHTML = person.aboutMe;
}


function setMySkills(skills) {
    let text = "";
    for (let skill of skills) {
        text += `
                <li>
                    <div class="bar">
                        <p>${skill.title}</p>
                        <progress id="file" style="color:black" value="${skill.rate}" max="100"> ${skill.rate}% </progress>
                    </div>
                </li>
                `
    }

    document.getElementById("skills").innerHTML = text;
}

function setMySocialMedias(socialMedias) {
    let text = "";
    for (let social of socialMedias) {
        text += `
        <li class="social-media" title="${social.title}">
           <a href="${social.link}" target="_blank">
            <i class="${social.icon}">
            </i>
           </a>
        </li>
        `
    }

    document.getElementById("social-medias").innerHTML = text;
}

function setMyWorkExperiences(workExperiences){
    let text = `<h1 class="content-head"><span><i class="fas fa-suitcase-rolling"></i></span>WORK EXPERIENCE</h1>`;
    for(let work of workExperiences){
        text += `
        <div class="work-group">
                        <h3>${work.title}</h3>
                        <h4>${work.subTitle}</h4>
                        <span>${work.date}</span>
                        <p>${work.description}</p>
                    </div>
        `
    }

    document.getElementById("work-experiences").innerHTML = text;
}

function setEducations(educations){
    let text = `<h1 class="content-head"><span><i class="fas fa-book"></i></span>EDUCATION</h1>`
    for(let ed of educations){
        text += `
        <div class="edu-group">
                        <h4>${ed.title} <br>${ed.section}</h4>
                        <span>${ed.date}</span>
                        <p>${ed.description}</p>
                    </div>
        `
    }

    document.getElementById("educations").innerHTML = text;
}

// let skillElementId = 1;

// function addSkill(){
//     skillElementId++;
//     const value = `<li id="liSkill-${skillElementId}">
//     <div class="bar">
//         <p>C#
//         <button onclick="removeSkill('liSkill-${skillElementId}')">-</button>
//         </p>
//         <span></span>
//     </div>
// </li>`

// document.getElementById("skills").innerHTML += value;
// }

// function removeSkill(id){
//     document.getElementById(id).remove();
// }
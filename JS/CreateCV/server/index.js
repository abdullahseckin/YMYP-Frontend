const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let person = {
    name: "Taner Saydam",
    title: "Full Stack Sofware Traning",
    phone: "0(554) 654 8006",
    email: "tanersaydam@gmail.com",
    address: "TÜRKİYE/Kayseri",
    dateOfBirth: new Date("1989-09-03"),
    avatar: "avatar.jpg",
    aboutMe: `
    <div class="show-more-module--container--2QPRN"><span id="u146-show-more--1" data-type="checkbox" data-checked="checked" style="display:none"></span><div class="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA" style="max-height:32rem"><div tabindex="0"><div data-purpose="instructor-description"><p>Hello! I'm <strong>Taner Saydam</strong>, an experienced software developer and instructor.</p><p>Through my courses on <strong>Udemy</strong> and <strong>YouTube</strong>, I help participants develop their software skills from beginner to advanced levels.</p><p>Throughout my professional career, I have successfully completed projects in various companies and I am eager to share everything I have learned with you.</p><p>My courses on <strong>Udemy </strong>cover programming languages, web and mobile application development, and much more.</p><p>My courses focus on helping students acquire strong foundations and practical knowledge for real-world applications.</p><p>By joining my courses, you will be prepared to embark on a successful and exciting career in software development.</p><p>My goal is to help you achieve success with trainings that will change your way of thinking and perspective.</p><p>If you want to improve your skills, bring your projects to life, and make a difference in the world of software, check out my courses and invest in your future.</p></div></div></div></div>
    `
}

let skills = [
    {
        id: 0,
        title: "C#",
        rate: 80
    },
    {
        id: 1,
        title: "HTML",
        rate: 100
    },
    {
        id: 2,
        title: "JS",
        rate: 50
    }
]

let socialMedias = [
    {
        id: 0,
        title: "Linkedin",
        link: "https://www.linkedin.com/in/taner-saydam-b26336222/",
        icon: "fa fa-linkedin"
    },
    {
        id: 1,
        title: "Youtube",
        link: "https://www.youtube.com/channel/UC6Pw9YDMHq3EeNhIF8FMemw",
        icon: "fa fa-youtube"
    }    
]

let workExperiences = [
    {
        id: 0,
        title: "LEAD WEB DESIGNER",
        subTitle: "ETC College America",
        date: "2014/Present",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellat corrupti eius excepturi est repellendus. Maiores, reiciendis excepturi, enim provident molestiae quisquam atque recusandae, id et quod consequuntur pariatur magni."
    },
    {
        id: 1,
        title: "LEAD WEB DESIGNER",
        subTitle: "ETC College America",
        date: "2014/2016",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellat corrupti eius excepturi est repellendus. Maiores, reiciendis excepturi, enim provident molestiae quisquam atque recusandae, id et quod consequuntur pariatur magni."
    }
]

let educations = [
    {
        id: 0,
        title: "ULUDAG UNIVERSITY",
        section: "Physict Departmant",
        date: "2006/2013",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellat corrupti eius excepturi est repellendus. Maiores, reiciendis excepturi, enim provident molestiae quisquam atque recusandae, id et quod consequuntur pariatur magni."
    }
]

app.get("", (req, res)=> {
    res.json({message: "Api çalışıyor"});
});

app.get("/api/get", (req,res)=> {
    const myInformation = {
        person: person,
        skills: skills,
        socialMedias: socialMedias,
        workExperiences: workExperiences,
        educations: educations
    }
    res.json(myInformation);
});

app.post("/api/set", (req,res)=> {
    const body = req.body;
    person = body.person;
    skills = body.skills;
    socialMedias = body.socialMedias;
    workExperiences = body.workExperiences;
    educations = body.educations;

    res.json({message: "Update is successful"})
})



app.listen(5000, ()=> console.log("Uygulama http://localhost:5000 üzerinden ayakta"));
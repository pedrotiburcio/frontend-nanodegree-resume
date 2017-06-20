var bio = {
    "name": "Pedro Tibúrcio ",
    "role": "Desenvolvedor Web ",
    "contacts": {
        "mobile": "+5583999640684 ",
        "email": "pedrotiburcio10@gmail.com",
        "github": "pedrotiburcio",
        "location": "Campina Grande - PB"
    },
    "welcomeMessage": "Seja bem vindo à minha página de currículo online! ",
    "biopic": "./images/pedro.jpg",
    "skills": ["Trabalho em Equipe", "Liderança", "Pró-Atividade", "Aprendizado rápido"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedContact = formattedMobile + formattedEmail + formattedGitHub + formattedLocation;
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var work = {
    "jobs": [{
            "employer": "P Tecnologias",
            "title": "Desenvolvedor Júnior",
            "location": "Campina Grande, PB",
            "dates": "01/jan/2014 - 31/jul/2015",
            "description": "Exerceu atividades de desenvolvimento básicas, em nível Júnior."
        },
        {
            "employer": "P Tecnologias",
            "title": "Desenvolvedor Pleno",
            "location": "Campina Grande, PB",
            "dates": "01/ago/2015 - 31/dez/2016",
            "description": "Exerceu atividades de desenvolvimento intermediárias, em nível Pleno."
        },
        {
            "employer": "P Tecnologias",
            "title": "Desenvolvedor Sênior",
            "location": "Campina Grande, PB",
            "dates": "01/jan/2017 - até o momento",
            "description": "Exerce atividades de desenvolvimento avançadas, em nível Sênior."
        }
    ]
};

work.display = function displayWork() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
        $(".work-entry:last").append(formattedWork);
    }
};

work.display();

var projects = {
    "projects": [{
            "title": "Definindo a Mentalidade de um Desenvolvedor Web",
            "dates": "Março/2017",
            "description": "Em Mentalidade de Desenvolvedor, você conhecerá a história das linguagens que serão estudadas, da web e da nossa posição atual como desenvolvedores web em um cenário em evolução. Depois de aprender sobre as estratégias de resolução de problemas, você vai escrever uma carta para o seu próprio futuro, descrevendo como você pode superar qualquer desafio à frente neste Nanodegree, e definir algumas metas em relação àquilo que deseja alcançar.",
            "images": ["images/projeto-mentalidade-desenvolvedor.jpg"]
        },
        {
            "title": "MockUp ao Artigo",
            "dates": "Abril/2017",
            "description": "Pratique a sintaxe HTML convertendo um mockup de um artigo de blog em um site real.",
            "images": ["images/projeto-mockup-to-article.gif"]
        },
        {
            "title": "Figurinhas de Animais",
            "dates": "Abril/2017",
            "description": "Com um título simples, 'Figurinhas de Animais', este projeto combina as habilidades que você dominou na série de problemas e pede para você recriar uma página web a partir de um protótipo de design.",
            "images": ["images/projeto-fig-animais.jpg"]
        },
        {
            "title": "Criar um Site de Portfólio",
            "dates": "Maio/2017",
            "description": "Você receberá um mockup de design em PDF e deverá replicar esse design em HTML e CSS. Você desenvolverá um site responsivo que exibirá imagens, descrições e links para cada projeto do portfólio que você concluirá durante o Nanodegree Desenvolvedor Web Front-End .",
            "images": ["images/projeto-portfolio.png"]
        }
    ]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProject = formattedTitle + formattedDate + formattedDescription;
        $(".project-entry:last").append(formattedProject);

        for(var i = 0; i < projects.projects[project].images.length; i++){
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

projects.display();
var education = {
    "schools": [{
            "name": "UFCG",
            "location": "Campina Grande",
            "degree": "Bacharelado",
            "majors": ["Ciência da Computação"],
            "dates": "2009 - 2015",
            "url": "http://www.ufcg.edu.br/"
        },
        {
            "name": "CCAA",
            "location": "Campina Grande",
            "degree": "Nível Básico e Intermediário",
            "majors": ["Teen Course"],
            "dates": "2009 - 2011",
            "url": "http://www.ccaa.com.br/"
        }
    ],
    "onlineCourses": [{
        "title": "Desenvolvedor Web Front-End",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://br.udacity.com/course/front-end-projects-developer-nanodegree--nd001/"
    }]
};

education.display = function() {
    var formattedSchool;
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        formattedSchool = formattedName + formattedDegree + formattedDate + formattedLocation;
        $(".education-entry:last").append(formattedSchool);

        for(var i = 0; i < education.schools[school].majors.length; i++){
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
            $(".education-entry:last").append(formattedMajor);
        }
    }

    $("#education").append(HTMLonlineClasses);

    for (var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        var formattedOnlineCourses = formattedTitle + formattedSchool + formattedDates + formattedUrl;
        $(".education-entry:last").append(formattedOnlineCourses);
    }
};

education.display();

$("#mapDiv").append(googleMap);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$("#header").append(internationalizeButton);
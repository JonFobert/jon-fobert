
/********Scrolling Animations********/
let scrolledPastHero = false;
let scrolledToFirstProject = false;
let scrolledToSecondProject = false;
let scrolledToThirdProject = false;

const skills = document.getElementById('skills');
const skillsTrigger = skills.getBoundingClientRect().top - window.innerHeight + 290;
const firstProject = document.querySelector('.flashCards');
const firstProjectTrigger = firstProject.getBoundingClientRect().top - window.innerHeight + 30;
const secondProject = document.querySelector('.volcanoRush');
const secondProjectTrigger = secondProject.getBoundingClientRect().top - window.innerHeight + 30;
const thirdProject = document.querySelector('.mountainData');
const thirdProjectTrigger = thirdProject.getBoundingClientRect().top - window.innerHeight + 30;

window.addEventListener('scroll', (e) => {
    if (window.scrollY > skillsTrigger && !scrolledPastHero) {
        console.log(skillsTrigger)
        scrolledPastHero = true;
        popOutCards();
    } else if (window.scrollY > firstProjectTrigger && !scrolledToFirstProject) {
        scrolledToFirstProject = true;
        slideInFirstProject();
    } else if (window.scrollY > secondProjectTrigger && !scrolledToSecondProject) {
        scrolledToSecondProject = true;
        slideInSecondProject();
    } else if (window.scrollY > thirdProjectTrigger && !scrolledToThirdProject) {
        scrolledToThirdProject = true;
        slideInThirdProject();
    }
})

function popOutCards() {
    document.querySelector('.skillsCards').classList.toggle('poppedOut')
    document.querySelector('.cardInner').classList.toggle('poppedOut')
    document.querySelector('.backEndCard').classList.toggle('flipped')
}

function slideInFirstProject() {
    document.querySelector('.flashCards').classList.toggle('entered')
}

function slideInSecondProject() {
    document.querySelector('.volcanoRush').classList.toggle('entered')
}

function slideInThirdProject() {
    document.querySelector('.mountainData').classList.toggle('entered')
}


/*******Large and medium page nav elements********/

skillsEl = document.getElementById('skillsAnchor')
skillsLink = document.querySelector('.skillLink')
projectsEl = document.getElementById('projectsAnchor')
projectsLink = document.querySelector('.projectsLink')
contactMeEl = document.getElementById('contactMeAnchor')
contactMeLink = document.querySelector('.contactMeLink')

skillsLink.addEventListener('click', (e) => {
    skillsEl.scrollIntoView()
})

projectsLink.addEventListener('click', (e) => {
    projectsEl.scrollIntoView()
})

contactMeLink.addEventListener('click', (e) => {
    contactMeEl.scrollIntoView()
})


/**************Three Line Menu***************/
/*Three Line elements */
threeLine = document.querySelector('.threeLine')
threeLineMenu = document.querySelector('.threeLineMenu') 
menuClosed = document.querySelector('.menuClosed') 
menuOpen = document.querySelector('.menuOpen')
skillsLinkThreeLine = document.querySelector('.skillLinkThreeLine')
projectsLinkThreeLine = document.querySelector('.projectsLinkThreeLine')
contactMeLinkThreeLine = document.querySelector('.contactMeLinkThreeLine')

threeLine.addEventListener('click', (e => {
    threeLineMenu.classList.toggle('visible')
    threeLine.classList.toggle('menuVisible')
    menuOpen.classList.toggle('false')
    menuClosed.classList.toggle('false')
}))

skillsLinkThreeLine.addEventListener('click', (e) => {
    skillsEl.scrollIntoView()
    threeLineMenu.classList.toggle('visible')
    threeLine.classList.toggle('menuVisible')
    menuOpen.classList.toggle('false')
    menuClosed.classList.toggle('false')
})

projectsLinkThreeLine.addEventListener('click', (e) => {
    projectsEl.scrollIntoView()
    threeLineMenu.classList.toggle('visible')
    threeLine.classList.toggle('menuVisible')
    menuOpen.classList.toggle('false')
    menuClosed.classList.toggle('false')
})

contactMeLinkThreeLine.addEventListener('click', (e) => {
    contactMeEl.scrollIntoView()
    threeLineMenu.classList.toggle('visible')
    threeLine.classList.toggle('menuVisible')
    menuOpen.classList.toggle('false')
    menuClosed.classList.toggle('false')
})
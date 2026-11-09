
function updateProfile(profileData) {
    const profilePhoto = document.getElementById('profile.photo');
    profilePhoto.src = profileData.photo;
    profilePhoto.alt = profileData.name;

    const profileName = document.getElementById('profile.name');
    profileName.innerText = profileData.name;

    const profileJob = document.getElementById('profile.job');
    profileJob.innerText = profileData.job;

    const profileLocation = document.getElementById('profile.location');
    profileLocation.innerText = profileData.location;
    profileLocation.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profileData.location)}`;

    const profilePhone = document.getElementById('profile.phone');
    profilePhone.innerText = profileData.phone;
    profilePhone.href = `https://wa.me/55${profileData.phone.replace(/\D/g, '')}/?text=Olá%20Angello,%0Agostaria%20de%20entrar%20em%20contato%20com%20você!`

    const profileEmail = document.getElementById('profile.email');
    profileEmail.innerText = profileData.email;
    profileEmail.href = `mailto:${profileData.email}`;
}

function updateSkills(profileData) {
    const professionalSkillsList = document.getElementById('professionalSkillsList');
    professionalSkillsList.innerHTML = profileData.skills.professionalSkills.map(professionalSkill => `<li><img class="imgSkills" src="${professionalSkill.logo}" alt="${professionalSkill.name}" title="${professionalSkill.name}"></li>`).join('');
    
    const personalSkillsList = document.getElementById('personalSkillsList');
    personalSkillsList.innerHTML = profileData.skills.personalSkill.map(personalSkill => `<li>${personalSkill}</li>`).join('');

    const dealSkillsList = document.getElementById('dealSkillsList');
    dealSkillsList.innerHTML = profileData.skills.dealSkills.map(dealSkill => `<li>${dealSkill}</li>`).join('');
}

function updateLanguages(profileData) {
    const languageList = document.getElementById('languageList');
    languageList.innerHTML = profileData.languages.map(language => `<li>
                        <h3>${language.language}</h3>
                        <p>${language.level}</p>
                    </li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolioList = document.getElementById('portfolioList');
    portfolioList.innerHTML = profileData.portfolio.map(portfolioItem => `<h3 class="repoName github"><a href="${portfolioItem.url}" target="_blank">${portfolioItem.name}</a></h3>`).join('');
}

function updateExperiences(profileData) {
    const experiencesList = document.getElementById('experiencesList');
    experiencesList.innerHTML = profileData.professionalExperience.map(experience => `<li><h3 class="experienceName">${experience.name}</h3>
                        <p class="experienceDate calendar">${experience.period}</p>
                        <p>${experience.description}</p></li>`).join('');
}

function updateEducation(profileData) {
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = profileData.educations.map(education => `<li><h3>${education.course}</h3>
                        <p class="education location">${education.local}</p>
                        <p class="education calendar">${education.period}</p></li>`).join('');
}

function updateSocialMedia(profileData) {
    const socialMediaList = document.getElementById('socialMediaList');
    socialMediaList.innerHTML = profileData.socialMedia.map(socialMedia => `<li><h3 class="socialMedia ${socialMedia.name.toLowerCase()}"><a href="${socialMedia.url}" target="_blank">${socialMedia.name}</a></h3></li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfile(profileData)
    updateSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperiences(profileData)
    updateEducation(profileData)
    updateSocialMedia(profileData)
})()

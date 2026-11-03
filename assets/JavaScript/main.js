
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

(async () => {
    const profileData = await fetchProfileData()
    updateProfile(profileData)
})()

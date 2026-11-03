
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/angello-maranholi/Projeto-Curriculo-online-DIO/refs/heads/main/assets/DataUpdate/profile.json';
    const response = await fetch(url);
    return await response.json();
}

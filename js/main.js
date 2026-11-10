// JavaScript portofolio M.Rakha Nabil A
// Dipasang di ketiga halaman dengan defer

// 1. Daftar keahlian (halaman beranda)
const skills = [
    {nama: "HTML", level: "Menengah"},
    {nama: "CSS", level: "Menengah"},
    {nama: "Git dan GitHub", level: "Dasar"},
    {nama: "Desain porter dengan canva", level: "Mahir"},
];
skills.push({nama: "JavaScript", level:  "Dasar"});

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill) {
    skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = `${skill.nama} (${skill.level})`;
        daftarSkill.appendChild(item);
    });
    jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
})
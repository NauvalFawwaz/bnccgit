const members = [
    {
        name: "Nauval Fawwaz",
        role: "Project Initiator & HTML Developer",
        image: "https://github.com/NauvalFawwaz.png",
        description:
            "Saya tertarik pada pengembangan software dan web development. Saya senang membangun project, mempelajari teknologi baru, serta berkolaborasi dengan developer lain menggunakan workflow Git dan GitHub.",
        skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
    },
    {
        name: "Muhammad Ezzawa Nidlomuddin",
        role: "Styling Engineer",
        image: "https://github.com/ezzawanidlomuddin.png",
        description:
            "Saya bertanggung jawab pada bagian styling website, mulai dari tampilan, layout, responsivitas, hingga memastikan antarmuka nyaman digunakan.",
        skills: ["CSS", "Responsive Design", "Git", "GitHub"]
    },
    {
        name: "Kadek Mahesa Arta Wibawa",
        role: "JavaScript Engineer",
        image: "https://i.pravatar.cc/300?img=12",
        description:
            "Saya bertanggung jawab pada bagian JavaScript untuk menambahkan interaksi dan memastikan fitur pada website dapat berjalan dengan baik.",
        skills: ["JavaScript", "DOM", "Git", "GitHub"]
    }
];

const memberLinks = document.querySelectorAll(".member-link");
const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const avatar = document.querySelector(".avatar");
const aboutText = document.querySelector(".about > p");
const skillList = document.getElementById("skill-list");
const themeToggleBtn = document.getElementById("theme-toggle");
const counterBtn = document.getElementById("counter-btn");
const counterSpan = document.getElementById("counter");

const likeCounts = [0, 0, 0];

let activeMember = 0;

function renderMember(memberIndex) {
    const member = members[memberIndex];

    activeMember = memberIndex;

    userName.textContent = member.name;
    userRole.textContent = member.role;
    avatar.src = member.image;
    avatar.alt = `Foto profil ${member.name}`;
    aboutText.textContent = member.description;

    skillList.innerHTML = member.skills
        .map((skill) => `<li>${skill}</li>`)
        .join("");

    counterSpan.textContent = likeCounts[activeMember];

    memberLinks.forEach((link, index) => {
        const isActive = index === memberIndex;

        link.classList.toggle("active", isActive);
        link.setAttribute("aria-pressed", String(isActive));
    });
}

memberLinks.forEach((link) => {
    link.addEventListener("click", () => {
        renderMember(Number(link.dataset.member));
    });
});

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    themeToggleBtn.textContent = isDark
        ? "Light Mode"
        : "Dark Mode";
});

counterBtn.addEventListener("click", () => {
    likeCounts[activeMember] += 1;
    counterSpan.textContent = likeCounts[activeMember];
});

renderMember(0);
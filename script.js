const data = [
    { name: "Đặng Đức Phi", role: "172100078", photo: "https://via.placeholder.com/100" },
];

const datagrid = document.getElementById("datagrid");

data.forEach(member => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${member.photo}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.role}</p>
    `;

    datagrid.appendChild(card);
});

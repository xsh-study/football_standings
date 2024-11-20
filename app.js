import footballStandings from './football_standings.json';

const teams = footballStandings.teams;
const tbody = document.querySelector("#leaderboard tbody");

teams
    .sort((a, b) => b.totalPoints - a.totalPoints) // 按积分排序
    .forEach((team, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.name}</td>
            <td>${team.totalPoints}</td>
        `;
        tbody.appendChild(row);
    });

function creatgame(player1, hour, player2){
  return `
    <li>
      <img src="./img/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./img/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}

let delay = -0.3;
function creatcard(date, day, games){
  delay = delay + 0.3;
  return `
  <div class="card" style= "animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =

    creatcard("24/11", "quinta", creatgame("uruguay", "10:00", "south korea") + creatgame("brazil", "13:00", "serbia")) +
    creatcard("28/11", "segunda", creatgame("switzerland", "13:00", "brazil") + creatgame("portugal", "16:00", "uruguay")) +
    creatcard("02/12", "sexta", creatgame("ghana", "12:00", "uruguay") + creatgame("cameroon", "16:00", "brazil"))
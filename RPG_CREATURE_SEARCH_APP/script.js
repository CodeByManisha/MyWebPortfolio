const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const nameEl = document.getElementById('creature-name');
const idEl = document.getElementById('creature-id');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const typesEl = document.getElementById('types');
const hpEl = document.getElementById('hp');
const attackEl = document.getElementById('attack');
const defenseEl = document.getElementById('defense');
const saEl = document.getElementById('special-attack');
const sdEl = document.getElementById('special-defense');
const speedEl = document.getElementById('speed');

function clearResults() {
  nameEl.textContent = '';
  idEl.textContent = '';
  weightEl.textContent = '';
  heightEl.textContent = '';
  typesEl.innerHTML = '';
  hpEl.textContent = '';
  attackEl.textContent = '';
  defenseEl.textContent = '';
  saEl.textContent = '';
  sdEl.textContent = '';
  speedEl.textContent = '';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearResults();

  const query = input.value.trim().toLowerCase();

  try {
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`);
    if (!res.ok) throw new Error('Creature not found');
    const data = await res.json();

    nameEl.textContent = data.name.toUpperCase();
    idEl.textContent = `#${data.id}`;
    weightEl.textContent = `Weight: ${data.weight}`;
    heightEl.textContent = `Height: ${data.height}`;

    typesEl.innerHTML = '';
    data.types.forEach(type => {
      const span = document.createElement('span');
      span.textContent = type.name.toUpperCase();
      typesEl.appendChild(span);
    });

    hpEl.textContent = data.stats[0].base_stat;
    attackEl.textContent = data.stats[1].base_stat;
    defenseEl.textContent = data.stats[2].base_stat;
    saEl.textContent = data.stats[3].base_stat;
    sdEl.textContent = data.stats[4].base_stat;
    speedEl.textContent = data.stats[5].base_stat;

  } catch (err) {
    alert('Creature not found');
  }

  input.value = '';
});

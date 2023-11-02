import './style.css';
import displayScore from './modules/displayScores.js';
import getScores from './modules/getScores.js';
import createScores from './modules/createScores.js';

const endpointId = 'l95yf0Kvdp9cFkx0V70b';

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  createScores(name.value, score.value, endpointId);
  name.value = '';
  score.value = '';
});

const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', async () => {
  const update = await getScores(endpointId);
  displayScore(update.result);
});

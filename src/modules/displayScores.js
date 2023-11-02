const displayScore = (scoreList) => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  scoreList.forEach((score) => {
    const list = document.createElement('li');
    list.innerHTML = `${score.user}: ${score.score}`;
    scores.appendChild(list);
  });
};

export default displayScore;

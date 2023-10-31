const scoreList = [{
  name: 'Jim',
  score: 10,
},
{
  name: 'Smooth',
  score: 15,
},
{
  name: 'Subby',
  score: 20,
},
{
  name: 'Gift',
  score: 25,
},
{
  name: 'Repeat',
  score: 30,
},
{
  name: 'Repeat',
  score: 30,
},
{
  name: 'Repeat',
  score: 30,
},
{
  name: 'Repeat',
  score: 30,
},
];
const displayScore = () => {
  const scores = document.querySelector('.scores');
  scoreList.forEach((score) => {
    const list = document.createElement('li');
    list.innerHTML = `${score.name}: ${score.score}`;
    scores.appendChild(list);
  });
};

export default displayScore;
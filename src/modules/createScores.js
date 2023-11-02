const createScores = async (name, score, gameId) => {
  const res = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    },
  );
  const data = await res.json();
  return data;
};
export default createScores;

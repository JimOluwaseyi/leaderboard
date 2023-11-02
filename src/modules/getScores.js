const getScores = async (gameId) => {
  const res = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  );
  const data = await res.json();
  return data;
};
export default getScores;

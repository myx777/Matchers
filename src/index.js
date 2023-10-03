export default function sortHeroes(heroes) {
  const heroesSorted = heroes.sort((a, b) => b.health - a.health);
  return heroesSorted;
}

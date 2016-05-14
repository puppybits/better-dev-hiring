export function getPeople(){
  return fetch("http://swapi.co/api/people/").then(r => r.json());
}

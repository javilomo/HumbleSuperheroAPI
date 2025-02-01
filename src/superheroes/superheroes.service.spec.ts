import { SuperheroesService } from "./superheroes.service"; 

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should add and retrieve superheroes sorted by humility score', () => {
    service.addSuperhero('Hero1', 'Fly', 7);
    service.addSuperhero('Hero2', 'Strength', 10);
    service.addSuperhero('Hero3', 'Invisibility', 5);
    const heroes = service.getSuperheroes();
    expect(heroes[0].name).toBe('Hero2');
    expect(heroes[1].name).toBe('Hero1');
    expect(heroes[2].name).toBe('Hero3');
  });
});
import { Injectable, BadRequestException } from '@nestjs/common';
import { Superhero } from './models/superheroes.model';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

/**
 * Service responsible for handling superhero business logic.
 */
@Injectable()
export class SuperheroesService {
  /**
   * Storage for superheroes (in-memory database).
   */
  private superheroes: Superhero[] = [];

  /**
   * Adds a new superhero to the list.
   * @param superhero - Superhero data to be added.
   * @throws BadRequestException if the superhero already exists.
   * @returns The added superhero.
   */
  addSuperhero(superhero: CreateSuperheroDto): Superhero {
    const { name } = superhero;

    // Check if a superhero with the same name already exists
    if (this.superheroes.some(hero => hero.name === name)) {
      throw new BadRequestException('A superhero with this name already exists');
    }

    // Add the superhero to the in-memory database
    this.superheroes.push(superhero);
    return superhero;
  }

  /**
   * Retrieves the list of superheroes sorted by humility score (descending order).
   * @returns Sorted list of superheroes.
   */
  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}

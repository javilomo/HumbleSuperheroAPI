import { IsString, IsInt, Min, Max } from 'class-validator';

/**
 * DTO (Data Transfer Object) for validating superhero creation requests.
 */
export class CreateSuperheroDto {
  /**
   * Superhero name (must be a string).
   */
  @IsString()
  name: string;

  /**
   * Superpower of the superhero (must be a string).
   */
  @IsString()
  superpower: string;

  /**
   * Humility score of the superhero (must be a number between 1 and 10).
   */
  @IsInt()
  @Min(1, { message: 'Humility score must be at least 1' })
  @Max(10, { message: 'Humility score cannot be greater than 10' })
  humilityScore: number;
}

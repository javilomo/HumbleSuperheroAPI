import { 
    Controller, 
    Post, 
    Get, 
    Body, 
    UsePipes, 
    ValidationPipe, 
    BadRequestException 
  } from '@nestjs/common';
  import { SuperheroesService } from './superheroes.service';
  import { CreateSuperheroDto } from './dto/create-superhero.dto';
  import { Superhero } from './models/superheroes.model';
  
  /**
   * Controller handling HTTP requests for superheroes.
   */
  @Controller('superheroes')
  export class SuperheroesController {
    constructor(private readonly superheroesService: SuperheroesService) {}
  
    /**
     * Endpoint to add a new superhero.
     * Method: POST /superheroes
     * @param createSuperheroDto - Superhero data to be added.
     * @throws BadRequestException if an error occurs.
     * @returns The added superhero.
     */
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
      try {
        return this.superheroesService.addSuperhero(createSuperheroDto);
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }
  
    /**
     * Endpoint to retrieve the list of superheroes sorted by humility.
     * Method: GET /superheroes
     * @returns Sorted list of superheroes.
     */
    @Get()
    getSuperheroes(): Superhero[] {
      return this.superheroesService.getSuperheroes();
    }
  }
  
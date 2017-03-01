import { Recipe } from './recipe';

export class RecipeDataService {
  private recipes: Recipe[] = [
    new Recipe(
    'My Title',
    'My Disc',
    'http://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png'
    ),
    new Recipe(
    'My Title 2',
    'My Disc 2',
    'http://icons.iconarchive.com/icons/sonya/swarm/256/Hot-Dog-icon.png'
    )
  ];

  get_recipes(){
    return this.recipes;
  }

}

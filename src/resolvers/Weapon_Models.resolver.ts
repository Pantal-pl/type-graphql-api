import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { Weapon_Models, Weapon_ModelsInput } from 'index';

@Resolver()
export class Weapon_ModelsResolver {
  @Query(() => Weapon_Models)
  async getWeaponModel(@Arg('model_id', () => String) model_id: string): Promise<Weapon_Models> {
    return new Weapon_Models();
  }

  @Mutation(() => Weapon_Models)
  async addWeaponModel(@Arg('input', () => Weapon_ModelsInput) input: Weapon_Models): Promise<Weapon_Models> {
    return new Weapon_Models();
  }

  @Mutation(() => Weapon_Models)
  async updateWeaponModel(
    @Arg('model_id', () => String) model_id: string,
    @Arg('input', () => Weapon_ModelsInput) input: Weapon_ModelsInput
  ): Promise<Weapon_Models> {
    return new Weapon_Models();
  }

  @Mutation(() => Boolean)
  async deleteWeaponModel(@Arg('model_id', () => String) model_id: String): Promise<Boolean> {
    return true;
  }
}

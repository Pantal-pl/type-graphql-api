import 'reflect-metadata';
import { Field, InputType, registerEnumType } from 'type-graphql';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Weapon_Models } from 'index';

enum WeaponType {
  RIFLE = 'Rifle',
  SHOTGUN = 'Shotgun',
  MACHINE_GUN = 'Machine Gun',
  SNIPER_RIFLE = 'Sniper Rifle',
  SUBMACHINE_GUN = 'Submachine Gun',
  REVOLVER = 'Revolver',
  GRENADE_LAUNCHER = 'Grenade Launcher',
  ASSAULT_RIFLE = 'Assault Rifle',
  PISTOL = 'Pistol',
  CARBINE = 'Carbine',
  MINI_UZI = 'Mini Uzi',
  SHARPSHOOTER_RIFLE = 'Sharpshooter Rifle',
  LIGHT_MACHINE_GUN = 'Light Machine Gun',
  FLAMETHROWER = 'Flamethrower',
  GRENADE = 'Grenade',
  RPG = 'RPG',
  CROSSBOW = 'Crossbow',
  DERRINGER = 'Derringer',
  SAWED_OFF_SHOTGUN = 'Sawed-off Shotgun',
  TASER = 'Taser',
  TOMMY_GUN = 'Tommy Gun',
  BRASS_KNUCKLES = 'Brass Knuckles',
  ZIP_GUN = 'Zip Gun',
  GATLING_GUN = 'Gatling Gun',
  MUSKET = 'Musket',
  BAZOOKA = 'Bazooka',
}

registerEnumType(WeaponType, {
  name: 'WeaponInputType',
  description: 'Different types of firearms and weapons.',
});

@Entity()
@InputType()
export class Weapon_ModelsInput implements Partial<Weapon_Models> {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  @IsUUID()
  model_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  model_name!: string;

  @Column({ type: 'enum', enum: WeaponType })
  @Field((_type) => WeaponType)
  @IsEnum(WeaponType)
  weapon_type!: WeaponType;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  manufacturer!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  model_description!: string;
}

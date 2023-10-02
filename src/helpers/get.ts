import { AppDataSource } from 'index';

export const getData = async <T extends Record<string, any>>(entity: new () => T, fieldName: string, idValue: string): Promise<T | null> =>
  AppDataSource.createQueryBuilder()
    .select(entity.name.toLowerCase())
    .from(entity, entity.name.toLowerCase())
    .where(`${entity.name.toLowerCase()}.${fieldName} = ${fieldName}`, { idValue })
    .getOne();

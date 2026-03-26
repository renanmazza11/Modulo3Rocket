import { Category } from "../model/category.js";

interface ICreateCategoryDTO {
    name:string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name:string): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
}

export type {ICategoriesRepository, ICreateCategoryDTO};
import mongoose from "mongoose";
export declare type CategoryUserDocument = CategoryUser & Document;
export declare class CategoryUser {
    id: mongoose.Types.ObjectId;
    libelle: string;
}
export declare const categoryUserSchema: mongoose.Schema<CategoryUser, mongoose.Model<CategoryUser, any, any, any, any>, {}, {}, {}, {}, "type", CategoryUser>;
export declare type CategoryPriceDocument = CategoryPrice & Document;
export declare class CategoryPrice {
    libelle: string;
    code: string;
    price: number;
}
export declare const categoryPriceSchema: mongoose.Schema<CategoryPrice, mongoose.Model<CategoryPrice, any, any, any, any>, {}, {}, {}, {}, "type", CategoryPrice>;

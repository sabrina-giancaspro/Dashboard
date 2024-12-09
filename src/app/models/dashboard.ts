import { Type } from "@angular/core";

export interface Widget {
    id: number;
    labelfront: string;
    labelback: string;
    content: Type<unknown>;
    flipped?: boolean; 
    img?:string;
}
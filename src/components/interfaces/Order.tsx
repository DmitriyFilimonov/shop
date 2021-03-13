import { OrderPosition } from "./OrderPosition";

export interface Order{
    orderNumber:number;
    address:string;
    orderDate:string;
    positions:OrderPosition[];
    getTotal:()=>number;
}
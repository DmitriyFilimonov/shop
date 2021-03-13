import { OrderPosition } from "./OrderPosition";

export interface Order{
    orderNumber:number;
    address:string;
    deliveryDate:string;
    positions:OrderPosition[];
    getTotal:()=>{};
}
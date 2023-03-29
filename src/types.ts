export interface Iproducts {
    name : string,
    image : string,
    price : number | string,
    id? : number
}
export interface Icontainer extends Iproducts {
    deleteSingleItem : Function
}
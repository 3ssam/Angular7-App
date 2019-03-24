export class Ingredient{
    private name:string;
    private amount:number;

    
    public setName (name : string) {
        this.name = name;
    }

    public setAmount (amount : number) {
        this.amount = amount;
    }

    public getName () : string {
        return this.name;
    }

    public getAmount () : number {
        return this.amount;
    }
    
    constructor();
    constructor(amount:number,name:string);
    constructor(amount?:number,name?:string){

    }

}
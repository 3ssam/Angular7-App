export class Recipe{
    private name:string;
    private imagePath:string;
    private description:string
 
    public setName (name : string) {
        this.name = name;
    }

    public setImagePath (imagePath : string) {
        this.imagePath = imagePath;
    }

    public setDescription (description : string) {
        this.description = description;
    }

    
    public getName () : string {
        return this.description;
    }

    public getImagePath () : string {
        return this.name;
    }
    
    public getDescription () : string {
        return this.description;
    }

    constructor ();
    constructor (name:string,description:string,imagePath:string);
    constructor (name?:string,description?:string,imagePath?:string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
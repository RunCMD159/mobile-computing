export class Article {
    name :string;
    description:string;
    price : number;
    image :string;//TODO what should we do with image 

    constructor() {

    }

    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}
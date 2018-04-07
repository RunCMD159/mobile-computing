class Article {
    private name :string;
    private description:string;
    private price : number;
    private image :string;//TODO what should we do with image 

    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}
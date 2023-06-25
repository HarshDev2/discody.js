export class Command {
    name: string | undefined;
    description: string | undefined;

    setName(name: string){
        this.name = name;
        return this;
    }
    
    setDescription(description: string){
        this.description = description;
        return this;
    }
}
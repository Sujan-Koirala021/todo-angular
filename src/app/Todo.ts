export class Todo{
    title : string;
    description : string;
    isActive : boolean;

    constructor() {
        this.title = ''; // Default value for title
        this.description = ''; // Default value for description
        this.isActive = false; // Default value for isActive
    }

}
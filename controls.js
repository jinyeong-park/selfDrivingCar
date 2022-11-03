class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
       document.onKeydown = (event) => {
        switch(event.key) {
            case "ArrowLeft":
                this.left = true;
                break;
            case "ArrowRight":
                this.right = true;
                break;
            case "ArrowUp":
                this.forward = true;
                break;
            case "ArrowDown":
                this.reverse = true;
                break;
        }
        console.table(this);
       }
       document.onKeyup = (event) => {
        switch(event.key) {
            case "ArrowLeft":
                this.left = false;
                break;
            case "ArrowRight":
                this.right = false;
                break;
            case "ArrowUp":
                this.forward = false;
                break;
            case "ArrowDown":
                this.reverse = false;
                break;
        }
        console.table(this);
       }
    }
}
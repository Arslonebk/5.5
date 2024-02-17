class Typing {
    constructor(selector, delay) {
        this.selector = document.querySelector(selector);
        this.orgSelector = this.selector.innerHTML;
        this.fullSelector = "";
        this.delay = delay;
        this.type()
    }
    type(num = 0) {
        this.fullSelector += this.orgSelector[num];
        this.selector.innerHTML = this.fullSelector;
        num++;
        if (this.orgSelector != this.fullSelector){
            setTimeout(() => {
                this.type(num);
            }, this.delay );
        }
    }
}

let son = prompt("1 dan 1000 bo`lgan son kiriting?  (title pace)")

let soon = prompt("1 dan 1000 bo`lgan son kiriting? (text pace)")

let title = new Typing (".title", son);

let text = new Typing (".text", son);
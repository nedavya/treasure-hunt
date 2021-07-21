class Security {

    constructor(){

        this.accessl = createInput("Codel") 
        this.accessl.position(100,90); 
        this.accessl.style('background', 'white'); 
        this.buttonl = createButton('Check'); 
        this.buttonl.position(100,120); 
        this.buttonl.style('background', 'lightgrey'); 

        this.access2 = createInput("Codel") 
        this.access2.position(700,190); 
        this.access2.style('background', 'white'); 
        this.button2 = createButton('Check'); 
        this.button2.position(700,220); 
        this.button2.style('background', 'lightgrey'); 

        this.access3 = createInput("Codel") 
        this.access3.position(100,290); 
        this.access3.style('background', 'white'); 
        this.button3 = createButton('Check'); 
        this.button3.position(100,320); 
        this.button3.style('background', 'lightgrey'); 

    }

    display(){
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1, this.access1.value())) {
            this.button1.hide();
            this.access1.hide();
            score++
            }
            });
            
            this.button2.mousePressed(() => {
                if(system.authenticate(accessCode2, this.access2.value())) {
                this.button2.hide();
                this.access2.hide();
                score++
                }
                });

                this.button3.mousePressed(() => {
                    if(system.authenticate(accessCode3, this.access3.value())) {
                    this.button3.hide();
                    this.access3.hide();
                    score++
                    }
                    });


    }
}
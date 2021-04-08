let ladder = {
    step: 0,
    maxHeight: 5,
    up() {
        if (this.step >= this.maxHeight){
            this.step;
        } else {
            this.step++;
        }
    },

    down() {
        this.step--;
    },

    showStep() {
        console.log(this.step);
    },
};

ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
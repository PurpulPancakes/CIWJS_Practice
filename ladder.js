let ladder = {
    step = 0;
    up() {
        return this.step + 1;
    },

    down() {
        return this.step - 1;
    },

    showStep() {
        return this.step;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
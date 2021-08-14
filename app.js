Vue.createApp({
    data() {
        return {
            valueInput: '',
            valueInputName: '',
            task: [],
            needDoList: [],
            completeList: []
        };
    },
    mounted() {
        const date = localStorage.getItem('valueInput');
        console.log(date);
    },
    methods: {
        handleInput(event) {
            this.valueInput = event.target.value;
        },
        handleInputName(event) {
            this.valueInputName = event.target.value;

        },

        addTask() {
            if (this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput
            });
            localStorage.setItem('valueInput', this.valueInput);
            this.valueInput = '';
        },
        addTaskName() {
            if (this.valueInputName === '') { return };
            this.task.push({
                title: this.valueInputName,
            });

            this.valueInputName = '';
        },
        doCheck(index, type) {

            if (type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
            } else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask(index, type) {
            const consetRemove = confirm('Вы уверены?');
            if (consetRemove) {
                const toDoList = type === 'need' ? this.needDoList : this.completeList;
                toDoList.splice(index, 1);
            }

        },
    }
}).mount('#app');
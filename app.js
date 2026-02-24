Vue.createApp({
    data() {
        return {
            message: '',
        };
    },

    computed: {
        htmlOutput() {
            return marked.parse(this.message);
        },

        charCount() {
            const textOnly = this.htmlOutput.replace(/<[^>]*>/g, '');
            return textOnly.length;
        },

    },

}).mount('#app');   
Vue.createApp({
    data() {
        return {
            message: '',
            theme: 'light',
        };
    },

    mounted() {
        this.loadFromLocalStorage();
    },

    methods: {
        saveToStorage() {
            localStorage.setItem('message', this.message);
            localStorage.setItem('theme', this.theme);
        },

        loadFromLocalStorage() {
            this.message = localStorage.getItem('message') ?? '';
            this.theme = localStorage.getItem('theme') ?? 'light';
            document.documentElement.setAttribute('data-bs-theme', this.theme);
        },

        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-bs-theme', this.theme);
            this.saveToStorage();
        },
    },

    computed: {
        htmlOutput() {
            return marked.parse(this.message);
        },

        charCount() {
            const textOnly = this.htmlOutput.replace(/<[^>]*>/g, '');
            return textOnly.length;
        },

        themeIcon() {
            return this.theme === 'light' ? 'dark_mode' : 'light_mode';
        },


    },

    watch: {
        message() {
            this.saveToStorage();
        },
    }
}).mount('#app');   
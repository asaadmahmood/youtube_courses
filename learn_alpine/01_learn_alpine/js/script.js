document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
        init() {
            this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
        },

        on: false,

        toggle() {
            this.on = ! this.on
        }
    })
})

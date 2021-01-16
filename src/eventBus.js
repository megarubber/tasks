import Vue from 'vue'

export default new Vue({
    methods: {
        setMessage(message) {
            this.$emit('entryMessage', message);
        },
        onMessage(callback) {
            this.$on('entryMessage', callback);
        }
    }
});


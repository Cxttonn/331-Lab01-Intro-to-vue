const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Made from high-quality combed cotton, these socks are incredibly soft against your skin, providing all-day comfort.')
        return{
            product, description
        }
    }
}).mount('#app')
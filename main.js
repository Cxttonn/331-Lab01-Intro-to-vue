const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const description = ref('Made from high-quality combed cotton, these socks are incredibly soft against your skin, providing all-day comfort.')
        const productLink = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const onSale = ref(true)
        const inventory = ref(100)
        return{
            product, 
            description,
            image,
            productLink,
            inStock,
            inventory,
            onSale
        }
    }
}).mount('#app')
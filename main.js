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
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const sizes = ref([
            'S ','M ','L '
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
        ])
        const cart = ref(0)
        function addToCart(){
            cart.value += 1
        }

        function updateImage(variantImage){
            image.value = variantImage
        }
        const toggleStock = () => {
            if (inventory.value > 0) {
                inventory.value = 0
            } else {
                inventory.value = 100
            }
        }
        return{
            product, 
            description,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleStock
        }
    }
}).mount('#app')
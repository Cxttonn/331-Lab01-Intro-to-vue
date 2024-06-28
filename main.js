const { createApp, ref, computed} = Vue

// createApp({
//     setup(){
//         const product = ref('Boots')
//         const brand = ref('SE 331')
//         // const image = ref('./assets/images/socks_green.jpg')
//         const description = ref('Made from high-quality combed cotton, these socks are incredibly soft against your skin, providing all-day comfort.')
//         const productLink = ref('https://www.camt.cmu.ac.th')
//         // const inStock = ref(false)
//         const onSale = ref(true)
//         const inventory = ref(100)
//         const details = ref([
//             '50% cotton',
//             ' 30% wool',
//             ' 20% polyester'
//         ])
//         const sizes = ref([
//             'S ','M ','L '
//         ])
//         const variants = ref([
//             { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
//             { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
//         ])
//         const selectVariant = ref(0)
//         function updateVariant(index){
//             selectVariant.value = index;
//         }
//         const cart = ref(0)
//         function addToCart(){
//             cart.value += 1
//         }
//         const title = computed(() => {
//             return brand.value + ' ' + product.value
//         })
//         function updateImage(variantImage){
//             image.value = variantImage
//         }
//         const image = computed(() => {
//             return variants.value[selectVariant.value].image
//         })
//         const inStock = computed(() => {
//             return variants.value[selectVariant.value].quantity
//         })
//         // const onSale = computed(() => {
//         //     return variants.value[selectVariant.value].
//         // })
//         const toggleStock = () => {
//             if (inventory.value > 0) {
//                 inventory.value = 0
//             } else {
//                 inventory.value = 100
//             }
//         }
//         return{
//             title,
//             description,
//             image,
//             productLink,
//             inStock,
//             inventory,
//             onSale,
//             details,
//             variants,
//             sizes,
//             cart,
//             addToCart,
//             updateImage,
//             toggleStock,
//             updateVariant
//         }
//     }
// }).mount('#app')

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true)
        const premiumValue = ref(false)
        function updateCart(id){
            cart.value.push(id)
        }
        return{
            cart,
            premium,
            premiumValue, 
            updateCart
        }
    }
})

app.component('product-display', productDisplay)

app.mount('#app')
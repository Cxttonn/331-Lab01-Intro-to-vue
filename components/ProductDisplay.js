const productDisplay = {

  template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image" :class="{ 'out-of-stock-image': !inStock }">
                <img :src="image">
            </div>
        </div>
        <div class="product-info">
            <h1><a :href="productLink" target="_blank">{{title}}</a></h1>
            <p>{{description}}</p>
            <p v-if="inventory > 10">In Stock</p>
            <p>Shipping: {{shipping}}</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <p v-if="onSale" class="sale-message">This product is on sale!</p>
            <p v-else class="sale-message">This product is not on sale.</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <ul>
                <li v-for="size in sizes">{{size}}</li>
            </ul>
            <p>{{title + ' ' + " is On Sale" + onSale}}</p>
            <div v-for="(variant, index) in variants" :key="variant.id"
    @mouseover = "updateImage(index)" 
            class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <button class="button" :disabled="!inStock" @click="addToCart"
:class="{disabledButton: !inStock}">Add To Cart</button>
            <button class="button" @click="toggleStock">Stock Status</button>

          </div>
          <review-list v-if="reviews.length" :reviews="reviews"></review-list>
          <review-form @review-submitted="addReview"></review-form>
      </div>

    `,
  props: {
    premium: Boolean
  },
  setup(props, {emit}){
    // const shipping = computed(() => {
    //     if(props.premium){
    //         return 'Free'
    //     } else{
    //         return 30
    //     }
        
    // })
        const product = ref('Boots')
        const brand = ref('SE 331')
        // const image = ref('./assets/images/socks_green.jpg')
        const description = ref('Made from high-quality combed cotton, these socks are incredibly soft against your skin, providing all-day comfort.')
        const productLink = ref('https://www.camt.cmu.ac.th')
        // const inStock = ref(false)
        const onSale = ref(true)
        const inventory = ref(100)
        const details = ref([
            ' 50% cotton',
            ' 30% wool',
            ' 20% polyester'
        ])
        const sizes = ref([
            'S ','M ','L '
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectVariant = ref(0)
        function updateVariant(index){
            selectVariant.value = index;
        }
        const cart = ref(0)
        function addToCart(){
            // cart.value += 1
            emit('add-to-cart', variants.value[selectVariant.value].id)
        }
        const reviews = ref([])
        function addReview(review){
          reviews.value.pusd(review)
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage){
            image.value = variantImage
        }
        const image = computed(() => {
            return variants.value[selectVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectVariant.value].quantity
        })
        const toggleStock = () => {
            if (inventory.value > 0) {
                inventory.value = 0
            } else {
                inventory.value = 100
            }
        }
        return{
            title,
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
            toggleStock,
            updateVariant,
            shipping,
            addReview
        }
    }
}
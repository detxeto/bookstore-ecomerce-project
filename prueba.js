const products = [
	{id: 1,title: 'Macbook Pro', price: 2500.00, qty: 1, image: 'http://lorempixel.com/150/150/'},  
	{id: 2,title: 'Asus ROG Gaming',price: 1000.00, qty: 1,image: 'http://lorempixel.com/150/150/'},  
	{id: 3,title: 'Amazon Kindle',price: 150.00,qty: 1,image: 'http://lorempixel.com/150/150/'},  
	{id: 4,title: 'Another Product',price: 10, qty: 1, image: 'http://lorempixel.com/150/150/'},  
];

function formatNumber(n, c, d, t){
	var c = isNaN(c = Math.abs(c)) ? 2 : c, 
			d = d === undefined ? '.' : d, 
			t = t === undefined ? ',' : t, 
			s = n < 0 ? '-' : '', 
			i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
			j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

Vue.filter('formatCurrency', function (value) {
  return formatNumber(value, 2, '.', ',');
});
    
Vue.component('shopping-cart', {
  props: ['items'],

  computed: {
    Total: function() {
      var total = 0;
      this.items.forEach(item => {
        total += (item.price * item.qty);
      });
      return total;
    }
  },

  methods: {
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
})

const vm = new Vue({
  el: '#app',
	
  data: {
    cartItems: [],
    items : products,
	  
  },
	
  methods: {
    addToCart(itemToAdd) {
      var found = false;

      // Check if the item was already added to cart
			// If so them add it to the qty field
      this.cartItems.forEach(item => {
        if (item.id === itemToAdd.id) {
          found = true;
          item.qty += itemToAdd.qty;
        }
      });

      if (found === false) {
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      }
			
			itemToAdd.qty = 1;
    }
  },
	computed:{
		x:function(){
		var unique=[];
			for (var i =0;i<this.shoppingCart.length;i++){
				if(!unique.hasOwnProperty(this.shoppingCart[i].titulo)){
					unique.push(this.shoppingCart[i].titulo);
				};
				for (var j=0;j<this.unique.length;j++){
					var count=this.shoppingCart.qty;}
					for (var k=0;k<this.shoppingCart.length;k++){
						if(this.unique[j]==this.shoppingCart[k].titulo){
							 this.count++ ;}
							if( this.count === 4){
								freeitem.push(this.shoppingCart[k]);
								finalPrice-=this.shoppingCart[k].precio;
								this.count=0
							}
						
					}
				
			}
			
			return finalPrice.toFixed(2);
		}
		},
	}
})

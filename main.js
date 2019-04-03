var app = new Vue({

	el: '#app',
	data: {

		active: 'indexMain',
		book: data.books,
		comic: data.comics,
		bookSearch: "",
		detailBook: {},
		essay: "",
		shoppingCart: [],
		items: "",
		x: "",
		counter: 0,


	},

	methods: {
		//per mostrar el div designat//
		makeActive: function (item) {

			this.active = item;
		},

		addToCart: function (productToAdd) {
			var found = false;
			// Check if the item was already added to cart
			// If so them add it to the qty field
			this.shoppingCart.forEach(product => {
				if (product.titulo === productToAdd.titulo) {
					found = true;
					product.qty += productToAdd.qty;
				}
			});
			if (found === false) {
				this.shoppingCart.push(Vue.util.extend({}, productToAdd));
			}
			productToAdd.qty = 1;
		},

		removeItem(index) {
			this.shoppingCart.splice(index, 1);
		},



	},
	computed: {

		//per filtrar per searchbar(nom)//

		nameFilter: function () {

			return this.book.filter(buk => buk.titulo.toLowerCase().match(this.bookSearch.toLowerCase()))






		},


		comicFilter: function () {
			return this.comic.filter(com => com.titulo.toLowerCase().match(this.bookSearch.toLowerCase()))
		},

		//		bookDropFilter:function(){
		//			return this.book.filter(vook=>vook.genero.match(this.essay))
		//			
		//		
		//		
		//		
		//		
		//		}
		//	

		totalPrice: function () {
			var total = 0;
			var finalPrice = 0;
			var discount = 0;
			var tPrice = 0;
			this.shoppingCart.forEach(item => {
				total += (item.precio * item.qty);

				finalPrice = total;
			});

			if (this.shoppingCart.length >= 5) {
				let discount = finalPrice * 0.1;

				finalPrice = finalPrice - discount;
				finalPrice = finalPrice.toFixed(2);

			}

			return finalPrice;
		},

		priceNoDisc: function () {
			let total = 0;
			let fTotal = 0;
			this.shoppingCart.forEach(item => {
				total += (item.precio * item.qty);

				fTotal = total.toFixed(2);
			});
			return fTotal;
		}


	},

})

//addToCart(itemToAdd) {
//      var found = false;
//
//      // Check if the item was already added to cart
//			// If so them add it to the qty field
//      this.cartItems.forEach(item => {
//        if (item.id === itemToAdd.id) {
//          found = true;
//          item.qty += itemToAdd.qty;
//        }
//      });
//
//      if (found === false) {
//        this.cartItems.push(Vue.util.extend({}, itemToAdd));
//      }
//			
//			itemToAdd.qty = 1;
//    }
//  

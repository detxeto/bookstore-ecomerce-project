var app = new Vue({

	el: '#app',
	data: {

		active: 'indexMain',
		book: data.books,
		comic: data.comics,
		bookSearch: "",
		comicSearch: "",
		detailBook: {},
		shoppingCart: [],
		items: "",
		x: "",
		counter: 0,
		kindBooks: "",
		idiomBooks: "",
		kindComic: "",
		idiomComic: "",
		edComic: "",
			 
		freeItem: [],
		
		



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
		resetInput: function () {

			this.bookSearch = "";
			this.comicSearch = "";


		},
		resetCart: function () {


			this.shoppingCart = [];
		},




	},
	computed: {

		//per filtrar per searchbar(nom)//

		nameFilter: function () {

			return this.book.filter(buk =>
					buk.titulo.toLowerCase().match(this.bookSearch.toLowerCase())
				)

				.filter((buk) => {
					return buk
						.genero
						.match(this.kindBooks);
				})
				.filter((buk) => {
					return buk
						.idioma
						.match(this.idiomBooks);
				})




		},


		comicFilter: function () {
			return this.comic.filter(com => com.titulo.toLowerCase().match(this.comicSearch.toLowerCase()))

				.filter((com) => {
					return com
						.genero
						.match(this.kindComic);
				})
				.filter((buk) => {
					return buk
						.idioma
						.match(this.idiomComic);
				}).filter((buk) => {
					return buk
						.editorial
						.match(this.edComic);
				})
		},








		totalPrice: function () {
			var total = 0;
			var discount = 0;
			var fPrice = 0;
			var freeItem = [];
			var totalFreeItem = 0;
			var dPrice = 0;



			this.shoppingCart.forEach(item => {
				total += (item.precio * item.qty);


				//				finalPrice = total;

				if (item.qty / 4 >= 1) {

					//					var arrodonir = ((item.qty / 4) * 3)
					//					Total = Math.floor((arrodonir) * item.precio);
					totalFreeItem = Math.floor(item.qty / 4);
					dPrice = totalFreeItem * item.precio;
					this.freeItem.push(item);
					total -= dPrice;

				}
			});

			//every 5 items get 10% discount//
			if (this.shoppingCart.length >= 5) {
				total = total * 0.9;
				//					let discount = finalPrice * 0.1;
				//					finalPrice = finalPrice - discount;
				//				total = total.toString();
			}


			return total.toFixed(2)
		},

		priceNoDisc: function () {
			let tot = 0;
			let fTotal = 0;
			this.shoppingCart.forEach(item => {
				tot += (item.precio * item.qty);

				fTotal = tot.toFixed(2);
			});
			return fTotal;
		},

		

		
		
		
		
		
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
////every 4 item same kind of, get one for free//
//			var unique=[];
//			for (var i =0;i<this.shoppingCart.length;i++){
//				if(!unique.hasOwnProperty(this.shoppingCart[i].titulo)){
//					unique.push(this.shoppingCart[i].titulo);
//				};
//				for (var j=0;j<this.unique.length;j++){
//					var count=0;}
//					for (var k=0;k<this.shoppingCart.length;k++){
//						if(this.unique[j]==this.shoppingCart[k].titulo){
//							 this.count++ ;}
//							if( this.count == 4){
//								freeitem.push(this.shoppingCart[k]);
//								finalPrice-=this.shoppingCart[k].precio;
//								this.count=0
//							}
//						
//					}
//				
//			}

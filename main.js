var app = new Vue({
	
	el:'#app',
	data:{
		
		active:'indexMain',
		book:data.books,
		comic:data.comics,
		bookSearch:"",
		detailBook:{},
		essay:"",
		
	},
	
	methods: {
		//per mostrar el div designat//
		makeActive: function (item) {

			this.active = item;
		},
		
		
		

	
	},
	computed:{
		
		//per filtrar per searchbar(nom)//
		
		nameFilter:function(){
		
			return this.book.filter(buk => buk.titulo.toLowerCase().match(this.bookSearch.toLowerCase())) 
											   
											   
				 

			
		
	},
	
	
	comicFilter:function(){
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
	
	},
	
})
new Vue({
		el: '#app',
  	data: {
    	a: '333',
    	b: ''
  	},
  	methods: {
  		initial(){
	  		// init a, b
	  		// a [6,9], a+b[11,14]

	  		this.a = Math.floor(Math.random() * 4 + 6);
	  		this.b = Math.floor(Math.random() * 4 + (11 - this.a));	
  		}	
  	},
  	beforeMount(){
  		this.initial();
  	}
})
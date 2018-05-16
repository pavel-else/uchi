new Vue({
		el: '#app',
  	data: {
    	a: '333',
    	b: '',

    	l: 38.85,
    	arrowWidth1: 0,
    	arrowWidth2: 0
  	},
  	methods: {
  		initial(){
	  		// init a, b
	  		// a [6,9], a+b[11,14]

	  		this.a = Math.floor(Math.random() * 4 + 6);
	  		this.b = Math.floor(Math.random() * 4 + (11 - this.a));	

	  		this.arrowWidth1 = this.a * this.l;
	  		this.arrowWidth2 = this.b * this.l;
  		}	
  	},
  	beforeMount() {
  		this.initial();
  	},
  	mounted() {
  		console.log(this.arrowWidth1)
  	}

})
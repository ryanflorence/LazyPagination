var LazyPagination = new Class({
	
	Extends: Request.HTML,

		options: {
			buffer: 1000,
			maxRequests: 5,
			data: { 'page': 2 }
		},

	initialize: function(element,options){
		this.parent(options);
		this.element = document.id(element);
		this.bound = this.measure.bind(this);
		this.requests = 0;
		
		this.addEvent('onComplete',function(response,html,htmlString){
			(this.element === document || this.element === window) ? 
				$(document.body).adopt(html[0]) : this.element.adopt(html[0]);
			this.increment();
			this.measure();
		});
		
		this.attach();
		this.measure();
	},
	
	measure: function(){
		var scrollHeight = this.element.getScrollSize().y, 
			height = this.element.getSize().y,
			scroll = this.element.getScroll().y;
		if(scrollHeight-height - this.options.buffer <= scroll) this.send();
		return this;
	},
	
	send: function(){
		if(this.check && this.requests != this.options.maxRequests) this.parent();
	},
	
	increment: function(){
		this.requests++;
		this.options.data.page++;
		return this;
	},
	
	attach: function(){
		window.addEvent('resize',this.bound);
		this.element.addEvent('scroll',this.bound);
		return this;
	},
	
	detach: function(){
		window.removeEvent('resize',this.bound);
		this.element.removeEvent('scroll',this.bound);
		return this;
	}

});
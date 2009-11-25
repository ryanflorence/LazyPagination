window.addEvent('domready',function(){
	var lazy = new LazyPagination(document,{
		url: '_page.php',
		method: 'get',
		maxRequests: 20,
		buffer: 1000
	});
});
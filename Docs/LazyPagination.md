Class: LazyPagination {#LazyPagination}
=======================================

<big>Automatically sends ajax requests as the user scrolls an element.</big>

### Demo:

<iframe src="http://ryanflorence.com/scripts/mootools/LazyPagination/Demos/" style="width: 100%; height:500px; border: solid 1px #999"></iframe>

### Extends:

[Request.HTML][request]


### Example

Set it up just like you would any other pagination on the server.  This example is totally simplified.

#### HTML/PHP Front-page

    <body>
      <div id="navigation"> <!-- fallback navigation --> </div>
      
    	<?php include '_page.php'; ?>
    	
    	<div id="footer">Blah blah blah</div>
    </body>

#### HTML/PHP Requested partial

You would do something on the server to deliver the next page.

    <div class="page">
    	<p>I am a page <?php echo $_GET['page']; ?></p>
    </div>
    
#### JavaScript

    var lazy = new LazyPagination(document,{
    	url: '_page.php',
    	method: 'get',
    	maxRequests: 20,
    	buffer: 1000,
    	navigation: 'navigation', // will destroy this if javascript is enabled
    	inject: {
    		element: 'footer',
    		where: 'before' // will inject pages above the footer
    	}
    });

LazyPagination Method: constructor {#LazyPagination:constructor}
-----------------------------------------------------------------


### Syntax:

	var myLazyPagination = new LazyPagination(element, options);

### Arguments:

1. element - (mixed) A string of the id for an Element or an Element reference that contains pages and overflow.
2. options - (obj) The [Request.HTML][request] options plus the following:

### Options:

* buffer - (number: defaults to 1000) The number of pixels from the bottom of the element to trigger loading of the next page.
* maxRequests - (number: defaults to 5) The maximum number of requests to be sent (usually the number of pages in your pagination minus one.)
* inject (object: defaults to false) The arguments to pass to `element.inject`, accepts `element` and `where` values.  i.e. `inject: {element: 'footer', where: 'before'}`

### Events:

* The [Request.HTML][request] events.

### Note:

By default the `data` option is as follows:

    data: { 'page': 2 }

* It sends `page=2` for the first request and increments from there, assuming you are already displaying page 1.
* If you need to send more data than just the page number, don't forget to include `'page': 2` in your data object.
* If you need to change anything in the data variable after each request, extend the class and alter the `increment` method.


LazyPagination Method: attach {#LazyPagination:attach}
-------------------------------------------------------

<big>Attaches the scroll event to the element and resize event to the window.</big>

### Syntax:

    myLazyPagination.attach();

### Returns

    This LazyPagination instance.

LazyPagination Method: detach {#LazyPagination:detach}
-------------------------------------------------------

<big>Detaches the scroll event from the element and resize event from the window.</big>

### Syntax:

    myLazyPagination.detach();
    
### Returns

This LazyPagination instance.

[request]: http://mootools.net/docs/core/Request/Request.HTML
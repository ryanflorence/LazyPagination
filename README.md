LazyPagination
==============

Automatically sends ajax requests as the user scrolls an element.

### Example

Set it up just like you would any other pagination on the server.  This example is totally simplified.

#### HTML/PHP Front-page

    <body>
    
    	<?php include '_page.php'; ?>
    	
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
    	buffer: 1000
    });

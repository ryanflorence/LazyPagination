LazyPagination
==============

![LazyPagination](http://github.com/rpflorence/LazyPagination/raw/master/Assets/logo.png)

Automatically sends ajax requests as the user scrolls an element. Provides options to control where the response is injected into the DOM (usually above a footer).

How to use
----------

Set it up just like you would any other pagination on the server.  This example is totally simplified.

#### HTML/PHP Front-page

    #HTML
    <body>
      <div id="navigation"> <!-- fallback navigation --> </div>
      
    	<?php include '_page.php'; ?>
    	
    	<div id="footer">Blah blah blah</div>
    </body>

#### HTML/PHP Requested partial

You would do something on the server to deliver the next page.

    #HTML
    <div class="page">
    	<p>I am a page <?php echo $_GET['page']; ?></p>
    </div>
    
#### JavaScript

    #JS
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

View the [MooDoc](http://moodocs.net/rpflo/mootools-rpflo/LazyPagination) for usage and examples.
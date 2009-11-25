<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

	<title>LazyPagination Test / Demo</title>
	<link rel="stylesheet" href="style.css" type="text/css" media="screen" title="no title" charset="utf-8" />
	<script type="text/javascript" src="mootools-1.2.4-core-nc.js"></script>
	<script type="text/javascript" src="../Source/LazyPagination.js"></script>
	<script type="text/javascript" src="demo.js"></script>
</head>

<body>
	<h1>Scrolling down should make <br/>
		20 xhr requests to "Page 21"</h1>
		
	<?php include '_page.php'; ?>
	
	<p>
		<a href="http://moodocs.net/rpflo/mootools-rpflo/LazyPagination">LazyPagination @ moodocs.net</a><br/>
		<a href="http://github.com/rpflorence/LazyPagination">LazyPagination @ github</a>
		<a href="http://ryanflorence.com" id="avatar"><img src="avatar.png" /></a>
	</p>
	
</body>
</html>

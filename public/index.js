// $.ajax('/components/component/component.html')
$.ajax('http://ignitepixels.com')
	.done(function(response){
		$('#app').html(response);
	});
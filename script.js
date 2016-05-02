$(document).ready(function(){
	$('#search-button').click(function(){
		var term = $('#search-input').val();

		$.ajax({
			type: 'get',
			url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + term,
			contentType: 'application/json; charset=utf-8',
			dataType: 'jsonp',
			success: function(data) {
				console.log(data);
				$('#wiki-results').html('');
				for(var s in data.query.pages) {
					var page = data.query.pages[s];

					var title = page.title;
					var extract = page.extract;
					var pageId = page.pageid;

					$('#wiki-results').append('<div class="result"><a target="_blank" href="http://en.wikipedia.org/?curid=' + pageId + '"><h1>' + title + '</h1><p>' + extract + '</p></a></div>');

				}
			}
		});
	});
});

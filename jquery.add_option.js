(function($) {

	$.fn.add_option = function(params) {

		// merge default and user parameters
		params = $.extend({value: '0', display: 'Added Option!'}, params);

		// traverse all nodes
	    return this.each(function() {

	        var $this = $(this);
			$this.append($("<option></option>").attr("value", params.value).text(params.display));

	    });

		// allow jQuery chaining
		return this;
	};

})(jQuery);
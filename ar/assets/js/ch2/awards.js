
$(document).ready(function(){
    
    $('.point').click(function(ev){
			ev.preventDefault();
            
			var url = $(this).data('url');

			$.fancybox.open({
				href : url,
				type : 'iframe',
				openEffect : 'elastic',
				openSpeed  : 150,
				closeEffect : 'elastic',
				closeSpeed  : 150,
				width : '965px',
				height:900,
				padding: 0,
				fitToView: false,
				margin: [80,0,0,0],
				scrolling   : 'no',
				 helpers : {
					overlay : {
						locked : false
					}
				},
				beforeShow: function(){	
					$("body").css({'overflow-y':'hidden'});
					//$('.fancybox-wrap').css('margin-left','-10px');
				},
				afterLoad: function () {
			        this.height = $(this.element).data("height");
			    },
				afterClose: function(){  $("body").css({'overflow-y':'visible'});	}
			});
		});
});
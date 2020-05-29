document.addEventListener("DOMContentLoaded", function() {

    // Custom JS
    $("#navToggle").click(function() {
        $(".navBurger-line").toggleClass("active");
        $("nav.nav").toggleClass("active");
    });

    // $(":not(header)").click(function() {
    //     $(".navBurger-line").removeClass("active");
    //     $("nav.nav").removeClass("active");
    // });

    $(".time-group>label>span").click(function() {
        $(this).parent(".time-group>label").toggleClass("active");
    });

    //-----------------------------------------------------------------
    // Фильтрация символов на цифры для поля воода оценки ============================
    $(function() {
        $("input[name='grades']").on('input', function(e) {
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        });
    });
    //====================================================================
    // Добавление нумерации для чекбокосов ============================
    $('body').each(function() {
        $('.chbx', this).each(function(i) {
            $(this).find('input').attr('id', 'chbx--' + (i + 1));
            $(this).find('label').attr('for', 'chbx--' + (i + 1));
        })
    });
    //====================================================================
    // Добавление нумерации для групп в .panel__list =====================
    $('.admin__panel--groups').each(function() {
        $('li', this).each(function(i) {
            $(this).find('a').append('<span id="number"></span>');
            $(this).find('#number').text('' + (i + 1));
        })
    });
    //=====================================================================

    // // Добавление рандомного цвета бекграунда ячейкам
    // var colors = ['#C0E8DD', '#FEECBC', '#DDE3A7', '#F5C8C5'];
    // $('.week-table .day').each(function() {
    //     var new_color = colors[Math.floor(Math.random() * colors.length)];
    //     $(this).css('background-color', new_color);
    // });
    // =====================================================================
    //Стилизация input[type='file'] ============================
    
    $( 'input[type="file"]' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				$label.find( 'span' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
	});
    //=======================================================================

    $(function(){
        $('input[type="tel"]').mask('+38 (999) 999-99-99')
    });

    //=======================================================================
    //=======================================================================


    // $('input[type="date"]').attr({'type':'text','name':'date'});
    // $('input[type="time"]').attr({'type':'text','name':'time'});
    // $('input[type="datetime-local"]').attr({'type':'text','name':'datetime-local'});



    // let draw = Chart.controllers.line.prototype.draw;
    // Chart.controllers.line = Chart.controllers.line.extend({
    //     draw: function() {
    //         draw.apply(this, arguments);
    //         let ctx = this.chart.chart.ctx;
    //         let _stroke = ctx.stroke;
    //         ctx.stroke = function() {
    //             ctx.save();
    //             ctx.shadowColor = '#E56590';
    //             ctx.shadowBlur = 10;
    //             ctx.shadowOffsetX = 0;
    //             ctx.shadowOffsetY = 4;
    //             _stroke.apply(this, arguments)
    //             ctx.restore();
    //         }
    //     }
    // });


    // // Any of the following formats may be used
    // Chart.platform.disableCSSInjection = true;
    // var ctx = document.getElementById('myChart').getContext('2d');
    // var chart = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'line',

    //     // The data for our dataset
    //     data: {
    //         labels: ['10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20', '10.11.20'],
    //         datasets: [{
    //             label: 'Украинский язык',
    //             fill: false,
    //             borderColor: '#5FCBA1',
    //             data: [5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 11, 12],
    //         }, {
    //             label: 'История Украины',
    //             fill: false,
    //             borderColor: '#FA6A69',
    //             data: [3, 7, 8, 5, 7, 8, 10, 12, 10, 11, 9, 10, 12],
    //         }, {
    //             label: 'Ангийский язык',
    //             fill: false,
    //             borderColor: '#7175D8',
    //             data: [7, 5, 4, 3, 10, 7, 8, 11, 9, 10, 8, 12, 10],
    //         }, {
    //             label: 'Математика',
    //             fill: false,
    //             borderColor: '#E89F57',
    //             data: [4, 3, 5, 6, 9, 6, 7, 8, 7, 9, 10, 10, 11],
    //         }],
    //     },

    //     // Configuration options go here
    //     options: {
    //         responsive: true,
    //         legend: {
    //             position: 'bottom',
    //             align: 'start',
    //             labels: {
    //                 boxWidth: 18,
    //                 fontFamily: 'Gilroy',
    //                 fontStyle: 'bold',
    //                 fontSize: 17,
    //                 fontColor: '#050C42',
    //                 paddingTop: 30
    //             }
    //         },
    //         scales: {
    //             xAxes: [{
    //                 ticks: {
    //                     fontFamily: 'Gilroy',
    //                     fontStyle: 'bold',
    //                     fontSize: 11,
    //                     fontColor: '#43497B',
    //                     padding: 14
    //                 },
    //                 gridLines: {
    //                     color: "#F2F2F1",
    //                     lineWidth: 2,
    //                     zeroLineColor: "#F2F2F1"
    //                 }
    //             }],
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true,
    //                     min: 0,
    //                     max: 12,
    //                     stepSize: 3,
    //                     fontFamily: 'Gilroy',
    //                     fontStyle: 'bold',
    //                     fontSize: 14,
    //                     fontColor: '#43497B',
    //                     padding: 14
    //                 },
    //                 gridLines: {
    //                     color: "#F2F2F1",
    //                     lineWidth: 2,
    //                     zeroLineColor: "#F2F2F1"
    //                 }
    //             }],

    //         },
    //     }
    // });

});








(function(document, window, index) {
    'use strict';
    var inputs = document.querySelectorAll('.file');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));
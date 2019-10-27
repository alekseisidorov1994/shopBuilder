window.addEventListener('DOMContentLoaded',function(){
	// Work with modal windows
	const   
	// close = document.querySelector('#close'),
			// overlay = document.querySelector('.overlay'),
			modalThanks = document.querySelector('.modal__thanks'),
			btn = document.querySelectorAll('button');

		// overlay.addEventListener('wheel',function(event){
		// 	event.preventDefault();
		// });

		// close.addEventListener('click',()=>{
		// 	overlay.style.display= 'none';
		// 	modalThanks.style.display = 'none'
		// });

		btn.forEach(function(item){
			item.addEventListener('click',()=>overlay.style.display='block');
		})



// Slider-mini on section features
	const	featuresWrap = document.querySelector('.features__wrap'),
			featuresItem = document.querySelectorAll('.features__item'),
			arrowLeft = document.getElementById('arrow_left'),
			arrowRight = document.getElementById('arrow_right');

		






});
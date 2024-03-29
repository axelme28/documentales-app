import React from 'react';

export const MovingTitle = ({ title = '' }) => {
	return (
		<>
			<h1 className='ml6 text-center'>
				<span className='text-wrapper'>
					<span className='letters'>{title}</span>
				</span>
			</h1>

			<script src='https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js'>
				{/* var textWrapper = document.querySelector('.ml6 .letters');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            
                anime.timeline({loop: true})
                .add({
                    targets: '.ml6 .letter',
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    duration: 750,
                    delay: (el, i) => 50 * i
                }).add({
                    targets: '.ml6',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000
                }) */}
			</script>
		</>
	);
};

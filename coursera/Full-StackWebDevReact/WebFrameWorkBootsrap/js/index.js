import jQuery from 'jquery';
window.$ = window.jQuery = jQuery; // workaround for https://github.com/parcel-bundler/parcel/issues/333
import 'bootstrap/dist/js/bootstrap.bundle';

$(document).ready(function() {
	// 2 second per slide
	$('#mycarousel').carousel({ interval: 2000 });

	$('#carouselButton').click(function() {
		if (
			$('#carouselButton')
				.children('span')
				.hasClass('fa-pause')
		) {
			$('#carouselButton')
				.children('span')
				.removeClass('fa-pause');
			$('#carouselButton')
				.children('span')
				.addClass('fa-play');
			$('#mycarousel').carousel('pause');
		} else {
			$('#carouselButton')
				.children('span')
				.removeClass('fa-play');
			$('#carouselButton')
				.children('span')
				.addClass('fa-pause');
			$('#mycarousel').carousel('cycle');
		}
	});
});

const showLoginModal = () => {
	$('#loginModal').modal('show');
};
const showReservationModal = () => {
	$('#reservationModal').modal('show');
};

// Button eEvents
document.getElementById('login-modal').addEventListener('click', showLoginModal);
document.getElementById('reserve-modal').addEventListener('click', showReservationModal);

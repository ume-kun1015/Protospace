// Making references in the code below
//http://yamakadoh.net/weblog/?p=595

$(document).on("turbolinks:load", function(){

	const mainImageId      = "#main-prototype-image";
	const mainImageWidth   = 730;
	const mainImageHeight  = 500;

	const firstSubImageId  = "#sub-prototype-image1";
	const secondSubImageId = "#sub-prototype-image2";
	const thirdSubImageId  = "#sub-prototype-image3";
	const subImageWidth    = 213;
	const subImageHeight   = 200; 

	const reader          =  new FileReader();

	function previewImage(idName){
		$(idName + ' input[type=file]').change(function(){
			// get an image file
			const file = $(this).prop('files')[0];

			if(file.type.match('image.*')) {

				reader.onload = function() {
					let idNameImage = $(idName + ' img');

					// set src tag into id Name
					idNameImage.attr('src', reader.result);
					idNameImage.addClass("image-preview");

					if(idName.match('#main-')) idNameImage.width(mainImageWidth).height(mainImageHeight); 
					if(idName.match('#sub-')) idNameImage.width(subImageWidth).height(subImageHeight);
			}
	
			reader.readAsDataURL(file);
			}
		});
	}

	previewImage(mainImageId);
	previewImage(firstSubImageId);
	previewImage(secondSubImageId);
	previewImage(thirdSubImageId);
});

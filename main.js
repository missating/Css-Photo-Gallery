

var image = document.getElementById("mainImage");

var imageArr = [ 	"https://nessaating.files.wordpress.com/2015/04/wpid-img-20150416-wa0000.jpg",
					"https://nessaating.files.wordpress.com/2015/04/wpid-img-20150416-wa0002.jpg",
					"https://nessaating.files.wordpress.com/2015/01/wpid-words-turn-pictures.jpg",
					"https://nessaating.files.wordpress.com/2015/01/wpid-lone-times.jpg",
					"https://nessaating.files.wordpress.com/2014/11/wpid-au-contraire-jpg.jpeg",
					"https://nessaating.files.wordpress.com/2014/10/wpid-dreams.jpg",
					"https://nessaating.files.wordpress.com/2014/10/wpid-music.jpg",
					"https://nessaating.files.wordpress.com/2014/10/wpid-shots.jpg"];

var imageIndex = 0;

function changeImage() {
	image.setAttribute("src", imageArr[imageIndex]);
	imageIndex++;


	if(imageIndex >= imageArr.length) {
			imageIndex = 0; 
	}
}

setInterval(changeImage, 5000);


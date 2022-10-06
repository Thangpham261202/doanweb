function menureponsive(){
    let openmenu = document.querySelector('.menu-reponsvie');
    openmenu.classList.toggle('openmenu');
}
function openseemore(){
    document.querySelector('.openseemore').classList.add('hi')
    let removeseemore = document.querySelector('.seemore');
    removeseemore.classList.add('removeseemore');
}
function changeimg(id){
    let changeimg = document.getElementById(id).getAttribute('src');
    document.getElementById('imgmain').setAttribute('src',changeimg);
}

//jquery
$(document).ready(function(){
	var stt = 0;
	var endImg = $("img.slide:last").attr("idx");

	$("button").click(function(){

		stt = $(this).attr("idx");
		$("img.slide").hide();
		$("img.slide").eq(stt).show();
	});
	$("#next").click(function(){
		if (++stt > endImg) {
			stt = 0;
		}
		$("img.slide").hide();
		$("img.slide").eq(stt).show();
	});

	$("#prev").click(function(){
		if(--stt < 0){
			stt = endImg;
		}
		$("img.slide").hide();
		$("img.slide").eq(stt).show();
	});
	var interval;
	var timer = function(){
		interval = setInterval(function(){
			$("#next").click();
		},3000);
	};
	timer();
  
});

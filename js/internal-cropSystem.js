$(function() {
	$(document).on("click", "#upload-photo-label", function(){
		$("#upload-photo").click();
	});
});

document.getElementById('upload-photo').onchange = function(event) {

    var fileList = this.files[0];
	//very important files set to null or else if user deletes and tries to reupload same pic will not work!!
	this.value = null;
 
    var reader = new FileReader();
    reader.onloadend = function(){

		if($("#img1").hasClass("hidden")){
			$("#img1").removeClass("hidden");
		}
	
		document.getElementById("img1").src = reader.result;

		addImgList(reader.result);
    }	
    if(fileList){
        reader.readAsDataURL(fileList);
    }else{
		alert("upload error");
    }
}

function addImgList(data){

	var prevActive = document.getElementsByClassName("activeImg");
	$(prevActive[0]).removeClass("activeImg");
	
	var img = document.createElement("img");
	img.className = "imgListItem activeImg";
	img.src = data;

	$("#imgList").append(img);
}

$(function() {
	$(document).on("click", ".imgListItem", function(){
	
		var prevActive = document.getElementsByClassName("activeImg");
		$(prevActive[0]).removeClass("activeImg");
		
		this.className += " activeImg";
		document.getElementById("img1").src = this.src;
	
	});
});

$(function() {
	$(document).on("click", "#deleteImgBtn", function(){
	
		var delListImg = document.getElementsByClassName("activeImg");
		$(delListImg[0]).remove();
		
		if(document.getElementsByClassName("imgListItem")[0]){
			var imgList = document.getElementsByClassName("imgListItem");
			imgList[0].className += " activeImg";
			document.getElementById("img1").src = imgList[0].src;
		}else{//empty image list
			document.getElementById("img1").src = "#";
			document.getElementById("img1").className += " hidden";
		}
	
	});
});
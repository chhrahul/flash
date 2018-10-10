function openPdf(filePath)
{
   //alert(filePath);
   window.open(filePath,'_system');
}


function open_pdf_android(f)
{
    //alert(f);
    window.open(f,'_system', 'location=yes');
}

function open_pdf_ios(f)
{
    /*var option = {
        password: null,
        flatUI: true,
        showShadows: true,
        enableThumbs: true,
        disableRetina: false,
        enablePreview: true,
        bookmarks: true,
        landscapeDoublePage: true,
        landscapeSingleFirstPage: true,
        toolbarBackgroundColor: null,
        textColor: null,
        enableShare: false
    };
    PDFReader.open(f, option, successpdf, errorpdf); */
    window.open(filePath,'_blank', 'location=no');
}

function successpdf()
{
    console.log("pdf opened");
}

function errorpdf()
{
    console.log("Error opening pdf file.");
}

function openFile(filePath, fileMIMEType) {
  //window.open(filePath,'_system', 'location=yes');
	cordova.plugins.fileOpener2.open(
		filePath,
		fileMIMEType, {
		error: function (e) {
			/*window.plugins.toast.show("Your phone is unable to display this file type within this app.", 'short', 'bottom', function (a) {
				console.log('toast success: ' + a)
			}, function (b) {
				console.log('toast error: ' + b)
			});*/
            window.open(filePath,'_blank', 'location=no');
		},
		success: function () { 
		}
	});
}

 function checkme(abc)
 {
 //alert(abc)
 }
 
 function openmypdf(f)
 {
    var url = "http://softweavertech.com/projects/visicoil/pdf/"+f;
    alert(url)
    cordova.InAppBrowser.open(url,'_system', 'location=no');
 }


	function viewpdf(filename) {
	var fileUrl = "http://softweavertech.com/projects/visicoil/pdf/"+filename;
  
	var fileName = filename;
	//var fileTransfer = new FileTransfer();
	//var uri = encodeURI(fileUrl);
  alert(device.platform)
  ///alert(fileName)
	if(device.platform == 'Android')
  {
      var fileUrl = cordova.file.externalCacheDirectory;
  }
  else {
      var fileUrl = cordova.file.documentsDirectory;
  }  
   ///alert(fileUrl)
}

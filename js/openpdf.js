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
            window.open(filePath,'_system', 'location=yes');
		},
		success: function () { 
		}
	});
}




	function downloadDoc(filename) {
    
	
	var fileUrl = "http://softweavertech.com/projects/visicoil/pdf/"+filename;
	var fileName = filename;
	var fileTransfer = new FileTransfer();
	var uri = encodeURI(fileUrl);
  alert(uri)
	if(device.platform == 'Android')
  {
      var fileUrl = cordova.file.externalCacheDirectory;
  }
  else {
      var fileUrl = cordova.file.documentsDirectory;
  }  
  //alert(fileUrl)   
	window.resolveLocalFileSystemURL(fileUrl + "/" + fileName, function (fs) {
		fs.file(function (file) {
			
      //alert(fs.toURL() + ' => 1 => '+file.type)
			openFile(fs.toURL(), file.type);
		},
			function (fail) {
			
			
		});
	},
		function (fail) {  


			//alert(uri)
			//alert(fileUrl) 

	//	hideLoader();
		//showLoader("Downloading file ...");
		
		fileTransfer.download(
			uri,
			fileUrl + "/" + fileName,
			function (entry) {
			entry.file(function (file) {
				
				
                //alert(file.type)
                
                if(file.type == 'application/pdf')
                {
                    //openFile(entry.toURL(), file.type);
                    if(device.platform == 'Android')
                    {
                        open_pdf_android(entry.toURL());
                    }
                    else 
                    {
                        open_pdf_ios(entry.toURL());
                    }
                } 
                else
                {
                   open_pdf_android(entry.toURL());
                } 
                //openFile(entry.toURL(), file.type);
				
			},
				function (fail) {
				
				
			});
		},
		function (error) {
			
		},
			true/* , {
			headers: {
				"Authorization": "Basic " + btoa(httpUser + ":" + httpPwd)
			}
		} */);
	});

}

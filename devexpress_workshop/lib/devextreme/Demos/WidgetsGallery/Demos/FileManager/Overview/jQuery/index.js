$(function () {
    $("#file-manager").dxFileManager({
        name: "fileManager",
        fileProvider: new DevExpress.fileProviders.Remote({
            endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images"
        }),
        currentPath: "Widescreen",
        permissions: {
            create: true,
            copy: true,
            move: true,
            remove: true,
            rename: true,
            upload: true,
            download: true
        },
		onSelectedFileOpened: function(e) {
			var popup = $("#photo-popup").dxPopup("instance");
            popup.option({
                "title": e.fileItem.name,
                "contentTemplate": "<img src=\"" + e.fileItem.dataItem.url + "\" class=\"photo-popup-image\" />"
            });
            popup.show();
		}
    });
	
	$("#photo-popup").dxPopup({
		maxHeight: 600,
        closeOnOutsideClick: true,
        onContentReady: function(e) {
            var $contentElement = e.component.content();  
            $contentElement.addClass("photo-popup-content");
          }
	});
});
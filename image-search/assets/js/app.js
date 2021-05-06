var currentPage = 1;
var totalPages = 0;

function onClickSearch() {
	window.currentPage = 1; 
	searchImages(); 

}

function searchImages() {
	document.getElementById('images-grid').innerHTML = "";
	let query = document.getElementById('images-search').value; 
	let color = document.getElementById('colors-search').value;
	let url = 'https://api.unsplash.com/search/photos/?query='+query+'&page='+currentPage+'&per_page=12&client_id=OcHp87mHWS_Na7HRblLZHbBigFeJ59bRf1OUYCqTGSQ';

	if(color!='all') {
		url = url + '&color=' + color;
	} 

	fetch(url)
	.then(response => response.json())
	.then((data) => {
		window.totalPages = data.total_pages;
		if(data.results.length > 0) {
			loadResults(data.results);
			document.getElementById("page-num").textContent = "Showing page " + window.currentPage + " of " + data.total_pages; 
		} else {
			document.getElementById('pagination').style.display = 'none';
			document.getElementById("page-num").textContent = "No results found"; 
		}
	})
	.catch(error => { throw error });
}

function nextPage() {
	if(window.currentPage+1 <= window.totalPages) {
		window.currentPage++; 
		searchImages();
	}
}

function previousPage() {
	if(window.currentPage-1 > 0) {
		window.currentPage--; 
		searchImages();
	}
}

function loadResults(results) {
	let fragment = document.createDocumentFragment(); 

	results.forEach(function (item) {

		let url = item.urls.small; 
		let resultCell = document.createElement('div'); 
		resultCell.className = 'image-container';

		let imageContainer = document.createElement('div'); 
		imageContainer.className = 'image-wrapper';
		
		let resultImg = document.createElement('img'); 
		resultImg.src = url;
		resultImg.className = 'small-image';
		resultImg.alt = item.alt_description;
		resultImg.addEventListener("click", function(e) {
			showImageDetails(item);
		}, false);
		resultImg.id = item.id;
		resultImg.style.borderColor = item.color;
		imageContainer.appendChild(resultImg);
		resultCell.appendChild(imageContainer);

		let backgroundDiv = document.createElement('div'); 
		backgroundDiv.style.backgroundColor = item.color; 
		backgroundDiv.className = 'image-background';
		resultCell.appendChild(backgroundDiv);
		
		fragment.appendChild(resultCell);

	})

	document.getElementById('pagination').style.display = '';
	let resultGrid = document.getElementById('images-grid');
	resultGrid.appendChild(fragment);
}

function showImageDetails(item) {
	let fragment = document.createDocumentFragment();

	let imageDetails = document.createElement('div'); 
	imageDetails.id = 'image-details';
	imageDetails.style.borderColor = item.color;

	document.getElementById('image-detail-header').style.backgroundColor = item.color;
	
	let imageTitle = document.createTextNode(item.alt_description); 
	let title = document.createElement('h2'); 
	title.appendChild(imageTitle); 
	imageDetails.appendChild(title);

	let url = item.urls.regular; 
	let image = document.createElement('img'); 
	image.src = url; 
	image.className = 'normal-image';
	image.alt = item.alt_description; 
	imageDetails.appendChild(image); 

	if(item.description != null) {
		let description = document.createElement('p'); 
		let descriptionText = document.createTextNode(item.description); 
		description.className = 'image-description'
		description.appendChild(descriptionText); 
		imageDetails.appendChild(description);
	}


	let detailModule = document.getElementById('image-detail-module');
	document.getElementById('image-detail-module-container').style.display = '';
	detailModule.appendChild(imageDetails); 

}

function closeDetails() {
	document.getElementById('image-detail-module-container').style.display = 'none';
	document.getElementById('image-details').remove();
}

var percent = 0;

let progressBar = document.querySelector('.progress-bar');
let button_1 = document.querySelector('.button-1');
let button_3 = document.querySelector('.button-3');
let button_7 = document.querySelector('.button-7');

button_1.addEventListener('click', (event) => 
	{
		percent += 1;
		progressBar.style.width = percent + '%';
		progressBar.textContent = percent + '%';
	}
);

button_3.addEventListener('click', (event) => 
	{
		percent += 3;
		progressBar.style.width = percent + '%';
		progressBar.textContent = percent + '%';
	}
);

button_7.addEventListener('click', (event) => 
	{
		percent += 7;
		progressBar.style.width = percent + '%';
		progressBar.textContent = percent + '%';
	}
);
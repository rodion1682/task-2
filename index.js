import './index.css';
export default function initApp() {
	const button =	document.querySelector('.cookie-consent__button');
	const cookieConsent = document.querySelector('.cookie-consent');
	let hide = localStorage.getItem('value');
	cookieConsent.classList.add(hide);

	if (localStorage.getItem('value') !== 'hide') {
		console.log('yes');
		button.addEventListener('click', () => {
			localStorage.setItem('value', 'hide');
			hide = localStorage.getItem('value');
			cookieConsent.classList.add(hide);
		});
	}
	//localStorage.clear();
}
initApp();
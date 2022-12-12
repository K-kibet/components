const targetElement = document.querySelector('span');

const setOnline = () => {
    targetElement.innerText = 'Online ';
    targetElement.style.color = '#30cf59';
}

const setOffline = () => {
    targetElement.innerText = 'Offline ';
    targetElement.style.color = 'red';
}

window.navigator.onLine ? setOnline() : setOffline()

window.addEventListener('online', setOnline);
window.addEventListener('offline', setOffline);
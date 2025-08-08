// <!-- Tabs Component part start here  -->
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
// <!-- Tabs Component part start here  -->


// <!-- accordion part start here  -->
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) {
                c.classList.remove('open');
            }
        });

        content.classList.toggle('open');
    });
});
// <!-- accordion part start here  -->


// <!-- Digital Clock part start here  -->
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    
    const hh = hours < 10 ? '0' + hours : hours;
    const mm = minutes < 10 ? '0' + minutes : minutes;
    const ss = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hh}:${mm}:${ss} ${ampm}`;
    document.getElementById('digitalClock').textContent = timeString;
}

// Call once and then every second
updateClock();
setInterval(updateClock, 1000);
// <!-- Digital Clock part start here  -->
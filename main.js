let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.nevbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
})

menu.onclick = () => {
    nevbar.classList.toggle('active')
}
window.onscroll = ()=>{
    nevbar.classList.remove('active')
}

const form = document.getElementById('contactForm');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const data = { name, email, message };

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      alert('✅ Message sent successfully!');
      form.reset();
    } else {
      alert('❌ Error: ' + result.error);
    }
  } catch (error) {
    console.error(error);
    alert('❌ Server error. Please try again later.');
  }
});

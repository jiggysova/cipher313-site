// Auto year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Gallery filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('#gallery .card');

filters.forEach(f => {
  f.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    const cat = f.dataset.filter;
    cards.forEach(c => {
      c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'block' : 'none';
    });
  });
});

// Social links (replace with your handles)
document.getElementById('ig').href = 'https://instagram.com/jiggysova';
document.getElementById('tt').href = 'https://tiktok.com/@jiggysovaa';
document.getElementById('fv').href = 'https://fiverr.com/jiggysova';

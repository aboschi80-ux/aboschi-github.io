// ===== Script per il sito Progetto Europeo =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sito Progetto Europeo caricato');
    
    // Smooth scroll per i link di navigazione
    setupSmoothScroll();
    
    // Evidenzia la pagina attuale nella navbar
    highlightCurrentPage();
});

// ===== Smooth Scroll =====
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Highlight Current Page in Navbar =====
function highlightCurrentPage() {
    // Ottieni il nome del file corrente
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Seleziona tutti i link nella navbar
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const linkPage = href.split('/').pop();
        
        // Rimuovi la classe active da tutti i link
        link.classList.remove('active');
        
        // Aggiungi la classe active al link della pagina corrente
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// ===== Lazy Loading Images (Opzionale) =====
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== Console Log per Debug =====
console.log('Script caricato correttamente');

# 🌍 Progetto Europeo - Sito Web

Questo è il sito web ufficiale del progetto europeo. È costruito con **HTML5**, **Bootstrap 5**, e **CSS3** per garantire compatibilità con dispositivi mobile e desktop.

## 📋 Contenuti

- **index.html** - Pagina home del progetto
- **pages/chi-siamo.html** - Chi siamo e i partner coinvolti
- **pages/cosa-abbiamo-fatto.html** - Risultati e realizzazioni
- **pages/mappa-interattiva.html** - Mappa QGIS Cloud integrata
- **pages/overview.html** - Panoramica generale del progetto
- **css/style.css** - Stili personalizzati
- **js/script.js** - Funzionalità JavaScript
- **images/** - Cartella per le immagini

## 🚀 Come Usare

### 1. Clonare il Repository
```bash
git clone https://github.com/tuo-username/tuo-username.github.io.git
cd tuo-username.github.io
```

### 2. Aggiungere Contenuti
- Modifica i file HTML per aggiungere i tuoi contenuti
- Inserisci le immagini nella cartella `images/`
- Aggiungi la mappa QGIS Cloud in `pages/mappa-interattiva.html`
- Personalizza i colori in `css/style.css`

### 3. Upload su GitHub
```bash
git add .
git commit -m "Aggiornamento contenuti"
git push origin main
```

### 4. Visualizzare il Sito
Il sito sarà disponibile a: `https://tuo-username.github.io`

## 📝 Struttura delle Pagine

Ogni pagina contiene:
- **Navbar sticky** con navigazione principale
- **Hero section** con titolo e descrizione
- **Contenuto principale** con testo e immagini
- **Sidebar** (dove applicabile) con informazioni aggiuntive
- **Footer** con copyright

## 🎨 Personalizzazione

### Cambiare Colori
Modifica le variabili di colore in `css/style.css`:
```css
/* Colori principali */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Aggiungere Immagini
1. Salva l'immagine nella cartella `images/`
2. Inserisci il seguente codice HTML:
```html
<img src="images/nome-immagine.jpg" alt="Descrizione" class="img-fluid rounded">
```

### Inserire Mappa QGIS Cloud
1. Crea un progetto in QGIS Cloud
2. Ottieni il codice embed
3. Sostituisci il placeholder in `pages/mappa-interattiva.html`:
```html
<iframe src="https://qgiscloud.com/..." 
        style="border:0; width:100%; height:500px;" 
        allowfullscreen="" 
        loading="lazy"></iframe>
```

### Aggiungere Audio
```html
<audio controls style="width:100%;">
    <source src="path/to/audio.mp3" type="audio/mpeg">
    Il tuo browser non supporta l'audio HTML5.
</audio>
```

## 📱 Responsive Design

Il sito è completamente responsive e si adatta automaticamente a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔐 Sicurezza

Il sito è statico (solo HTML/CSS/JS) e non memorizza dati. Non è necessario un server backend.

## 📚 Tecnologie Utilizzate

- **HTML5** - Struttura
- **Bootstrap 5** - Framework CSS
- **CSS3** - Stili personalizzati
- **JavaScript** - Interattività minima
- **QGIS Cloud** - Mappe interattive
- **GitHub Pages** - Hosting gratuito

## ⚡ Performance

- Velocità di caricamento ottimizzata
- Immagini responsivhe
- CDN per Bootstrap
- Cache del browser

## 📞 Supporto

Per domande o problemi, contatta il team del progetto.

## 📄 Licenza

Questo progetto è parte dell'iniziativa europea. Tutti i diritti sono riservati.

---

**Versione 1.0** - Agosto 2024

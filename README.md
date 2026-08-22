# 🌍 Progetto Europeo - Sito Web

Sito web moderno e minimalista per la presentazione di un progetto europeo. Design pulito, responsive e facile da personalizzare.

## 📋 Struttura del Progetto

```
sito-progetto-nuovo/
├── index.html                      (Home)
├── pages/
│   ├── chi-siamo.html             (Chi Siamo - Layout alternato)
│   ├── risultati.html             (Risultati e Realizzazioni)
│   ├── formazioni.html            (Corsi e Formazioni)
│   ├── galleria.html              (Galleria Foto Eventi)
│   ├── mappa.html                 (Mappa Interattiva QGIS Cloud)
│   └── overview.html              (Info Generali Progetto)
├── css/
│   └── style.css                  (Stili minimalisti)
├── js/
│   └── script.js                  (Interattività)
├── images/
│   ├── home/                      (Immagini home page)
│   ├── chi-siamo/                 (Foto persone team)
│   ├── risultati/                 (Foto risultati)
│   ├── formazioni/                (Foto corsi)
│   ├── galleria/                  (Foto eventi)
│   └── mappa/                     (Immagini mappa)
└── README.md                      (Questo file)
```

## 🎨 Caratteristiche del Design

- **Minimalista e Professionale**: Design pulito ispirato a siti europei di qualità
- **Responsive**: Perfetto su mobile, tablet e desktop
- **Navbar Sticky**: Navigazione sempre visibile
- **Layout Alternato**: Nella pagina "Chi Siamo", foto e descrizione si alternano
- **Galleria Foto**: Layout grid per raccogliere foto degli eventi
- **Timeline Interattiva**: Per visualizzare risultati e fasi del progetto
- **Colori Coerenti**: Palette di colori armoniosi per ogni sezione

## 📱 Pagine Principali

### 1. **Home (index.html)**
- Hero section accattivante
- Highlights del progetto
- Preview della sezione "Chi Siamo"
- Call-to-action per scoprire di più

### 2. **Chi Siamo (pages/chi-siamo.html)**
- **Layout Alternato**: Foto a sinistra, descrizione a destra (alternate)
- Profili dei team member con foto e biografie
- Sezione partner istituzionali
- Missione e visione

### 3. **Risultati (pages/risultati.html)**
- Timeline interattiva dei risultati
- Deliverables del progetto
- Statistiche di impatto
- Lezioni apprese

### 4. **Formazioni (pages/formazioni.html)**
- Grid di corsi con dettagli
- Materiale didattico scaricabile
- Risorse per la formazione
- Certificazioni

### 5. **Galleria Foto (pages/galleria.html)**
- Grid responsive per foto
- Organizzata per eventi
- Overlay interattivo al hover
- Lightbox per visualizzazione completa (opzionale)

### 6. **Mappa (pages/mappa.html)**
- Spazio per embed QGIS Cloud
- Aree di intervento
- Download dataset geografici
- Istruzioni di utilizzo

### 7. **Info (pages/overview.html)**
- Panoramica completa del progetto
- Dettagli amministrativi
- Obiettivi strategici
- Fasi del progetto
- KPI e indicatori di successo

## 🚀 Come Iniziare

### 1. Configurare GitHub Pages
```bash
# Clona il repository
git clone https://github.com/tuo-username/tuo-username.github.io.git
cd tuo-username.github.io

# Copia i file del sito
# (Estrai il ZIP e copia tutti i file in questa cartella)

# Upload su GitHub
git add .
git commit -m "Nuovo design minimalista per il sito"
git push origin main
```

### 2. Personalizzare i Contenuti

#### Modificare il Titolo
Cambia "Progetto Europeo" nel navbar di ogni pagina:
```html
<a href="../index.html" class="nav-logo">
    <i class="fas fa-leaf"></i> Il Tuo Titolo Progetto
</a>
```

#### Aggiungere Foto
1. Sostituisci le immagini placeholder nella cartella `images/`
2. Organizza per sezione (home, chi-siamo, risultati, ecc.)
3. Mantieni gli stessi nomi di file per non modificare gli HTML

#### Modificare Testi
Editda i file HTML direttamente:
- Titoli e descrizioni
- Nomi persone e ruoli
- Date e informazioni progetti
- Link e contatti

### 3. Aggiungere Mappa QGIS Cloud

Nella pagina `pages/mappa.html`, sostituisci il placeholder con il tuo embed:

```html
<iframe src="https://qgiscloud.com/tuo-progetto" 
        style="border:0; width:100%; height:600px;" 
        allowfullscreen="" 
        loading="lazy">
</iframe>
```

## 🎯 Personalizzazione CSS

I colori principali sono gestiti nel file `css/style.css`:

```css
/* Colore principale del sito */
color: #16a085;  /* Verde teal - Cambia qui */

/* Colori delle sezioni */
/* Chi Siamo: #2c5aa0 (blu) */
/* Risultati: #1b8a3d (verde) */
/* Formazioni: #f39c12 (arancione) */
/* Galleria: #e67e22 (arancione scuro) */
/* Mappa: #16a085 (teal) */
/* Info: #2980b9 (blu scuro) */
```

## 📸 Gestione Immagini

### Dimensioni Consigliate
- **Hero Banner**: 1200x500px
- **Profili Team**: 400x400px
- **Galleria**: 800x600px (verranno ritagliate quadrate)
- **Risultati**: 800x600px
- **Mappa**: 800x600px

### Cartelle Immagini
```
images/
├── home/          → Immagini home page
├── chi-siamo/     → Foto persone (persona1.jpg, persona2.jpg, ecc.)
├── risultati/     → Foto risultati
├── formazioni/    → Foto corsi
├── galleria/      → Foto eventi (evento1-foto1.jpg, ecc.)
└── mappa/         → Immagini mappa
```

## 🔗 Integrazione QGIS Cloud

1. Crea un progetto su [qgiscloud.com](https://qgiscloud.com)
2. Pubblica il tuo progetto QGIS
3. Ottieni il link embed dalla pagina pubblica
4. Incolla il link in `pages/mappa.html`

## 📱 Responsive Design

Il sito è completamente responsive:
- **Desktop**: Layout completo con tutte le funzionalità
- **Tablet**: Adattamento automatico della griglia
- **Mobile**: Menu hamburger, layout a colonna singola

## ⚡ Performance

- Immagini ottimizzate e compresse
- CSS e JS minimalisti
- CDN per Font Awesome icons
- Nessuna dipendenza esterna pesante

## 📝 Note Importanti

- Il sito è **statico** (HTML/CSS/JS) → nessun database o server backend
- Nessun form di contatto → solo visualizzazione contenuti
- Nessun login/autenticazione → pubblico
- Hosting su GitHub Pages → **completamente gratuito e permanente**

## 🎓 Suggerimenti per il Contenuto

### Chi Siamo
- Aggiungi biografie dettagliate delle persone
- Includi foto professionali
- Descrivi il ruolo di ogni persona nel progetto

### Risultati
- Numero di beneficiari
- Aree geografiche coperte
- Dati quantitativi e qualitativi
- Testimonianze di impatto

### Formazioni
- Descrizione dettagliata di ogni corso
- Competenze acquisite
- Docenti e esperti
- Date e modalità di partecipazione

### Galleria
- Momenti significativi dagli eventi
- Foto di gruppo e attività
- Caption con data e luogo
- Diversità geografica e umana

## 📧 Support e Contatti

Per domande su come utilizzare il sito, consulta i commenti nei file HTML dove troverai note e suggerimenti.

## 📄 License

Questo sito è parte di un progetto europeo. Tutti i diritti sono riservati.

---

**Versione 2.0** - Design Minimalista Moderno
**Data di Creazione**: Agosto 2024

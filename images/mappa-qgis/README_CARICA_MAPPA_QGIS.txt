📍 CARTELLA MAPPA QGIS2WEB
═════════════════════════════════════════════════════════════

🎯 COSA FARE:

Questa cartella `mappa-qgis/` è destinata a contenere la mappa interattiva 
creata con QGIS2Web.

1️⃣ ESTRAI LA TUA MAPPA QGIS2WEB:
   Hai una cartella con:
   ├── index.html
   ├── images/
   ├── layers/
   ├── resources/
   ├── styles/
   ├── webfonts/
   └── README.txt

2️⃣ COPIA TUTTO QUI:
   Copia il contenuto della cartella QGIS2Web in questa cartella `mappa-qgis/`

   IMPORTANTE: Il file index.html della mappa DEVE essere direttamente 
   nella cartella `mappa-qgis/`, non in una sottocartella!

   Struttura corretta:
   mappa-qgis/
   ├── index.html        ← File principale della mappa QGIS
   ├── images/
   ├── layers/
   ├── resources/
   ├── styles/
   ├── webfonts/
   └── README.txt

   Struttura SBAGLIATA:
   mappa-qgis/
   └── mappa/            ← NO! I file devono essere direttamente qui
       ├── index.html

3️⃣ VERIFICA IL FUNZIONAMENTO:
   Apri in browser:
   http://localhost/tuo-sito/mappa-qgis/index.html
   
   Oppure accedi via GitHub Pages:
   https://aboschi80-ux.github.io/aboschi-github.io/mappa-qgis/index.html

4️⃣ COMMIT E PUSH:
   git add mappa-qgis/
   git commit -m "Add: QGIS2Web interactive map"
   git push origin main

═════════════════════════════════════════════════════════════

⚠️  NOTE IMPORTANTI:

- QGIS2Web crea file HTML, JS, CSS e risorse che funzionano come un'app
- Non modificare i file della mappa a mano (sono generati da QGIS)
- Se modifichi la mappa in QGIS, esporta di nuovo e copia nuovamente i file
- La mappa sarà automaticamente embedded nella pagina mappa.html tramite iframe

═════════════════════════════════════════════════════════════

🔗 COME FUNZIONA:

Il file pages/mappa.html contiene questo:
  <iframe src="../mappa-qgis/index.html" style="..."></iframe>

Questo carica la mappa QGIS dentro la pagina, mantenendo:
- La navbar di Collettiva Rampicante
- Il footer
- Lo stile del sito

═════════════════════════════════════════════════════════════

💡 SUGGERIMENTO:

Se vuoi che la mappa sia responsiva (si adatti a mobile), 
assicurati che il file index.html di QGIS abbia:

<meta name="viewport" content="width=device-width, initial-scale=1.0">

(Di solito è già presente in QGIS2Web)

═════════════════════════════════════════════════════════════

# 🌿 GUIDA: COME MODIFICARE IL SITO TU STESSO

## 📝 MODIFICARE IL TESTO GRANDE DELLA HOME

### Problema: Voglio ingrandire/rimpicciolire il testo "Laboratori creativi per coltivare comunità nei quartieri di Bologna"

### Soluzione: Modifica il `font-size`

**Nel file:** `index.html`

**Cerca questa linea:**
```html
<p style="font-size: 1.8rem; font-weight: bold; ...">Laboratori creativi per coltivare comunità nei quartieri di Bologna</p>
```

**Modifica questo numero:** `font-size: 1.8rem`

**Numeri comuni:**
- `1.2rem` = Piccolo
- `1.5rem` = Normale
- `1.8rem` = Grande (attuale) ⭐
- `2.2rem` = Molto grande
- `2.5rem` = Enorme

**Esempio - Per renderlo ANCORA PIÙ GRANDE:**
```html
<p style="font-size: 2.2rem; font-weight: bold; ...">Laboratori creativi...</p>
```

---

## 🎯 MODIFICARE ALTRI TESTI COMUNI

### Testo della Home (Hero)
**File:** `index.html`  
**Cerca:** `🌿 Collettiva Rampicante`  
**Modifica il titolo/sottotitolo tra i tag `<h1>` e `<p>`**

```html
<h1 style="...">🌿 Collettiva Rampicante</h1>
<p style="...">Laboratori creativi...</p>
```

### Titoli delle Sezioni
**Cerca:** `<h2>Chi Siamo</h2>`  
**Modifica il testo tra i tag `<h2>`**

---

## 🖼️ AGGIUNGERE FOTO ALLE FORMAZIONI

### Dove Metterle
Cartella: `images/formazioni/`

### Nomi File da Usare
```
evento1.jpg → Prima locandina (Talee in Festa)
evento2.jpg → Secondo laboratorio (Alberi che parlano)
evento3.jpg → Terzo laboratorio (Piante che viaggiano)
evento4.jpg → Quarto laboratorio (Storie di piante)
```

### Come Funziona il Layout
```
EVENTO 1
[FOTO] | Titolo
       | Descrizione
       
EVENTO 2
Titolo | [FOTO]
Descr. |
```

Le foto si alternano automaticamente (sinistra/destra).

---

## 🏷️ AGGIUNGERE/TOGLIERE BADGE

### File: `chi-siamo.html`

**Attualmente:** ❌ NON CI SONO (rimossi come richiesto)

**Se li vuoi rimettere, cerca:**
```html
<div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <span style="background: rgba(123, 192, 67, 0.2); ...">Attivismo</span>
</div>
```

**Per aggiungerne uno:**
```html
<span style="background: rgba(123, 192, 67, 0.2); color: #7BC043; padding: 6px 12px; border-radius: 20px; font-size: 0.9rem;">Nuovo Badge</span>
```

**Colori badge:**
- Verde: `rgba(123, 192, 67, 0.2)` con `color: #7BC043`
- Viola: `rgba(155, 89, 182, 0.2)` con `color: #9B59B6`

---

## 🎨 MODIFICARE COLORI

### Verde Principale
Cambia `#7BC043` con un nuovo colore hex

### Viola Secondario
Cambia `#9B59B6` con un nuovo colore hex

**Dove trovarli:**
- `index.html` - Background hero
- `chi-siamo.html` - Nomi e descrizioni
- `formazioni.html` - Titoli eventi
- `css/style.css` - Variabili globali `:root`

---

## 📏 MODIFICARE DIMENSIONI FONT

### Nella Home
```html
<h1 style="font-size: 3.5rem">Titolo principale</h1>
<p style="font-size: 1.8rem">Sottotitolo</p>
```

**Scala rapida:**
- `h1` = 3.5rem (titolo grande)
- `h2` = 2.5rem (titolo sezione)
- `h3` = 1.8rem (titolo sottosezione)
- `p` = 1rem (testo normale)

### Nel Team (Chi Siamo)
```html
<h3 style="color: #7BC043; font-size: 1.8rem">Kat</h3>
```

Cambia il numero `1.8rem` per rendere i nomi più grandi/piccoli.

---

## 🔗 MODIFICARE LINK

### Cambiare URL Instagram
**Cerca:** `https://www.instagram.com/collettivarampicante`

**Sostituisci con:** Il tuo nuovo URL

**Cerca in:** Tutti i file `.html`

### Cambiare Email
**Cerca:** `collettivarampicante@gmail.com`

**Sostituisci con:** La tua nuova email

---

## ⚡ MODIFICARE MARGIN E PADDING

### Aumentare spazio tra elementi
```html
<div style="margin: 50px 0">  <!-- 50px sopra e sotto -->
<div style="padding: 30px">   <!-- 30px da tutti i lati -->
```

**Numeri comuni:**
- `10px` = Piccolo
- `20px` = Normale
- `30px` = Medio
- `50px` = Grande
- `0` = Nessuno spazio

---

## 🧹 PULIZIA CODICE

### Prima di fare un commit
```bash
# Verifica sintassi HTML
# Apri il file in browser per controllare visivamente
# Usa l'Inspector (F12) per verificare errori
```

### Dopo le modifiche
```bash
git add .
git commit -m "Update: Modificato testo, colori, etc."
git push origin main
```

---

## 🚨 ERRORI COMUNI

### ❌ "Testo non appare"
**Causa:** Font-size troppo piccolo o colore non visibile  
**Soluzione:** Aumenta `font-size` o cambia `color`

### ❌ "Immagine non carica"
**Causa:** Path sbagliato (es. `images/team` invece di `../images/team`)  
**Soluzione:** Verifica che il percorso sia corretto relativamente al file HTML

### ❌ "Layout è rotto"
**Causa:** Hai tolto accidentalmente un `</div>` o simile  
**Soluzione:** Verifica l'Inspector (F12) per gli errori HTML

---

## 💡 CONSIGLI GENERALI

1. **Sempre fare backup:** Copia il file prima di modificare
2. **Testare localmente:** Apri il file in browser prima di pushare
3. **Un cambio alla volta:** Non modificare 5 cose insieme
4. **Usare Find & Replace (Ctrl+H):** Per cambiare lo stesso testo ovunque
5. **Commentare il codice:** Aggiungi `<!-- Commento -->` per ricordare cosa cambi

---

## 📚 RIASSUNTO VELOCE

| Cosa | Dove | Come |
|------|------|------|
| Testo grande home | `index.html` line 18 | Modifica `font-size: 1.8rem` |
| Nomi team | `chi-siamo.html` | Cerca `<h3>Nome</h3>` |
| Foto team | `images/team/` | Sostituisci `.webp` con le tue |
| Foto laboratori | `images/formazioni/` | Aggiungi `evento1.jpg`, etc. |
| Colore verde | Tutti i file | Sostituisci `#7BC043` |
| Email | Tutti i file | Sostituisci `collettivarampicante@gmail.com` |

---

**FATTO! Adesso puoi modificare il sito TU! 🚀**


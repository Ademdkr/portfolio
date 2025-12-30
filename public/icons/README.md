# Icon-Generierung für PWA

Die App benötigt verschiedene Icon-Größen für PWA-Funktionalität. Diese sollten generiert werden aus einem hochauflösenden Logo (mindestens 512x512px).

## Benötigte Icon-Größen:

- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192 (maskable)
- 384x384
- 512x512 (maskable)

## Tools zur Icon-Generierung:

### Online:

1. **PWA Builder** - https://www.pwabuilder.com/imageGenerator
2. **Favicon Generator** - https://realfavicongenerator.net/

### CLI:

```bash
npm install -g pwa-asset-generator
pwa-asset-generator logo.svg ./public/icons
```

## Platzierung:

Alle generierten Icons sollten im Ordner `public/icons/` abgelegt werden.

Das `manifest.json` ist bereits entsprechend konfiguriert.

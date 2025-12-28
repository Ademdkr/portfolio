# Deployment Setup - Schritt 2: nginx.conf

## Überblick

Die `nginx.conf` konfiguriert den Nginx Webserver für das Hosting der Angular Single Page Application (SPA).

## Konfiguration im Detail

### Server Block

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;
}
```

- **Port**: 80 (HTTP)
- **server_name**: `_` (catch-all, akzeptiert alle Domains)
- **root**: Verzeichnis mit gebuildeten Angular Files
- **index**: Fallback auf `index.html`

### Gzip Compression

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/javascript application/javascript ...
```

**Funktionen:**

- ✅ Reduziert Dateigrößen um ~70%
- ✅ Schnellere Ladezeiten
- ✅ Weniger Bandbreite

**Komprimierte Dateitypen:**

- HTML, CSS, JavaScript
- JSON, XML
- SVG-Grafiken

**Minimum Größe**: 1024 Bytes (kleine Dateien werden nicht komprimiert)

### Security Headers

#### X-Frame-Options

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
```

- **Schutz**: Verhindert Clickjacking
- **Erlaubt**: Nur eigene Domain kann in iframe einbetten

#### X-Content-Type-Options

```nginx
add_header X-Content-Type-Options "nosniff" always;
```

- **Schutz**: MIME-Type-Sniffing verhindern
- **Effekt**: Browser respektiert Content-Type Header

#### X-XSS-Protection

```nginx
add_header X-XSS-Protection "1; mode=block" always;
```

- **Schutz**: XSS-Angriffe erkennen und blockieren
- **Browser**: Aktiviert XSS-Filter

#### Referrer-Policy

```nginx
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

- **Datenschutz**: Kontrolliert Referrer-Informationen
- **Same-Origin**: Volle URL
- **Cross-Origin**: Nur Origin

### Caching für Static Assets

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

**Regex Match**: Alle statischen Dateien (JS, CSS, Bilder, Fonts)

**Cache-Strategie:**

- **expires 1y**: 1 Jahr Gültigkeit
- **immutable**: Datei ändert sich nie (Angular verwendet Content-Hash)
- **public**: Kann von Proxy/CDN gecacht werden

**Warum funktioniert das?**

- Angular fügt Hash zu Dateinamen hinzu: `main-ABC123.js`
- Bei Code-Änderungen → neuer Hash → neue Datei
- Alte Version bleibt im Cache, neue wird geladen

### SPA Routing Fallback

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Kritisch für Angular Routing!**

**Funktionsweise:**

1. **$uri**: Versucht Datei direkt (z.B. `main.js`)
2. **$uri/**: Versucht Verzeichnis mit index
3. **/index.html**: Fallback für alle Routes

**Beispiel:**

- User navigiert zu `/projects/budget-tracker`
- Nginx findet keine Datei `/projects/budget-tracker`
- → Lädt `index.html`
- → Angular Router übernimmt

**Ohne diese Config:**

- ❌ Direct URL zu `/projects` → 404 Error
- ❌ Page Refresh → 404 Error
- ✅ Nur Navigation von Startseite funktioniert

### Health Check Endpoint

```nginx
location /health {
    access_log off;
    return 200 "healthy\n";
    add_header Content-Type text/plain;
}
```

**Purpose:**

- Monitoring durch Render/Kubernetes
- Load Balancer Health Checks
- Uptime Monitoring Tools

**Features:**

- **access_log off**: Kein Logging (reduziert Noise)
- **return 200**: HTTP OK Status
- **Plain Text**: Einfache Antwort

## Performance Optimierungen

### Was wird erreicht?

1. **Gzip**: ~70% kleinere Dateien
2. **Caching**: Wiederholte Besuche ohne Downloads
3. **Security Headers**: Schutz vor gängigen Angriffen
4. **SPA Routing**: Korrekte Funktionalität aller Routes

### Lighthouse Score Erwartungen

- **Performance**: 90-100 (durch Caching + Gzip)
- **Best Practices**: 100 (Security Headers)
- **SEO**: 90-100 (Meta-Tags im Angular Code)

## Vergleich: Mit vs. Ohne Optimierungen

### Ohne Optimierungen

- ❌ main.js: 500KB
- ❌ Jeder Besuch lädt alle Dateien
- ❌ Keine Security Headers
- ❌ Direct URLs → 404

### Mit Optimierungen

- ✅ main.js: 150KB (Gzip)
- ✅ Second Visit: Nur neue Dateien
- ✅ Security Headers vorhanden
- ✅ Direct URLs funktionieren

## Testing (später)

```bash
# Build und Run
docker build -t portfolio:local .
docker run -p 8080:80 portfolio:local

# Test SPA Routing
curl http://localhost:8080/projects
# → Sollte index.html zurückgeben

# Test Health Check
curl http://localhost:8080/health
# → "healthy"

# Test Gzip
curl -H "Accept-Encoding: gzip" -I http://localhost:8080/main.js
# → Content-Encoding: gzip

# Test Security Headers
curl -I http://localhost:8080
# → X-Frame-Options, X-Content-Type-Options, etc.
```

## Nächste Schritte

1. ✅ Dockerfile erstellt
2. ✅ nginx.conf erstellt
3. ⏳ .dockerignore erstellen (Schritt 3)
4. ⏳ Lokaler Test: `docker build` und `docker run`

## Hinweise

- **Kein HTTPS**: Wird von Render/Load Balancer terminiert
- **Port 80**: Container-intern, extern via Render konfiguriert
- **Health Check**: Optional, aber empfohlen für Production
- **Cache Busting**: Funktioniert automatisch durch Angular Build (Hash in Dateinamen)

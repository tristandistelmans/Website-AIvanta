"""Meetkunde van het beeldmerk (de boom), gedeeld door de SVG's en de PNG's.

Elke tak is een tapsgewijze vorm: breed aan de stam, dun aan de punt, met een
lichte kromming. Dezelfde getallen staan in src/lib/merk-vorm.js, zodat het
merk in de site exact hetzelfde is als in de bestanden.
"""
STAM = (50, 92, 50, 22, 4.6, 2.0, 0.0)      # x0,y0,x1,y1,w0,w1,kromming
RIJEN = [(76, 26), (63, 22), (50, 17), (37, 11)]
HOEK, W_BASIS, W_PUNT, KROM = 0.72, 3.0, 1.0, 1.4
OMHOOG = 7                                   # optisch centreren in het vierkant


def takken():
    """Alle takken als (x0, y0, x1, y1, w0, w1, kromming)."""
    uit = [STAM]
    for y, l in RIJEN:
        for s in (-1, 1):
            uit.append((50, y, 50 + s * l, y - l * HOEK, W_BASIS, W_PUNT, -s * KROM))
    return [(x0, y0 - OMHOOG, x1, y1 - OMHOOG, w0, w1, k) for x0, y0, x1, y1, w0, w1, k in uit]


def _hoekpunten(x0, y0, x1, y1, w0, w1, krom):
    dx, dy = x1 - x0, y1 - y0
    lengte = (dx * dx + dy * dy) ** 0.5 or 1
    nx, ny = -dy / lengte, dx / lengte
    mx, my = (x0 + x1) / 2 + nx * krom, (y0 + y1) / 2 + ny * krom
    w = (w0 + w1) / 4
    return (x0 + nx * w0 / 2, y0 + ny * w0 / 2), (mx + nx * w, my + ny * w), \
           (x1 + nx * w1 / 2, y1 + ny * w1 / 2), (x1 - nx * w1 / 2, y1 - ny * w1 / 2), \
           (mx - nx * w, my - ny * w), (x0 - nx * w0 / 2, y0 - ny * w0 / 2)


def pad(tak):
    """Eén tak als SVG-pad."""
    a, c1, b, c, c2, d = _hoekpunten(*tak)
    n = lambda p: f"{round(p[0], 2)} {round(p[1], 2)}"
    return f"M{n(a)} Q{n(c1)} {n(b)} L{n(c)} Q{n(c2)} {n(d)} Z"


def paden():
    return [pad(t) for t in takken()]


def veelhoek(tak, stappen=36):
    """Dezelfde tak als punten, om met PIL te tekenen."""
    a, c1, b, c, c2, d = _hoekpunten(*tak)
    kwad = lambda p0, p1, p2: [tuple((1 - t) ** 2 * u + 2 * (1 - t) * t * v + t * t * w
                                     for u, v, w in zip(p0, p1, p2))
                               for t in (i / stappen for i in range(stappen + 1))]
    return [a] + kwad(a, c1, b) + [c] + kwad(c, c2, d)

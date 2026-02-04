# Tienda ÉLÉGANCE - Modularización CSS

Este proyecto muestra la tienda ÉLÉGANCE organizada con tres metodologías de modularización CSS: **BEM, OOCSS y SMACSS**.

## BEM
- Se usa la convención `bloque__elemento--modificador`.
- Ejemplo: `.card__title`, `.navbar--scrolled`.

## OOCSS
- Se separa estructura y apariencia en clases reutilizables.
- Ejemplo: `.box`, `.shadow`, `.text-bold`.

## SMACSS
- Se organiza en categorías: Base, Layout, Module, State, Theme.
- Ejemplo: `.m-card`, `.is-scrolled`, `.theme-dark`.

## Comparativo
| Metodología | Ejemplo Navbar | Ejemplo Card |
|-------------|----------------|--------------|
| BEM         | `.navbar--scrolled` | `.card__title` |
| OOCSS       | `.box .shadow` | `.text-bold` |
| SMACSS      | `.l-navbar` | `.m-card` |

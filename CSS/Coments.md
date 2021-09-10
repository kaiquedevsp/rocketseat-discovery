```css

/* Básico */
/* ------------------------- */
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em) {
    /* Let's special case the global font size. On large screen or window,
    we increase the font size for better readability */
    body {
        font-size: 130%;
    }
}

* Voçê poderá usar o comentário para desabilitar partes do seu código

```css

/*.special {
    color: red;
}*/

p {
    color: blue;
}
```
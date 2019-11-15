# Objects vs JSON

# 1
Definiere eine Liste von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl. \
Sortiere die Liste anhand der Punktezahl aufsteigend.

Tip: Dokumentation von Array auf MDN studieren, um herauszufinden wie man sortiert :)

# 2
Erstelle einen JSON String der 3 top Scorer. \
Finde mehrere Varianten, um die Top 3 auszulesen

# 3
Wandle die Liste der User in eine Liste von Objekten in der Form: `{ content: String, length: Number }` um. \
Wobei content der Username ist und length die länge des Namens. Sortiere die Liste aufsteigend nach length.

# 4
Erstelle eine tabellarisch korrekt ausgerichtete Rangliste der 3 top Scorer, im ASCII Format :).

Format der Ausgabe:
```
|Name  |Score|
|------|-----|
|User 1|   13|
|Maya  |    9|
```

Eigenschaften der Tabelle:
 - Komplett dynamisch generiert, anhand des users Arrays ;)
 - Spaltenbreite genau nur so breit, dass der längste Text darin Platz.
 - Zeilen absteigend nach Score sortiert
 - Score rechts ausgerichtet, Name links ausgerichtet

# 5
Generalisiere den Code aus Aufgabe 4 soweit,
dass du beliebige Objekte mit einem einzigen Funktionsausfruf als ASCII Tabelle darstellen kannst.

Das heisst: die Spaltentitel, die Anzahl Spalten, deren Breite und Inhalte werden automatisch generiert.

Die Funktion hat folgende Signature: `(arr: Array<Object>, sortBy: String)`
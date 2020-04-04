# Flow Control

## Bedingungen: if und switch case

### 1
Schreibe ein Programm, welches eine Person altersgerecht begrüsst.
Die Begrüssung soll auf der Console ausgegeben werden.

- Kinder, d.h. bis und mit 10 Jahren: Hoi <name>
- Jugendliche, d.h. ab 11 Jahren bis und mit 18 Jahren: Hallo <name>
- Erwachsene, d.h. ab 19 Jahren bis und mit 100 Jahren: Grüezi <name>
- Alle anderen, d.h. ab 101 Jahren: Grüss Gott <name>

Schreibe zwei Varianten,
- eine Variante mit "else if",
- eine Variante ohne Verwendung von "else if"

Tip: &&

### 2
Schreibe ein Programm, welches den Eintrittspreis abhängig vom Alter bestimmt.
Es gelten folgende Regeln:
- Wer jünger als 5 ist, bekommt Gratiseintritt
- Ab 5 bis 15 Jahren zahlt man 5 Franken
- Ab 16 zahlt man denn Vollpreis von 15 Franken
- Senioren ab 60 bezahlen 10 Franken

Gib den Betrag in Franken auf die Console aus.

Schreibe zwei Varianten,
- eine Variante mit "else if",
- eine Variante ohne Verwendung von "else if"

Tip: &&

### 3
Schreibe ein Programm, welches entscheidet, wer in den Club darf und wer nicht.

- Männer dürfen ab 20 rein, Frauen bereits ab 18.

Gib die Entscheidung auf der Console aus.

Schreibe zwei Varianten,
- eine Variante mit switch case
- eine Variante mit && und || (ohne ganz ausgeschriebene if)

## Schleifen / Loops

### 0
Schreibe ein Programm, welches jedes Zeichen eines Strings einzeln ausgibt, Komma getrennt.
z.B. aus `"Pinguin"` wird `"P,i,n,g,u,i,n"`

Schreibe zwei Varianten:
- eine ohne Schlaufen zu verwenden
- eine mit einer Schlaufe

### 1
Schreibe ein Programm, das alle Zahlen eines Arrays summiert.

z.B. aus `[1,2,3]` wird `6`

Versuche drei Varianten zu schreiben, welche jeweils unterschiedliche Schlaufentypen verwenden.

### 2
Schreibe ein Programm, welches einen Array von Zahlen verarbeitet und in einen Array mit Booleans umwandelt.
Das Programm ermittelt für jede Zahl ob diese gerade ist oder nicht.

z.B. aus `[1,2,3]` wird `[false, true, false]`

### 3
Schreibe ein Programm, welches jeden ersten Buchstaben aller Wörter eines Strings in einen Grossbuchstaben umwandelt.

z.B. aus `"Ich weiss, dass ich nichts weiss ... !"` wird `"Ich Weiss, Dass Ich Nichts Weiss ... !"`

Tip: JavaScript kann einen Kleinbuchstaben automatisch umwandeln in den entsprechenden Grossbuchstaben.

### 4
Schreibe ein Programm, das alle Primzahlen zwischen 0 und 100 ausgibt.

Versuche 2 Varianten zu schreiben, mit jeweils anderen Schlaufentypen.

### 5
Schreibe ein Program, das einen beliebigen Text mit Cäsar Chiffre verschlüsselt.

z.B. aus `"abcz"` wird `"bcd{"`, sofern die Verschiebung 1 ist.


### 6
Gegegeben ist eine beliebige Menge von Zahlen.

#### 6.1
Gebe nur die Ganzzahlen aus.

#### 6.2
Gebe nur die positiven Zahlen aus.

#### 6.3
Berechne die Quersumme aller Zahlen.

#### 6.4
Berechne den Durchschnitt (arithmetisches Mittel) aller Zahlen.


### 7
Gegeben ist eine beliebige Zeichenkette.

#### 7.1
Konvertiere jedes zweite Zeichen zum entsprechenden Grossbuchstaben.

#### 7.2
Ersetze alle Konsonanten durch die entsprechenden Selbstlaute. \
Zum Beispiel aus einem "p" wird "pe", aus "c" wird "ce", aus "k" wird "ka" etc.

#### 7.3
Gib die Zeichenkette rückwärts aus. \
z.B. aus "Hallo du" wird "ud ollaH".

#### 7.4
Gib die Wörter der Zeichenkette rückwärts aus. \
z.B. aus "Hallo du, wie geht es dir?" wird "dir? es geht wie du, Hallo"

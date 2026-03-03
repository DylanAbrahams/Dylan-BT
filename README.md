# Dylan-BT

## Dag 1 (16 februari)
### Werkzaamheden
Vandaag zijn we begonnen met Browsing Technologies. We waren begonnen met een kick-off over het vak. Ik was wel 20m te laat vanwege het klote OV.. Na de uitleg over forms en wat we moeten den was ik begonnen met het project.

Vandaag ben ik vooral bezig geweest met de HTML van de form. Iedereen moet minimaal 2 onderdelen namaken, waarvan onderdeel #1 er 1 van is. Verder heb ik onderdeel #4 gekozen, want die leek mij wel uitdagend want op het papieren formulier heb je 4 versies voor 4 personen maar digitaal kun je automatisch meer laten genereren. Ik heb momenteel alles van onderdeel 1 in HTML en een klein stuk van onderdeel 4. Verder heb ik de kleuren van de NS website in de root van mijn CSS gezet.

### Checkout met Aya A
Ik had vandaag mijn checkout met Aya. Zij heeft haar HTML van onderdeel 1 af. We hebben nog met elkaar besproken hoe je handig fieldsets, legends en labels kan inzetten. Verder heeft zij laten zien hoe zij een datum picker heeft gemaakt waar je dag, maand en jaar kan invoeren en ik heb haar laten zien hoe ik mijn radio buttons heb ingesteld. 

### Weekly Geek 1 - It’s hard to justify Tahoe icons
Dit zijn mijn aantekeningen van het eerste artikel voor weekly geeks.

Macintosh Human Interface Guidelines (HIG) uit 1992 - Plaatje waarin een lijst met weinig icoontjes en veel lege tekst mooi werd genoemd en een lijst veel verschillende icoontjes lelijk werd genoemd.

2025 - MacOS Tahoe voegt allemaal onnodige en onoverzichtelijke icoontjes toe aan elk menu item

Dit is slecht, maar waarom? Daar gaat dit artikel over.

Vroeger met microsoft hadden alleen de herkenbare functies zoals Opslaan en Delen functies in plaats van alles. Veel schoner.

Verder is het ook beter om kleur in een icoontje te zetten zodat er meer scheiding in zit.

Je wil consistentie, bijvoorbeeld een schaar voor elke Cut command. Oplossing van Tahoe: Overal "New", "Open" etc. voor zetten met een ANDER icoontje. Er zijn veels te veel inconsistenties.

Dezelfde icoontjes voor verschillende functies. Ze gebruiken bv. het oog voor zowel quick look als show completed of pijlje omlaag voor zowel Import als Updates.

Soms hebben ze op 1 rij allemaal DEZELFDE icoontjes. (Export photo, Export GIF etc.)

Er zitten kleine verschillen tussen sommige icoontjes, bijvoorbeeld een zwarte i-icoon VS doorzichtig i-icoon of potlood met of zonder spoor. Maar kom op, het betekent hetzelfde voor een gebruiker.

Icons moeten er duidelijk uitzien, ondanks de lage pixel resolutie. Maak ze simpeler of maak ze groter.

Verwarrende metaforen: 
Icoontjes kunnen ook helpen om de gebruiker een beeld te geven van ded functies (bv. scherm minimaliseren). Maar integendeel heb je 'Selecteer Alles'. Het icoon is een rechthoek om een letter maar in het echt is de tekst gehighlight.

Een goed metafoor icoontje is de Bookmark, maar voor een of andere reden gebruikt Apple een boek icoon...

Check icoon om een uncheck actie te doen.
Of een 2-level icoon als een checkmark met een kruisje/user icoontje erbij. Dit werkt niet, gebruikers snappen dit niet en hebben geen zin in puzzels oplossen.

Als je geen goed icoon als metafoor kan gebruiken, doe dan GEEN icoon. Zou je de functie kunnen raden in een lijst van een icoontjes? Nee...

Het is handig om 2 tegenovergestelde functies een overeenkomend icoontje te geven, bv. Import (pijl omlaag) en Export (pijl omhoog) maar het moet dan wel consistent blijven. Selecteer 1, alles of niks zien er allemaal heel anders uit en Get en Send Clipboard zien er bijna identiek uit.

Verder heeft Share ook dezelfde icoon als Import.

HIG - Gebruik geen tekst in icoontjes, bijvoorbeeld geen A voor select all, of i-icoontje voor informatie.

Maar er zijn nu iconen die bestaan uit alleen maar tekst...
A..., Aa, Abc.

Er zijn wel positieve letter iconen, bijvoorbeeld in een context voor hoofdletters, groter/kleiner, bold, italic etc.

Maar nee, dit is overbodig. Je zou ook het woord Bold dikgedrukt kunnen maken in plaats van B Bold, I Italic, U Underline etc.
Dit hebben ze 33 jaar geleden ook gedaan!


Doe geen system icoontjes toe aan bestaande objecten...

Het dropdown icoontje om meer functies te laten zien is nu OOK een icoontje voor Forward...

Ditzelfde voor ... in icoontjes, maar ook achter woorden als Add link...

Soms komen icoontjes te staan voor de tekst, maar soms schuift te tekst mee naar rechts, wat een stuk minder fijn leest. In sommige gevallen zelfs allebei, nog erger.

Pijltje links/rechts (lijkt op NS logo) wordt in 1 afbeelding VIER keer gebruilkt.

Conclusie: Icoontjes toevoegen aan elke menu item is geen goed idee, je kunt het niet goed doen. Maar! Je hoeft geen zorgen te maken dat het slechter gaat dan bij Apple.

## Dag 2 (17 februari)
### Werkzaamheden
Vandaag zijn we begonnen met het bespreken van het artikel van gisteren. We hadden klassikaal met Wooclap een aantal vragen beantwoord over het artikel. Wat opvallend was, is dat het niet echt over de inhoud ging, meer over de metadata en de achtergrond van de schrijver. Daarna hebben we de inhoud nog verder besproken.

Ik ben voor mijn project bezig geweest om alle basis HTML af te ronden. Mijn HTML voor onderdeel 4 is nu ook af. Ik moet nog wel logica gaan toevoegen dat je voor meerdere erfgenames kan invullen.

Verder ben ik wat bezig geweest met styling. Ik vind de gele NS kleur belachelijk lelijk dus ik ga niet de hele form/pagina geel maken. Ik heb voor nu alleen de header geel. Verder heb ik de form achtergrond wit met alles eromheen grijs. Ook heb ik de blauwe knop van NS nagemaakt met de hover state animatie.

Ook heb ik met een script gemaakt (met behulp van W3Schools) wat er voor zorgt dat ik maar 1 onderdeel van het form tegelijk hoef te laten zien. Alle onderdelen hebben dezelfde class (.tab) en degene die zichtbaar is krijgt .active erbij. Ook heb ik een Volgende/Vorige knop en heb ik op de laatste pagina een submit knop. Daarnaast heb ik nog een paginering die laat zien op welke pagina je bent.

### Checkout met Iris
Ik kwam gerandomized met Aya A, maar zij was er niet. Ik ben uiteindelijk samen gekomen met Iris. Zij heeft in haar project al veel styling en ze heeft vragen die pas zichtbaar worden wanneer je ja/nee selecteerd (volledig met css gedaan). Ik had zelf mijn paginering laten zien dmv "tab" classes en hoe ik door alle paginas heen kan gaan.

## Week 1 Overzicht
Deze week zijn we begonnen met de opdracht


<img src="img/readme-img/html-form-1.png" alt="Afbeelding van mijn form zonder CSS #1" height=400>


<img src="img/readme-img/html-form-2.png" alt="Afbeelding van mijn form zonder CSS #2" height=400>


<img src="img/readme-img/week1-styling.png" alt="Afbeelding van mijn styling week 1 desktop" height=400>


<img src="img/readme-img/week1-styling-mobile.png" alt="Afbeelding van mijn styling week 1 mobiel" height=400>

Gesprek met groepje + Vasilis
Voorbeeld Pattern = Je klikt op nee en er komen een paar vragen uit

Inert in cSS
niet mee kunnen interacteren
CSS: interactivity:inert;

Door gaan naar volgende pagina zou KUNNEN met css-only

Als JS niet werkt, moet het ook kunnen werken (default tabs zichtbaar maken)

Fieldset zonder legens is geen fieldset, doe dan maar div

Matthew had knoppen voor zijn radio buttons (knoppen met tekst erin)

je kan input[type="text"] gebruiken 

https://tractie.ns.nl/2e23992f3/p/226ce1-tractie--ns-design-system

## Dag 3 (2 maart)
### Werkzaamheden
We zijn vandaag begonnen met wat uitleg over validatie. Ik heb er wat van opgestoken. Ik deel mijn formulier op in verschillende tabs. Ik heb met JavaScript geprogrammeerd dat het de huidige tab (het fieldset die nu zichtbaar is) gevalideerd wordt wanneer je naar de volgende pagina gaat. Ik vond alleen wel dat het irritant is dat je alles MOET invullen  voordat je naar de rest kan kijken. Ik heb een popup toegevoegd waarin de gebruiker te weten komt dat niet alles correct is ingevuld maar wel door mag naar de volgende vraag.

Verder heb ik vandaag de feedback van de vrijdag voor het reces toegepast over Progressive Enhancement. Alle tabs zijn nu standaard zichtbaar en krijgen nu een  .inactive class als ze niet de huidige tab zijn. Als je de pagina nu bekijkt zonder JavaScript zou je nog steeds alle vragen kunnen invullen. Helaas is het nog niet perfect want je kan nog maar voor 1 erfgename invullen. Misschien moet ik het standaard 4 maken? Daarnaast hebben alle tabs een standaard grootte waardoor je in elke individuele tab moet scrollen.

Daarnaast heb ik wat extra tabs toegevoegd om de gebruiker te informeren. Op het begin staat een introductie, als je dan op volgende drukt kun je beginnen met invullen. Daarnaast heb ik halverwege nog een tab. Daar kun je het aantal erfgenamen invullen. Momenteel is het een number input met een knop om de formulieren te generenen. Dit kan nog wel beter. Ik ga dit mengen met de Volgende knop. Daarnaast ga ik er waarschijnlijk +/- knoppen van maken.

Ik was lang bezig met het laten genereren van nieuwe fieldsets in de form. Wat ik uiteindelijk heb gedaan is een <template> om alle fieldsets heen zetten die meerdere keren worden ingevuld. Toen dit eenmaal werkte heb ik aan het einde van het formulier een bedank tabje toegevoegd en daarna zie je een overzicht van de namen van de overledene en de erfgenamen.


### Weekly Geek 2 - UX van HTML
Om 15.00 ben ik nog bezig geweest met de Weekly Geek. We moeten artikelen lezen over html attributen maken met alleen divs, CSS en JS. Ik zit in groepje 5 en houd me bezig met de checkbox en de radiobutton + bijbehorende labels. Ik heb me in wat bronnen verdiept. 

The Checkbox Role
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role
Dit artikel gaat over checkboxes maken met een span. Met HTML maak je een [] en stel je aria-checked in. Met CSS vul je een gecheckte versie [x] en een lege versie []in en maak je een focus state. Vervolgens met JavaScript zorg je er met spatie voor dat aria-checked op true/false gezet wordt.

The Radio Role
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role
Het principe voor radios is in principe hetzelfde als voor de checkboxes maar iets complexer. Met radio buttons kun je maar 1 van X aantal selecteren. Verder kun je ze met de pijltoetsen bedienen. 

input type="checkbox"
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox
Dit artikel gaat over de standaard checkboxes in de form inputs. Deze kun je activeren en deactiveren. De value van een checkbox is altijd on/off. Als je meerdere checkboxes hebt met je er wel voor zorgen dat ze allemaal een andere ID hebben. Verder moeten ze allemaal een label hebben en worden ze vaak gegroepeerd met fieldsets. Ook zit er default styling op van een blauwe checkmark.


input type="radio"
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio
Een radio button zit meestal in een groep met meerdere radios. Het is dan de bedoeling dat je 1 van X aantal radio buttons selecteerd. In code moeten de radios dan dezelfde naam hebben, maar wel een unieke value. De value is het antwoord van de gebruiker. Net als checkboxes hebben de radios ook een label om aan de gebruiker te laten zien waar ze voor staan.

The Label element
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
Labels zijn essentieel voor radio buttons en checkboxes. Zonder labels zou je niet weten waar een individuele button/checkbox over gaat. In de code kun je de buttons ook in de labels plaatsen, wat ervoor zorgt dat als je op de label klikt, de radio button ook (de)activeert. Verder staat in het artikel om links buiten de labels te houden zodat ze daar buiten kunnen interacteren. Daarnaast moet je geen headings als labels gebruiken. Losse tekst in een label is prima. Je kunt labels ook verbinden met ID, maar ik ben zelf meer een voorstander van inputs plaatsen binnen de label, dan weet je dat het goed zit.

Uiteindelijk heb ik wat ideeen opgedaan over hoe je radios/checkboxes kunt maken met HTML en JS. Je kunt met JavaScript togglen tussen de states die je nodig hebt en met HTML kun je vierkantjes of cirkeltjes maken die je met CSS kan stylen. Wel zat ik te denken: een checkbox is gewoon een boolean. In JavaScript is een boolean een element die aan/uit kan zijn (true/false). In principe zou je dit dan op HTML elementen toe kunnen passen. Dit ga ik morgen proberen.


### Checkout met Mitchell
Ik werd vabdaag gerandomized met Mitchell. Hij heeft momenteel 1 pagina met alles van onderdeel 1. Hij is vandaag bezig geweest met validatie. Wanneer je op verzenden klikt komt er een rode kleur op alle inputs die niet in orde zijn.
Verder is hij van plan om de NS Radio Panels na te maken van de NS Tractie.
Ik heb laten zien wat ik heb gedaan. Ik heb nog het probleem dat onderdeel 4 nu niet zichtbaar is wanneer ik de pagina zonder JS laadt. Verder zou je hem het liefst meerdere keren willen invullen. Hij kwam met het idee om standaard 4 erfgnamen in te stellen voor progressive enhancement, maar dat zou wel veel HTML zijn.

## Dag 4 (3 maart)
### Werkzaamheden
Vandaag begonnen we met de Weekly Geek. Ik heb met mijn clubje de radio buttons en checkboxes besproken. Verder hebben we die in codepen nagemaakt. Matthew had in zijn codepen de checkboxes nagemaakt en ik had in die van mij de radio buttons nagemaakt. Ik had eerst de code van de site gekopieerd maar die werkte niet. Uiteindelijk heb ik hem werkend gekregen met hu

## Bronnenlijst

NS Tractie - 
Link: https://tractie.ns.nl/2e23992f3/p/226ce1-tractie--ns-design-system

Mozilla Patterns - 
Link: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern

W3Schools - 
Link: https://www.w3schools.com/howto/howto_js_form_steps.asp

The Checkbox Role -
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role

The Radio Role - 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role

input type="checkbox" -
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox

input type="radio" -
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio

The Label element
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
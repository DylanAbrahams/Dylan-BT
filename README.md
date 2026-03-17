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


Ik ben bezig geweest met wat styling. Ik heb wat tekst blauw gemaakt net als de NS en heb de radio buttons aangepast naar deze pagina.
https://tractie.ns.nl/2e23992f3/p/105872-radio-buttons



Als je op volgende knop drukt, blijf je daarop gefocust, met een screen reader zou dit lastig zijn. Ik heb in JavaScript toegevoegd dat de focus gaat naar de eerste vraag zodat je het met een screen reader zou blijven volgen zonder verdwaald te raken

Verder ben ik bezig geweest met disabled inputs. De vragen die in eerste instantie disabled zijn die pas activeren wanneer je bij een bepaalde radio button JA invoert. Dit heb ik met JavaScript gedaan met behulp van IDs.

Ook heb ik mijn code van gisteren wat opgeschoont. Nu werkt het maken van een nieuwe form per erfgename ook op de Volgende knop. Het enige wat ik nog moet toevoegen is de optie weghalen om naar de volgende pagina te gaan als je het aantal niet goed hebt ingevuld.

Ik heb vandaag veel gekloot met onderdeel 4E/4F. Hier is de eerste vraag een radio en als je JA invoert kun je de rest van de pagina doen. Verder kun je meerdere legaten hebben en voor elk legaat apart invullen. Dit is vandaag niet gelukt. Ik ben ook aan het overwegen om dit onderdeel te schrappen. Ik heb nog 2 weken dus ik ga er nog over nadenken.

### Checkout met Maja
Vandaag werd ik gerandomized met Maja
Zij heeft nog geen styling op haar website. Wel heeft ze feedback voor de gebruiker wanneer je het formulier niet goed invult. Verder heeft ze rode & groene inputs om te laten zien wanneer je iets wel of niet goed hebt ingevuld.
Bij de progressive disclosure knoppen haalt zij de inputs weg met display none en heeft ze extra code gebruikt voor required/resets.


## Week 2 Overzicht
Deze week ben ik veel bezig geweest met de logica van het formulier. Ten eerste heb ik wat tabs toegevoegd tussen de onderdelen door. Aan het begin heb je een korte introductie voordat je de eerste vraag in beeld krijgt. Je klikt op Volgende om naar de volgende pagina te gaan. Daarnaast is er een pagina aan het eind van het formulier voor een kort bedankje en een tussenpagina voor de start van onderdeel 4 waarin de gebruiker het aantal erfgenames kan invullen.

<img src="img/readme-img/week2-introductie.png" alt="Afbeelding van week 2" height=400>
<img src="img/readme-img/week2-bedankje.png" alt="Afbeelding van week 2" height=400>

Hij is nog niet perfect maar je kunt in deze input het aantal erfgenames invoeren en voor elke erfgename komen er 7 pagina's bij (heel onderdeel 4 is per erfgename). De paginas worden pas geladen wanneer er een antwoord is gegeven. Op het moment is het minimaal 1 en maximaal 100. Voor de grap heb ik 1000 en zelfs 9999999999999 geprobeerd en mijn website was vastgelopen... De cap wordt dus 100. 

<img src="img/readme-img/week2-aantal-erfgenamen.png" alt="Afbeelding van week 2" height=400>

Aan het eind van het formulier zie je een popupp van de namen van de overledene en erfgenames om nog een overzicht te krijgen voor hoeveel mensen je hebt ingevuld.
<img src="img/readme-img/week2-overzicht.png" alt="Afbeelding van week 2" height=400>

Verder zijn we deze week veel bezig geweest met validatie. Op elke pagina wordt er gevalideerd of elke vraag wel/niet goed is ingevuld en wanneer dit niet het geval is, krijg je een popup in beeld die laat weten dat nog niet alles correct is ingevuld. Wel krijg je de optie om verder te gaan om later alles te corrigeren. Ik vind dat de gebruiker wel de optie mag hebben om de rest van de vragen te lezen voordat alles perfect is ingevuld.

<img src="img/readme-img/week2-waarschuwing.png" alt="Afbeelding van week 2" height=400>

Ook heb ik disabled buttons toegepast voor de optionele vragen. Deze vragen worden pas aangezet wanneer de ze relevant worden door JA te kiezen bij een andere vraag. Ik vind het geen fijn idee om vragen onzichtbaar te maken want dan weet de gebruiker niet of ze nog belangrijk worden of wordt de gebruiker spontaan gejumpscared door meer vragen. Ik wil laten zien dat de vragen daar staan maar wel duidelijk hebben dat je ze niet per se hoeft in te vullen. Ik ga nog wat styling toepassen om dit duidelijker te maken.

<img src="img/readme-img/week2-disabled-buttons.png" alt="Afbeelding van week 2" height=400>

Als laatste heb ik nog iets toegepast voor screenreaders. Als je het formulier met toetsenbord alleen bedient (dus met TAB en SPACE), wanneer je bij de volgende knop komt en naar de volgende pagina gaat, heb ik logica toegevoegt dat de focus weer komt op de eerste input. Zo kun je gelijk verder zonder terug te hoeven tabben naar boven.
<img src="img/readme-img/week2-focus.png" alt="Afbeelding van week 2" height=400>

Ik ben verder nog bezig geweest met de logica implementeren voor onderdeel 4e/4f, maar omdat dit al werk is die al eerder heb gedaan en ik al veel andere logica erin heb zitten, zit ik eraan te denken om dit onderdeel te schrappen. Hier ga ik het in het groepsgesprek over hebben.

Op vrijdag heb ik het gesprek gehad met mijn clubje, hiervan wat aantekeningen:
Sela heeft de standaard error messages als tekst onder de inputs
Matthew heeft progressive disclosure volledig met CSS dmv :has()

Tips:
Doe meer focus op detail, niet meer op kwantiteit
Ik ga 4e schrappen. Ik kan me beter focussen op het verbeteren van de andere functionaliteiten.
Je kan 31 februari intikken. Dit zou niet mogelijk moeten zijn.
Disabled buttons duidelijker maken met styling.
Validatie !!!
Maak duidelijk wanneer de gebruiker iets goed/fout invult. Ik ben van plan om dit te doen per vraag. Verder wil ik extra info bij elke vraag neerzetten.

## Dag 5 (9 maart)
### Gastcollege Rijk van Zanten
Vandaag kwam een oud CMD student langs om te vertellen over zijn ervaring met CMD, wat hij daarna heeft gedaan en waar hij nu staat. Hij had wel een goed verhaal om te vertellen. Voor zijn afstudeerproject was hij naar New York gegaan en is daar gebleven tot de dag van vandaag. Wel een inspirerend verhaal.

### Werkzaamheden
Vandaag heb ik ten eerste onderdeel 4e en 4f volledig verwijdert uit mijn HTML. Die ga ik niet doen. Misschien doe ik nog hetzelfde voor bv. 4g maar voor nu laat ik het zo.

Vandaag ben ik vooral bezig geweest met validatie. Ik heb nu voor elke input (behalve de radios) een span eronder waarin tekst komt te staan wanneer je een input invult. Ik heb voor een correct ingevulde input een groene kleur om de input heen zonder extra tekst erbij en wanneer je een fout antwoord indient een rode kleur met de error message van de input. Deze zijn voor mij in het Engels want mijn laptop is in het Engels ingesteld. Verder als je met een input interacteert en niet invult krijg je de error message te zien dat je niks hebt ingevuld. Ik moet wel nog ervoor zorgen dat het ook wordt toegepast wanneer de popup in beeld komt wanneer je op Volgende klikt. 

Ik had extra code nodig om dit allemaal werkend te maken voor het tweede onderdeel per erfgename. Omdat dit onderdeel van het formulier gegenereerd wordt, is deze nog niet geladen wanneer de functie afspeelt. Ik heb dus in de functie waarin dit gegenereerd wordt ook de validatie functie opgeroepen.

Daarnaast kun je nu niet meer naar de volgende pagina voordat je het aantal erfgenames hebt ingevuld. 


### Weekly Geek #3 - What happened to text inputs

Voor deze weekly geek moeten we een video kijken. Deze video heeft ook een transcript op de website en gaat over text inputs

Wolf 1 - De Web gebruiker, wil graag duidelijk en simpel
Wolf 2 - De Web designer, wil nieuwe dingen uitproberen

Vormen van Signification - bv. Hyperlinks hebben een streep eronder

Wat zijn er gebeurd met text inputs, ze zijn nu alleen maar een onderkant ipv een box. Het is nu eerder een "onput"
Als er een label boven zit, is het niet eens duidelijk dat deze erbij hoort.

Ipv terug gaan naar het goede oude methode, gaat hij verder met de nieuwe slechte methode om er creatief mee om te gaan
> De labels zijn nu placeholders die in de input staan

Om de placeholders zichtbaar te maken heeft hij ze wit gemaakt waardoor ze nu lijken op values...

Double double down > De placeholder gaat omhoog zodat deze niet verwijderd wordt.

Nu zijn er 3 soorten inputs en de oudste is de enige goede

Het punt is dat er nieuwe designs worden gemaakt voor elementen die geen nieuwe design nodig hebben. Ik snap beide kanten wel. Uiteraard als gebruiker wil je liever geen verandering, vooral als er niks verkeerd was aan het oude ontwerp maar ik snap ook dat de designer meerdere ontwerpen wil uitproberen voor een product.

### Checkout met Jacco & Aya
Ik werd vandaag gerandomized met Choice, maar zij was niet aanwezig. Ik werd ingedeeld met Jacco. Aya had ook geen duo dus zij had zich ook bij ons toegevoegd
Ik liet zien dat ik bezig was met validatie vandaag en dat ik morgen bezig wil zijn met met de rest van de logica.
Aya eerst alles in 1 fieldset, nu opgedeeld. Vragen die zichtbaar worden


## Dag 6 (10 maart)
### Werkzaamheden
Vandaag waren begonnen met de Weekly Geek. We hadden een wooclap over de video. Op zich niet heel veel om over te zeggen. Was een beetje hetzelfde als week 1

Ik kwam erachter dat er nog validatie tekst kwam op de radio buttons. Dit vond ik niet nodig, aangezien radio buttons meestal geen extra eisen hebben om deze in te vullen. Deze hebben dus geen validatie styling meer. Wel was ik nog even bezig met de styling van de radio buttons op onderdeel 4c. Hier zitten een paar radio buttons met veel tekst waardoor de buttons gesquished werden. Ik heb dit opgelost door de label op te delen in een grid met links de knoppen en rechts de tekst. Wel zit er nog een waarschuwingstekst over het kind met handicap, dus heb ik deze in de HTML iets aangepast door er een aparte p element voor te gebruiken en deze een styling te geven 

Ik heb vandaag veel tijd gestopt in progressive enhancement. Een groot onderdeel van mijn formulier is dat er meer pagina's aan vragen tevoorschijn komen als je meerdere erfgenames invoert. Dit werd gedaan met een template. Het probleem bij een template is dat deze NIET standaard zichtbaar is. Ik heb de HTML code in de template in een div geplaatst. Verder heb ik een lege template ernaast. Met JavaScript wordt de div in het template geplaatst, waardoor deze meerdere keren gegenereerd kan worden. Nu zijn deze vragen ook zichtbaar zonder JavaScript. Verder zit er nu ook standaard 1 erfgename aan formulieren in. Eerst waren het nog 0 en moest de eerste nog gegenereerd worden. 

Ik heb vandaag besloten om nog een paar onderdelen te schrappen. Dit zijn allemaal onderdelen die al eerder heb gedaan waar extra logica voor nodig is. Ik had al heel 4e/4f geschrapt. Ik heb nu ook de extra vragen in 4c, het buitenland adres in 4b en een klein stukje van 4d. Wel heb ik in 4d nog een paar disabled buttons toegevoegd. Daarnaast heb ik het erfdeel gedefinieerd in percentages. Bij deze zijn alle vragen nu goed te beantwoorden. Ik kan nog wat dingen toevoegen voor verduidelijking.

### Checkout met Arvid
Ik werd vandaag gerandomized met Arvid. Hij is vandaag met validatie en progressive disclosure bezig geweest. Volgende week is de laatste week. Ik ben van plan om de laatste week iig de desktop versie compleet te maken. Verder wil nog wat progressive enhancement dingen toevoegen voor meerdere erfgenames. Daarnaast kan er altijd nog wat verduidelijking bij de vragen en validatie.


## Week 3 Overzicht
Deze week ben ik vooral bezig geweest met validatie en progressive enhancements. Verder heb ik een aantal vragen geschrapt in het balang van kwaliteit over kwantiteit. Een aantal vragen/inputs die in onderdeel 4 van het erfbelasting staan hadden extra logica nodig, voornamelijk logica die ik al heb maar wel meer werk oplevert, waarvan ik de toegevoegde waarde niet echt in zie en liever wil focussen op andere aspecten van het formulier zoals het structuur, de validatie en de logica voor meerdere erfgenames.

Ik ben elke inputs langs gegaan in mijn HTML en heb een span toegevoegd aan elke input die verplicht is in te vullen. Wanneer deze niet goed is ingevuld wordt de span zichtbaar met de standaard tekst die je krijgt bij validatie. Voor mij is de tekst in het Engels omdat mijn laptop taal Engels is geselecteert. Verder krijgt elke input een groene kleur wanneer deze correct is ingevuld en een rode kleur wanneer deze incorrect is ingevuld. De feedback komt in beeld wanneer je niet langer gefocust bent op de input. Je krijgt de input dus niet meteen al te zien zodra je de eerste letter hebt getypt. Dit lijkt me een goed moment om feedback te geven aangezien de gebruiker dan klaar zou zijn met het invullen van de vraag. 

<img src="img/readme-img/week3-validatie.png" alt="Afbeelding van week 3 validatie wel/niet ingevuld" height=400>
<img src="img/readme-img/week3-bsn-validatie.png" alt="Afbeelding van week 3 validatie op bsn" height=400>

Ik had vorige week al werkende code voor disabled buttons, maar ik had nog wat extra logica nodig om dit ook werkend te krijgen op de pagina's voor elke erfgename. Het kwam erop neer dat de paginas later genereerd zou worden en de logica voor de knoppen niet meer gelezen wordt. Ik moest de functie in JavaScript nog oproepen wanneer de pagina's worden gegenereerd. Ditzelfde geldt ook voor de validatie op de pagina's die gegenereerd worden.

<img src="img/readme-img/week3-disabled-per-erfgename.png" alt="Afbeelding van week 3 disabled buttons per erfgename" height=400>

Op deze pagina kun je de relatie van de erfgename invullen. In het formulier staat een waarschuwing voor wanneer je een kind met een handicap invult. Ik heb wat extra styling gedaan zodat dit er goed uitzag en dat het duidelijk was bij welke vraag deze tekst hoort. 

<img src="img/readme-img/week3-radio-relatie.png" alt="Afbeelding van week 3 relatie erfgename" height=400>

Verder ben ik deze week nog veel bezig geweest met progressive enhancement. Ik had al dat alle tabs zichtbaar zijn als er geen JavaScript wordt gelezen. Alleen wanneer er JavaScript is krijgen alle tabs een active/inactive class. Het probleem was dat alleen de eerste 6 pagina's zichtbaar waren, omdat de rest nog gegenereerd moest worden. De overige pagina's zitten in de HTML in een template element. Een template is niet standaard zichtbaar. Wat ik heb gedaan om dit op te lossen is een div maken met alle HTML erin wat in het template stond met een lege template ernaast. Deze is zichtbaar wanneer er geen JavaScript is. Wanneer JavaScript wel aan staat, wordt alle inhoud van die div in de template geplaatst en vervolgens gedupliceert. Nu werkt de code nog als eerst en zijn alle vragen zichtbaar zonder JavaScript. Je kan alleen elke vraag maar 1 keer invullen (dus niet per erfgename) dus ik ga er nog een tekst bij zetten die alleen zichtbaar is zonder JS die uitlegt dat je meerdere formulieren moet verzenden als je meerdere erfgenames wil inschrijven

<img src="img/readme-img/week3-progressive-enhancement.png" alt="Afbeelding van week 3" height=400>

Ik heb vrijdag het gesprek gehad met mijn clubje. Vasilis vond dat ik al veel heb gedaan en dat ik kan afronden. Het belangrijkste stuk feedback dat ik heb gekregen is dat het niet duidelijk dat je verder moet scrollen per tab aangezien de Volgende knop op een vaste plek staat. Omdat ik met progressive enhancement nog een oplossing nodig had om zonder JavaScript niet per tab wil laten scrollen is de meest effectieve en ook makkelijke keuze om de max-height van een tab eruit te halen.

Volgende week wil ik nog focussen op:
- Styling disabled buttons
- Responsiviteit / Styling Desktop
- Max-height waarschijnlijk eruit halen
- Extra info voor progressive enhancement

Als er nog tijd over is:
- Eindpagina die je terugbrengt naar de tabs die je nog goed hebt ingevuld (mag ook fictief)
- Progressiebalk


## Dag 7 (16 maart)
### Werkzaamheden
Vandaag was het mijn doel om mijn feedback te verwerken van afgelopen vrijdag, de styling voor desktop goed te zetten en om de versie zonder JavaScript goed te zetten. Ik heb als eerste de max-height van elke tab fieldset gehaald. Vasilis had een goed punt over dat het niet duidelijk is voor mensen dat je naar beneden moet scrollen omdat de knop al in beeld was. Nu moet je dus ook naar onder scrollen om uberhaupt de knop te zien. Nu ziet de versie zonder JavaScript er ook mooi uit. Het enige wat ik wel moest doen is een minimum height zetten op de tab zodat pagina's met weinig tekst/vragen nog wat witruimte hebben en de knoppen wel onderin het scherm te zien zijn.

Verder heb ik voor progressive enhancement nog een extra tekst bij de tusseninstructie gezet die alleen maar zichtbaar is wanneer er geen JavaScript wordt gelezen. Hier wordt uitgelegd dat de gebruiker niet meerdere formulieren kan genereren per erfgename en dat hij/zij handmatig meerdere formulieren mag verzenden. Ook was er nog een overzicht want de disabled buttons bleven nog disabled als er geen script werd geladen. Nu hebben ze allemaal een class disabled waardoor ze zonder script normaal werken. In het script wordt er geregeld dat alle fieldsets met de disabled class daadwerkelijk disabled worden en vervolgens met de bijhorende radios enabled worden.

Ik ben vandaag ook bezig geweest met responsiviteit/desktop styling. Ik heb de form een max width van 45em gegeven. De width is 80vw. Dit betekent dat er op mobiel formaat het formulier bijna de volledig breedte inneemt en op desktop een vaste grootte heeft van 45em. Daarnaast heb ik ditzelfde gedaan voor de popup voor elke validatie. Nu ziet de website er op desktop ook goed uit.

Vervolgens ben ik bezig geweest met de styling van disabled buttons. Elke fieldset die disabled is krijgt aparte styling. De kleuren van de legends, labels en inputs worden grijs en de cursor wordt een not-allowed symbool. Nu is het een stuk duidelijker dat de buttons niet interacteerbaar zijn.

Ten slotte ben ik nog bezig geweest met mijn JavaScript code verschonen. Er zat veel dubbele/overbodige code in en het is gelukt om het script met bijna 100 regels te verkleinen. Daarnaast is het script ook een stuk logischer opgedeeld met als volgorde: de init, de tabs, het genereren van erfgenames, de popups/verzending, de radio buttons die waardoor vragen enabled worden, de validatie.

### Checkout met Teun
Vandaag werd ik gerandomized met Kerr, wie al naar huis was. Ik ben samengevoegd met Teun. Ik heb hem laten zien wat ik heb en wat ik nog wil doen morgen. Morgen wil ik nog een einde maken voor het formulier en een progressiebalk toevoegen waarin je kan zien hoever je in het proces bent. Misschien ook nog per erfgename laten zien om welke het gaat. Teun is zelf ook in de afrondingfase. Hij moet nog een paar bugs oplossen waaronder styling voor disabled labels. Morgen is de laatste dag voor mij voor BT aangezien ik heel woensdag en donderdag aan CSS wil zitten.

## Dag 8 (17 maart)
Vandaag is de laatste dag die ik wil besteden aan BT. Helaas begon de dag niet al te best. Ik had me in de ochtend verslapen en zou wat later op school komen. Ik rij altijd met de auto naar Nieuw-Vennep station om vanaf daar de trein te pakken. Toen ik daar aankwam waren er geen parkeerplaatsen meer beschikbaar. Na 20m wachten had ik besloten om de laatste loodjes vanuit huis te leggen.

Op de laatste dag heb ik een progressie bar gemaakt waaraan je kan zien hoe lang je nog ongeveer bezig bent met het invullen van het formulier. Ik heb hem geel gemaakt in de huiskleur van NS. Ik heb ervoor gekozen om hem bovenin te plaatsen onder de titel. Ik vond onderin niet heel mooi want je zou steeds moeten scrollen om hem te kunnen zien en helemaal boven vond ik ook niet passen want dan staat hij te ver buiten het formulier. Het probleem is wel dat ik hem nu onder de titel heb, wat betekent dat hij in het tab zit. Ik heb in elke individuele tab de HTML voor de progress bar gezet en logica gegeven dat elke progress bar dynamisch updatet wanneer er van pagina wordt gewisselt. 

Er zit helaas geen animatie op de progress bar. Omdat elke pagina een andere progressbar heeft is mij dat niet gelukt. Verder was er nog een probleem. Als ik meer paginas ga genereren zou de progressiebalk halverwege niet hetzelfde zijn. Je zou met bv. 1 erfgename bij de tusseninstructie op de helft zijn maar bij bv. 10 zou je de balk ineens van 50 naar ~10% springen. Om dit op te lossen heb ik logica geschreven om tab 6 als middenpunt te definieren. Tab 6 is de tusseninstructie. De eerste 6 tabs zullen dan de eerste 50% van de progressiebalk opvullen. De rest dan de overige 50%, ongeacht hoeveel paginas het zijn.

Verder heb ik voor het gegenereerde onderdeel een ::before aan de titel toegevoegd die laat zien voor welke erfgename je aan het invullen bent. Je begint bij erfgename #1, dan #2 etc. 

Als laatste heb ik op de laatste pagina nog wat toegevoegd. Als je alles hebt ingevuld zie je "Bedankt voor het invullen" en kun je alles verzenden, maar als je nog velden hebt gemist komt er in rode tekst te staan dat je nog wat niet hebt ingevuld met een overzicht van alle niet ingevulde velden. Dit heeft nog het langste geduurd, want ik moest rekening houden met disabled buttons, de knoppen die wel/niet required zijn, de inputs die wel/geen label hebben om degene zonder label een legend te geven en om radios altijd door de legend te laten noemen. Voor die specifieke eisen heb ik wel Chat gebruikt door mijn code op te sturen en vertellen welke tekst  wel/niet in beeld komt. 
 
## Week 4 Overzicht
Deze week heb ik de laatste loodjes gelegd. Ik heb me gefocust op styling, responsiviteit, validatie, progressive enhancements, de laatste paar functies en het opschonen van mijn code. 

Ten eerste heb ik mijn styling toegepast op desktop. Ik heb hier geen media queries voor gebruikt. Op mobiel heeft de form een width van 80vh. Ik heb een max-width van 45em eraan gegeven waardoor hij op desktop nooit te breed zal worden. Daarnaast heb ik de tekst in de header gecentreerd omdat ik dat mooier vond passen boven het formulier. Ook heb ik de max-width uit alle tabs gehaald zodat de gebruiker altijd weet wanneer hij/zij naar beneden moet scrollen.

<img src="img/readme-img/week4-desktop-versie.png" alt="Afbeelding van week 3" height=400>

Verder heb ik ook de waarschuwingspopups de max-width gegeven. Hieronder zie je het verschil tussen hoe hij eerst was op desktop en hoe hij nu is. Toch handig om mobile first te stylen.

<img src="img/readme-img/week4-popup-oud.png" alt="Afbeelding van week 4" height=400>
<img src="img/readme-img/week4-popup-nieuw.png" alt="Afbeelding van week 4" height=400>

Voor progressive enhancement heb ik een tekst toegevoegd die alleen zichtbaar is zonder JavaScript die de gebruiker laat weten dat hij meerdere formulieren mag inzenden voor meerdere erfgenames als dit het geval is. Verder heb ik nu ook de max-height uit alle tabs gehaald waardoor dit er nu mooi uitziet.

<img src="img/readme-img/week4-progressive-enhancement.png" alt="Afbeelding van week 4" height=400>

Ik heb tijdens mijn gesprekken feedback gekregen over mijn disabled buttons en dat deze nog niet duidelijk genoeg waren. Ik heb styling toegepast op de fieldsets die disabled zijn en de kleuren aangepast van de inputs, labels en legends waardoor ze nu inactief lijken. Verder krijgt je muis een not-allowed symbool wanneer je er overheen hoevert. 

<img src="img/readme-img/week4-disabled-styling.png" alt="Afbeelding van week 4" height=400>

Op de laatste dag heb ik nog een functie gemaakt voor de eindpagina. Hier zie je een overzicht van alle velden die je nog niet hebt ingevuld. Nu kun je terug gaan naar de tabs waarvan de vragen nog niet zijn ingevuld. Een kleine bug die ik nog heb is dat de antwoorden resetten als je opnieuw de paginas gaat genereren maar ja. So be it. In deze afbeeldingen zie je links wanneer je alle antwoorden goed hebt ingevuld en rechts wanneer je inputs hebt gemist of niet goed hebt ingevuld.

<img src="img/readme-img/week4-eindpagina-goed.png" alt="Afbeelding van week 4" height=400>
<img src="img/readme-img/week4-eindpagina-missende-velden.png" alt="Afbeelding van week 4" height=400>

Ook heb ik nog een progressiebalk gemaakt. Ik vond dit wat geschikter dan alleen een pagina teller, al helemaal omdat vanaf het begin je niet weet hoeveel paginas je gaat invullen. Deze staat bovenin onder de titel, zodat deze goed in beeld staat en je niet buiten de form hoeft te kijken/naar beneden hoeft te scrollen. Er zit helaas geen animatie op, omdat elke pagina een eigen progressiebalk heeft. Omdat er halverwege het formulier voor elke erfgename 5 nieuwe paginas worden genereerd, heb ik logica toegevoegd om pagina 6 als middelpunt van de progressiebalk te definieren. Dit betekent dat wanneer je op pagina 6 komt de progressiebalk 50% is opgevuld. Als je nu bv. 10 erfgenames invult gaat de balk niet in eens terug naar ~20% maar blijft hij op z'n plek staan. 

<img src="img/readme-img/week4-progress-bar.png" alt="Afbeelding van week 4 - Progressiebalk" height=400>
<img src="img/readme-img/week4-progress-bar-halverwege.png" alt="Afbeelding van week 4 - Progressiebalk Halverwege" height=400>


## Eindreflectie
Ik ben trots op wat ik de afgelopen maand heb gemaakt. Ik had een beetje onderschat hoeveel detail je in een formulier nodig hebt. Vooral met HTML met fieldsets, legends, labels etc. Ik denk dat ik hele goede en overzichtelijke HTML heb geschreven. Verder heb ik mijn CSS en JS ook goed op orde. Achteraf heb ik waarschijnlijk wel iets te veel JavaScript gebruikt in situaties die ik ook met CSS op had kunnen lossen, omdat ik JavaScript wat meer gewend ben. Mijn gedachtegang is altijd dat met JavaScript alles mogelijk is en met CSS ik niet weet of het mogelijk is en voor die reden voor JavaScript kies.

Ik denk dat ik mezelf goed heb uitgedaagd met de patterns die ik heb uitgekozen. Ten eerste heb ik in het formulier gekozen voor onderdeel 1 en onderdeel 4. Onderdeel 4 is het grootste onderdeel van het formulier en hoewel ik een paar onderdelen geschrapt had ben ik alle logica langs gegaan. Ik heb "Ga verder met vraag..." geimplementeerd door disabled inputs te gebruiken en deze aan te laten zetten wanneer je JA klikt op een bepaalde radio input. Verder heb ik het formulier opgedeeld in verschillende paginas en kun je per erfgename meerdere paginas genereren. Om dit allemaal werkend te krijgen en vervolgens rekening te kunnen houden met progressive enhancement is wel iets waar ik zeer trots op ben.

Qua styling heb ik me niet heel erg kunnen uitsloven, vooral omdat de huisstijl van de NS ook niet bepaald het meest interessant is en omdat de focus voor mij voorrnamelijk lag op het logica schrijven en het duidelijk maken aan de gebruiker wat hij/zij moet doen. Alsnog ben ik tevreden met hoe het eruit ziet al is het aan de simpele kant.

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

What happened to text inputs?
https://briefs.video/videos/what-happened-to-text-inputs/

ChatGPT - Specifieke inputs missende velden

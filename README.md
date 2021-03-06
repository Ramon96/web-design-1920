# Onzichtbare datavisualisatie
Rapid prototypen en testen met echte mensen.


## Live demo 
[https://webdesign-ramon.netlify.app/](https://webdesign-ramon.netlify.app/) (Ios13 Iphone demo)


## build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/70e8c292-b24c-4507-b5c6-d77aa6083cb7/deploy-status)](https://app.netlify.com/sites/webdesign-ramon/deploys)

## Installatie
Clone het project
`
git clone https://github.com/Ramon96/web-design-1920.git
`

navigeer in het project
`
cd web-design-1920
`

## Bekende problemen
- [ ] Uitleg word onderbroken wanneer je je telefoon kantelt
- [ ] Refreshen zorgt ervoor dat spraak ophoudt met werken
- [ ] Problemen tegen de klok indraaien vanaf 360 graden (Omdat hij dan van 360 naar 0 springt)

## Gebruikte bronnen 
 - databron: https://klimaatmonitor.databank.nl/dashboard/hernieuwbare-energie

## User scenario 

Frank is 49 jaar en komt net van het ziekenhuis. Frank met het centrale punt van zijn ogen niet meer zien. Hij heeft net van het ziekenhuis te horen gekregen dat hij binnenkort helemaal niets meer kan zien. 

Er is momenteel Corona in Nederland. Frank volgt de stand van zaken door naar corona tabellen te kijken. Frank is bang dat hij binnenkort deze tabellen niet meer kan aflezen. Daarom probeert Frank een screenreader te gebruiken om door het web te navigeren. 

Het valt frank op dat het heel moeilijk is omdoormiddel van een screenreader door het web te navigeren, niet alle website zijn op zijn screenreader geoptimalizeerd. Op zijn mobiele telefoon gebruikt Frank Siri om spraak aan en uit te zetten en kan hij zijn mobiele telefoon daardoor nog bedienen.

Gelukkig kan Frank doormiddel van een onzichtbare datavisualisatie nog steeds op de hoogte blijven van de laatste corona cijfers.
Frank kan de onzichtbare datavisualisatie gebruiken door zijn mobiele telefoon te draaien en te kantelen. Frank hoeft daarom niet meteen handig te zijn met een screenreader.


## De ontmoeting met Roger Ravelli
8 april hebben we als **Team Roger** Roger ontmoet. Roger is een hele aardig man van in de 53. 
Roger zijn leven is niet altijd even mooi geweest, op een goed moment had hij het idee dat zijn bril niet meer even scherp is als hij vond dat het zou moeten zijn. Hij is toen naar de opticien geweest. De opticien heeft hem meteen naar het ziekenhuis doorverwezen. Daar is Roger erachter gekomen dat hij een ziekte heeft waardoor hij steeds minder door kan zien. Op een gegeven moment zelfs blind Dit komt door een kapot netvlies in zijn ogen. Roger leert sinds kort hoe he met een screenreader aan de gang kan gaan. Wij hebben vanuit school de kans gekregen om Roger te helpen en om iets voor hem te ontwerpen waardoor hij gebruik kan maken van een Data visualisatie. 

Wij hebben deze dag enkele vragen kunnen stellen aan Roger en zijn enkele zaken te weten gekomen. 
Dit zijn zaken die ik belangrijk vond om te onthouden.

- Roger heeft aan beeldhouwen gedaan.
- Roger heeft een windows computer.
- Roger kan wel nog wat zien, 2% om precies te zijn (inzoomen en goed contrast helpt hem daarbij, dit kost hem wel veel energie)
- Roger kan niet het centrale zien alleen dat wat er omheen is.
- Roger gebruikt darkmode, en soms zelfs een zonnebril als dit niet ondersteunt word. Dit helpt Roger bij het duidelijk maken van wat hij ziet.
- Als Roger naar een grafiek kijkt, vind hij de trends het interessantst om te weten.

Met deze informatie ben ik aan het brainstormen gegaan. Ik vond het in eerste instantie lastig om tot een ontwerp te komen. Toen herinnerde ik aan de bovenstaande punten die Roger heeft benoemd. Roger is namelijk een beeldhouder en dat doet hij met zijn handen. Zo ging ik nadenken en dacht ik, zou Roger door een datavisualisatie kunnen gaan met zijn handen? Dan bedoel ik dus niet met toetsenbord en met zijn muis maar fysiek in de echte wereld. 

Het schoot me naar binnen dat een mobiele telefoon vol zit met censoren. Roger had verteld dat hij ook een ipad had die hij wel gebruikte, maar het was me nog niet naar binnengeschoten dat ik die misschien wel zou kunnen gebruiken bij mij uitwerking.

## De eerste iteratie
Ik wilde iets gaan doen met de gyroscopen van de telefoon. Ik wist dat Roger een iPhone 11 had, want dat had ik gevraagd. En ik wist dat Roger safari gebruikt op zijn telefoon. Mijn eerste idee was als een soort waterpas idee. Als je je telefoon kantelt kun je door de column van een **onzichtbare** tabel. Terwijl ik dit aan het bouwen was ontdekte ik iets belangrijks. Ik dacht namelijk dat de gyroscopen maar 2 assen kon meten, maar het schijnen er 3 te zijn.

![axis gyroscope](https://newnow.co/wp-content/uploads/2017/02/device-alpha-beta-gamma.png)

Dit was perfect, dit veranderde meteen m'n hele idee. 
Ik had bedacht dat je je telefoon als een soort kluis slot zou kunnen draaien, en dat je op die manier door je tabel kan navigeren. Op die manier kun je je telefoon gewoon plat op tafel leggen. Ik kwam  wel tegen een paar obstakels.

De iPhone verleent niet zomaar toegang tot de gyroscopen. Je moet eerst toestemming vragen bij de gebruiker. Probleem is alleen zo dat dit alleen het geval is bij ios 13 of hoger. En ik had geen idee welk ios Roger gebruikte.

Ik had een prototype gemaakt wat een geluid maakt elke 5 graden dat je je telefoon maakt, ik wilde testen of dit werkt en of Roger dit begin ontwerp leuk vind.

### De test
Tijdens de eerste test zag ik veel opvallende zaken. Wat me opviel was dat kleine knoppen niet makkelijk te bedienen zijn. (Dus ik had stiekem snel mijn knop die om toestemming vraagt groot gemaakt).

Wat me verder opviel is dat veel medestudenten probeerde het kleine beetje zicht van Roger te gebruiken. Dit kost Roger veel energie en je kon ook wel aan hem zien dat hij dit eigenlijk niet zo fijn vond. Hij wil liever met zijn screenreader aan de gang gaan. Ook merkte ik dat Roger het belangrijk vind dat de data betrouwbaar is en dat hij liever niet naar onzin data kijkt. (Hij vindt het niet erg als het even vermeld word dat de data waar hij naar kijkt niet echt is, maar soms vergeten studenten dat aan te geven). 

Uiteindelijk was ik aan de beurt. Er gebeurde eigenlijk al meteen iets belangrijks. 
Terwijl Roger mijn prototypen aan het testen was begonnen de buren te klussen. Er kwam luid geluid van de buren af. Dit betekende dat Roger tijdens deze periode niet mijn applicatie kon gebruiken omdat hij het geluid van zijn telefoon niet kon horen. 

Verder zag ik dat Roger het wel leuk vond om te zien dat ik out of the box had nagedacht en dat hij best benieuwd was wat hier verder uit zou komen.

### Conclusie:
Bewegen met de telefoon vond hij leuk, hij vond het leuk dat ik vanuit het perspectief van een beeldhouder heb gedacht (werken met handen). Geluid als terugkoppeling werkt niet zo goed, als de buren aan het klussen zijn kan Roger de applicatie niet gebruiken.

Ik had nog gekeken of het mogelijk om geluid te vervangen met trillen maar word dat helaas niet goed ondersteund: https://caniuse.com/#feat=vibration. En heb ik in tegenstelling tot koen geen extra Android in huis liggen. Ik beschouw dit dan ook als een Con en ga hier niet omheen proberen te ontwerpen. (Roger zou in theorie ook een koptelefoon kunnen gebruiken)

## De tweede iteratie
Nu heb ik gezien dat de sensoren van een mobiele telefoon goed in de smaak vielen ben ik er verder in gaan itereren.
Ik heb eerst goed na zitten denken hoe tabel waardes zou kunnen achterhalen door middel van geluid. Ik zat eerst te denken in de richting van hoge en lage tonen maar dat zegt eigenlijk nog steeds niet zoveel. Toen zat ik te denken aan een speechAPi. Hoe meer ik hier over na dacht hoe logischer het voor mij is. Het wordt goed ondersteund en ik zou de api kunnen gebruiken om uitleg te kunnen geven. 

De volgende stap is dat ik een tabel zou kunnen bedienen door middel van sensoren. Ik heb ervoor gezorgd dat de tabel cellen een focus krijgen als je je mobiel draait. Behalve de eerste cel, want die word elke stap voorgelezen. Als je op de laatste cel naar de volgende probeert te gaan dan springt hij weer naar de eerste cel en andersom. Omhoog en omlaag doe je door je mobiel een stukje over de beta as te laten kanten, en dan weer je telefoon te laten vallen. 

Om het helemaal af te ronden worden de cellen voorgelezen en heb ik een introductie text toegevoegd die uitleg geeft.

![iteratie](https://github.com/Ramon96/web-design-1920/blob/master/readme-sources/asdf.png?raw=true)

### De test
Deze keer doe ik de test net wat anders. Ik wil de kennis toepassen die ik in het college heb gekregen. 
Ik was als een van de laatste aan de beurt en ik kon me goed voorstellen dat Roger er ook een beetje doorheen zat. Ik vraag hem daarom gewoon: Hoe gaat het? Heb je otnwerpen gezien de je leuk vond? 
Roger vond dit leuk, gewoon even eruit. Even van die focus af. We zijn tenslotte iets leuks voor hem aan het maken, Roger is niet voor ons aan het werk maar wij voor hem. 

Na het leuke koetjes en kalfjes fase ga ik over naar de "Recap". Ik vertel Roger even wat we de laatste keer hebben gedaan en wat ik heb in de tussentijd voor hem heb zitten bouwen. Ik vertel hem hoe we de test gaan doen. Ik leg hem uit dat ik niet hem probeer te testen, zijn intelligentie of test hoe snel hij iets snapt, maar juist waar de haken en ogen van mijn ontwerp zitten en hoe ik dat kan verbeteren. 

Wanneer Roger ergens niet uitkomt vraag ik Roger wat hij denkt wat er van hem gevraagd word. Ik moedig hem aan om hem hardop te denken wat mij veel interessante aandachtspunten opleverde. 

### Conclusie. 
- Roger kwam er in het begin niet helemaal uit, er was in mijn applicatie nog geen duidelijke flow.
- Ik heb toestemming nodig om de gyroscopen te kunnen gebruiken dat doe ik door middel van een allow button, deze button was nog niet helemaal duidelijk.
- De applicatie werkt ook niet helemaal soepel voor terugkomende bezoekers.
- De inleiding is niet helemaal duidelijk (hier zou misschien een soort tutorial op zijn plaats kunnen komen.
- Roger dacht doordat hij omhoog en omlaag kan gaan door te kantelen dat je ook naar links en rechts kan gaan door te kantelen. Toen ik hem uitlegde dat dit moet door het draaien was het voor hem ook duidelijk, dus de applicatie moet dit nog even uitleggen (links en rechts kantelen gaat niet omdat de mobiel dat zijn scherm wil draaien en deze feature kan ik niet in de browser uitzetten)
- De gevoeligheid de gyroscopen is nog te streng, hij verspringt veel te snel van tabel cellen

Al met al vond Roger het prachtig om te zien, het is even wat anders dan de screenreader tabellen die hij veel gezien heeft. of iemand die het met contrast probeert op te lossen. Roger noemt het "Origineel en bevinding rijkelijk" En daar ben ik al blij mee. 

Ik merk dat deze manier van testen veel effectiever is in vergelijking met mijn eerste test. Ik leer tijdens dit vak over exclusive design, maar ik leer ook hoe je moet testen. En dat laatste is misschien wel het meest nuttig, omdat je dat in elke situatie kan toepassen om je concept te versterken.

## De laatste iteratie
De meeste problemen die ik in mijn laastste test had kan ik oplossen door een flow te creeeren in mijn app. 
Er is niet veel flow nodig naar mijn mening, want het belangrijkste onderdeel is dat je lekker met je telefoon kan draaien en kantlen.

Ik ben dus voor een 1 button design gegaan.
Dit het scherm een schermvullend knop heeft. Als Roger hierop klikt word er uitgelegd dat de applicatie toestemming heeft tot de bewegingssensoren. 

Als Roger dit toestaat veranderd de knop naar een uitleg knop, dus wanneer Roger het scherm aanraakt word er uitgelegd hoe je door de tabel kan gaan, wat voor dataset er gebruikt is en van wie deze data set is. 

Ook heb ik de gevoeligheid dynamisch op het aantal tabel items gemaakt. 

Om het af te maken heb ik ook nog wat nonsense toegevoegd.
wanneer Roger zijn scherm draaid is er een 1 op 10 kans dat er een joke verteld word.
Zo kan het programma zeggen: Roger van al dat gedraai word ik een beetje duizelig.
Deze grap word natuurlijk maar 1x per sessie gemaakt, anders word het een beetje vervelend.

Ook verander de pitch van de stem op basis van de waarde. Toen ik dit uitprobeerde moest ik meteen lachen dus ik denk dat Roger dit ook wel een leuke grap zal vinden.

![prototype scherm](https://github.com/Ramon96/web-design-1920/blob/master/readme-sources/scherm.jpg?raw=true)

## Exclusive Design Principles
Tijdens het vak Web Design hebben we 4 Design principles gekregen die we kunnen toepassen op ons concept. Nog preciezer, het gaat over exclusive design. Deze 4 gouden regels die opgezet zijn door Vasilis van Gemert zijn er om mij te helpen bij het ontwerpen voor een leuke maar ook zinvolle ervaring voor Roger.

### Study situation
Ik heb een user scenario opgezet om mij proberen in te leven in Roger. De situatie van Roger is dat hij zijn zicht verliest en dat hij nog moet leren om met screen assistances te werken.

Daarom lijkt het mij een goed idee om iets te maken waarvoor Roger niet iets nieuws hoeft te leren.
Dit heb ik gedaan door interactie's te maken die voor roger makkelijk te begrijpen is.

### Ignore conventions
Deze Design principle heeft mij denk ik het meest geholpen. Het is makkelijk om te denken binnen de scope van een screenreader. Doordat ik juist los liet van alle conventies ging ik meer denken in de zin van: Wat voor sensoren zijn er tot me beschikking? Op welke manieren kan de gebruiker nog meer interacteren? Wat als de gebruiker geen toetsenbord of muis zou hebben?

### Prioritise identity
Tijdens deze opdracht hebben we een ontzettend grote luxe, we mogen namelijk voor een specifiek persoon ontwerpen. En ik pak dan ook meteen uit. Ik maak gebruik van het feit dat hij een telefoon heeft, mijn applicatie werkt precies voor Roger zijn operating.

Ik heb ook in gedachte gehouden dat Roger een beeldhouwer geweest is, dus ik weet dat Roger niet bang is om met zijn handen te bewegen. Daarom kwam ik op het idee om bewegings sensoren van zijn mobiele telefoon te gebruiken.

Het viel me aan Roger op dat Roger het lastig vind om te vinden wat hij moet doen als hij teveel op het scherm ziet gebeuren. 
Daarom heb ik 1 knop in mijn design die doet wat roger mogeljk nodig zal hebben.

Tijdens het testen schreef ik op wat mij opviel aan Roger waardoor ik het design meer op Roger kon laten richten.


### Add nonsense
Wanneer Roger veel aan zijn telefoon draait, zegt de applicatie dat hij duizelig word van hem. Ook heb ik de pitch van de spreker zijn stem gebasseerd op de waardes waar hij op staat, waardoor de stem heel hoog en heel laag kan gaan. 


## Grote conclusie
Ik vond het ontzettend leuk om voor Roger te mogen ontwerpen. Roger geloofde er oprecht in dat het web misschien niet iets voor hem is en hij stond op het punt om te geven, maar om ons zo aan het werk te zien zie je weer een vonk in zijn ogen. Hij vind het oprecht leuk om te zien wat wij allemaal wel niet weten te bedenken. 

Roger is dan wel iemand die slecht ziend is, maar de normale ontwerper zal dan doen wat hem geleerd is want als je screenreader support  toevoegd dan is het toch prima? Nou ik heb tijdens vak geleerd dat dat niet altijd het geval is want in Roger zijn situatie moet hij nog leren om met deze technologie om te gaan, er zijn zoveel verschillende screenreaders en allemaal handelen ze het web net wat anders aan. Roger is op leeftijd en nieuwe technieken aanleren is net wast lastiger voor hem. 

Door snel prototypens te maken kan ik zien hoe Roger ermee omgaat, ik kan zien waar Roger struikeld en waarom hij juist precies daarover struikeld. Ik kan heel gericht oplossingen bedenken voor zijn probleem, maar nog belangrijker is dat ik kan zien wat hij ervan vind. Ik kan zien wanneer hij lacht en het naar zijn z'n heeft en ik kan zien wanneer het hem net allemaal een beetje vervelend word.

Ik had in het begin moeite om iets te bedenken wat bij Roger zou passen, maar door juist alle conventie's uit het raam te goeien ging ik vanuit andere invalshoeken denken waardoor ik met een ontwerp kon komen wat Roger ontzettend leuk vind!

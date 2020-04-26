# Onzichtbare datavisualisatie
Rapid prototypen en testen met echte mensen

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

## De ontmoeting met Roger Ravelli
8 April hebben we als **Team Roger** Roger ontmoet. Roger is een hele aardig man van in de 53. 
Roger zijn leven is niet altijd even mooi geweest, op een goed moment had hij het idee dat zijn bril niet meer even scherp is als hij vond dat het zou moeten zijn. Hij is toen naar de opticien geweest. De opticien heeft hem meteen naar het ziekenhuis doorverwezen. Daar is Roger erachter gekomen dat hij een ziekte heeft waardoor hij steeds minder door kan zien. Op een gegeven moment zelfs blind Dit komt door een kapot netvlies in zijn ogen. Roger leert sinds kort hoe he met een screenreader aan de gang kan gaan. Wij hebben vanuit school de kans gekregen om Roger te helpen en om iets voor hem te ontwerpen waardoor hij gebruik kan maken van een Data visualisatie. 

Wij hebben deze dag een aantal vragen kunnen stellen aan Roger en zijn een aantal zaken te weten gekomen. 
Dit zijn zaken die ik belangrijk vond om te onthouden.

- Roger heeft aan beeldhouden gedaan.
- Roger heeft een windows computer.
- Roger kan wel nog wat zien, 2% om precies te zijn ( inzoomen en goet contrast helpt hem daarbij, dit kost hem wel veel energie)
- Roger kan niet het centrale zien alleen dat wat er omheen is.
- Roger gebruikt darkmode, en soms zelfs een zonnebril als dit niet ondersteunt word. Dit helpt Roger bij het duidelijk maken van wat hij ziet.
- Als Roger naar een grafiek kijkt, vind hij de trends het interessantst om te weten.

Met deze informatie ben ik aan het brainstormen gegaan. Ik vond het in de eerste instantie heel lastig om tot een concept te komen. Toen herinnerde ik aan de dingen die Roger heeft gezegd. Roger is namelijk een beeldhouder en dat doet hij met z'n handen. Zo ging ik nadenken en dacht ik, zou Roger door een datavisualisatie kunnen gaan met z'n handen? Dan bedoel ik dus niet met toetsenbord en met zn muis maar fysiek in de echte wereld. 

Het schoot me naar binnen dat een mobiele telefoon vol zit met een aantal censoren. Roger had verteld dat hij ook een ipad had die hij wel gebruikte, maar het was me nog niet naar binnengeschoten dat ik die misschien wel zou kunnen gebruiken bij mij uitwerking.

## De eerste iteratie
Ik wilde iets gaan doen met de gyroscope van de telefoon. Ik wist dat Roger een iphone 11 had, want dat had ik gevraagd. En ik wist dat Roger safari gebruikt op zijn telefoon. Mijn eerste idee was als een soort waterpas idee. Als je je telefoon kantelt kan je door de columen van een **onzichtbare** tabel. Terwijl ik dit aan het bouwen was ontdekte ik iets heel belangrijks. ik dacht namelijk dat de gyroscope maar 2 assen kon meten, maar het schijnen er 3 te zijn.

![axis gyroscope](https://newnow.co/wp-content/uploads/2017/02/device-alpha-beta-gamma.png)

Dit was perfect, dit veranderde meteen m'n hele idee. 
Ik had bedacht dat je je telefoon als een soort kluis slot zou kunnen draaien, en dat je op die manier door je tabel kan navigeren. Op die manier kan je je telefoon gewoon plat op tavel leggen. Ik kwam  wel tegen een paar obstacels.

De iphone verleent niet zomaar toegang tot de gyroscope. Je moet eerst toestemming vragen bij de gebruiker. Probleem is alleen zo dat dit alleen het geval is bij ios 13 of hoger. En ik had geen idee welk ios roger gebruikte.

Ik had een prototype gemaakt wat een geluid maakt elke 5 graden dat je je telefoon maakt, ik wilde testen of dit werkt en of Roger dit begin concept leuk vind.

### De test
Tijdens de eerste test zag ik veel opvallende zaken. Een van de dingen die me opviel was dat kleine knoppen niet makkelijk te bedienen zijn. ( Dus ik had stiekem heel snel mijn knop die om toestemming vraagt heel groot gemaakt).

Wat me verder opviel is dat veel mede studenten probeerde het kleine beetje zicht van Roger te gebruiken. Dit kost Roger veel energie en je kon ook wel aan hem zien dat hij dit eigenlijk niet zo fijn vond. Hij wilt liever met zijn screenreader aan de gang gaan. Ook merkte ik dat Roger het heel belangrijk vind dat de data betrouwbaar is en dat hij liever niet naar onzin data kijkt. (Hij vind het niet erg als het even vermeld word dat de data waar hij naar kijkt niet echt is, maar soms vergeten studenten dat aan te geven). 

Uiteindelijk was ik aan de beurt. Er gebeurde eigenlijk al meteen iets belangrijks. 
Terwijl Roger mijn prototypen aan het testen was begonnen de buren te klussen. Er kwam luid geluid van de buren af. Dit betekende dat Roger tijdens deze periode niet mijn applicatie kon gebruiken omdat hij het geluid van zijn telefoon niet kon horen. 

Verder zag ik dat Roger het wel leuk vond om te zien dat ik out of the box had nagedacht en dat hij best benieuwd was wat hier verder uit zou komen.

### Conclussie:
Bewegen met de telefoon vond hij erg leuk, hij vond het leuk dat ik vanuit het perspectief van een beeldhouder heb gedacht (werken met handen). Geluid als feedback werkt niet zo goed, als de buren aan het klussen zijn kan Roger de applicatie niet gebruiken.

Ik had nog gekeken of het mogelijk om geluid te vervangen met trillen maar word dat helaas niet goed ondersteund: https://caniuse.com/#feat=vibration. En heb ik in tegenstelling tot koen geen extra Android in huis liggen. Ik beschouw dit dan ook als een Con en ga hier niet omheen proberen te ontwerpen. (Roger zou in theorie ook een koptelefoon kunenn gebruiken)

## De tweede iteratie
Nu heb ik gezien dat de sensoren van een mobiele telefoon goed in de smaak vielen ben ik er verder in gaan ittereren.
ik heb eerst goed na zitten denken hoe tabel waardes zou kunnen achterhalen doormiddel van geluid. Ik zat eerst te denken in de richting van hoge en lage tonen maar dat zegt eigenlijk nog steeds niet zoveel. Toen zat ik te denken aan een speechAPi. Hoe meer ik hier over na dacht hoe logischer het voor mij is. Het word goed ondersteund en ik zou de api kunnen gebruiken om uitleg te kunnen geven. 

De volgende stap is dat ik een tabel zou kunnen bedienen doormiddel van sensoren. Ik heb ervoor gezorgt dat de tabel cellen een focus krijgen als je je mobiel draait. Behalve de eerste cell, want die work elke stap voorgelezen. Als je op de laatste cel naar de volgende probeert te gaan dan springt hij weer naar de eerste cell en vise versa. Omhoog en omlaag doe je door je mobiel een stukje over de beta as te laten kanten, en dan weer je telefoon te laten vallen. 

Om het helemaal af te ronden worden de cellen voorgelezen en heb ik een introductie text toegevoegd die uitlegd geeft.

### De test
Deze keer doe ik de test net wat anders. Ik wil de kennis toepassen die ik in de college heb gekregen. 
Ik was als een van de laatste aan de beurt en ik kon me goed voorstellen dat Roger er ook een beetje doorheen zat. Ik vraag hem daarom gewoon: Hoe gaat het? Heb je nog leuke dingen gezien? 
Roger vond dit leuk, gewoon ff eruit. Ff van die focus af. We zijn tenslotten iets leuks voor hem aan het maken, Roger is niet voor ons aan het werk maar wij voor hem. 

Na het leuke koetjes en kalfjes fase ga ik over naar de "Recap". Ik vertel Roger even wat we de laatste keer hebben gedaan en wat ik heb in de tussentijd voor hem heb zitten bouwen. Ik vertel hem hoe we de test gaan doen. Ik leg hem uit dat ik niet hem probeer te testen, zijn inteligentie of test hoe snel hij iets snapt, maar juist waar de haken en ogen van mijn design zitten en hoe ik dat kan verbeteren. 

Wanneer Roger ergens niet uitkomt vraag ik Roger wat hij denkt wat er van hem gevraagd word. Ik moedig hem aan om hem hardop te denken wat mij veel interessante aandachtspunten opleverd. 

### Conclussie. 
- Roger kwam er in het begin niet helemaal uit, er was in mijn applicatie nog geen duidelijke flow.
- Ik heb toestemming nodig om de gyroscope te kunnen gebruiken, dat doe ik doormiddel van een allow button, deze button was nog niet helemaal duidelijk.
- De applicatie werkt ook niet helemaal soepel voor terugkomende bezoekers.
- De inleiding is niet helemaal duidelijk ( hier zou misschien een soort tutorial op z'n plaats kunnen komen.
- Roger dacht omdat hij omhoog en omlaag kan gaan door te kantelen dat je ook naar links en rechts kan gaan door te kantelen. Toen ik hem uitlegde dat dit moet door het draaien was het voor hem ook heel duidelijk, dus de applicatie moet dit nog even uitleggen (links en rechts kantelen kaat niet omdat de mobiel dat z'n scherm wil draaien en deze feature kan ik niet in de browser uitzetten)
- De gevoeligheid de gyroscope is nog te streng, hij verspringt veel te snel van tabel celllen

Al met al vond Roger het prachtig om te zien, het is even wat anders dan de screenreader tabellen die hij veel gezien heeft. of iemand die het met contrast probeert op te lossen. Roger noemt het "Orgineel en bevinding rijkelijk" En daar ben ik al heel blij mee. 

Ik merk dat deze manier van testen veel effectiever is in vergelijking met mijn eerste test. Ik leer tijdens dit vak over exclusive design, maar ik leer ook hoe je moet testen. En dat laatste is misshcien wel het meest nuttig omdat je dat in elke situatie kan toepassen om je concept te versterken.

## De laatste itteratie

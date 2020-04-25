[![Netlify Status](https://api.netlify.com/api/v1/badges/70e8c292-b24c-4507-b5c6-d77aa6083cb7/deploy-status)](https://app.netlify.com/sites/webdesign-ramon/deploys)

# Web Design @cmda-minor-web 1920
//Interactie ontwerpen: Rapid prototypen en testen met echte mensen

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

## De eerste test
Tijdens de eerste test zag ik veel opvallende zaken. Een van de dingen die me opviel was dat kleine knoppen niet makkelijk te bedienen zijn. ( Dus ik had stiekem heel snel mijn knop die om toestemming vraagt heel groot gemaakt).

Wat me verder opviel is dat veel mede studenten probeerde het kleine beetje zicht van Roger te gebruiken. Dit kost Roger veel energie en je kon ook wel aan hem zien dat hij dit eigenlijk niet zo fijn vond. Hij wilt liever met zijn screenreader aan de gang gaan. Ook merkte ik dat Roger het heel belangrijk vind dat de data betrouwbaar is en dat hij liever niet naar onzin data kijkt. (Hij vind het niet erg als het even vermeld word dat de data waar hij naar kijkt niet echt is, maar soms vergeten studenten dat aan te geven). 

Uiteindelijk was ik aan de beurt. Er gebeurde eigenlijk al meteen iets belangrijks. 
Terwijl Roger mijn prototypen aan het testen was begonnen de buren te klussen. Er kwam luid geluid van de buren af. Dit betekende dat Roger tijdens deze periode niet mijn applicatie kon gebruiken omdat hij het geluid van zijn telefoon niet kon horen. 

Verder zag ik dat Roger het wel leuk vond om te zien dat ik out of the box had nagedacht en dat hij best benieuwd was wat hier verder uit zou komen.

## Conclussie:
Bewegen met de telefoon vond hij erg leuk, hij vond het leuk dat ik vanuit het perspectief van een beeldhouder heb gedacht (werken met handen). Geluid als feedback werkt niet zo goed, als de buren aan het klussen zijn kan Roger de applicatie niet gebruiken.

Ik had nog gekeken of het mogelijk om geluid te vervangen met trillen maar word dat helaas niet goed ondersteund: https://caniuse.com/#feat=vibration. En heb ik in tegenstelling tot koen geen extra Android in huis liggen. Ik beschouw dit dan ook als een Con en ga hier niet omheen proberen te ontwerpen. (Roger zou in theorie ook een koptelefoon kunenn gebruiken)

## De tweede test

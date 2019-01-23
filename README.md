## Loan App frontend by Pauli Mänty

Harkkatyön eri arvioitavien osioista pientä dokumentointia tässä. 


### Itsearvio 

Tavoittelen työstä arvosanaksi 4. 

Create and edit osuus on vajaa. Login ja users levels ei nyt ihan lähteny toimimaan mutta muuten ihan kaunis applikaatio.

Jos datan poistamisesta ja rikkinäisestä login napista, ja ehkä yhdestä tehdystä kotitehtävästä saisi kaksi(2) osapistettä ja nelosen kurssin arvosanaksi olis kova homma. 


### Ui-core 

Järjestelmän ydin onnistui helposti ja täyttää mielestäni tehtävänannon täysin.
Tästä osiosta arvioisin saavani täydet 8 pistettä. Jätin next.js:n pois käytöstä työtä tehdessä, sillä react-router on minulle tutumpi SPA tyylisen ohjelman tekemiseen.

### Search-n-sort

Tässä vaiheessa hyödynsin mui-datatables kirjastoa. Hemmetin hyvä taulukko reactiin, jolla sain haku- ja lajitteluominaisuudet kauniisti taulukkoihin.

### Create-n-edit

Tää osuus on keskeneräinen. Dataa voi poistaa taulukoista klikkaamalla täppää taulukon vasemmasta laidasta valitaksesi poistettavan datan, ja sen jälkeen delete kuvaketta oikealta ylhäältä taulukosta.
Uuden datan luonti ei toimi.

### login-n-levels

Seuraavana työnalla.

### PWA 

Pwa osuus on tehty kokonaan. 

Sovelluksesta löytyy manifest.json tiedosto, josta löytyy metadata for add to homescreen. 
Kaksi itse tehtyä iconia löytyy public kansiosta, ja esim chromen tabissa näkyy tämä hieno iconi. Tsekkaa dev consolesta manifest.json niin näet nämät hienot iconit. 
Tässä vaiheessa ei käytetty static kansiota, koska en käytä next.js:sää projektissani. 

Sovelluksen näkymät lataavat myös vetäessäsi homman offlineen, eli keskeytä komentorivistä ohjelma ja kokeile klikkailla näkymiä. Toimivat ihan ok, react-routerin tarjoaman SPA ominaisuuden takia. 



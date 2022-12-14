<h1 align=center>Vue vjeΕΎba</h1>
<p align=center>VjeΕΎba za Vue 2/3.</p>

## π Opis
Potrebno je napraviti klasiΔnu "to-do" aplikaciju uz pomoΔ Vue gdje korisnik moΕΎe dodati, brisati i ureΔivati svoje dnevne obveze. 

Obavezno je koristiti [Vuetify](https://vuetifyjs.com/en/) za komponente uz Typescript i Vue 2 s `defineComponent` sintaksom. Sve napraviti na branchu `dev`.

## βοΈ Zadaci
- Napraviti jedan view gdje Δe se prikazati popis todo stavki koje korisnik mora obaviti i gdje moΕΎe praviti sve operacije navedene u opisu
- Podaci koji su bitni za stavku:
  - `description` opis stavke
  - `createdAt` datum kad je stvorena stavka, preporuΔljivo u ISO formatu

Stavka bi trebala izgledati nalik ovome (pogledati ostale Vuetify komponente koje bi se mogle koristiti):

```
ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
β   Oprati suΔe                            ββββββββ ββββββββ β
β                                          β done β β edit β β
β   Created 3d ago (4/11/2022 13:00)       ββββββββ ββββββββ β
ββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββββ
```

- Spomenuti view mora imati [Tabs](https://vuetifyjs.com/en/components/tabs/) komponentu kojom Δe se prikazivati ili obavljenje ili neobavljene stavke - tekst tabova mora biti "Active" i "Done"
- SadrΕΎaj tabova moraju biti popisi stavki i svaki tab mora biti jedna definirana ruta unutar vue routera, kao Ε‘to je opisano [ovdje](https://vuetifyjs.com/en/api/v-tab/#props)
- Todo stavke potrebno je Δuvati u localStoragu i pristupati njima pomoΔu [VueX-a](https://vuex.vuejs.org/)
- Stavke je moguΔe pretraΕΎivati uz pomoΔ polja za pretragu koje se treba nalaziti u navigacijskoj traci (prilikom pretraga koristiti debouncing)
- Stavke koje su obavljene moraju imati prekriΕΎeni tekst i nakon prelaska u "gotovo" stanje prikazati ih u tabu "Done"
- Stavke je potrebno dodati uz pomoΔ [dijaloga](https://vuetifyjs.com/en/components/dialogs/) i potrebno je napraviti validaciju sadrΕΎaja koristeΔi [vee-validate](https://vee-validate.logaretm.com/v3/)
- Isti taj dijalog koristiti za ureΔivanje stavki
- Dodati prijevod na aplikaciju uz pomoΔ [i18n](https://kazupon.github.io/vue-i18n/), za engleski i hrvatski jezik te klikom na gumb prebaciti iz jednog u drugo ili obratno
- Napraviti gumb koji Δe obrisati sve stavke i u staviti ih u arhivu - i one koje su done ili active, a nalazi se na navigacijskoj traci
- Napraviti rutu unutar koje Δe se prikazati arhiva stavki, klikom na stavku na tom ekranu vratiti Δe se u svoje pripadno stanje van iz arhive

## π Deployanje
Nakon stvaranja aplikacije, deployati je na [Vercel](https://vercel.com/).

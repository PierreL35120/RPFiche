const PV5 = document.getElementById("PV5");
const anomalie = document.getElementById("anomalie");
const epeeenfer = document.getElementById("epeeenfer");
const epeeenacier = document.getElementById("epeeenacier");
const briselance = document.getElementById("briselance");
const pistoletao = document.getElementById("pistoletao");
const potion = document.getElementById("potion");
const anneausacrificiel = document.getElementById("anneausacrificiel");
const detailItem = document.getElementById("detailItem")
const NomPersonnage = document.getElementById("NomPerso")
const Lune = document.getElementById("Lune")
const Vyke = document.getElementById("Vyke")
const Roberto = document.getElementById("Roberto")
const Klemens = document.getElementById("Klemens")
const Laenery = document.getElementById("Laenery")
const Amalya = document.getElementById("Amalya")
const Marcel = document.getElementById("Marcel")

function anomalieinfo(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>Anomalie</p>
    <p>Effet : L'attaque tape sur la résistance.</p>
    <p>La magie tape sur la défense.</p>
    <p>Si Résistance ennemi > Défense ennemi, inflige +3 dégâts.</p>
    <p>Si Défense ennemi > Résistance ennemi, prends -3 dégâts.</p>`
}

function pv5info(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>PV +5</p>
    <p>Effet : Ajoute 5 PV max.</p>`
}

function epeeenferinfo(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>Épée de Fer</p>
    <p>Dégâts : 6</p>
    <p>Portée : 1</p>
    <p>Durabilité : 50</p>
    <p>Effet : ça coupe</p>
    <p>Rang : E</p>
    <p>Coût : 400 écus</p>`
}

function epeeenacierinfo(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>Épée de Acier</p>
    <p>Dégâts : 8</p>
    <p>Portée : 1</p>
    <p>Durabilité : 40</p>
    <p>Effet : ça coupe</p>
    <p>Rang : D</p>
    <p>Coût : 800 écus</p>`
}

function briselanceinfo(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>Brise Lance</p>
    <p>Dégâts : 9</p>
    <p>Portée : 1</p>
    <p>Durabilité : 35</p>
    <p>Effet : Inverse les effets du triangle des armes.</p>
    <p>Rang : D</p>
    <p>Coût : 1200 écus</p>`
}

function pistoletaoinfo(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>Pistolet à Eau (Tempête)</p>
    <p>Dégâts : 7</p>
    <p>Portée : 1-2</p>
    <p>Durabilité : 9</p>
    <p>Effet : Magie de vent.</p>
    <p>Rang : D</p>
    <p>Coût : 880 écus</p>`
}

function potioninfo(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>Effet : Rends 15 PV.</p>`
}

function anneausacrificielinfo(){
    detailItem.classList.toggle('hide');
    detailItem.innerHTML=`<p>Effet : Ajoute +1 en vitesse.</p>`
}

function endinfo(){
    detailItem.classList.toggle('hide');
}

function NomVide(){
    NomPersonnage.innerText=``
}
function LuneNom(){
    NomPersonnage.innerHTML=`<p class="NomPersonnage">Lune</p>`
}

function RobertoNom(){
    NomPersonnage.innerHTML=`<p class="NomPersonnage">Roberto</p>`
}

function VykeNom(){
    NomPersonnage.innerHTML=`<p class="NomPersonnage">Vyke</p>`
}

function KlemensNom(){
    NomPersonnage.innerHTML=`<p class="NomPersonnage">Klemens</p>`
}

function LaeneryNom(){
    NomPersonnage.innerHTML=`<p class="NomPersonnage">Laenery</p>`
}

function AmalyaNom(){
    NomPersonnage.innerHTML=`<p class="NomPersonnage">Amalya</p>`
}

function MarcelNom(){
    NomPersonnage.innerHTML=`<p class="NomPersonnage">Marcel</p>`
}

anomalie.addEventListener('mouseover', anomalieinfo)
anomalie.addEventListener('mouseleave', endinfo)
PV5.addEventListener('mouseover', pv5info)
PV5.addEventListener('mouseleave', endinfo)
epeeenfer.addEventListener('mouseover', epeeenferinfo)
epeeenfer.addEventListener('mouseleave', endinfo)
epeeenacier.addEventListener('mouseover', epeeenacierinfo)
epeeenacier.addEventListener('mouseleave', endinfo)
briselance.addEventListener('mouseover', briselanceinfo)
briselance.addEventListener('mouseleave', endinfo)
pistoletao.addEventListener('mouseover', pistoletaoinfo)
pistoletao.addEventListener('mouseleave', endinfo)
potion.addEventListener('mouseover', potioninfo)
potion.addEventListener('mouseleave', endinfo)
anneausacrificiel.addEventListener('mouseover', anneausacrificielinfo)
anneausacrificiel.addEventListener('mouseleave', endinfo)
Lune.addEventListener('mouseover', LuneNom)
Lune.addEventListener('mouseout', NomVide)
Roberto.addEventListener('mouseover', RobertoNom)
Roberto.addEventListener('mouseout', NomVide)
Vyke.addEventListener('mouseover', VykeNom)
Vyke.addEventListener('mouseout', NomVide)
Klemens.addEventListener('mouseover', KlemensNom)
Klemens.addEventListener('mouseout', NomVide)
Laenery.addEventListener('mouseover', LaeneryNom)
Laenery.addEventListener('mouseout', NomVide)
Amalya.addEventListener('mouseover', AmalyaNom)
Amalya.addEventListener('mouseout', NomVide)
Marcel.addEventListener('mouseover', MarcelNom)
Marcel.addEventListener('mouseout', NomVide)
const deKleintjes = document.querySelectorAll('.small');
const watWegMoet = document.querySelectorAll('.big');

const alleInfo = [];

for(let i=0; i<watWegMoet.length; i++) {
  alleInfo.push(watWegMoet[i]);

  watWegMoet[i].remove();
}

const maakSluitKnop = document.createElement('i');
maakSluitKnop.className = 'fas fa-times-circle sk';
maakSluitKnop.addEventListener('click', verwijderModaal);

function maakModaal(num) {
  // console.log('geklikt op '+num);
  // console.log(alleInfo[num].innerHTML);
  let modaal = document.createElement('div');
  modaal.id = 'modaal';
  modaal.addEventListener('click', verwijderModaal);
  let modaalInhoud = document.createElement('div');
  modaalInhoud.className = 'modaal-inhoud';
  modaalInhoud.innerHTML = alleInfo[num].innerHTML;
  modaalInhoud.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  modaalInhoud.prepend(maakSluitKnop); 
  modaal.append(modaalInhoud);
  document.body.append(modaal);
}

function verwijderModaal() {
  document.getElementById('modaal').remove();
}

for(let i=0; i<deKleintjes.length; i++) {
  deKleintjes[i].addEventListener('click', function() {
    maakModaal(i)
  });
}

const team = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg',
    }
];

const ul = document.createElement('ul');
document.body.append(ul);

// let card = `<div class="card">
//                 <div class="img"></div>
//                 <h3 class="name"></h3>
//                 <h4 class="role"></h4>
//             </div>`;

for(let i=0; i < team.length; i++){
    // console.log(team[i])
    let card = `<div class="card">
                    <div class="img"></div>
                    <h3 class="name">${i}</h3>
                    <h4 class="role"></h4>
                 </div>`;
    document.querySelector('.row').innerHTML += card
    let allImg = document.querySelectorAll('.img')
    let allName = document.querySelectorAll('.name')
    let allRole = document.querySelectorAll('.role')
    let teamMember = team[i]
    for(let key in teamMember){
        
        // let li = document.createElement('li');
        // ul.append(li);
        console.log(key,teamMember[key])
        if(key == 'img'){
            // li.innerHTML = `<img src="img/${teamMember[key]}">`; 
            allImg[i].innerHTML = `<img src="img/${teamMember[key]}">`; 
        }
        else if(key == 'name'){
            allName[i].innerHTML =  teamMember[key]
            // li.innerHTML = `${key}: ${teamMember[key]}`;  
        }
        else if ( key == 'role'){
            allRole[i].innerHTML = teamMember[key]
        };
    };
};
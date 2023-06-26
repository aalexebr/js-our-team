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
]
const ul = document.createElement('ul');
document.body.append(ul)
for(let i=0; i < team.length; i++){
    // console.log(team[i])
    let teamMember = team[i]
    for(let key in teamMember){

        let li = document.createElement('li');
        ul.append(li)
        if(key == 'img'){
            li.innerHTML = `<img src="img/${teamMember[key]}">`;
            console.log(key,`<img src="img/${teamMember[key]}">`)
        }
        else{
            li.innerHTML = `${key}: ${teamMember[key]}`;
            console.log(key,teamMember[key])
        }
    }
}
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

for(let i=0; i < team.length; i++){
    // console.log(team[i])
    let teamMember = team[i]
    for(let key in teamMember){
        
        if(key == 'img'){
            console.log(key,`<img src="img/${teamMember[key]}">`)
        }
        else{
            console.log(key,teamMember[key])
        }
    }
}
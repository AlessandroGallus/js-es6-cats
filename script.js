$(function(){
    let gatti = [
        {
            name:'Guppy',
            gender:'M',
            eta:'1',
            color:'#B734EB'
        },
        {
            name:'Micio',
            gender:'M',
            eta:'3',
            color:'#CDA434'
        },
        {
            name:'Chicca',
            gender:'F',
            eta:'6',
            color:'#00ff00'
        },
        {
            name:'Birba',
            gender:'F',
            eta:'1',
            color:'#D2691E'
        },
        {
            name:'Leo',
            gender:'M',
            eta:'13',
            color:'#808080'
        },
        {
            name:'Minù',
            gender:'M',
            eta:'F',
            color:'#FFFF00'
        },
        {
            name:'Luna',
            gender:'F',
            eta:'17',
            color:'#FF7F50'
        }    
    ];
    let i=0;
    function generatoreLi(colore, nome){
        console.log(colore, nome)
        let html = 
        `
        <li>
            <i class="fas fa-paw" style ="color:${colore}"></i>
            <span>${nome}</span>
        </li>
        `
        return(html);
    }

    /* const generatoreLi = (colore, nome) =>{
        console.log(colore, nome)
        let html = 
        `
        <li>
            <i class="fas fa-paw" style ="color:${colore}"></i>
            <span>${nome}</span>
        </li>
        `
        return(html);
    } */

    gatti.forEach((gatto) => {
        console.log(generatoreLi(gatti.color, gatti.name));
        console.log(gatto)
    })
})



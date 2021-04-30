$(function(){
    let gatti = [
        {
            name:'Guppy',
            gender:'M',
            eta:'3,5',
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
            eta:'7',
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
            eta:'2',
            color:'#FF7F50'
        }    
    ];

    const pink = '#FFC0CB';
    const blue = '#0000FF';
    
    const nuovi_gatti = (colore_gatto, nome, rosa, blu, genere, opacity) =>{
        let colore_genere = (genere == 'M') ? blu : rosa; 
        let html = 
        `
        <li>
            <i class="fas fa-paw" style ="color:${colore_gatto};"></i>
            <i class="fas fa-certificate" style ="color:${colore_genere}; opacity:${opacity}"></i>
            <span>${nome}</span>
        </li>
        `
        if(genere == 'M'){
            $('#m ul').append(html)
        }else if (genere == 'F'){
            $('#f ul').append(html)
        }
    }

    const generatoreLi = (colore, nome) =>{
        let html = 
        `
        <li>
            <i class="fas fa-paw" style ="color:${colore};"></i>
            <span>${nome}</span>
        </li>
        `
        return(html);
    }

    gatti.forEach((gatto) => {
        let opacity = gatto.eta/10;
        $('#gatti ul').append(generatoreLi(gatto.color, gatto.name))
        nuovi_gatti(gatto.color, gatto.name, pink, blue, gatto.gender, opacity);
        
    })

})



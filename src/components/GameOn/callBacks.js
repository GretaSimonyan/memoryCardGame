import cardImages from './cards';

const pictures = cardImages.slice();
export const generate = function generate(cardsNum) {
    if( cardsNum % 2 !== 0 ) {
        pictures.length = 2;
        alert("Multiple width and height values must be Even number");
    }else{
        pictures.length = cardsNum/2;
    };
    pictures.push(...pictures);

    let c = pictures.map((image,index) => ({
        id: image +" "+ index,
        imageURL: image,
        isFlipped: false,
        canFlip: true
    }));
    return c.sort(()=> Math.random() - 0.5);
};



export const columns = function columns(width){
    let w = '100px 100px'
    for(let i = 1; i <= width-2; i++){
        w += ' 100px'
    }
    return w
};

export const rows = function rows(height){
    let r = '120px 120px'
    for(let i = 1; i <= height-2; i++){
        r += ' 120px'
    }
    return r
};
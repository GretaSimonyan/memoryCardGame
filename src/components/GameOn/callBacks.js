import cardImages from './cards';

const pictures = cardImages.slice();
export const generate = function(cardsNum) {
    pictures.length = cardsNum/2;
    pictures.push(...pictures);

    let c = pictures.map((image,index) => ({
        id: image +" "+ index,
        imageURL: image,
        isFlipped: false,
        canFlip: true
    }));
    return c.sort(()=> Math.random() - 0.5);
};



export const columns = function(width){
    let w = '100px 100px'
    for(let i = 1; i <= width-2; i++){
        w += ' 100px'
    }
    return w
};

export const rows = function(height){
    let r = '120px 120px'
    for(let i = 1; i <= height-2; i++){
        r += ' 120px'
    }
    return r
};
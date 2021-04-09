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
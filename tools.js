console.log('%ctools loaded','color:lime');
const createGrid = (w = 1, h = 1, el = undefined) => {
    let grid = [];
    for (let a = 0; a < h; a++) {
        grid.push([]);
        for (let b = 0; b < w; b++) {
            grid[a].push(el);
        }
    }
    return grid;
}

Array.prototype.loop2d = function (cb = (el, x, y) => { }) {
    for (let a = 0; a < this.length; a++) {
        for (let b = 0; b < this[a].length; b++) {
            cb(this[a][b], b, a);
        }
    }
}

const rotateMatrixClockwise = (matrix) => {
    let mod = [];
    for (let a = 0; a < matrix.length; a++) {
        mod.push([]);
        for (let b = 0; b < matrix[a].length; b++) {
            mod[a].push(undefined);
        }
    }

    for (let a = 0; a < matrix.length; a++) {
        for (let b = 0; b < matrix[a].length; b++) {
            mod[a][b] = matrix[b][a]
        }
    }

    mod.forEach((x, i) => {
        mod[i] = x.reverse();
    })

    return mod;
}

const rotateMatrixAnti = (matrix)=>{
    let g = matrix;
    for (let a=0; a<3; a++) {
        g = rotateMatrixClockwise(g);
    }
    return g;
}

const flipUpDown = (matrix)=>{
    let g = matrix;
    return g.reverse();
}

const flipLeftRight = (matrix)=>{
    let g = matrix;
    g.forEach((x,i)=>{
        g[i] = x.reverse();
    })
    return g;
}

const make2dMatrix = (str)=>{
    let rows = str.split(';');
    let columns = [];
    rows.forEach(x=>{
        columns.push(x.split(':'));
    })
    return columns;
}

const flatten2dMatrix = (matrix)=>{
    let arr = [];
    matrix.forEach(x=>{
        x.forEach(y=>{
            arr.push(y);
        })
    })
    return arr;
}

const maxMatrix = (matrix)=>{
    let arr = flatten2dMatrix(matrix);
    return Math.max(...arr);
}

const minMatrix = (matrix)=>{
    let arr = flatten2dMatrix(matrix);
    return Math.min(...arr);
}

const meanMatrix = (matrix)=>{
    let arr = flatten2dMatrix(matrix);
    let sum = arr.reduce((a,b)=>a+b)
    return sum/arr.length;
}

Array.prototype.last = function() {
    return this[this.length-1];
}

const initCanvas = (id)=>{
    return [document.getElementById(id),document.getElementById(id).getContext('2d')];
}

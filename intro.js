const canvas = document.getElementById("game")
const ctx = canvas.getContext('2d')

const h1Text = document.getElementById("h1-tag")
const startButton = document.getElementById("start-game-button")

const column = [5, 5, 5, 5, 5, 5, 5]
let turn = 2;

const playersTable = [["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],[]];




function tableColumn(positionX) {
  ctx.beginPath();
  ctx.shadowBlur = 5
  ctx.shadowColor = "white"
  ctx.strokeStyle = "white"
  ctx.roundRect(positionX, 100, 0.5, 480, 20)
  ctx.stroke()

  ctx.beginPath();
  ctx.shadowBlur = 5
  ctx.shadowColor = "white"
  ctx.strokeStyle = "white"
  ctx.roundRect(positionX, 100, 0.5, 480, 20)
  ctx.stroke()

  ctx.beginPath();
  ctx.shadowBlur = 5
  ctx.shadowColor = "white"
  ctx.strokeStyle = "white"
  ctx.roundRect(positionX, 100, 0.5, 480, 20)
  ctx.stroke()
}





function triangleBtn(angle1x, angle2x, angle3x) {
    ctx.beginPath();
    ctx.strokeStyle = "#ffff00"
    ctx.lineWidth = 10;
    ctx.shadowBlur = 30
    ctx.shadowColor = "#ffff00"
    ctx.moveTo(angle1x, 610);
    ctx.lineTo(angle2x, 650);
    ctx.lineTo(angle3x, 650);
    ctx.closePath()
    ctx.stroke()
    
    ctx.beginPath();
    ctx.strokeStyle = "#ffff00"
    ctx.lineWidth = 10;
    ctx.shadowBlur = 30
    ctx.shadowColor = "#ffff00"
    ctx.moveTo(angle1x, 610);
    ctx.lineTo(angle2x, 650);
    ctx.lineTo(angle3x, 650);
    ctx.closePath()
    ctx.stroke()
}





function piece(row, column, color) {
    ctx.beginPath();
    ctx.shadowBlur = 30
    ctx.shadowColor = color
    ctx.arc(row, column, 30, 0, Math.PI * 2);
    ctx.lineWidth = 10;
    ctx.strokeStyle = color
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.shadowBlur = 30
    ctx.shadowColor = color
    ctx.arc(row, column, 30, 0, Math.PI * 2);
    ctx.lineWidth = 10;
    ctx.strokeStyle = color
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(row, column, 12, 0, Math.PI * 2);
    ctx.lineWidth = 8;
    ctx.strokeStyle = color
    ctx.stroke()
    ctx.closePath();
}





function player (color, string){
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color
    ctx.font = '70px Alex Brush';
    ctx.fillStyle = color
    ctx.fillText(string, 340, 60);

    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color
    ctx.font = '70px Alex Brush';
    ctx. fillStyle = color
    ctx.fillText(string, 340, 60);

    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color
    ctx.font = '70px Alex Brush';
    ctx. fillStyle = color
    ctx.fillText(string, 340, 60);
    
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color
    ctx.font = '70px Alex Brush';
    ctx. fillStyle = color
    ctx.fillText(string, 340, 60);

    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color
    ctx.font = '70px Alex Brush';
    ctx. fillStyle = color
    ctx.fillText(string, 340, 60);
}





function startGame() {
    h1Text.style.display = "none"

    startButton.style.display = "none"

    canvas.style.marginTop = "25px"
    canvas.style.width = "900px"
    canvas.style.height = "700px"
    canvas.style.visibility = "visible"
    tableColumn(100)
    tableColumn(200)
    tableColumn(300)
    tableColumn(400)
    tableColumn(500)
    tableColumn(600)
    tableColumn(700)
    tableColumn(800)
    
    triangleBtn(150, 125, 175)
    triangleBtn(250, 225, 275)
    triangleBtn(350, 325, 375)
    triangleBtn(450, 425, 475)
    triangleBtn(550, 525, 575)
    triangleBtn(650, 625, 675)
    triangleBtn(750, 725, 775)
    
    player("#FF10F0", "Player 1")
    play()
}





function play(){
    
 

    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        console.log(x , y)
        

        if(x > 110 && x < 190 && y > 600 && y < 670) {                  //column 1
            
            ctx.clearRect(0,0,900,90)
            console.log("Column #1")
            let columnNumber = 1;
            if(turn % 2 === 0) {
                turn ++
                player("cyan", "Player 2")
                addPiece(column[0], 150, "#FF10F0", columnNumber)
                column[0] --;
            } else if (turn % 2 === 1) {
                turn ++
                player("#FF10F0", "Player 1")
                addPiece(column[0], 150, "cyan", columnNumber)
                column[0] --;
            }
            
        } else if(x > 210 && x < 290 && y > 600 && y < 670) {           //column 2
            
            ctx.clearRect(0,0,900,90)
            console.log("Column #2")
            let columnNumber = 2;
            if(turn % 2 === 0) {
                turn ++
                player("cyan", "Player 2")
                addPiece(column[1], 250, "#FF10F0", columnNumber)
                column[1] --;
            } else if (turn % 2 === 1) {
                turn ++
                player("#FF10F0", "Player 1")
                addPiece(column[1], 250, "cyan", columnNumber)
                column[1] --;
            }
            
        } else if(x > 310 && x < 390 && y > 600 && y < 670) {           //column 3
            
            ctx.clearRect(0,0,900,90)
            console.log("Column #3")
            let columnNumber = 3;
            if(turn % 2 === 0) {
                turn ++
                player("cyan", "Player 2")
                addPiece(column[2], 350, "#FF10F0", columnNumber)
                column[2] --;
            } else if (turn % 2 === 1) {
                turn ++
                player("#FF10F0", "Player 1")
                addPiece(column[2], 350, "cyan", columnNumber)
                column[2] --;
            }
            
        } else if(x > 410 && x < 490 && y > 600 && y < 670) {           //column 4
            
            ctx.clearRect(0,0,900,90)
            console.log("Column #4")
            let columnNumber = 4;
            if(turn % 2 === 0) {
                turn ++
                player("cyan", "Player 2")
                addPiece(column[3], 450, "#FF10F0", columnNumber)
                column[3] --;
            } else if (turn % 2 === 1) {
                turn ++
                player("#FF10F0", "Player 1")
                addPiece(column[3], 450, "cyan", columnNumber)
                column[3] --;
            }
            
        } else if(x > 510 && x < 590 && y > 600 && y < 670) {           //column 5
            
            ctx.clearRect(0,0,900,90)
            console.log("Column #5")
            let columnNumber = 5;
            if(turn % 2 === 0) {
                turn ++
                player("cyan", "Player 2")
                addPiece(column[4], 550, "#FF10F0", columnNumber)
                column[4] --;
            } else if (turn % 2 === 1) {
                turn ++
                player("#FF10F0", "Player 1")
                addPiece(column[4], 550, "cyan", columnNumber)
                column[4] --;
            }
            
        } else if(x > 610 && x < 690 && y > 600 && y < 670) {           //column 6
   
            ctx.clearRect(0,0,900,90)
            console.log("Column #6")
            let columnNumber = 6;
            if(turn % 2 === 0) {
                turn ++
                player("cyan", "Player 2")
                addPiece(column[5], 650, "#FF10F0", columnNumber)
                column[5] --;
            } else if (turn % 2 === 1) {
                turn ++
                player("#FF10F0", "Player 1")
                addPiece(column[5], 650, "cyan", columnNumber)
                column[5] --;
            }
            
        } else if(x > 710 && x < 790 && y > 600 && y < 670) {           //column 7
   
            ctx.clearRect(0,0,900,90)
            console.log("Column #7")
            let columnNumber = 7;
            if(turn % 2 === 0) {
                turn ++
                player("cyan", "Player 2")
                addPiece(column[6], 750, "#FF10F0", columnNumber)
                column[6] --;
            } else if (turn % 2 === 1) {
                turn ++
                player("#FF10F0", "Player 1")
                addPiece(column[6], 750, "cyan", columnNumber)
                column[6] --;
            }
        }
    })
}





function addPiece (columnHeight, rowPixelsX, color, columnNumber){
    let columnPixelsY = 0;
    let rowNumber = 0;

    if(columnHeight === 5){
        columnPixelsY = 540;
        rowNumber = 0;
    } else if(columnHeight === 4){
        columnPixelsY = 460;
        rowNumber = 1;
    } else if(columnHeight === 3){
        columnPixelsY = 380;
        rowNumber = 2;
    } else if(columnHeight === 2){
        columnPixelsY = 300;
        rowNumber = 3;
    } else if(columnHeight === 1){
        columnPixelsY = 220;
        rowNumber = 4;
    } else if(columnHeight === 0){
        columnPixelsY = 140;
        rowNumber = 5;
    } else {
        return
    }

    piece(rowPixelsX, columnPixelsY, color)

    if(color === "#FF10F0"){
        playersTable[columnNumber - 1][rowNumber] = "Player 1"
    } else if (color === "cyan"){
        playersTable[columnNumber - 1][rowNumber] = "Player 2"
    }

    checkForWin("Player 1")
    checkForWin("Player 2")

    // for(let i = 0; i < playersTable.length; i++){
    //     for(let j = 0; j < playersTable[i].length; j++){
    //         console.log(i+":", playersTable[i][j])
    //     }
    // }
}





function checkForWin(player){
    for (let i = 0; i < playersTable.length; i++){                                                          //horizontal check
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i+1][j] === player && playersTable[i+2][j] === player && playersTable[i+3][j] === player){
                console.log(player, "Won")
                return true;
            }           
        }
    }
    for (let i = 0; i < playersTable.length; i++){                                                          //vertical check
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i][j+1] === player && playersTable[i][j+2] === player && playersTable[i][j+3] === player){
                console.log(player, "Won")
                return true;
            }           
        }
    }
    for (let i = 0; i < playersTable.length; i++){                                                          //ascending diagonal check
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i+1][j-1] === player && playersTable[i+2][j-2] === player && playersTable[i+3][j-3] === player){
                console.log(player, "Won")
                return true;
            }           
        }
    }
    for (let i = 0; i < playersTable.length; i++){                                                          //descendingDiagonalCheck
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i+1][j+1] === player && playersTable[i+2][j+2] === player && playersTable[i+3][j+3] === player){
                console.log(player, "Won")
                return true;
            }           
        }
    }
}





startButton.addEventListener("click", () => {
    startGame()
})









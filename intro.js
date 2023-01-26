const canvas = document.getElementById("game")
const ctx = canvas.getContext('2d')

const h1Text = document.getElementById("h1-tag")
const startButton = document.getElementById("start-game-button")

let column = [5, 5, 5, 5, 5, 5, 5]
let continuePlaying = true;
let turn = 2;

let playersTable = [[],[],[],[],[],[],[],[]];
let winnerArray = playersTable;





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





function playAgainBtn(){
    setTimeout(function() {
        ctx.clearRect(0, 587, 900, 200)

        ctx.beginPath()
        ctx.strokeStyle = "#ffff00"
        ctx.lineWidth = 5;
        ctx.shadowBlur = 10
        ctx.shadowColor = "#ffff00"
        ctx.roundRect(250, 605, 400, 80, 20)
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = "#ffff00"
        ctx.lineWidth = 5;
        ctx.shadowBlur = 10
        ctx.shadowColor = "#ffff00"
        ctx.roundRect(250, 605, 400, 80, 20)
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = "#ffff00"
        ctx.lineWidth = 5;
        ctx.shadowBlur = 10
        ctx.shadowColor = "#ffff00"
        ctx.roundRect(250, 605, 400, 80, 20)
        ctx.stroke()


        ctx.lineWidth = 0.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffff00"
        ctx.font = '60px Alex Brush';
        ctx.fillStyle = "white"
        ctx.fillText("Play Again", 310, 660);

        ctx.lineWidth = 0.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffff00"
        ctx.font = '60px Alex Brush';
        ctx.fillStyle = "#white"
        ctx.fillText("Play Again", 310, 660);

        ctx.lineWidth = 0.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffff00"
        ctx.font = '60px Alex Brush';
        ctx.fillStyle = "#white"
        ctx.fillText("Play Again", 310, 660);

        ctx.lineWidth = 0.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffff00"
        ctx.font = '60px Alex Brush';
        ctx.fillStyle = "#white"
        ctx.fillText("Play Again", 310, 660);

        ctx.lineWidth = 0.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffff00"
        ctx.font = '60px Alex Brush';
        ctx.fillStyle = "#white"
        ctx.fillText("Play Again", 310, 660); 
    }, 1000)
}





function piece(row, column, color, yMovement) {
    if(row === 150){
        if(column === 540){ctx.clearRect(105, 90, 90, 480)}
        else if(column === 460){ctx.clearRect(105, 90, 90, 395)}
        else if(column === 380){ctx.clearRect(105, 90, 90, 310)}
        else if(column === 300){ctx.clearRect(105, 90, 90, 225)}
        else if(column === 220){ctx.clearRect(105, 90, 90, 150)}
        else if(column === 140){ctx.clearRect(105, 90, 90, 50)}
    } else if(row === 250){
        if(column === 540){ctx.clearRect(205, 90, 90, 480)}
        else if(column === 460){ctx.clearRect(205, 90, 90, 395)}
        else if(column === 380){ctx.clearRect(205, 90, 90, 310)}
        else if(column === 300){ctx.clearRect(205, 90, 90, 225)}
        else if(column === 220){ctx.clearRect(205, 90, 90, 150)}
        else if(column === 140){ctx.clearRect(205, 90, 90, 50)}
    } else if(row === 350){
        if(column === 540){ctx.clearRect(305, 90, 90, 480)}
        else if(column === 460){ctx.clearRect(305, 90, 90, 395)}
        else if(column === 380){ctx.clearRect(305, 90, 90, 310)}
        else if(column === 300){ctx.clearRect(305, 90, 90, 225)}
        else if(column === 220){ctx.clearRect(305, 90, 90, 150)}
        else if(column === 140){ctx.clearRect(305, 90, 90, 50)}
    } else if(row === 450){
        if(column === 540){ctx.clearRect(405, 90, 90, 480)}
        else if(column === 460){ctx.clearRect(405, 90, 90, 395)}
        else if(column === 380){ctx.clearRect(405, 90, 90, 310)}
        else if(column === 300){ctx.clearRect(405, 90, 90, 225)}
        else if(column === 220){ctx.clearRect(405, 90, 90, 150)}
        else if(column === 140){ctx.clearRect(405, 90, 90, 50)}
    } else if(row === 550){
        if(column === 540){ctx.clearRect(505, 90, 90, 480)}
        else if(column === 460){ctx.clearRect(505, 90, 90, 395)}
        else if(column === 380){ctx.clearRect(505, 90, 90, 310)}
        else if(column === 300){ctx.clearRect(505, 90, 90, 225)}
        else if(column === 220){ctx.clearRect(505, 90, 90, 150)}
        else if(column === 140){ctx.clearRect(505, 90, 90, 50)}
    }else if(row === 650){
        if(column === 540){ctx.clearRect(605, 90, 90, 480)}
        else if(column === 460){ctx.clearRect(605, 90, 90, 395)}
        else if(column === 380){ctx.clearRect(605, 90, 90, 310)}
        else if(column === 300){ctx.clearRect(605, 90, 90, 225)}
        else if(column === 220){ctx.clearRect(605, 90, 90, 150)}
        else if(column === 140){ctx.clearRect(605, 90, 90, 50)}
    } else if(row === 750){
        if(column === 540){ctx.clearRect(705, 90, 90, 480)}
        else if(column === 460){ctx.clearRect(705, 90, 90, 395)}
        else if(column === 380){ctx.clearRect(705, 90, 90, 310)}
        else if(column === 300){ctx.clearRect(705, 90, 90, 225)}
        else if(column === 220){ctx.clearRect(705, 90, 90, 150)}
        else if(column === 140){ctx.clearRect(705, 90, 90, 50)}
    }

        ctx.clearRect(0,0,900,90)

        if(color === "#FF10F0"){text("cyan", "Player 2", 340, 60, '90px Alex Brush')}
        else {text("#FF10F0", "Player 1", 340, 60, '90px Alex Brush')}


    if(yMovement > column){
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
    } else {
        ctx.beginPath();
        ctx.shadowBlur = 0
        ctx.arc(row, yMovement, 30, 0, Math.PI * 2);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "grey"
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.shadowBlur = 0
        ctx.arc(row, yMovement, 30, 0, Math.PI * 2);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "grey"
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(row, yMovement, 12, 0, Math.PI * 2);
        ctx.lineWidth = 8;
        ctx.strokeStyle = "grey"
        ctx.stroke()
        ctx.closePath();
    }
}





function text(color, string, xPosition, yPosition, font){
    ctx.lineWidth = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color
    ctx.font = font;
    ctx.fillStyle = "white"
    ctx.fillText(string, xPosition, yPosition);

    ctx.lineWidth = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color
    ctx.font = font;
    ctx.fillStyle = "white"
    ctx.fillText(string, xPosition, yPosition);

    ctx.lineWidth = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color
    ctx.font = font;
    ctx.fillStyle = "white"
    ctx.fillText(string, xPosition, yPosition);
    
    ctx.lineWidth = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color
    ctx.font = font;
    ctx.fillStyle = "white"
    ctx.fillText(string, xPosition, yPosition);

    ctx.lineWidth = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color
    ctx.font = font;
    ctx.fillStyle = "white"
    ctx.fillText(string, xPosition, yPosition);
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
      
    text("#FF10F0", "Player 1", 340, 60, '90px Alex Brush')
    play()
}





function play(){
    
    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if(continuePlaying === true){
            if(x > 110 && x < 190 && y > 600 && y < 670) {                  //column 1
                let columnNumber = 0;

                if(turn % 2 === 0 && column[0] >= 0) {
                    turn ++
                    addPiece(column[0], 150, "#FF10F0", columnNumber)
                    column[0] --;
                } else if (turn % 2 === 1 && column[0] >= 0) {
                    turn ++
                    addPiece(column[0], 150, "cyan", columnNumber)
                    column[0] --;
                }
                
            } else if(x > 210 && x < 290 && y > 600 && y < 670) {           //column 2
                let columnNumber = 1;

                if(turn % 2 === 0 && column[1] >= 0) {
                    turn ++
                    addPiece(column[1], 250, "#FF10F0", columnNumber)
                    column[1] --;
                } else if (turn % 2 === 1 && column[1] >= 0) {
                    turn ++
                    addPiece(column[1], 250, "cyan", columnNumber)
                    column[1] --;
                }
                
            } else if(x > 310 && x < 390 && y > 600 && y < 670) {           //column 3
                let columnNumber = 2;

                if(turn % 2 === 0 && column[2] >= 0) {
                    turn ++
                    addPiece(column[2], 350, "#FF10F0", columnNumber)
                    column[2] --;
                } else if (turn % 2 === 1 && column[2] >= 0) {
                    turn ++
                    addPiece(column[2], 350, "cyan", columnNumber)
                    column[2] --;
                }
                
            } else if(x > 410 && x < 490 && y > 600 && y < 670) {           //column 4
                let columnNumber = 3;

                if(turn % 2 === 0 && column[3] >= 0) {
                    turn ++
                    addPiece(column[3], 450, "#FF10F0", columnNumber)
                    column[3] --;
                } else if (turn % 2 === 1 && column[3] >= 0) {
                    turn ++
                    addPiece(column[3], 450, "cyan", columnNumber)
                    column[3] --;
                }
                
            } else if(x > 510 && x < 590 && y > 600 && y < 670) {           //column 5
                let columnNumber = 4;

                if(turn % 2 === 0 && column[4] >= 0) {
                    turn ++
                    addPiece(column[4], 550, "#FF10F0", columnNumber)
                    column[4] --;
                } else if (turn % 2 === 1 && column[4] >= 0) {
                    turn ++
                    addPiece(column[4], 550, "cyan", columnNumber)
                    column[4] --;
                }
                
            } else if(x > 610 && x < 690 && y > 600 && y < 670) {           //column 6
                let columnNumber = 5;

                if(turn % 2 === 0 && column[5] >= 0) {
                    turn ++
                    addPiece(column[5], 650, "#FF10F0", columnNumber)
                    column[5] --;
                } else if (turn % 2 === 1 && column[5] >= 0) {
                    turn ++
                    addPiece(column[5], 650, "cyan", columnNumber)
                    column[5] --;
                }
                
            } else if(x > 710 && x < 790 && y > 600 && y < 670) {           //column 7
                let columnNumber = 6;

                if(turn % 2 === 0 && column[6] >= 0) {
                    turn ++
                    addPiece(column[6], 750, "#FF10F0", columnNumber)
                    column[6] --;
                } else if (turn % 2 === 1 && column[6] >= 0) {
                    turn ++
                    addPiece(column[6], 750, "cyan", columnNumber)
                    column[6] --;
                }
            }
        } else {
            if(x > 250 && x < 650 && y > 600 && y < 690){
                document.location.reload()
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

    let y = -200;
    const intervalMovement = setInterval(function () {
        y += 50;
        piece(rowPixelsX, columnPixelsY, color, y)
        
        if(y > columnPixelsY){clearInterval(intervalMovement)}

        if(checkForWin("Player 1") === true){
            ctx.clearRect(0,0,900,90)
            continuePlaying = false;
            text("#FF10F0", "Player 1 Wins !", 180, 60, '90px Alex Brush')

            canvas.style.backgroundImage = "url(images/celebrationPink.gif)"
            canvas.style.backgroundSize = "450px 350px"
          
            turnOff(color)
            playAgainBtn()
            
        } else if(checkForWin("Player 2") === true) {
            ctx.clearRect(0,0,900,90)
            continuePlaying = false;
            text("cyan", "Player 2 Wins !", 180, 60, '90px Alex Brush')

            canvas.style.backgroundImage = "url(images/celebrationBlue.gif)"
            canvas.style.backgroundSize = "450px 350px"

            turnOff(color)
            playAgainBtn()
            
        } else if(column[0] === -1 && column[1] === -1 && column[2] === -1 && column[3] === -1 && column[4] === -1 && column[5] === -1 && column[6] === -1){
            ctx.clearRect(0,0,900,90)
            continuePlaying = false;
            text("#ffff00", "Draw !", 330, 65, '90px Alex Brush')

            playAgainBtn()
        }

    }, 50)
    
    
    if(color === "#FF10F0"){
        playersTable[columnNumber][rowNumber] = "Player 1"
    } else if (color === "cyan"){
        playersTable[columnNumber][rowNumber] = "Player 2"
    }

    
}





function turnOff(color){
    let col;
    let row;
    for (let i = 0; i < playersTable.length; i++){                                                          //horizontal check
        for (let j = 0; j < playersTable[i].length; j++){
            if(playersTable[i][j].includes("Player 1") || playersTable[i][j].includes("Player 2")){
                col = j;
                row = i;

                if(row === 6){row = 750}
                if(row === 5){row = 650}
                if(row === 4){row = 550}
                if(row === 3){row = 450}
                if(row === 2){row = 350}
                if(row === 1){row = 250}
                if(row === 0){row = 150}

                if(col === 0){col = 540}
                if(col === 1){col = 460}
                if(col === 2){col = 380}
                if(col === 3){col = 300}
                if(col === 4){col = 220}
                if(col === 5){col = 140}

                ctx.beginPath();
                ctx.shadowBlur = 0
                ctx.shadowColor = "grey"
                ctx.arc(row, col, 30, 0, Math.PI * 2);
                ctx.lineWidth = 10;
                ctx.strokeStyle = "grey"
                ctx.stroke();
                ctx.closePath();
        
                ctx.beginPath();
                ctx.arc(row, col, 12, 0, Math.PI * 2);
                ctx.lineWidth = 8;
                ctx.strokeStyle = "grey"
                ctx.stroke()
                ctx.closePath();
            }
        }
    }
}





function checkForWin(player){
    let winner = "";
    if(player === "Player 1"){winner = "winner player 1"}
    else if(player === "Player 2"){winner = "winner player 2"}
    

    for (let i = 0; i < playersTable.length; i++){                                                          //horizontal check
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i+1][j] === player && playersTable[i+2][j] === player && playersTable[i+3][j] === player){
                winnerArray[i][j] = winner
                winnerArray[i+1][j] = winner
                winnerArray[i+2][j] = winner
                winnerArray[i+3][j] = winner                
            }      
            if (playersTable[i][j] === winner && playersTable[i+1][j] === winner && playersTable[i+2][j] === winner && playersTable[i+3][j] === winner){return true}               
        }
    }
    for (let i = 0; i < playersTable.length; i++){                                                          //vertical check
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i][j+1] === player && playersTable[i][j+2] === player && playersTable[i][j+3] === player){
                winnerArray[i][j] = winner
                winnerArray[i][j+1] = winner
                winnerArray[i][j+2] = winner
                winnerArray[i][j+3] = winner
            }           
            if (playersTable[i][j] === winner && playersTable[i][j+1] === winner && playersTable[i][j+2] === winner && playersTable[i][j+3] === winner){return true;}
        }
    }
    for (let i = 0; i < playersTable.length; i++){                                                          //ascending diagonal check
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i+1][j-1] === player && playersTable[i+2][j-2] === player && playersTable[i+3][j-3] === player){
                winnerArray[i][j] = winner
                winnerArray[i+1][j-1] = winner
                winnerArray[i+2][j-2] = winner
                winnerArray[i+3][j-3] = winner
            }
            if (playersTable[i][j] === winner&& playersTable[i+1][j-1] === winner&& playersTable[i+2][j-2] === winner&& playersTable[i+3][j-3] === winner){return true;}           
        }
    }
    for (let i = 0; i < playersTable.length; i++){                                                          //descendingDiagonalCheck
        for (let j = 0; j < playersTable[i].length; j++){
            if (playersTable[i][j] === player && playersTable[i+1][j+1] === player && playersTable[i+2][j+2] === player && playersTable[i+3][j+3] === player ){
                winnerArray[i][j] = winner
                winnerArray[i+1][j+1] = winner
                winnerArray[i+2][j+2] = winner
                winnerArray[i+3][j+3] = winner
            }
            if (playersTable[i][j] === winner && playersTable[i+1][j+1] === winner && playersTable[i+2][j+2] === winner && playersTable[i+3][j+3] === winner ){return true;}           
        }
    }
}





startButton.addEventListener("click", () => {
    startGame()
})







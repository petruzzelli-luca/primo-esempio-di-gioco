// Crea l'oggetto animato
 // Inizializzazione
 window.onload = function() {
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
  
    loadRunningImages(); // Carica le immagini
    gameLoop(ctx); // Avvia il ciclo di gioco
  };


var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 60,
    height: 60,
    x: 10,
    y: 120,
    imageList: [], // Vettore che conterrà tutte le immagini caricate
    contaFrame: 0, // Tiene conto di quanti frame sono passati
    actualFrame: 0, // Specifica quale frame disegnare
    image: null,  // Immagine corrente
  


    // Metodo per aggiornare la posizione e il frame
    update: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.contaFrame++;
  
      if (this.contaFrame === 50) {
        this.contaFrame = 0;
        this.actualFrame = (this.actualFrame + 1) % this.imageList.length;
        this.image = this.imageList[this.actualFrame];
      }
    },
  
    // Metodo per caricare le immagini
    loadImages: function(running) {
      for (let imgPath of running) {
        var img = new Image(this.width, this.height);
        img.src = imgPath;
        this.imageList.push(img);
      }
      this.image = this.imageList[this.actualFrame]; // Imposta il primo frame
    },
  
    // Metodo per disegnare l'oggetto sul canvas
    draw: function(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Pulisce il canvas
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };
  
  // Funzione per caricare le immagini
  function loadRunningImages() {
    var runningImages = [
      'santasprites/png/Walk (1).png', 
      'santasprites/png/Walk (2).png',
      'santasprites/png/Walk (3).png',
      'santasprites/png/Walk (4).png',
      'santasprites/png/Walk (5).png',
      'santasprites/png/Walk (6).png',
      'santasprites/png/Walk (7).png',
      'santasprites/png/Walk (8).png',
      'santasprites/png/Walk (9).png',
      'santasprites/png/Walk (10).png',
      'santasprites/png/Walk (11).png',
      'santasprites/png/Walk (12).png',
      'santasprites/png/Walk (13).png'
    
    ];
    animatedObject.loadImages(runningImages);
  }
  
  // Funzioni per muovere l'oggetto
  function moveUp() {
    animatedObject.speedY = -5;
  }
  
  function moveLeft() {
    animatedObject.speedX = -5;
  }
  
  function moveRight() {
    animatedObject.speedX = 5;
  }
  
  function moveDown() {
    animatedObject.speedY = 5;
  }
  
  // Funzione per fermare il movimento
  function stopMovement() {
    animatedObject.speedX = 0;
    animatedObject.speedY = 0;
  }
  
  // Ciclo di animazione
  function gameLoop(ctx) {
    animatedObject.update(); // Aggiorna lo stato dell'oggetto
    animatedObject.draw(ctx); // Disegna l'oggetto sul canvas
    requestAnimationFrame(gameLoop); // Continua a chiamare gameLoop
  }
  
 
  
  

  
  
function pegarDia() {
  let dia = new Date().getDate();
  let mes = new Date().getMonth() + 1; // O getMonth retorna o mês como 0 a 11
  return dia + "/" + mes;
}

function executarComando() {
  let diaAtual = pegarDia();
  if (diaAtual === "24/12" || diaAtual === "25/12") {
    window.onload = function () {
      var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
      var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      var snow = [];
      for (var i = 0; i < 40; i++ /*numero de flocos de neve*/) {
        var snowflake = createSnowflake();
        snow.push(snowflake);
      }
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function createSnowflake() {
        var x = getRandomInt(0, WIDTH),
          y = getRandomInt(0, HEIGHT),
          r = getRandomInt(3, 6),
          d = getRandomInt(0, 1) == 0 ? -1 : 1,
          s = getRandomInt(1, 2),
          v = getRandomInt(2, 3);
        return { x: x, y: y, r: r, d: d, s: s, v: v };
      }
      function draw() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#0000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#fff";
        for (var i = 0; i < snow.length; i++) {
          var c = snow[i];
          ctx.beginPath();
          ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI, false);
          ctx.fill();
        }
      }
      function update() {
        for (var i = 0; i < snow.length; i++) {
          var c = snow[i];
          if (c.x + c.ox + c.v > WIDTH) c.d = -1;
          if (c.x + c.ox - c.v < 0) c.d = 1;
          if (c.y + c.s > HEIGHT) c.y = -20;
          c.x += c.d;
          c.y += c.s;
        }
      }
      setInterval(function () {
        update();
        draw();
      }, 1000 / 40);
    };
  }
}

executarComando();

function verificarPeriodoDeFestejos() {
  let dia = new Date().getDate();
  let mes = new Date().getMonth() + 1;

  if ((mes === 12 && dia >= 3 && dia) || (mes === 1 && dia <= 6)) {
    var treeHtml =
      '<div id="christmas-tree" class="christmas-tree">' +
      '<div class="tree">' +
      '<div class="tree-details"></div>' +
      "</div>" +
      '<div class="lights">' +
      '<div class="row-one"></div>' +
      '<div class="row-two"></div>' +
      "</div>" +
      '<div class="balls"></div>' +
      '<div class="star"></div>' +
      '<div class="shadow"></div>' +
      "</div>";

    // Adicionar o código HTML à div com o ID "tree"
    document.getElementById("tree").innerHTML = treeHtml;
  }
}

// Chamar a função para verificar o período de festejos
verificarPeriodoDeFestejos();

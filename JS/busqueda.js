      const f = document.getElementById('form');
      const q = document.getElementById('query');
      const google = 'https://www.google.com/search?q=site%3A+';
      

      function submitted(event) {
        event.preventDefault();
        const url = google + '+' + q.value;
        const win = window.open(url, '_blank');
        win.focus();
      }

      f.addEventListener('submit', submitted);



      const Trending = [
        "Tecnología en 2025",
        "Nuevas tendencias en programación",
        "Avances en la computación cuántica",
        "Los mejores telefonos de 2025",
      ];
  
      function obtenerTendencias() {
        const listaTendencias = document.getElementById('lista-tendencias');
        listaTendencias.innerHTML = '';
        Trending.forEach(tendencia => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `https://www.google.com/search?q=${encodeURIComponent(tendencia)}`;
          a.textContent = tendencia;
          li.appendChild(a);
          listaTendencias.appendChild(li);
        });
      }
  
      obtenerTendencias();

      setInterval(obtenerTendencias, 10000);
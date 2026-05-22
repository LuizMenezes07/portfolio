// ============================================================
//  PORTFOLIO — LUIZ OTÁVIO MENEZES PEREIRA
//  main.js
// ============================================================


// ——— REVEAL ON SCROLL ———
// Aplica a classe "visible" nos elementos .reveal ao entrar na tela

const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ——— TABELA DE COMPETÊNCIAS: animação em cascata + barras ———
// Cada linha entra com delay escalonado e a barra preenche em seguida

const tableObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const rows = document.querySelectorAll('#compTableBody tr');
      rows.forEach((row, i) => {
        setTimeout(() => {
          row.classList.add('visible');
          const bar = row.querySelector('.comp-bar-fill');
          if (bar) {
            const pct = row.dataset.pct;
            setTimeout(() => { bar.style.width = pct + '%'; }, 200);
          }
        }, i * 100);
      });
      tableObserver.disconnect();
    }
  });
}, { threshold: 0.2 });

const tableEl = document.querySelector('.competencies-table-wrapper');
if (tableEl) tableObserver.observe(tableEl);


// ——— LISTA DE CURSOS: animação em cascata ———
// Cada item da lista de cursos entra com delay escalonado

const courseObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = document.querySelectorAll('.course-item');
      items.forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 80);
      });
      courseObserver.disconnect();
    }
  });
}, { threshold: 0.1 });

const courseList = document.getElementById('coursesList');
if (courseList) courseObserver.observe(courseList);

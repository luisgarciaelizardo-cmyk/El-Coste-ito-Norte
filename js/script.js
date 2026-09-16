// ⚠️ Menú de muestra. Reemplaza este arreglo con los platillos y precios reales de Costeñito Saltillo Norte.
const menuData = [
  {
    category: 'Cocteles y Ceviches',
    items: [
      { name: 'Coctel de camarón', desc: 'Camarón fresco, salsa de la casa y aguacate', price: '$--' },
      { name: 'Coctel de pulpo', desc: 'Pulpo cocido a fuego lento en salsa costeña', price: '$--' },
      { name: 'Ceviche de pescado', desc: 'Pescado fresco marinado en limón', price: '$--' },
      { name: 'Vuelve a la vida', desc: 'Mezcla de mariscos, el clásico de la costa', price: '$--' },
    ],
  },
  {
    category: 'Mariscos y Pescados',
    items: [
      { name: 'Jaiba rellena', desc: 'Rellena de mariscos, capeada y frita', price: '$--' },
      { name: 'Filete a la plancha', desc: 'Pescado del día a la plancha con guarnición', price: '$--' },
      { name: 'Camarones a la diabla', desc: 'Picositos, al estilo costeño', price: '$--' },
      { name: 'Mojarra frita', desc: 'Entera, acompañada de arroz y ensalada', price: '$--' },
    ],
  },
  {
    category: 'Antojitos',
    items: [
      { name: 'Tostadas de ceviche', desc: 'Con tostada crujiente y aguacate', price: '$--' },
      { name: 'Empanadas de camarón', desc: 'Fritas, servidas con salsa', price: '$--' },
      { name: 'Papas rellenas de marisco', desc: 'Gratinadas con queso', price: '$--' },
    ],
  },
  {
    category: 'Bebidas',
    items: [
      { name: 'Agua fresca del día', desc: 'Pregunta el sabor disponible', price: '$--' },
      { name: 'Micheladas', desc: 'Estilo costeño, bien preparadas', price: '$--' },
      { name: 'Cerveza', desc: 'Fría y al momento', price: '$--' },
    ],
  },
];

function renderMenu() {
  const tabsEl = document.getElementById('menuTabs');
  const panelsEl = document.getElementById('menuPanels');
  if (!tabsEl || !panelsEl) return;

  menuData.forEach((cat, i) => {
    const tabId = `tab-${i}`;
    const panelId = `panel-${i}`;

    const tab = document.createElement('button');
    tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
    tab.id = tabId;
    tab.type = 'button';
    tab.role = 'tab';
    tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tab.setAttribute('aria-controls', panelId);
    tab.textContent = cat.category;
    tab.addEventListener('click', () => activateTab(i));
    tabsEl.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
    panel.id = panelId;
    panel.role = 'tabpanel';
    panel.setAttribute('aria-labelledby', tabId);

    cat.items.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'menu-item';
      card.innerHTML = `
        <div>
          <div class="menu-item-name">${item.name}</div>
          <div class="menu-item-desc">${item.desc}</div>
        </div>
        <div class="menu-item-price">${item.price}</div>
      `;
      panel.appendChild(card);
    });

    panelsEl.appendChild(panel);
  });
}

function activateTab(index) {
  document.querySelectorAll('.menu-tab').forEach((el, i) => {
    el.classList.toggle('active', i === index);
    el.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
  document.querySelectorAll('.menu-panel').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

function setupNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupNav();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

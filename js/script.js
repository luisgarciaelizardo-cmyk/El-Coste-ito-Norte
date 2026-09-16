// Menú digital de Costeñito Saltillo Norte, tomado de la carta oficial (assets/menu-costenito.pdf).
// tag define el color de acento de la categoría: 'pink' | 'teal' | 'yellow' | 'mint'
const menuData = [
  {
    category: 'Promociones',
    tag: 'pink',
    items: [
      { name: 'Lunes y Martes', desc: 'Tacos y cervezas 2x1. Solo marcas participantes (Tecate o Indio 325ml). Aplican restricciones.', price: '2X1' },
      { name: 'Miércoles', desc: 'Platillos 2x1 en la sección Cocina del Capitán, válido en compra de 2 bebidas (se descuenta el platillo de menor valor). No aplica con otras promociones ni para llevar o a domicilio.', price: '2X1' },
      { name: 'Jueves Cervecero', desc: 'Tinas con 10 cervezas (Tecate o Indio 325ml). Promoción válida con consumo de alimentos.', price: '$199' },
      { name: 'Viernes: niños comen gratis', desc: '1 menú infantil gratis en la compra de 1 platillo de adulto. No válida para llevar, a domicilio, ni con otras promociones.', price: 'Gratis' },
      { name: 'Hora Feliz Costeñito', desc: 'Todos los días de 4 a 7 pm: cervezas, copas y mixología 2x1 (cervezas Tecate e Indio). No acumulable con otro descuento; válida con consumo de alimentos.', price: '2X1' },
      { name: 'Los Cantaritos del Costeñito', desc: 'Para compartir: cantarito de 1 litro o de 7 litros.', price: '$129 / $699' },
    ],
  },
  {
    category: 'Del Mar',
    tag: 'pink',
    items: [
      { name: 'Levanta Muertos 🔥🦀', desc: 'Consomé de camarón + camarón cocido + callo de pescado + porción de aguachile verde + camarón + callo de pescado.', price: '$144' },
      { name: 'Torre-on de Mariscos', desc: 'Camarón cocido y crudo 50g + atún 50g + callos de pescado 50g + aguacate + pepino + cebolla morada + tomate + mango + salsa especial.', price: '$329' },
      { name: 'Sampler Mágico', desc: 'Tostaditas: 2 atún, 2 ceviche de pescado, 2 ceviche de camarón y 2 ceviche de marlín (30g c/u) sobre cama de lechuga.', price: '$154' },
      { name: 'Picadita de Camarón', desc: 'Camarón crudo 60g + camarón cocido 60g + cebolla morada + pepino + limón + salsas + chiltepín.', price: '$199' },
    ],
  },
  {
    category: 'Caliente',
    tag: 'mint',
    items: [
      { name: 'Alambre de Pulpo', desc: 'Pulpo zarandeado mezclado con pimientos y cebolla + queso gratinado + tortillas.', price: '$239' },
      { name: 'Chicharrón de Pescado', desc: 'Pescado frito adobado con salsa chipotle + salsa red hot + cebolla morada + limón + tortillas.', price: '$174' },
      { name: 'Aloz Costeño', desc: 'Arroz frito en soya + camarón 50g + arrachera 30g + verduras + queso crema + aguacate + salsa chipotle.', price: '$154' },
      { name: 'Carnitas de Atún', desc: 'Carnitas de atún 220g + lechuga + guacamole + tomate + tortillas + salsa de molcajete.', price: '$239' },
      { name: 'Pulpo a la Parrilla', desc: 'Pulpo zarandeado al grill 200g + papas gajo + tortillas.', price: '$259' },
      { name: 'Discada Mar y Tierra', desc: 'Arrachera 180g + camarón 180g + tocino 60g + chorizo 30g + salsa de molcajete + queso + cebolla + tomate + tortillas.', price: '$299' },
      { name: 'Bichi', desc: 'Consomé de camarón + camarón cocido + callo de pescado + leche de tigre + cebolla morada + cilantro.', price: '$59' },
    ],
  },
  {
    category: 'Aguachiles',
    tag: 'yellow',
    items: [
      { name: 'Aguachile 4 Mares 🦀🦀🦀', desc: 'Camarones crudos + pulpo + atún + tilapia + pepino + cebolla morada + aguacate, bañado en nuestros 4 aguachiles + chiltepín.', price: '$299' },
      { name: 'Aguachile de Camarón 🦀', desc: 'Camarón crudo + pulpo + cebolla morada + cilantro + tajín + lemon pepper.', price: '$259' },
      { name: 'Aguachile Chiltepín 🦀', desc: 'Camarones crudos 200g + salsa chiltepín + limón + pepino + cebolla morada + chiltepín seco.', price: '$259' },
      { name: 'Aguachile Costero 🦀', desc: 'Tilapia 80g + camarón crudo 50g + camarón cocido 50g + mango + pepino + aguacate + cebolla morada + aguachile especial.', price: '$259' },
    ],
  },
  {
    category: 'Sopas y Caldos',
    tag: 'teal',
    items: [
      { name: 'Sopa de Mariscos 🦀', desc: 'Camarón 70g + pescado 100g + calamar 60g + almeja 40g + mejillón 40g + arroz + pan de ajo + caldo base.', price: '$179' },
      { name: 'Sopa de Camarón 🦀', desc: 'Camarón 120g + verduras + pan de ajo + caldo base.', price: '$144' },
      { name: 'Sopa de Pescado 🦀', desc: 'Filete de tilapia 150g + verduras + pan de ajo + caldo base.', price: '$129' },
      { name: 'Caldo Tlalpeño de Mariscos 🦀', desc: 'Camarón 45g + calamar 55g + pescado 55g + zanahoria + arroz + cebolla + tomate + serrano + queso panela 30g + aguacate + salsa chipotle + crema + pan de ajo.', price: '$179' },
    ],
  },
  {
    category: 'Cócteles',
    tag: 'pink',
    items: [
      { name: 'Camarón', desc: 'Camarón + pepino + cebolla + cilantro + aguacate + salsa preparada.', price: 'Chico $124 · Grande $194' },
      { name: 'Pulpo', desc: 'Pulpo + pepino + cebolla + cilantro + aguacate + salsa preparada.', price: 'Chico $124 · Grande $194' },
      { name: 'Campechano', desc: 'Camarón + pulpo + pepino + cebolla + cilantro + aguacate + salsa preparada.', price: 'Chico $124 · Grande $194' },
    ],
  },
  {
    category: 'Tostadas',
    tag: 'yellow',
    items: [
      { name: 'Ceviche Mixto', desc: 'Tilapia 80g + camarón cocido 40g + tomate + cebolla morada + pepino + aguacate + salsa especial + mayonesa.', price: '$89' },
      { name: 'Tuna Poke ❄️', desc: 'Tostada de harina + salsa ponzu + aguacate + atún + cebollín frito + salsa de soya cítrica.', price: '$89' },
      { name: 'Atún Cubano ❄️', desc: 'Atún fresco 50g + salsa chipotle + aguacate + cebolla morada + salsa de soya cítrica + serrano.', price: '$74' },
      { name: 'Camarones Aguachile 🌶️', desc: 'Camarones crudos 60g + pepino + limón + cebolla morada + salsa aguachile + mayonesa.', price: '$99' },
      { name: 'Mar de Cortés', desc: 'Camarón cocido 50g + pulpo 80g + callo de almeja 20g + tomate + cebolla + cilantro + serrano + salsa mar de cortés + limón + mayonesa.', price: '$119' },
      { name: 'Tostada de Pulpo', desc: 'Salsa chipotle + pulpo 170g + cilantro + cebolla morada + jugo de limón + lemon pepper.', price: '$84' },
      { name: 'Marlin Monroe', desc: 'Marlín 80g + camarón crudo 40g + salsa chiltepín + pepino rallado + aguacate.', price: '$119' },
      { name: 'Ahogada', desc: 'Camarón cocido y crudo 30g c/u + callos de pescado 30g + pepino + cebolla morada + aguacate + clamato picante.', price: '$129' },
      { name: 'Los Cabos', desc: 'Camarón crudo 50g + pulpo 40g + pepino + cebolla morada + tomate + cilantro + salsas especiales.', price: '$99' },
      { name: 'Camaronazo 🦀❄️', desc: 'Mezcla de camarones cocidos, crudos y secos + pulpo + pepino + cebolla morada + aguacate, bañado en aguachile negro.', price: '$129' },
      { name: 'Ceviche de Pescado', desc: 'Ceviche de pescado 120g + aguacate + mayonesa.', price: '$79' },
      { name: 'Ceviche de Camarón', desc: 'Ceviche de camarón 120g + aguacate + mayonesa.', price: '$84' },
    ],
  },
  {
    category: 'Tostadas Gratinadas',
    tag: 'pink',
    items: [
      { name: 'Morgana', desc: 'Pulpo zarandeado en cama de guacamole + cebolla curtida + un toque de cilantro.', price: '$89' },
      { name: 'Chicharrón de Pescado', desc: 'Chicharrón de pescado sobre costra de queso + tostada de maíz + guacamole + pico de gallo.', price: '$89' },
      { name: 'Nana Pancha', desc: 'Camarones al ajillo 60g + frijoles refritos + queso gratinado.', price: '$64' },
    ],
  },
  {
    category: 'Quesitacos',
    tag: 'teal',
    items: [
      { name: 'Quesitaco Marlín', desc: 'Costra de queso + guisado de marlín 30g + cebolla morada.', price: '$52' },
      { name: 'Quesitaco Camarón', desc: 'Costra de queso + camarones al ajillo 30g + cebolla morada.', price: '$52' },
      { name: 'Quesitaco Arrachera', desc: 'Costra de queso + arrachera 30g + cebolla morada.', price: '$52' },
      { name: 'Pulpo Zarandeado', desc: 'Costra de queso + pulpo zarandeado 30g + cebolla morada.', price: '$52' },
    ],
  },
  {
    category: 'Famosos Tacos',
    tag: 'pink',
    items: [
      { name: 'Taco Baja', desc: 'Filete de pescado capeado + col + cebolla morada con habanero + chipotle.', price: '$42' },
      { name: 'Taco Gobernador', desc: 'Queso + camarones salteados con pimientos + cebolla.', price: '$59' },
      { name: 'Quesadilla de Marlín', desc: 'Tortilla a la parrilla + marlín ahumado 90g + queso.', price: '$49' },
      { name: 'Emperador', desc: 'Camarones capeados 2pz 20g + queso + ensalada de repollo + cebolla morada.', price: '$49' },
      { name: 'Diablito', desc: 'Chile jalapeño relleno de camarón 20g + queso crema 15g, capeado.', price: '$52' },
      { name: 'Chileno', desc: 'Salmón a la parrilla 50g + guisado de jamaica + salsa mayo spicy + salsa anguila + cebollín frito.', price: '$56' },
      { name: 'Pulpo Zarandeado', desc: 'Tortilla a la parrilla + pulpo en adobo 60g + queso + salsa zarandeada.', price: '$64' },
      { name: 'Carnitas de Atún', desc: 'Carnitas de atún + guacamole + pico de gallo.', price: '$69' },
      { name: 'Chicharrón de Pescado', desc: 'Costra de queso + chicharrón de pescado + ensalada de col + cebolla morada.', price: '$64' },
      { name: 'Enchilada Costeñito ❄️', desc: 'Guisado de marlín o camarones al ajillo (a elegir) + queso, bañado en salsa de la casa y crema + ajonjolí.', price: '$54' },
      { name: 'Camarón Ranchero ❄️', desc: 'Tortilla de harina + queso + guisado sonora + aguacate + salsa ranchera.', price: '$64' },
      { name: 'Bañado', desc: 'Tortilla de harina + guisado sonora de camarón o arrachera 60g, bañado en salsa de molcajete + queso + crema + aguacate.', price: '$69' },
      { name: 'Azteca', desc: 'Queso + frijoles + camarones 30g + arrachera 30g.', price: '$54' },
      { name: 'Quesadilla Norteña', desc: 'Costra de queso + arrachera 60g + cebolla asada + aguacate + salsa güera.', price: '$59' },
      { name: 'Chilacón', desc: 'Chilaca rellena de queso + camarones fritos 30g.', price: '$59' },
      { name: 'Costra de Camarón', desc: 'Costra de queso + camarones al ajillo 30g + pico citrus + salsa de chipotle + aguacate.', price: '$59' },
      { name: 'Ballena', desc: 'Camarón empanizado relleno de queso crema 30g + lechuga + pico citrus + chipotle.', price: '$69' },
      { name: 'Costeñito', desc: 'Camarones envueltos en tocino y capeados 2pz 60g + queso + frijoles refritos.', price: '$54' },
      { name: 'Chilacónazo', desc: 'Chilaca rellena de queso + arrachera 60g.', price: '$59' },
    ],
  },
  {
    category: 'Cocina del Capitán',
    tag: 'pink',
    items: [
      { name: 'Filete Plancha', desc: 'Filete de pescado 180g + 2 guarniciones.', price: '$184' },
      { name: 'Filete Diabla', desc: 'Filete de pescado + salsa diabla + 2 guarniciones.', price: '$184' },
      { name: 'Filete al Ajillo', desc: 'Salteado con ajo, chile guajillo y chile de árbol + champiñones + cebolla.', price: '$184' },
      { name: 'Filete Empanizado', desc: 'Filete de pescado empanizado + 2 guarniciones.', price: '$184' },
      { name: 'Enchiladas Costeñito ❄️', desc: 'A elegir de camarón, marlín o mixtas, bañadas en salsa de la casa + queso gratinado + crema + ajonjolí.', price: '$174' },
      { name: 'Filete Mojo de Ajo', desc: 'Ajo picado + aceite de oliva + vino blanco.', price: '$189' },
      { name: 'Filete Relleno', desc: 'Filete de pescado 180g + camarones 30g + pulpo 30g + salsa bechamel + queso + 2 guarniciones.', price: '$209' },
      { name: 'Filete Costeñito', desc: 'Filete de pescado 180g + camarones 30g + queso fundido + 2 guarniciones.', price: '$209' },
      { name: 'Filete Pinocho', desc: 'Filete empanizado 180g + marlín 30g + salsa pinocho + queso + 2 guarniciones.', price: '$234' },
      { name: 'Filete Rosarito', desc: 'Filete de pescado 180g + crema de chipotle + tocino + queso gratinado + cebolla + 2 guarniciones.', price: '$199' },
      { name: 'Salmón a la Parrilla', desc: 'Salmón 200g + 2 guarniciones.', price: '$279' },
      { name: 'Camarones al Gusto', desc: 'Camarones 180g a la parrilla, empanizados, en mantequilla, mojo de ajo o al ajillo + 2 guarniciones.', price: '$229' },
      { name: 'Búfalo Burger ❄️', desc: 'Pechuga empanizada bañada en salsa red hot + aderezo ranch + lechuga + tomate + papas francesas.', price: '$174' },
      { name: 'Hamburguesa Costeñito', desc: 'Costras de queso rellenas de camarones fritos 80g + lechuga + tomate + aderezo + papas fritas + jalapeños.', price: '$169' },
      { name: 'Hamburguesa Especial', desc: 'Carne de res 180g + tocino + aguacate + queso + lechuga + tomate + papas fritas + jalapeños.', price: '$169' },
      { name: 'Camarones Super Panchita ❄️', desc: 'Rellenos de queso oaxaca, envueltos en tocino + 2 guarniciones + salsa ranchera.', price: '$254' },
      { name: 'Camarones Rancheros', desc: 'Rellenos de queso oaxaca, envueltos en tocino, bañados en salsa molcajete + 2 guarniciones.', price: '$254' },
      { name: 'Camarones Maizal', desc: 'Camarones 220g rellenos de queso oaxaca + chilaca envueltos en tocino + crema de chipotle + elote + 2 guarniciones.', price: '$254' },
      { name: 'Pescado Frito', desc: 'Pescado entero frito 600 a 700g + 2 guarniciones. Pídelo al ajillo o a la diabla.', price: '$179' },
      { name: 'Arrachera', desc: 'Arrachera 250g + papas a la francesa + chilaca con queso + cebolla asada + tortillas.', price: '$244' },
    ],
  },
  {
    category: 'Pastas y Ensaladas',
    tag: 'teal',
    items: [
      { name: 'Pasta Alfredo con Camarones', desc: 'Camarones 80g + pasta + salsa alfredo + queso parmesano + cilantro.', price: '$159' },
      { name: 'Ensalada César Natural', desc: 'Mezcla de lechugas + parmesano + crutones + aderezo césar.', price: '$109' },
      { name: 'Ensalada César con Salmón', desc: 'Ensalada César con salmón.', price: '$189' },
      { name: 'Ensalada César con Camarón', desc: 'Ensalada César con camarón.', price: '$159' },
    ],
  },
  {
    category: 'Menú Infantil',
    tag: 'yellow',
    items: [
      { name: 'Mini Filete', desc: 'Mini filete de pescado empanizado o a la plancha 90g + papas a la francesa + nieve + agua infantil.', price: '$129' },
      { name: 'Nuggets', desc: 'Nuggets de pollo 6pz + papas a la francesa + nieve + agua infantil.', price: '$129' },
      { name: 'Mini Pizza', desc: 'Pan pita + salsa de tomate + queso + pepperoni + nieve + agua infantil.', price: '$129' },
      { name: 'Papas Gajo', desc: 'Papas gajo fritas 300g.', price: '$84' },
      { name: 'Orden de Papas', desc: 'Papas a la francesa 300g.', price: '$79' },
    ],
  },
  {
    category: 'Postres · La Dulce Deriva',
    tag: 'pink',
    items: [
      { name: 'Cheesecake Tortuga', desc: 'Cubierto de chispas de chocolate + nuez.', price: '$124' },
      { name: 'Canasta Costeñito', desc: 'Buñuelo azucarado + nieve de vainilla + manzana acaramelada + nuez + cajeta.', price: '$99' },
      { name: 'Brownie', desc: 'Brownie caliente + nieve de vainilla + chocolate + nuez.', price: '$124' },
      { name: 'Pastel de Elote', desc: 'Pastel de elote + cajeta + nuez + nieve de vainilla.', price: '$124' },
      { name: 'Pay de Fresas', desc: 'Cheesecake + glaseado de fresa + fresas naturales.', price: '$124' },
      { name: 'Pastel de Chocolate', desc: 'Clásico pastel de chocolate + nieve de vainilla.', price: '$124' },
      { name: 'Milky Way', desc: 'Pastel de chocolate cubierto de buttercream de chocolate + vainilla + nuez.', price: '$124' },
      { name: 'Flan', desc: 'Delicioso flan napolitano.', price: '$109' },
    ],
  },
  {
    category: 'Bebidas',
    tag: 'teal',
    groups: [
      {
        sub: 'Costeñito Cantaritos',
        items: [
          { name: 'Cantarito Costeñito 1 LT', desc: 'Tequila Cuervo + naranja + toronja + limón + fresca + sal.', price: '$129' },
          { name: 'Cantarito Costeñito 7 LT', desc: 'Tequila Cuervo + naranja + toronja + limón + fresca + sal. Para compartir.', price: '$699' },
        ],
      },
      {
        sub: 'Mucha Frescura sin Alcohol (480ml / 1000ml)',
        items: [
          { name: 'Pepino Frozen', desc: 'Pepino + limón + jarabe + sprite + tajín + frappé.', price: '$74 / $99' },
          { name: 'Chamomango', desc: 'Mango + limón + jarabe + chamoy + tajín + frappé.', price: '$74 / $99' },
          { name: 'Limonada Costeñito', desc: 'Limonada + hierbabuena + frappé + sprite.', price: '$74 / $99' },
          { name: 'Coco-Horchata', desc: 'Concentrado de coco + agua de horchata + hielo + coco rallado.', price: '$74 / $99' },
          { name: 'Pica Fresa ❄️', desc: 'Fresa + chamoy + limón + tajín + frappé.', price: '$74 / $99' },
        ],
      },
      {
        sub: 'Bebidas sin Alcohol (vaso / litro / jarra)',
        items: [
          { name: 'Limonada', desc: 'Vaso 480ml · Litro 1000ml · Jarra 1750ml.', price: '$39 / $84 / $159' },
          { name: 'Limonada-Fresa', desc: 'Vaso 480ml · Litro 1000ml · Jarra 1750ml.', price: '$49 / $89 / $164' },
          { name: 'Horchata', desc: 'Vaso 480ml · Litro 1000ml · Jarra 1750ml.', price: '$39 / $84 / $159' },
          { name: 'Jamaica', desc: 'Vaso 480ml · Litro 1000ml · Jarra 1750ml.', price: '$39 / $84 / $159' },
          { name: 'Agua Embotellada 600ml', desc: '', price: '$34' },
          { name: 'Refrescos Varios', desc: '', price: '$40' },
          { name: 'Agua Mineral', desc: '', price: '$40' },
          { name: 'Café Americano', desc: '', price: '$34' },
          { name: 'Expresso', desc: '', price: '$39' },
          { name: 'Capuccino', desc: '', price: '$54' },
          { name: 'Té Caliente', desc: '', price: '$29' },
        ],
      },
    ],
  },
];

function itemCard(item) {
  const card = document.createElement('div');
  card.className = 'menu-item';
  card.innerHTML = `
    <div>
      <div class="menu-item-name">${item.name}</div>
      ${item.desc ? `<div class="menu-item-desc">${item.desc}</div>` : ''}
    </div>
    <div class="menu-item-price">${item.price}</div>
  `;
  return card;
}

function renderMenu() {
  const tabsEl = document.getElementById('menuTabs');
  const panelsEl = document.getElementById('menuPanels');
  if (!tabsEl || !panelsEl) return;

  menuData.forEach((cat, i) => {
    const tabId = `tab-${i}`;
    const panelId = `panel-${i}`;
    const tag = cat.tag || 'teal';

    const tab = document.createElement('button');
    tab.className = `menu-tab tag-${tag}` + (i === 0 ? ' active' : '');
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

    const badge = document.createElement('div');
    badge.className = `menu-panel-badge tag-${tag}`;
    badge.textContent = cat.category;
    panel.appendChild(badge);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    if (cat.groups) {
      cat.groups.forEach((group) => {
        const subhead = document.createElement('h3');
        subhead.className = 'menu-subhead';
        subhead.textContent = group.sub;
        grid.appendChild(subhead);
        const subgrid = document.createElement('div');
        subgrid.className = 'menu-grid';
        group.items.forEach((item) => subgrid.appendChild(itemCard(item)));
        grid.appendChild(subgrid);
      });
    } else {
      cat.items.forEach((item) => grid.appendChild(itemCard(item)));
    }

    panel.appendChild(grid);
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

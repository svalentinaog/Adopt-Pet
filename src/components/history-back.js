export function historyBack(containerSelector, viewName) {
    const container = document.querySelector(containerSelector);

    if (container) {
        // Verificar si ya existe el botón
        if (!document.getElementById('historyBack')) {

            const backButton = document.createElement('button');

            backButton.id = 'historyBack';
            backButton.className = 'back-button';
            backButton.innerHTML = `
                <i class="fa-solid fa-chevron-left"></i> ${viewName ? viewName : ''}
            `;

            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.history.back();
            });

            container.appendChild(backButton);
        } else {
            console.log('El botón "Ir atrás" ya existe en el DOM.');
        }
    } else {
        console.error(`El contenedor '${containerSelector}' no se encuentra.`);
    }
}

export function getViewName() {
    const path = window.location.pathname;

    // Nombres de las Vistas 📌
    const viewNames = {
        '/profile.html': 'Profile',
        '/home.html': 'Home',
        '/create-pet.html': 'Create pet',
        '/create-product.html': 'Create product',
        '/edit-pet.html': 'Edit pet',
        '/edit-product.html': 'Edit product',
        '/pet-detail.html': 'Pet detail',
        '/product-detail.html': 'Pet detail',
        '/shopping-cart.html': 'Shopping Cart',
        '/favorites.html': 'Favorites',
    };

    return viewNames[path] || 'Home';
}
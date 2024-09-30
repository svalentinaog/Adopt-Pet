export function loadLayout() {
    if (!document.querySelector('.nav-container')) {

        const cuerpo = document.querySelector("body");
        const layout = `
        <div class="nav-container">
            <div class="nav">
                <a class="itemNav" href="./home.html">
                    <i class="fa-solid fa-house"></i>
                </a>
                <a class="itemNav" href="./favorites.html">
                    <i class="fa-regular fa-heart"></i>
                </a>
                <a  href="#" class="open-modal itemNav"> 
                    <i class="fa-solid fa-circle-plus"></i>
                </a>
                <a class="itemNav" href="./favorites.html">
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
                <a class="itemNav" href="./favorites.html">
                    <i class="fa-solid fa-user"></i>
                </a>
            </div>
            <div class="non-nav-content">
                ${cuerpo.innerHTML}
            </div>
        </div>
        <!-- Modal oculto inicialmente -->
        <div class="modal-container" style="display: none;">
            <div class="modal">
                <div class="cancel">
                    <button class="close-modal"><i class="fa-solid fa-xmark"></i></button>
                </div> 
                <h2>¿Qué quieres crear?</h2>
                <div class="options-modal">
                <button id="create-product-btn">Add pet <i class="fa-solid fa-volleyball"></i></button>
                <button id="create-pet-btn">Add product <i class="fa-solid fa-paw"></i></button>
                </div>
            </div>
        </div>
        `;

        cuerpo.innerHTML = layout;

        document.querySelector('.open-modal').addEventListener('click', (e) => {
            e.preventDefault(); 
            document.querySelector('.modal-container').style.display = 'flex';
        });

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.querySelector('.modal-container').style.display = 'none';
        });

        document.querySelector('#create-product-btn').addEventListener('click', () => {
            window.location.href = './create-product.html';
        });

        document.querySelector('#create-pet-btn').addEventListener('click', () => {
            window.location.href = './create-form.html';
        });
    }
}

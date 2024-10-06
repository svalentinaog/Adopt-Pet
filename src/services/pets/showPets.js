export const showPets = (containerPets, pets) => {

    containerPets.innerHTML = "";

    pets.forEach(element => {
        const petElement = document.createElement("div");
        petElement.classList.add("cardPet");

        petElement.innerHTML = `
        <div class="detail">
                <div class="user-info">
                    <div class="user-image">
                        <img src="${element.images[0]}" alt="userImage">
                    </div>
                    <div class="user-text">
                        <h3>Nick Factural</h3>
                        <p>pet start shop</p>
                    </div>
                </div>
                <div class="btn-favorite">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="features">
                <div class="pet-image containerImgPet">
                    <img  alt="petImage">
                </div>
                <div class="pet-info">
                    <p class="gender">${element.gender}</p>
                    <p class="breed">${element.breed}</p>
                    <p class="color">${element.eyeColor}</p>
                </div>
            </div>
        `;

        containerPets.appendChild(petElement);
    });
}
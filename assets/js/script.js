
let navMain = document.getElementById('navMain');
let category = document.getElementById('category')
let book = document.getElementsByClassName('book');
let game = document.getElementsByClassName('game');
let dvd = document.getElementsByClassName('DVD');
let show = document.getElementsByClassName('show');
let categoryArray = ['a', 123, 'try'];
let product;

fetch('./assets/json/Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        //Ecoute du clic sur la barre Nav
        navMain.addEventListener('click', event => {
            /** Si le click est fait sur la barre de navigation sur le bouton Livre
            *  ajoute tous éléments contenus dans la class Spectacles dans la section category
            *  ouvre la catégorie livre avec tous ses articles dans la section category
             */
            if (event.target.matches('.book')) {
                category.append(book)
            }
            /** Si le click est fait sur la barre de navigation sur le bouton Jeux
            *  ajoute tous éléments contenus dans la class Spectacles dans la section category
            *  ouvre la catégorie Jeux avec tous ses articles dans la section category
             */

            if (event.target.matches('.game')) {
                category.append(game)
            }
            /** Si le click est fait sur la barre de navigation sur le bouton DVD
             *  ajoute tous éléments contenus dans la class Spectacles dans la section category
             *  ouvre la catégorie DVD avec tous ses articles dans la section category
             */
            if (event.target.matches('.DVD')) {
                category.append(DVD)
            }
            /** Si le click est fait sur la barre de navigation sur le bouton Spectacles
             *  ajoute tous éléments contenus dans la class Spectacles dans la section category
             *  ouvre la catégorie Spectacles avec tous ses articles dans la section category
             */

            if (event.target.matches('.Show')) {
                category.append(show)
            }
        });
>>>>>>> e0b768099e14f1742d010382258dd7f315aeebf7

        fetch("./assets/json/Fnocs.json")
            .then((Fnocs) => Fnocs.json())
            .then((data) => {
                data = data.results;
                console.log(data);

                let main = document.getElementById('all_Category');

                for (let i = 0; i < data.length; i++) {


                    let category = document.createElement('section');
                    category.classList.add("category");
                    main.appendChild(category);

                    let produce = document.createElement('article');
                    produce.classList.add("produce");
                    category.appendChild(produce);

                    let Src_Img = document.createElement('img');
                    Src_Img.src = data[i].Src_Img;
                    Src_Img.classList.add("Src_Img");
                    produce.appendChild(Src_Img);

                    let description = document.createElement('div');
                    description.classList.add("description");
                    produce.appendChild(description);

                    let product_Name = document.createElement('h5');
                    let createTextNode_Name = document.createTextNode(data[i].product_Name);
                    product_Name.classList.add("product_Name");
                    description.appendChild(product_Name);
                    product_Name.appendChild(createTextNode_Name);
                    category.createTextNode = "(data[i].category)";
                    product_Description.createTextNode = "(data[i].product_Description)";
                    product_Name.createTextNode = "(data[i].product_Name)";
                    category.createTextNode = "(data[i].category)";
                }
            })

        let product_Description = document.createElement('p');
        let createTextNode_Description = document.createTextNode(data[i].product_Description);
        product_Description.classList.add("product_Description");
        description.appendChild(product_Description);
        product_Description.appendChild(createTextNode_Description);

        let price_Btn = document.createElement('p');
        let createTextNode_Price = document.createTextNode(data[i].price_Btn);
        price_Btn.classList.add("price_Btn");
        description.appendChild(price_Btn);
        price_Btn.appendChild(createTextNode_Price);

        let add_Btn = document.createElement('button');
        let createTextNode_Btn = document.createTextNode(data[i].add_Btn);
        add_Btn.classList.add("add_Btn");
        description.appendChild(add_Btn);
        add_Btn.appendChild(createTextNode_Btn);

        let identification = document.createElement('id');
        // Element.setAttribute(name, value);
        add_Btn.setAttribute("id", (data[i].id));
        add_Btn.appendChild(identification);

    }
    )

/**Fonction de boucle:
 * pour chaque produit, par exemple le livre "X" puis le livre "Y", va appeler la fonction "makeCategoryLabel"
 * qui permet de créer des éléments et les positionner dans les éléments de classe "product-result"
*/

function displayAllCategoryOfProducts(listOfCategoryOfProducts) {
    result = documentgetElementById('productResult');
    // nom de classe à determiner!
    result.innerHTML = "";

    //console.log(listOfMovies)
    listOfCategoryOfProducts.forEach(product => result.innerHTML += makeCategoryLabel(product))

}

function displayAllCategoryOfProducts(categoryArray) {
    result = document.getElementById('productResult');
    result.innerHTML = "";

    //console.log(listOfMovies)
    categoryArray.forEach(product => result.innerHTML += makeCategoryLabel(product))
}





//Début code Aurelien et Arthur


fetch('Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        for (let i = 0; i < data.results.length; i++)

            if (document.getElementById(i) = data.results[i].id) {
                newBlocForProduct()
            }


    })
//recupere le storage pour verifier si le client na pas deja un panier en cours.
getCartFromStorage();

//si l'utilisateurs clic sur la page, vérifie le clic et démare un "Si". 

document.addEventListener("click", event => {
    if (event.target.matches(".add_Btn")) {

        newBlocForProduct();

    } else {
        console.log("non");
    }
})





/////////////////////////////// ^ Code mis en application ^ ///////////////////////////////////////


//////////////////////////////    v Liste de Function v    ///////////////////////////////////////


//ajoute un produit au tableau cartfnoc
function productToCart() {
    productInList = new Object();
    productInList.price =
        productInList.name =
        product.push(productInList);
}
//envoie des donnees dans le local storage
function FromStorageToCart() {
    localStorage.setItem('cartefnoc', JSON.stringify(cartfnoc));
}
//Recupere les donnees dans le local storage
function getCartFromStorage() {
    cart = JSON.parse(localStorage.getItem("cartfnoc")) || [];
}
//Cree un bloc vide pour accueillir des donnees
function newBlocForProduct(i) {
    let cartRecap = document.getElementById("panier_test");
    let div = document.createElement("div");
    let p = document.createElement("p");

    div.appendChild(p);
    cartRecap.appendChild(div);

}



// Partie Arthur Solo

fetch('Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data = data.results;
        console.log(data);
        localStorage.setItem('produits', JSON.stringify(data));
    })


fetch('Fnocs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data = data.results;
        produits = JSON.parse(localStorage.getItem("produits"));
        console.log(produits);
        let result = 0

        for (let i = 0; i < produits[1].length; i++) {
            if (produits.lenght == 0) {
                console.log("Rien");
            } else if (produits.lenght == 1) {
                console.log(produits.price);
            } else {
                result = produits[i][i].price_Btn + result;
                resulteuro = result + "€"
                console.log(resulteuro);
            }
        }
    })


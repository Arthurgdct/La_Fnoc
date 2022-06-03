let navMain = document.getElementById('navMain');
let category = document.getElementById('category')
let book = document.getElementsByClassName('book');
let game = document.getElementsByClassName('game');
let dvd = document.getElementsByClassName('DVD');
let show = document.getElementsByClassName('show');
let categoryArray = ['a', 123, 'try'];
let product;



//Ecoute du clic sur la barre Nav
navMain.addEventListener('click', event =>{
    /** Si le click est fait sur la barre de navigation sur le bouton Livre
    *  ajoute tous éléments contenus dans la class Spectacles dans la section category
    *  ouvre la catégorie livre avec tous ses articles dans la section category
     */
    if(event.target.matches('.book')){
        category.append(book)
    }
    /** Si le click est fait sur la barre de navigation sur le bouton Jeux
    *  ajoute tous éléments contenus dans la class Spectacles dans la section category
    *  ouvre la catégorie Jeux avec tous ses articles dans la section category
     */

    if (event.target.matches('.game')){
        category.append(game)
    }
    /** Si le click est fait sur la barre de navigation sur le bouton DVD
     *  ajoute tous éléments contenus dans la class Spectacles dans la section category
     *  ouvre la catégorie DVD avec tous ses articles dans la section category
     */
    if(event.target.matches('.DVD')){
        category.append(DVD)
    }
    /** Si le click est fait sur la barre de navigation sur le bouton Spectacles
     *  ajoute tous éléments contenus dans la class Spectacles dans la section category
     *  ouvre la catégorie Spectacles avec tous ses articles dans la section category
     */

    if(event.target.matches('.Show')){
        category.append(show)
    }
});




/**
    * Fonction de création d'une structure d'éléments 
*/
/**
    function makeCategoryLabel(product)
    {
        return `
            <article class="category_Label">
                <img class="Src_Img" src="${product.Src_Img}" alt="photo du produit">
                <h4 class="Product_Name">${escapeHtml(product.Product_Name)}</h2>
                <p>${escapeHtml(product.Description)}<p>
                <span>${product.Price}<span>
            </article>
        `
    }


/** Fonction de boucle:
 * pour chaque produit, par exemple le livre "X" puis le livre "Y", va appeler la fonction "makeCategoryLabel"
 * qui permet de créer des éléments et les positionner dans les éléments de classe "product-result"
*/
/**
function displayAllCategoryOfProducts(listOfCategoryOfProducts)
{
    result = documentgetElementById('productResult');
    // nom de classe à determiner!
    result.innerHTML = "";

    //console.log(listOfMovies)
    listOfCategoryOfProducts.forEach(product => result.innerHTML += makeCategoryLabel(product))

}
*/
function displayAllCategoryOfProducts(categoryArray)
{
    result = document.getElementById('productResult');
    result.innerHTML = "";

    //console.log(listOfMovies)
    categoryArray.forEach(product => result.innerHTML += makeCategoryLabel(product))

}

function makeCategoryLabel(product)
    {
        return `
            <article class="category_Label">
                <p>${product.categoryArray}<p>;
            
            </article>
        `
    }
    console.log(JSON.parse(JSON.stringifyproduct.categoryArray))
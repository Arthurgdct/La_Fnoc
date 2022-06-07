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

fetch("./assets/json/Fnocs.json")
.then((Fnocs)=>Fnocs.json())
.then((data) => {
    data = data.results;
    console.log(data);


    for (let i = 0; i < data.length; i++) {
        
        let main = document.createElement('main');
        let category= document.createElement('section');
        let article = document.createElement('article');
        let Src_Img = document.createElement('img');
        let division = document.createElement('div');
        let product_Name = document.createElement('h3');
        let product_Description = document.createElement('p');
        let price_Btn = document.createElement('button');
        let add_Btn = document.createElement('button');


        main.appendChild(section);
        category.appendChild(article);
        article.appendChild(Src_Img);
        article.appendChild(division);
        division.appendChild(product_Name);
        division.appendChild(product_Description);
        division.appendChild(price_Btn);
        division.appendChild(add_Btn);
        
        Src_Img.src = data[i].Src_Img;
        category.createTextNode = "(data[i].category)";
        product_Description.createTextNode = "(data[i].product_Description)";
        product_Name.createTextNode = "(data[i].product_Name)";
        category.createTextNode = "(data[i].category)";
    }})


/**Fonction de boucle:
 * pour chaque produit, par exemple le livre "X" puis le livre "Y", va appeler la fonction "makeCategoryLabel"
 * qui permet de créer des éléments et les positionner dans les éléments de classe "product-result"
*/

function displayAllCategoryOfProducts(listOfCategoryOfProducts)
{
    result = documentgetElementById('productResult');
    // nom de classe à determiner!
    result.innerHTML = "";

    //console.log(listOfMovies)
    listOfCategoryOfProducts.forEach(product => result.innerHTML += makeCategoryLabel(product))

}

function displayAllCategoryOfProducts(categoryArray)
{
    result = document.getElementById('productResult');
    result.innerHTML = "";

    //console.log(listOfMovies)
    categoryArray.forEach(product => result.innerHTML += makeCategoryLabel(product))}

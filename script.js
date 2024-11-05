const items = [
    { name: 'GARLIC NAAN', image: "images/pexels-chanwalrus-958545.jpg"},
    { name: 'TANDOORI CHICKEN', image: "images/pexels-enginakyurt-2673353.jpg" },
    { name: 'VEG SALAD', image: "images/pexels-ella-olsson-572949-1640775 (1).jpg"},
    { name: 'Crissont', image: "images/pexels-fotios-photos-1393399.jpg" },
    { name: 'Masala dosa', image: "images/pexels-kavya-pothabattula-388296612-28107046.jpg"},
    { name: 'Mutton sheikh kebab', image: "images/pexels-matteoguedia-6920656.jpg"},
    { name: 'Roasted mushroom mutton', image: "images/pexels-ruben-dao-cuentas-239930863-15013889.jpg"},
    { name: 'Fruit SALAD', image: "images/pexels-thepaintedsquare-992822.jpg"},
    { name: 'Fruit crissont', image: "images/h6-img1.jpg"},
    { name: 'Milkcake', image: "images/h6-gallery-img8.jpg"},
    { name: 'Blueberries pralines', image: "images/h6-gallery-img6.jpg"},
    { name: 'Smoky pudding', image: "images/h6-gallery-img5.jpg"}
];

function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    items.forEach(item => {
        if (item.name.toLowerCase().includes(input)) {
            resultsDiv.innerHTML += `
            <div class="item">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            </div>
            `;
        }
    });
}

function del() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").innerHTML = "";
}

del();
searchItems();

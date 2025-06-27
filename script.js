function showDetails(index) {
    const projects = [
        { title: "Indoor Garden Facility", description: "A unique indoor garden environment with a skylight and water feature.", image: "image0.jpg" },
        { title: "Ancient Temple", description: "An immersive ancient temple with torches and obelisk design.", image: "image1.jpg" },
        { title: "Grand Palace", description: "A majestic palace with classical architecture.", image: "image2.jpg" },
        { title: "Courtyard Building", description: "A detailed courtyard with multiple floors and windows.", image: "image3.jpg" },
        { title: "Treasury Department", description: "A government-inspired building with a statue and columns.", image: "image4.jpg" },
        { title: "Cozy Office", description: "A warm office setting with a fireplace and desk.", image: "image5.jpg" },
        { title: "Grand Hall", description: "A luxurious grand hall with chandeliers and stairs.", image: "image6.jpg" },
        { title: "Old Town Square", description: "A historical town square with barrels and characters.", image: "image7.jpg" }
    ];

    const modal = document.getElementById("project-details");
    const detailImage = document.getElementById("detail-image");
    const detailTitle = document.getElementById("detail-title");
    const detailDescription = document.getElementById("detail-description");

    detailImage.src = projects[index].image;
    detailTitle.textContent = projects[index].title;
    detailDescription.textContent = projects[index].description;
    modal.style.display = "block";
}

function closeDetails() {
    const modal = document.getElementById("project-details");
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("project-details");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

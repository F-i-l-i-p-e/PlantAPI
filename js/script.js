// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/F-i-l-i-p-e/PlantAPI/main/plants.json')
      .then(response => response.json())
      .then(plants => {
        const container = document.getElementById('plants-container');
        plants.forEach(plant => {
          const plantCard = document.createElement('div');
          plantCard.className = 'plant-card';
          plantCard.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <h4>${plant.name}</h4>
            <p><strong>Description:</strong> ${plant.description}</p>
            <p><strong>Growing Conditions:</strong> ${plant.growingConditions}</p>
          `;
          container.appendChild(plantCard);
        });
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  });
  
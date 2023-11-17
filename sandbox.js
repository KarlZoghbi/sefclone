const sentenceElement = document.querySelector(".animated-text");
const btn = document.querySelector("#menu-icon");
const popup = document.querySelector('.popup-wraper');
const btnClose = document.querySelector('#delete-icon');
const programs = document.querySelector('.programs');
const types = document.querySelector('.program-types');
const programText = document.querySelector('.porgram-title-text');



document.addEventListener("DOMContentLoaded", function () {
  const sentences = ["Software Engineer", "UI UX DESIGNER?", "DATA ENGINEER?"];

  let currentIndex = 0;
  let offset = 0;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 15;
  const speed = 75;

  const updateSentence = () => {
    sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
  };

  const handleAnimation = () => {
    if (forwards) {
      if (offset >= sentences[currentIndex].length) {
        if (++skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else if (offset === 0) {
      forwards = true;
      currentIndex = (currentIndex + 1) % sentences.length;
    }

    if (skipCount === 0) {
      forwards ? offset++ : offset--;
    }

    updateSentence();
  };

  setInterval(handleAnimation, speed);
});

btn.addEventListener('click', e => {
  popup.style.display = 'block';
})
btnClose.addEventListener('click', e => {
  popup.style.display = 'none';
})


// Function to change the background color every 0.5 seconds
function changeColor() {
  let colors = [
    "rgba(40, 238, 167, 0.73)",
    "rgba(100, 13, 94, 0.73)",
    "rgba(239, 94, 229, 0.73)"
  ]; // Add your desired colors
  let index = 0;
  
  setInterval(function () {
    document.getElementById("main-left").style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 3200); // Change color every 0.5 seconds (500 milliseconds)
}

// Call the function to start changing the color
changeColor();


  // JavaScript code to handle type clicks
  document.addEventListener('DOMContentLoaded', function () {
    // Get all types
    var types = document.querySelectorAll('.types');

    // Add click event listener to each type
    types.forEach(function (type) {
      type.addEventListener('click', function () {
        // Get the type class name
        var typeClass = this.classList[1];

        // Update content based on type
        updateContent(typeClass);

        // Update styles based on type
        updateStyles(typeClass);
      });
    });

    // Function to update content based on type
    function updateContent(type) {
      var programContent = document.getElementsByClassName('program-content');

      // You can update the content dynamically based on the selected type
      // For simplicity, let's update the text content
      switch (type) {
        case 'FCS':
          programContent.innerHTML = '<p>Content for FCS</p>';
          break;
        case 'fsw':
          programContent.innerHTML = '<p>Content for FSW</p>';
          break;
        case 'fsd':
          programContent.innerHTML = '<p>Content for FSD</p>';
          break;
        case 'uix':
          programContent.innerHTML = '<p>Content for UIX</p>';
          break;
        default:
          programContent.innerHTML = '<p>Select a type</p>';
          break;
      }
    }

    // Function to update styles based on type
    function updateStyles(type) {
      // Reset styles for all types
      types.forEach(function (type) {
        type.style.backgroundColor = '#28eea7';
        type.style.color = '#363738';
      });

      // Update styles for the selected type
      switch (type) {
        case 'FCS':
          // Update styles for FCS
          break;
        case 'fsw':
          // Update styles for FSW
          break;
        case 'fsd':
          // Update styles for FSD
          break;
        case 'uix':
          // Update styles for UIX
          break;
        default:
          // Default styles
          break;
      }
    }
  });

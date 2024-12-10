window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Select the title screen image
const image = document.querySelector('[data-acc-text="titleimage"]');

// Animate a subtle zoom-in effect
gsap.to(image, {
  scale: 1.1,                // Slight zoom
  duration: 3,               // Smooth zoom over 3 seconds
  ease: "power1.inOut",      // Smooth easing effect
  repeat: 0,                 // No repetition
});
}

window.Script2 = function()
{
  // Select the title and text entry box elements
const title = document.querySelector('[data-acc-text="course-title"]');
const textBox = document.querySelector('[data-acc-text="text-entry-box"]');

// Ensure initial states (for animation purposes)
gsap.set(title, { opacity: 0, y: 30 }); // Title starts slightly below its final position
gsap.set(textBox, { scale: 0.9, opacity: 0 }); // Text box starts small and hidden

// Animate the title to appear in the middle of the screen
gsap.to(title, {
  opacity: 1,
  y: 0, // Final position (middle of the screen)
  duration: 1.5,
  ease: "power2.out", // Smooth easing effect
  delay: 0.2 // Slight delay to ensure timeline cue point sync
});

// Animate the text box to appear with a single pulse effect
gsap.to(textBox, {
  opacity: 1,
  scale: 1.05, // Slightly larger during the pulse
  duration: 0.8, // Smooth appearance
  ease: "power2.out",
  onComplete: () => {
    // After the pulse, return to its original size
    gsap.to(textBox, {
      scale: 1,
      duration: 0.5,
      ease: "power1.out"
    });
  }
});

}

window.Script3 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="card"]');

// Add hover animation
card.addEventListener('mouseenter', () => {
  gsap.to(card, {
    scale: 1.1,            // Slightly enlarge the card
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
    duration: 0.3,         // Animation duration
    ease: "power1.out"     // Smooth easing effect
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, {
    scale: 1,              // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,         // Animation duration
    ease: "power1.inOut"   // Smooth easing effect
  });
});

}

window.Script4 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="seat-belt"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});


}

window.Script5 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="seat-belt"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});


}

window.Script6 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="emer-exit"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});
}

window.Script7 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="emer-exit"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});
}

window.Script8 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="oxygen-mask"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});

}

window.Script9 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="oxygen-mask"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});

}

window.Script10 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="life-vest"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});

}

window.Script11 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="life-vest"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});

}

window.Script12 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="fire-ext"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});

}

window.Script13 = function()
{
  // Select the card element using ALT text (Accessible Name)
const card = document.querySelector('[data-acc-text="fire-ext"]');

// Function to reset the card to its original state
function resetCard() {
  card.classList.remove('clicked'); // Remove the clicked class
  gsap.to(card, {
    scale: 1,                      // Return to original size
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.inOut"           // Smooth easing effect
  });
}

// Add hover animation
card.addEventListener('mouseenter', () => {
  // Only apply hover effect if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1.1,                    // Slightly enlarge the card
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add a lifted shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.out"             // Smooth easing effect
    });
  }
});

card.addEventListener('mouseleave', () => {
  // Only reset the animation if the card is not clicked
  if (!card.classList.contains('clicked')) {
    gsap.to(card, {
      scale: 1,                      // Return to original size
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Reset shadow
      duration: 0.3,                 // Smooth animation duration
      ease: "power1.inOut"           // Smooth easing effect
    });
  }
});

// Add click animation to keep the popped effect
card.addEventListener('click', () => {
  // Reset other cards if needed (optional if you have multiple cards)
  resetCard();
  card.classList.add('clicked'); // Mark this card as clicked
  gsap.to(card, {
    scale: 1.1,                    // Keep it slightly enlarged
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Keep the lifted shadow
    duration: 0.3,                 // Smooth animation duration
    ease: "power1.out"             // Smooth easing effect
  });
});

// Reset the card if clicked outside (to remove the clicked state)
document.addEventListener('click', (event) => {
  if (!card.contains(event.target)) {
    resetCard(); // Reset the card if the click was outside
  }
});

}

window.Script14 = function()
{
  gsap.fromTo(
  '[data-acc-text="incorrectbadge-c"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="incorrectbadge-c"]', {
        x: "-=15",          // Larger horizontal shake distance
        duration: 0.1,      // Short shake duration
        yoyo: true,         // Makes it oscillate back and forth
        repeat: 5,          // Number of shakes
        ease: "power1.inOut",
      });
    },
  }
);

}

window.Script15 = function()
{
  gsap.fromTo(
  '[data-acc-text="incorrectbadge-b"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="incorrectbadge-b"]', {
        x: "-=15",          // Larger horizontal shake distance
        duration: 0.1,      // Short shake duration
        yoyo: true,         // Makes it oscillate back and forth
        repeat: 5,          // Number of shakes
        ease: "power1.inOut",
      });
    },
  }
);


}

window.Script16 = function()
{
  gsap.fromTo(
  '[data-acc-text="badge-1"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1.1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="badge-1"]', { scale: 1, duration: 0.2 });
    },
  }
);

}

window.Script17 = function()
{
  gsap.fromTo(
  '[data-acc-text="incorrectbadge-c"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="incorrectbadge-c"]', {
        x: "-=15",          // Larger horizontal shake distance
        duration: 0.1,      // Short shake duration
        yoyo: true,         // Makes it oscillate back and forth
        repeat: 5,          // Number of shakes
        ease: "power1.inOut",
      });
    },
  }
);

}

window.Script18 = function()
{
  gsap.fromTo(
  '[data-acc-text="incorrectbadge-b"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="incorrectbadge-b"]', {
        x: "-=15",          // Larger horizontal shake distance
        duration: 0.1,      // Short shake duration
        yoyo: true,         // Makes it oscillate back and forth
        repeat: 5,          // Number of shakes
        ease: "power1.inOut",
      });
    },
  }
);


}

window.Script19 = function()
{
  gsap.fromTo(
  '[data-acc-text="badge-1"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1.1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="badge-1"]', { scale: 1, duration: 0.2 });
    },
  }
);

}

window.Script20 = function()
{
  gsap.fromTo(
  '[data-acc-text="incorrectbadge-c"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="incorrectbadge-c"]', {
        x: "-=15",          // Larger horizontal shake distance
        duration: 0.1,      // Short shake duration
        yoyo: true,         // Makes it oscillate back and forth
        repeat: 5,          // Number of shakes
        ease: "power1.inOut",
      });
    },
  }
);

}

window.Script21 = function()
{
  gsap.fromTo(
  '[data-acc-text="incorrectbadge-b"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="incorrectbadge-b"]', {
        x: "-=15",          // Larger horizontal shake distance
        duration: 0.1,      // Short shake duration
        yoyo: true,         // Makes it oscillate back and forth
        repeat: 5,          // Number of shakes
        ease: "power1.inOut",
      });
    },
  }
);


}

window.Script22 = function()
{
  gsap.fromTo(
  '[data-acc-text="badge-1"]',
  { scale: 0.8, opacity: 0 },
  {
    scale: 1.1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to('[data-acc-text="badge-1"]', { scale: 1, duration: 0.2 });
    },
  }
);

}

};

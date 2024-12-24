window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script7 = function()
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

window.Script8 = function()
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

window.Script9 = function()
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

};

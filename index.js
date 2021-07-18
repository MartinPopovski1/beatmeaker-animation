window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];

    let showBubble = showBubbleAnimation.bind(bubble);



    let showBubbleObject = {
      0: () =>  showBubble( `jumpGreen 1s ease`),
      1: () =>  showBubble( `jumpRed 1s ease`),
      2: () =>  showBubble( `jumpPurple 1s ease`, true),
      3: () =>  showBubble( `jumpYellow 1s ease`),
      4: () =>  showBubble( `jumpBlue 1s ease`),
      5: () =>  showBubble( `jumpTurquoise 1s ease`),
    }

    showBubbleObject[index]();

  };




  // header image animations

  const avatar = document.getElementById("avatar");

document.querySelector("#avatar").addEventListener("click", function() {
  
  avatar.style.animation ='';
  setTimeout(() => {
    avatar.style.animation =' jump 1s ease';
  }, )
  
  

})



function showBubbleAnimation( animationKeyFrame, jumpAvatar) {

  if(jumpAvatar) {
    avatar.style.animation ='';
    setTimeout(() => {
      avatar.style.animation =' shoot 1s ease';
    }, )
  }
 
  this.style.animation = animationKeyFrame;
  this.addEventListener("animationend", function() {
    visual.removeChild(this);
  });
}




});

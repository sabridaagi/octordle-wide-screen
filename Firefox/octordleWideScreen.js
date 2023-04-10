let normalBoards = document.getElementsByClassName("normal-boards")
normalBoards[0].style.maxWidth = "none";
normalBoards[0].style.flexWrap = "nowrap";
normalBoards[0].style.gap = "4px"; 
let adswrapper = document.getElementsByClassName("adswrapper");
for (ad of adswrapper) {
  ad.style.display = "none" 
}
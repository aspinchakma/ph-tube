const musicContainer = document.getElementById("music_container");
const comedyContainer = document.getElementById("comedy_container");
const drawingContainer = document.getElementById("Drawing_container");
const videoAllContainer = document.getElementById("video_all_container");

export function hideSection(id) {
  console.log(id);
  if (id == "all_videos") {
    videoAllContainer.classList.remove("hidden");
    comedyContainer.classList.add("hidden");
    drawingContainer.classList.add("hidden");
    musicContainer.classList.add("hidden");
  }
  if (id == 1001) {
    videoAllContainer.classList.add("hidden");
    comedyContainer.classList.add("hidden");
    drawingContainer.classList.add("hidden");
    musicContainer.classList.remove("hidden");
    musicContainer.classList.add("hidden");
  }
  if (id == 1003) {
    videoAllContainer.classList.add("hidden");
    comedyContainer.classList.remove("hidden");
    drawingContainer.classList.add("hidden");
    musicContainer.classList.add("hidden");
  }
  if (id == 1005) {
    videoAllContainer.classList.add("hidden");
    comedyContainer.classList.add("hidden");
    drawingContainer.classList.remove("hidden");
    musicContainer.classList.add("hidden");
  }
}

export function coloringButton(buttonId) {
  const selectAllButton = document.querySelectorAll(
    "#catagory_container button"
  );
  selectAllButton.forEach((button) => {
    if (buttonId.id == button.id) {
      button.classList.add("clicked_button_bg");
    } else {
      button.classList.remove("clicked_button_bg");
    }
  });
}

import { coloringButton, hideSection } from "./utilites.js";

//  catagories

async function getCatagories() {
  try {
    const url = `https://openapi.programming-hero.com/api/phero-tube/categories`;
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok && data.categories) {
      console.log("problem");
      throw new Error("Server Problem");
    }

    // pass data
    const categories = data.categories;
    showCategories(categories);
  } catch (error) {
    console.log(error);
  }
}
getCatagories();

//  show categories

function showCategories(categories) {
  const buttonContainer = document.getElementById("catagory_container");
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.classList.add("normal_button");
    button.classList.add("mx-1");
    // console.log(category.category_id);
    button.id = category.category_id;
    button.innerText = category.category;
    buttonContainer.appendChild(button);
  });
}

// Load videos

async function getAllVideos() {
  try {
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos`;
    const res = await fetch(url);
    const data = await res.json();
    // error handaling
    if (!res.ok && data.videos) {
      console.log("problem");
      throw new Error("Server Problem");
    }
    const videos = data.videos;
    loadAllVideos(videos);
  } catch (error) {}
}
getAllVideos();

//  load all vidoes

function loadAllVideos(videos) {
  const allVideos = document.getElementById("videos_all");
  videos.forEach((video) => {
    // console.log(video.authors[0]);
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="video_container" onclick="document.getElementById('my_modal_${
      video.video_id
    }').showModal()">
          <div class="card bg-base-100 w-full shadow-xl">
            <figure>
              <img class='h-[200px] object-cover'
                src="${video.thumbnail}"
                alt="Shoes"
              />
            </figure>
            <div class="py-2 px-3 flex gap-2 items-center">
              <div>
                <img class="w-[40px] h-[40px] rounded-full object-cover" src="${
                  video.authors[0].profile_picture
                }" alt="images" />
              </div>
              <div>
                <h2 class="font-bold text-xl">
                 ${video.title}
                </h2>
                <h3 class="text-gray-600 flex items-center">
                  ${video.authors[0].profile_name}
                  ${
                    video.authors[0].verified === true
                      ? `<span
                    ><img class="h-[18px] ml-4" src="/verified.png" alt=""
                  /></span>`
                      : ``
                  }
                  
                </h3>
                <p class="text-gray-600">${video.others.views} views</p>
              </div>
            </div>
          </div>
          <!-- Modal  -->
          <dialog id="my_modal_${video.video_id}" class="modal">
            <div class="modal-box max-w-md">
              <p class="py-4">
                ${video.description}
              </p>
              <p class="py-4">
                Author Name: ${video.authors[0].profile_name}
              </p>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
    `;
    allVideos.appendChild(div);
  });
}
//
document.getElementById("catagory_container").addEventListener("click", (e) => {
  coloringButton(e.target);
  hideSection(e.target.id);
});

//  Music Category Video

async function loadMusicAllVideos() {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/category/1001"
    );
    if (!res.ok) {
      throw new Error("Server Problem");
    }
    const data = await res.json();
    showAllMusicVideos(data.category);
  } catch (error) {
    console.log(error);
  }
}
loadMusicAllVideos();

function showAllMusicVideos(items) {
  const allMusicContainer = document.getElementById("music_child_container");
  items.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="video_container" onclick="document.getElementById('my_modal_11${
      video.video_id
    }').showModal()">
          <div class="card bg-base-100 w-full shadow-xl">
            <figure>
              <img class='h-[200px] object-cover'
                src="${video.thumbnail}"
                alt="Shoes"
              />
            </figure>
            <div class="py-2 px-3 flex gap-2 items-center">
              <div>
                <img class="w-[40px] h-[40px] rounded-full object-cover" src="${
                  video.authors[0].profile_picture
                }" alt="images" />
              </div>
              <div>
                <h2 class="font-bold text-xl">
                 ${video.title}
                </h2>
                <h3 class="text-gray-600 flex items-center">
                  ${video.authors[0].profile_name}
                  ${
                    video.authors[0].verified === true
                      ? `<span
                    ><img class="h-[18px] ml-4" src="/verified.png" alt=""
                  /></span>`
                      : ``
                  }
                  
                </h3>
                <p class="text-gray-600">${video.others.views} views</p>
              </div>
            </div>
          </div>
          <!-- Modal  -->
          <dialog id="my_modal_11${video.video_id}" class="modal">
            <div class="modal-box max-w-md">
              <p class="py-4">
                ${video.description}
              </p>
              <p class="py-4">
                Author Name: ${video.authors[0].profile_name}
              </p>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
    `;
    allMusicContainer.appendChild(div);
  });
}

// Load Comedy Section all videos

async function comedyVideos() {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/category/1003"
    );
    if (!res.ok) {
      throw new Error("Server Problem");
    }

    const data = await res.json();
    showAllComedyVideos(data.category);
  } catch (error) {}
}

comedyVideos();
function showAllComedyVideos(videos) {
  const comedyChildContainer = document.getElementById(
    "comedy_child_container"
  );
  videos.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="video_container" onclick="document.getElementById('my_modal_222${
      video.video_id
    }').showModal()">
          <div class="card bg-base-100 w-full shadow-xl">
            <figure>
              <img class='h-[200px] object-cover'
                src="${video.thumbnail}"
                alt="Shoes"
              />
            </figure>
            <div class="py-2 px-3 flex gap-2 items-center">
              <div>
                <img class="w-[40px] h-[40px] rounded-full object-cover" src="${
                  video.authors[0].profile_picture
                }" alt="images" />
              </div>
              <div>
                <h2 class="font-bold text-xl">
                 ${video.title}
                </h2>
                <h3 class="text-gray-600 flex items-center">
                  ${video.authors[0].profile_name}
                  ${
                    video.authors[0].verified === true
                      ? `<span
                    ><img class="h-[18px] ml-4" src="/verified.png" alt=""
                  /></span>`
                      : ``
                  }
                  
                </h3>
                <p class="text-gray-600">${video.others.views} views</p>
              </div>
            </div>
          </div>
          <!-- Modal  -->
          <dialog id="my_modal_222${video.video_id}" class="modal">
            <div class="modal-box max-w-md">
              <p class="py-4">
                ${video.description}
              </p>
              <p class="py-4">
                Author Name: ${video.authors[0].profile_name}
              </p>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
    `;

    comedyChildContainer.appendChild(div);
  });
}

// load drawing videos

const loadAllDrawingVideos = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/category/1005"
    );
    if (!res.ok) {
      throw new Error("Server Problem");
    }
    const data = await res.json();
    if (!data.category.length) {
      showNoVideos();
    }
  } catch (error) {}
};

loadAllDrawingVideos();

function showNoVideos() {
  const drawiingContainer = document.getElementById("Drawing_container");
  const div = document.createElement("div");

  div.innerHTML = `
<div class="text-center mt-[9%]">
          <img src="/Icon.png" class="mx-auto" alt="" />
          <p class="text-4xl font-bold mt-5">
            Oops!! Sorry, There is no content here.
          </p>
        </div>
`;
  drawiingContainer.appendChild(div);
}

// search field

document.getElementById("searchField").addEventListener("keyup", (e) => {
  const searchText = e.target.value;
  loadDataBySearch(searchText);
});

const loadDataBySearch = async (data) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phero-tube/videos?title=${data}`
    );
    const getData = await res.json();
    showSearchedData(getData.videos, data);
    console.log(getData);
  } catch (error) {}
};

function showSearchedData(data, search) {
  const allCategoriesVideosContainer = document.getElementById(
    "all_categories_video_container"
  );
  allCategoriesVideosContainer.innerHTML = "";
  if (!data.length) {
    allCategoriesVideosContainer.classList.remove("grid");
    allCategoriesVideosContainer.classList.remove("grid-cols-4");
    allCategoriesVideosContainer.classList.remove("gap-5");
    const div = document.createElement("div");
    div.innerHTML = `
<div class="text-center mt-[9%]">
          <img src="/Icon.png" class="mx-auto" alt="" />
          <p class="text-4xl font-bold mt-5">
            Oops!! Sorry, There is no content here.
          </p>
        </div>
`;
    allCategoriesVideosContainer.appendChild(div);
  } else {
    allCategoriesVideosContainer.classList.add("grid");
    allCategoriesVideosContainer.classList.add("grid-cols-4");
    allCategoriesVideosContainer.classList.add("gap-5");
    data.forEach((video) => {
      const div = document.createElement("div");
      div.innerHTML = `
    <div id="video_container" onclick="document.getElementById('my_modal_22233${
      video.video_id
    }').showModal()">
          <div class="card bg-base-100 w-full shadow-xl">
            <figure>
              <img class='h-[200px] object-cover'
                src="${video.thumbnail}"
                alt="Shoes"
              />
            </figure>
            <div class="py-2 px-3 flex gap-2 items-center">
              <div>
                <img class="w-[40px] h-[40px] rounded-full object-cover" src="${
                  video.authors[0].profile_picture
                }" alt="images" />
              </div>
              <div>
                <h2 class="font-bold text-xl">
                 ${video.title}
                </h2>
                <h3 class="text-gray-600 flex items-center">
                  ${video.authors[0].profile_name}
                  ${
                    video.authors[0].verified === true
                      ? `<span
                    ><img class="h-[18px] ml-4" src="/verified.png" alt=""
                  /></span>`
                      : ``
                  }
                  
                </h3>
                <p class="text-gray-600">${video.others.views} views</p>
              </div>
            </div>
          </div>
          <!-- Modal  -->
          <dialog id="my_modal_22233${video.video_id}" class="modal">
            <div class="modal-box max-w-md">
              <p class="py-4">
                ${video.description}
              </p>
              <p class="py-4">
                Author Name: ${video.authors[0].profile_name}
              </p>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
    `;
      allCategoriesVideosContainer.appendChild(div);
    });
  }
}

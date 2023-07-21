import github from "./github.png";
import css from "./tech/css.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";

//works
import leaveTracker1 from "./works/leave-tracker-1.png";
import leaveTracker2 from "./works/leave-tracker-2.png";
import neptuneAdmin from "./works/neptune-admin.png";
import neptuneMobile from "./works/neptune-mobile.png";
import scheduler2 from "./works/scheduler-2.png";
import scheduler1 from "./works/scheduler-1.png";
import scheduler3 from "./works/scheduler-3.png";

export {
  github,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  leaveTracker1,
  leaveTracker2,
  neptuneAdmin,
  neptuneMobile,
  scheduler2,
  scheduler1,
  scheduler3,
};

// async function importAllImages() {
//   const images = {};
//   const imageFiles = require.context('./images', false, /\.(png|jpe?g|svg)$/i);
  
//   for (const key of imageFiles.keys()) {
//     const imageName = key.replace('./', ''); // Remove the './' from the beginning of the key
//     const imageModule = await import(`./images/${imageName}`);
//     images[imageName] = imageModule.default;
//   }

//   return images;
// }

// export default importAllImages;
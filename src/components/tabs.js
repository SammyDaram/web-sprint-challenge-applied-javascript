import axios from "axios";
// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//
const Tabs = (topics) => {
  const topic = document.createElement("div");
  var topicList;
  for (var i = 0; i < topics.length; i++) {
    //topic.appendChild(
    topicList = document.createElement("div");
    topicList.classList.add("tab");
    topicList.textContent = topics[i];
    topic.appendChild(topicList);
  }
  return topic;
};

// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.
//
const tabsAppender = (selector) => {
  const myTabs = document.querySelector(selector);
  //var tabsList = new Array["javaSCript", "BootStrap", "Angular"];
  //var tabsList;

  axios
    .get("http://localhost:5001/api/topics")
    .then((res) => {
      console.log(res.data.topics);
      //tabsList = res.data.topics;
      var topicList;

      res.data.topics.forEach((tab) => {
        topicList = document.createElement("div");
        topicList.classList.add("tab");
        topicList.textContent = tab;

        myTabs.appendChild(topicList);
      });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("IT'S WORKING, IT'S WORKING!");
    });

  // myTabs.appendChild(Tabs(tabsList));
};

export { Tabs, tabsAppender };

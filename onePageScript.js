let universities = {
  0: {
    name: "Multimedia University(MMU), Cyberjaya",
    location: "Cyberjaya",
    link: "https://www.mmu.edu.my/",
    rank: "1744"
  },
  1: {
    name: "Multimedia University(MMU), Johor",
    location: "Johor",
    link: "https://www.mmu.edu.my/",
    rank: "1744"
  },
  2: {
    name: "Multimedia University(MMU), Melaka",
    location: "Melaka",
    link: "https://www.mmu.edu.my/",
    rank: "1744"
  },
  3: {
    name: "Sunway University",
    location: "Selangor",
    link: "https://university.sunway.edu.my/",
    rank: "751"
  },
  4: {
    name: "Taylor’s University",
    location: "Selangor",
    link: "https://college.taylors.edu.my/",
    rank: "511"
  },
  5: {
    name: "Universiti Kebangsaan Malaysia(UKM)",
    location: "Selangor",
    link: "http://www.ukm.my/",
    rank: "160"
  },
  6: {
    name: "Universiti Malaya(UM)",
    location: "Kuala Lumpur",
    link: "https://www.um.edu.my/",
    rank: "70"
  },
}
function toLanding() {
  window.location.href = "landing.html";
}
function toResultPage() {
  document.getElementById("wholeHTML").innerHTML =  `<div>
  <div class="header sticky">
    <header>Uni Search</header>
    <button class="filter_button" href="javascript:void(0)" onclick="toLanding()">Filter</button>
  </div>

  <div class="grids" id="gridsId">
  </div>
</div>`;
}

function addOne(course, mincgpa, minmuet, uni_index) {
  console.log("in addOne function");
  const uni = universities[uni_index];

  if( document.getElementById("gridsId") != null){
    document.getElementById("gridsId").innerHTML += `
    <div class="one_grid">
      <div>`+ course + `</div>
      <div>`+ uni.name + `</div>
      <span><a href="`+ uni.link + `">` + uni.name + `</a></span>
      <span>`+ uni.location + `</span>
      <span>Rank : <span>`+ uni.rank + `</span></span>
      <span>Minimum CGPA : <span>`+ mincgpa + `</span></span>
      <span>Minimum Muet Band : <span>`+ minmuet + `</span></span>
    </div>`;
  }else{
    console.log("it's null!");
  }
}
function display() {
  console.log("I am displayed!");
}
function displayCourses(map) {

  let category = document.getElementById("categories");
  let courses = document.getElementById("coursesList");
  let course = document.getElementById("courses");

  course.value = "";
  console.log("inner html is this! : " + category.value);
  let newInnerHTML = ``;
  for (let temp of map.get(category.value).keys()) {
    newInnerHTML += `<option value="` + temp + `"></option>`;
  }
  courses.innerHTML = newInnerHTML;
}
// below comments are for testing purpose
// console.log("initialise value for saving time");
// let form1 = document.getElementById("filter_form_id");
// let categoryName = form1[0];
// let courseName = form1[1];
// let mincgpa = form1[2];
// let minmuet = form1[3];
// let kl = form1[17];
// let kl2 = form1[10];
// let kl3 = form1[11];
// let kl4 = form1[12];
// let kl5 = form1[4];
// let kl6 = form1[5];
// let kl7 = form1[6];
// let kl8= form1[7];
// let kl9 = form1[8];
// let kl10 = form1[9];
// categoryName.value = "Computer Science & IT";
// courseName.value = "Computer Science";
// mincgpa.value = "2";
// minmuet.value = "1";
// kl.checked = true;
// kl2.checked = true;
// kl3.checked = true;
// kl4.checked = true;
// kl5.checked = true;
// kl6.checked = true;
// kl7.checked = true;
// kl8.checked = true;
// kl9.checked = true;
// kl10.checked = true;

function processForm(map) {

  console.log("start to process form...");
  let form1 = document.getElementById("filter_form_id");
  const categoryName = form1[0].value;
  const courseName = form1[1].value;
  const mincgpa = form1[2].value;
  const minmuet = form1[3].value;
  //object to store all locations selected
  let matchedLocations = {};
  //if above input number change, change the initial value of i
  for (let i = 4; i < form1.length - 1; i++) {
    if (form1[i].checked) {
      const location = form1[i].value;
      console.log(location);
      matchedLocations[location] = location;
      console.log(matchedLocations);
    }
  }
  console.log("Kuala Lumpur is " + matchLocation(matchedLocations, "Kuala Lumpur"));

  //start filtering
  console.log(map);
  console.log(map.get(categoryName));
  console.log(map.get(categoryName).get(courseName));
  console.log(map.get(categoryName).get(courseName).get(0));

  //change page to initialise html element
  toResultPage();
  let courseList = map.get(categoryName).get(courseName);
  let gotResult = false;
  for(let i = 0; i < courseList.size ; i++){
    console.log("one block");
    //b means "block"
    const bmin_cgpa = courseList.get(i).min_cgpa;
    const bmin_muet = courseList.get(i).min_muet;
    const blocation = courseList.get(i).location;
    const buni_index = courseList.get(i).uni_index;
    
    if(bmin_cgpa >= mincgpa && bmin_muet >= minmuet && matchLocation(matchedLocations, blocation)){
      console.log("MATCHHHHH!");
      gotResult = true;
      addOne(courseName,bmin_cgpa,bmin_muet,buni_index);
    }
    // console.log(courseList.get(i).min_cgpa);
    // console.log(courseList.get(i).min_muet);
    // console.log(courseList.get(i).location);
    // console.log(courseList.get(i).uni_index);
  }
  if(!gotResult){
    console.log("No result");
    document.getElementById("gridsId").innerHTML = `<div class="noResult"><p>
    No Result
  </p></div>`;
  }
}

function matchLocation(obj, possibleLocation) {
  console.log("start checking location");
  for (let location in obj){
    console.log("is the block in " + location + "?");
    if (location === possibleLocation) {
      console.log("yes!");
      return true;
    }
  }
  return false;
}

// function prevent(theId, theEvent) {

//   let form1 = document.getElementById(theId);
//   form1.addEventListener(theEvent, function (event) {
//     event.preventDefault();
//   });

// }
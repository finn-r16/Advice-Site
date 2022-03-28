<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC7-20RgqhZrCxy7CbsCPSV6tCzOejnDQA",
    authDomain: "senior-advice.firebaseapp.com",
    projectId: "senior-advice",
    storageBucket: "senior-advice.appspot.com",
    messagingSenderId: "135916424831",
    appId: "1:135916424831:web:5751f155f27d783a7db94a",
    measurementId: "G-CFJJCFMMC4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function makeItBig(){
    document.getElementByClass("sticky").classList.add('enlarge');
}
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var stickyNav = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= stickyNav) {
      navbar.classList.add("stickyNav")
    } else {
      navbar.classList.remove("stickyNav");
    }
  }
</script>

// When the user scrolls the page, execute myFunction

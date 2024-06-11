  document.addEventListener('DOMContentLoaded', function() {
    
    var menuLinks = [
      {text: 'about', href: '/about'},
      {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
      ]},
      {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
      ]},
      {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
      ]},
    ];

    const topMenuEl = document.getElementById('top-menu');
      topMenuEl.style.height = '100%';
      topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
      topMenuEl.classList.add('flex-around');
     
 
   const subMenuEl = document.getElementById("sub-menu");
   subMenuEl.style.height = "100%";
   subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
   subMenuEl.classList.add("flex-around");

    const mainEl = document.querySelector('main');
    mainEl.style.backgroundColor = 'var(--main-bg)';
    mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr');

    menuLinks.forEach(link => {
      const menuItem = document.createElement('a');
      menuItem.href = link.href;
      menuItem.textContent = link.text;
      topMenuEl.appendChild(menuItem);
    });
    subMenuEl.style.position = 'absolute';

    
    subMenuEl.style.top = '0';


var topMenuLinks = topMenuEl.querySelectorAll('a');


topMenuEl.addEventListener('click', function(event) {
   
    event.preventDefault();

    
    if (!event.target.matches('a')) {
        return; 
    }

   
    console.log(event.target.textContent);


event.target.classList.toggle('active');

    // Loop through each <a> element in topMenuLinks
    topMenuLinks.forEach(function(link) {
        // Remove the 'active' class from all other <a> elements
        if (link !== event.target) {
            link.classList.remove('active');
        }
    });
  

   // Check if the clicked <a> element is now active
   if (event.target.classList.contains('active')) {
    // If the clicked <a> element's link object has subLinks property
    if (menuLinks[event.target.dataset.id].subLinks) {
        // Set the CSS top property of subMenuEl to 100%
        subMenuEl.style.top = '100%';
    } 
    
} else {
    // If the clicked <a> element is now inactive, hide the submenu
    subMenuEl.style.top = '0';
}

});
function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array
  subLinks.forEach(function(link) {
      // Create an <a> element
      var submenuItem = document.createElement('a');
      
      // Adding href to  <a> element
      submenuItem.setAttribute('href', link.href);
      
      // Set the element's content to the value of the text property of the "link" object
      submenuItem.textContent = link.text;

      
      subMenuEl.appendChild(submenuItem);
  });
  // Attach delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener('click', function(event) {
  // Call preventDefault() method to prevent default action
  event.preventDefault();

  // Check if the clicked element is not an <a> element
  if (!event.target.matches('a')) {
      return; // return immediately
  }

  // Log the content of the <a> element
  console.log(event.target.textContent);

});

}



  });
  
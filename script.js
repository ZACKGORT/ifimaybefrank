const { useState } = React;

const Logo = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return /*#__PURE__*/(
    React.createElement("div", {
      className: `logo hover-shadow float-shadow ${collapsed ? 'collapsed' : ''}`,
      id: "logo",
      onClick: toggleCollapse }, /*#__PURE__*/

    React.createElement("a", { href: "#", "data-page": "reason-and-resolution" }, /*#__PURE__*/
    React.createElement("img", {
      src: "https://i.ibb.co/x5h6J5D/Frankly.png",
      alt: "Logo",
      width: "70",
      height: "40",
      className: "logo-image" }))));




};

const App = () => {
  const [modalData, setModalData] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // Track active tab

  // Define grid data for each tab with at least 4 items per tab
  const tabGridData = [
  // Grid Data for Tab 1
  [
  {
    upperHeadline: "The Ask",
    headline: "Pershing X required a data & design overhaul towards unifying their financial product ecosystem.",
    description: "Description for Welcome to the App Store",
    image: "https://i.ibb.co/FgstGVs/image-441-min.png" },

  {
    upperHeadline: "The Answer",
    headline: "Tech Stack Migration, Data Refactorization, & Design System Documentation.",
    description: "Inside the extraordinary world of Monument Valley 2",
    image: "https://via.placeholder.com/400?text=2" },

  {
    upperHeadline: "The Result",
    headline: "Semi-successful",
    description: "Cheap flights, airline tickets",
    image: "https://via.placeholder.com/400?text=3" },

  {
    upperHeadline: "The Takeaway",
    headline: "Corporate culture sucks.",
    description: "Discover the perfect coffee apps!",
    image: "https://via.placeholder.com/400?text=4" }],



  // Grid Data for Tab 2
  [
  {
    upperHeadline: "The Ask",
    headline: "Brand Activation & Contentful Replatforming for the world's top social media brand.",
    description: "Enhancing content delivery and scalability through a headless CMS architecture tailored for TikTok's business platform.",
    image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*gC_cmPMoCAMgckq051lwZg.png" },

  {
    upperHeadline: "The Answer",
    headline: "An Enhanced B2B Content Strategy & Modern Design System",
    description: "Your personal travel assistant for seamless journeys",
    image: "https://via.placeholder.com/400?text=6" },

  {
    upperHeadline: "The Result",
    headline: "Semi-Successful",
    description: "I wish I could tell you",
    image: "https://via.placeholder.com/400?text=7" },

  {
    upperHeadline: "The Takeaway",
    headline: "A top-heavy organization that's slow to move.",
    description: "Relax with apps designed to reduce stress and anxiety",
    image: "https://via.placeholder.com/400?text=8" }],



  // Grid Data for Tab 3
  [
  {
    upperHeadline: "The Ask",
    headline: "GNC asked us to shake things up; providing them with a modern e-commerce solution.",
    description: "A deep dive into next-gen financial apps",
    image: "https://via.placeholder.com/400?text=9" },

  {
    upperHeadline: "The Answer",
    headline: "We Shopified the sh*t out of GNC's brand.",
    description: "Learn the basics of cryptocurrency apps",
    image: "https://via.placeholder.com/400?text=10" },

  {
    upperHeadline: "The Result",
    headline: "This is the whey",
    description: "Manage your finances with ease",
    image: "https://via.placeholder.com/400?text=11" },

  {
    upperHeadline: "The Takeaway",
    headline: "If the bar ain't bending, you're just pretending",
    description: "Discover the top apps to grow your wealth",
    image: "https://via.placeholder.com/400?text=12" }],



  // Grid Data for Tab 4
  [
  {
    upperHeadline: "The Ask",
    headline: "The Finance of the Future",
    description: "Discover delicious recipes based on ingredients you have",
    image: "https://via.placeholder.com/400?text=13" },

  {
    upperHeadline: "The Answer",
    headline: "Meal Planner",
    description: "Organize your meals and grocery lists effortlessly",
    image: "https://via.placeholder.com/400?text=14" },

  {
    upperHeadline: "The Result",
    headline: "Health Apps",
    description: "Apps designed to improve your well-being",
    image: "https://via.placeholder.com/400?text=15" },

  {
    upperHeadline: "The Takeaway",
    headline: "Mindful Eating",
    description: "Track your meals and build healthier habits",
    image: "https://via.placeholder.com/400?text=16" }]];





  const openModal = data => setModalData(data);
  const closeModal = () => setModalData(null);

  const tabData = [
  { title: "BNY Mellon—Pershing X", content:
    `<h2>Introduction to the App</h2>
      <p>This app allows you to explore the latest in technology, with detailed views of featured apps, collection recommendations, and insights into the future of digital experiences. Our mission is to curate the best apps for all your needs, from productivity to entertainment.</p>
      <p>Whether you're a tech enthusiast, a casual user, or someone in search of useful tools, our selection ensures you have access to only the best.</p>` },

  { title: "TikTok For Business", content:
    `<h2>App Features</h2>
      <ul>
        <li><strong>Curated Collections:</strong> Dive into unique collections of apps that cater to different lifestyles and needs.</li>
        <li><strong>Daily Updates:</strong> Stay informed with daily updates about trending apps, new releases, and developer news.</li>
        <li><strong>Exclusive Offers:</strong> Get exclusive access to app discounts and limited-time deals.</li>
      </ul>
      <p>Our goal is to provide a seamless and intuitive experience for all users. Browse by category, discover new releases, and keep up with the latest in tech!</p>` },

  { title: "GNC {Shopify}", content:
    `<h2>App of the Day</h2>
      <p>Every day, we spotlight a new app that we think you'll love. From productivity tools to games, we highlight apps that provide a unique experience or offer exceptional value.</p>
      <p>Today's featured app is Hitlist – a tool that helps you find the best flight deals for your dream vacation. Plan your next adventure with ease, and get notified when flight prices drop.</p>` },

  { title: "B2B E-Commerce {SalesForce}", content:
    `<h2>Support & FAQs</h2>
      <p>If you have any issues with the app or need help navigating through it, we're here to assist you! Below you'll find answers to the most commonly asked questions:</p>
      <ul>
        <li><strong>How do I create an account?</strong> To create an account, click the "Sign Up" button on the top-right corner of the homepage.</li>
        <li><strong>How can I track app updates?</strong> You can subscribe to our newsletter or follow our social media channels to stay updated on new releases and features.</li>
        <li><strong>Can I suggest an app?</strong> Yes! If you have a suggestion, simply reach out to us via the "Contact Us" page.</li>
      </ul>
      <p>If you need further assistance, please don't hesitate to contact our support team. We're here to help!</p>` }];



  return /*#__PURE__*/(
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/

    React.createElement("div", { className: "header-section" }, /*#__PURE__*/
    React.createElement(Logo, null), " ", /*#__PURE__*/
    React.createElement("h1", { className: "main-title" }, "Hello."), /*#__PURE__*/
    React.createElement("h2", { className: "sub-title" }, "Here are some case studies done quickly."), /*#__PURE__*/
    React.createElement("p", { className: "description" }, "The Ask. The Answer. The Result. The Takeaway. For more, see ", /*#__PURE__*/
    React.createElement("a", { href: "https://reasonandresolution.com/" }, "reasonandresolution.com"), ".")), /*#__PURE__*/




    React.createElement("div", { className: "tabs" },
    tabData.map((tab, index) => /*#__PURE__*/
    React.createElement("div", {
      key: index,
      className: `tab ${activeTab === index ? 'active' : ''}`,
      onClick: () => setActiveTab(index) },

    tab.title))), /*#__PURE__*/





    React.createElement("div", { className: "tab-content" }, /*#__PURE__*/
    React.createElement("div", { dangerouslySetInnerHTML: { __html: tabData[activeTab].content } })), /*#__PURE__*/



    React.createElement("div", { className: "grid-container gc-1" },
    tabGridData[activeTab].slice(0, 2).map((item, index) => /*#__PURE__*/
    React.createElement("div", { key: index, className: "grid", onClick: () => openModal(item) }, /*#__PURE__*/
    React.createElement("div", { className: "upper-headline" }, item.upperHeadline), /*#__PURE__*/
    React.createElement("div", { className: "headline" }, item.headline)))), /*#__PURE__*/





    React.createElement("div", { className: "grid-container gc-2" },
    tabGridData[activeTab].slice(2, 4).map((item, index) => /*#__PURE__*/
    React.createElement("div", { key: index, className: "grid", onClick: () => openModal(item) }, /*#__PURE__*/
    React.createElement("div", { className: "upper-headline" }, item.upperHeadline), /*#__PURE__*/
    React.createElement("div", { className: "headline" }, item.headline)))),






    modalData && /*#__PURE__*/
    React.createElement("div", { className: "modal open", onClick: closeModal }, /*#__PURE__*/
    React.createElement("button", { className: "close", onClick: closeModal }, "\xD7"), /*#__PURE__*/


    React.createElement("img", { src: modalData.image, alt: modalData.headline }), /*#__PURE__*/
    React.createElement("h1", null, modalData.headline), /*#__PURE__*/
    React.createElement("h2", null, modalData.upperHeadline), /*#__PURE__*/
    React.createElement("p", null, modalData.description), " ")));




};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
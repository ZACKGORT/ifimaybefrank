const { useState } = React;
const ReactMarkdown = window.ReactMarkdown; // Make sure ReactMarkdown is available

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
  [
  {
    upperHeadline: "The Ask",
    headline: "Pershing X required a data & design overhaul towards unifying their financial product ecosystem.",
    description: "This is **bold** text.\n\nThis is a new paragraph.",
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


  [
  {
    upperHeadline: "The Ask",
    headline: "B2C/B SalesForce Integrations and Overhauls.",
    description: "Discover delicious recipes based on ingredients you have",
    image: "https://via.placeholder.com/400?text=13" },

  {
    upperHeadline: "The Answer",
    headline: "Modern E-commerce solutions for Aquasana, Hardinge, Simpson Strong-tie, West Marine",
    description: "Organize your meals and grocery lists effortlessly",
    image: "https://via.placeholder.com/400?text=14" },

  {
    upperHeadline: "The Result",
    headline: "Winning",
    description: "Apps designed to improve your well-being",
    image: "https://via.placeholder.com/400?text=15" },

  {
    upperHeadline: "The Takeaway",
    headline: "Small teams > Big Teams",
    description: "Track your meals and build healthier habits",
    image: "https://via.placeholder.com/400?text=16" }]];




  const openModal = data => setModalData(data);
  const closeModal = () => setModalData(null);

  const tabData = [
  { title: "BNY Mellon—Pershing X" },
  { title: "TikTok For Business" },
  { title: "GNC {Shopify}" },
  { title: "B2B E-Commerce {SalesForce}" }];


  const handleModalClick = e => {
    // Prevents closing when clicking inside the modal content
    e.stopPropagation();
  };

  const handleOutsideClick = e => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close modal only when clicking outside of it
    }
  };

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
    React.createElement("div", { className: "modal open", onClick: handleOutsideClick }, /*#__PURE__*/
    React.createElement("div", { className: "modal-content", onClick: handleModalClick }, /*#__PURE__*/
    React.createElement("button", { className: "close", onClick: closeModal }, "\xD7"), /*#__PURE__*/


    React.createElement("img", { src: modalData.image, alt: modalData.headline }), /*#__PURE__*/
    React.createElement("h1", null, modalData.headline), /*#__PURE__*/
    React.createElement("h2", null, modalData.upperHeadline), /*#__PURE__*/

    React.createElement(ReactMarkdown, null, modalData.description)))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

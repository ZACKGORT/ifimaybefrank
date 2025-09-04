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
      src: "https://i.ibb.co/YWBLKfN/Frankly-1.png",
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
    headline: "Pershing X required a total data & design overhaul towards unifying their financial product ecosystem.",
    description: "Through a collaborative multi-track effort, we partnered with the technology teams at Pershing X to deep dive into their product ecosystem with a focus on data architecture and branded design systems. \n\n The work wasn't wow-worthy. The client wasn't expecting spectacle. They wanted smart, carefully considered actionable deliverables to propel them forward.",
    image: "https://i.ibb.co/hRnRByb/wove-advisory-landing-main.png" },

  {
    upperHeadline: "The Answer",
    headline: "Tech stack migration, data refactorization, & design system documentation.",
    description: "Here, I led product discovery sessions, UX and Data Architecture workshops, as well as design-system integrations leveraging React.js and Tailwind. \n\n ",
    image: "https://i.ibb.co/ZW3j6T1/Photo-Selects-Sketch-Prep-1-1-Houghton-Nav.jpg" },

  {
    upperHeadline: "The Result",
    headline: "Setting up for success",
    description: "Now, technically speaking, my official role was as a full-time remote-employ individual contributor, but to lead my team effectively, I opted to bring my collaborative energy to the offices. ",
    image: "https://i.ibb.co/GWbb4pb/image-450-min.png" },

  {
    upperHeadline: "The Takeaway",
    headline: "Elevating my output and influence.",
    description: "At Publicis Sapient, I strove to be a valued contributor and collaborator. In that, I succeeded (making some friends along the way, too) \n\n Unluckily for me, I was part of a sweeping round of layoffs. I would be thrilled to be welcomed back into the hustle-and-bustle where I can continue to make meaningful contributions.",
    image: "https://i.ibb.co/BLvfNRG/image-452-min.png" }],


  [
  {
    upperHeadline: "The Ask",
    headline: "TikTok For Business requested a comprehensive B2B Brand Strategy & Replatforming to Contentful. ",
    description: "From the 62nd floor of the World One Trade Center Tower, we devised a comprehensive content delivery strategy focusing on scalability through a headless CMS architecture tailored for TikTok's business platform.",
    image: "https://i.ibb.co/9qFzTQH/tiktok-proto-gif.gif" },

  {
    upperHeadline: "The Answer",
    headline: "An enhanced B2B content strategy & modern design system",
    description: "Our priority was providing convenient pathways with global and regional reach; add B2C+B2B lead generation, content architecture, and brand activation; all through a modern and accessible design system. ",
    image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*gC_cmPMoCAMgckq051lwZg.png" },

  {
    upperHeadline: "The Result",
    headline: "Code? Yes. Theory? Yes.",
    description: "As its namesake might suggest, research and diligence played a huge role behind our strategic explorations; diving deep into TT4B's analytics and userbase to guide our solutioning.",
    image: "https://i.ibb.co/qdMFmd1/1-Oh-X-z1i-Tuza-Ezs-Lv1-Uz37w.png" },

  {
    upperHeadline: "The Takeaway",
    headline: "Too much code, too much theory.",
    description: "Suffice to say, while the project ultimately was delivered successfully, I'd nay say it was a success.  The design team, the tech team, the strategy team, the excecutive team; all great in their own right, but also admittedely amidst a restructuring phase ... which ultimately showed in the final product.\n\n It was a true learning experience.",
    image: "https://i.ibb.co/yPyHvw2/Screenshot-20230217-101719.png" }],


  [
  {
    upperHeadline: "The Ask",
    headline: "GNC asked us to shake things up; providing them with a modern e-commerce solution.",
    description: "Honestly, this was the best work of my career, working with what I consider to be the most professional and operationally-mature team I've had the joy to work with.\n\n Enter Elva Design Group, a boutique digital design agency specializing in full-spectrum Shopify e-commerce builds.",
    image: "https://i.ibb.co/qFKN21p/image-431-min.png" },

  {
    upperHeadline: "The Answer",
    headline: "We Shopified the sh*p into GNC's brand.",
    description: "We dove deep into GNC's analytics, backed by our expertise with the Shopify platform, and supported by a top-tier design and strategy team. From market research, to Q&Q user data, to wireframe feature prototyping, brought to life via a well-considered e-commerce design system.",
    image: "https://i.ibb.co/fpbcrXp/Frame-4348.png" },

  {
    upperHeadline: "The Result",
    headline: "Heavy lift. Huge Gains.",
    description: "This is the whey — it should go when building a ground-up e-commerce solution. The project wasn't without its challenges, not withstanding a complete re-approach midway through the contract (at risk of contract abandonment). But, where we landed, and what we delivered, helped GNC reclaim over $500m in revenue annually. ",
    image: "https://i.ibb.co/Hrx2Pfy/image-432-min.png" },

  {
    upperHeadline: "The Takeaway",
    headline: "If the bar ain't bending, you're just pretending",
    description: "From market and user research, to concept exploration, to prototyping and design iteration, to implementing proven e-commerce UX, to exploring unproven ideation, to shipping a modular and future-flexible solution for a nationally beloved brand.\n\n\I'm ready for round two!",
    image: "https://i.ibb.co/pbchQFh/dash-gnc-screen.png" }],


  [
  {
    upperHeadline: "The Ask",
    headline: "B2C+B E-Commerce for Aquasana, Hardinge, Simpson Strong-Tie, YETI, West Marine...",
    description: "At LiveArea, we specialized in SalesForce Solutions Architecture, E-commerce Design Systems, Taxonomy & Content Architecture, Q&Q User Research & Data, and Development & Integrations.\n\n  ",
    image: "https://i.ibb.co/0DPv3vQ/Frame-4349.png" },

  {
    upperHeadline: "The Answer",
    headline: "SalesForce Solutions Architecture & Design Systems ",
    description: "You might think we design-folk just spend our days scrutinizing squares and joking about geometry, but ninety-nine percent of our job is actually just sorting through .xlsx tables, and leaving tons of post-it notes everywhere.\n\n I jest, but the reality is, design is only a fraction of what our job is. Design isn't meant to just look nice, but to communicate effectively, especially with folks who don't joke about geometry.",
    image: "https://i.ibb.co/2yJjFNQ/image-426-min.png" },

  {
    upperHeadline: "The Result",
    headline: "Shipped",
    description: "LiveArea had a good template for design ops; we had a deep library to leverage for our builds, which allowed us to focus on key customizations and particularities from our clients. \n\nAs an aside, I just looked up Aquasana, and it's the same as what I shipped 4 years ago; which is to say that my due diligence paired with the right team structure has proven longevity, aka ROI.",
    image: "https://i.ibb.co/kDXnBz5/1-p-XU6-Sp-Y7-Mx-MKiyf-VI-976g.gif" },

  {
    upperHeadline: "The Takeaway",
    headline: "An Elevating Paradigm shift",
    description: "So, the work shown here was all during the COVID crisis, which drastically changed the work environment as it were. This disruption of normal working routines offered me the time and space to dive deep into my work, and elevate my experience and level of contribution.",
    image: "https://i.ibb.co/B6vFwH6/zoom-zack.gif" }]];




  // Add client info for each tab
  const clientInfo = [
  { client: "BNY Mellon — Pershing X vis-à-vis Publicis Sapient", company: "Serving as a Senior UX Designer, IC" },
  { client: "TikTok For Business vis-à-vis Code And Theory", company: "Serving as a ACD, UX" },
  { client: "General Nutrition Centers vis-à-vis Elva Design Group", company: "Serving as a Senior UX Designer, IC" },
  { client: "SalesForce Builds vis-à-vis PFSweb, Livearea", company: "Serving as a UX Manager" }];



  const openModal = data => setModalData(data);
  const closeModal = () => setModalData(null);

  const tabData = [
  { title: "BNY Mellon—Pershing X" },
  { title: "TikTok For Business" },
  { title: "GNC {Shopify}" },
  { title: "B2C & B2B E-Commerce {SalesForce}" }];


  const handleModalClick = e => {
    // Prevents closing when clicking inside the modal content
    e.stopPropagation();
  };

  const handleOutsideClick = e => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close modal only when clicking outside of it
    }
  };


  // Handle ESC key press to close modal
  const handleEscKey = e => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  // Adding the event listener for ESC key
  React.useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);



  return /*#__PURE__*/(
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/

    React.createElement("div", { className: "header-section" }, /*#__PURE__*/
    React.createElement(Logo, null), " ", /*#__PURE__*/
    React.createElement("h1", { className: "main-title" }, "Hello!"), /*#__PURE__*/
    React.createElement("h2", { className: "sub-title" }, "I'm Zack (Sr. UX Designer) but ", /*#__PURE__*/React.createElement("span", { className: "span" }, "if I may be frank:")), /*#__PURE__*/
    React.createElement("p", { className: "description" }, "Here's some of my UX work, condensed conveniently for your consideration. More @ ", /*#__PURE__*/
    React.createElement("a", { href: "https://reasonandresolution.com/" }, /*#__PURE__*/React.createElement("strong", null, "reasonandresolution.com")), ".")), /*#__PURE__*/




    React.createElement("div", { className: "tabs" },
    tabData.map((tab, index) => /*#__PURE__*/
    React.createElement("div", {
      key: index,
      className: `tab ${activeTab === index ? 'active' : ''}`,
      onClick: () => setActiveTab(index) },

    tab.title))), /*#__PURE__*/




    React.createElement("div", { className: "client-info" }, /*#__PURE__*/
    React.createElement("strong", null, "Client:"), " ", clientInfo[activeTab].client, " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
    React.createElement("strong", null, "Role:"), " ", clientInfo[activeTab].company), /*#__PURE__*/





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

    React.createElement(ReactMarkdown, null, modalData.description)))));





};



// Function to highlight the entire text block on hover
function highlightTextOnHover() {
  const grids = document.querySelectorAll('.grid');

  grids.forEach(grid => {
    grid.addEventListener('mouseenter', () => {
      const textElements = grid.querySelectorAll('.content, .headline'); // Exclude .upper-headline

      textElements.forEach(element => {
        // Wrap the entire text content in a span for highlighting
        if (!element.querySelector('.highlighted')) {// Avoid wrapping if already wrapped
          element.innerHTML = `<span class="highlighted">${element.innerHTML}</span>`;
        }
      });
    });

    grid.addEventListener('mouseleave', () => {
      // Remove the highlight by clearing the span tag
      const textElements = grid.querySelectorAll('.content, .headline');

      textElements.forEach(element => {
        const originalText = element.textContent; // Get the raw text content
        element.innerHTML = originalText; // Reset the HTML to original text
      });
    });
  });
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', highlightTextOnHover);


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

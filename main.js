// Project data for modal content
const projectData = {
  'small-space': {
    title: 'DIY Storage Hacks for Small Spaces',
    difficulty: 'Beginner',
    time: '1-3 hours',
    description: 'Maximize every inch of your home with space-saving DIY storage solutions using simple tools and materials.',
    materials: [
      'Wooden crates or boxes',
      'Wall brackets and screws',
      'Measuring tape and pencil',
      'Drill and screwdriver',
      'Hooks, labels, and organizers',
      'Paint or stain (optional)'
    ],
    steps: [
      'Identify cluttered zones and measure available space',
      'Sketch basic shelving or crate designs',
      'Assemble crates or cut boards to fit wall space',
      'Paint or stain materials for a finished look',
      'Install wall brackets and mount storage units',
      'Add hooks or baskets for added functionality'
    ],
    tips: [
      'Measure twice to ensure wall space is used efficiently',
      'Use vertical storage to save floor area',
      'Mix open and closed storage for visual balance',
      'Paint to match your interior style',
      'Use labels for easy organization'
    ]
  },

  'reclaimed-wood': {
    title: 'Reclaimed Wood Furniture DIY',
    difficulty: 'Intermediate',
    time: '4-8 hours',
    description: 'Turn salvaged wood into rustic furniture pieces that add charm and sustainability to your home.',
    materials: [
      'Reclaimed wood planks',
      'Screws, wood glue, nails',
      'Sandpaper and sanding block',
      'Power drill and saw',
      'Stain or paint',
      'Furniture hardware (hinges, handles)'
    ],
    steps: [
      'Select and inspect wood for cracks or nails',
      'Plan dimensions and layout of furniture',
      'Cut, sand, and clean all pieces',
      'Assemble base frame using glue and screws',
      'Stain or paint for desired finish',
      'Install hardware if needed'
    ],
    tips: [
      'Use gloves when handling reclaimed wood',
      'Pre-sand before staining for a smooth finish',
      'Seal wood to prevent future warping',
      'Label each part for easier assembly',
      'Take before/after photos for fun!'
    ]
  },

  'outdoor-lights': {
    title: 'Mason Jar DIY Outdoor Lights',
    difficulty: 'Beginner',
    time: '1-2 hours',
    description: 'Create cozy ambiance with solar-powered or candle-lit mason jar lanterns for your patio or garden.',
    materials: [
      'Mason jars (with lids)',
      'Twine or wire for hanging',
      'Solar light inserts or tealight candles',
      'Glass paint or frosted spray (optional)',
      'Hot glue gun',
      'Pebbles or sand (for weight)'
    ],
    steps: [
      'Clean jars and remove labels',
      'Decorate jars with paint if desired',
      'Insert lighting element inside the jar',
      'Secure lid and attach twine or wire for hanging',
      'Add weight at the bottom using pebbles or sand',
      'Hang in a sunny area or patio'
    ],
    tips: [
      'Use solar lids to avoid wiring',
      'Spray paint for a soft glow effect',
      'Place lights along walkways or trees',
      'Check weatherproof rating if left outdoors',
      'Mix sizes for a layered light effect'
    ]
  },

  'boho-wall-art': {
    title: 'Boho Wall Art with Yarn & Sticks',
    difficulty: 'Beginner',
    time: '1-2 hours',
    description: 'Create cozy and textured bohemian-inspired wall art using yarn, driftwood, or natural sticks.',
    materials: [
      'Yarn in various colors and textures',
      'Wooden dowels or tree branches',
      'Scissors and glue',
      'Measuring tape',
      'Beads or feathers (optional)'
    ],
    steps: [
      'Cut yarn into varying lengths',
      'Knot or loop yarn onto stick in desired pattern',
      'Trim to shape (diagonal, triangle, straight)',
      'Add beads or feathers for extra flair',
      'Tie string at both ends for hanging'
    ],
    tips: [
      'Use thick yarn for more volume',
      'Layer textures (braids, knots, fringe)',
      'Stick to earthy or muted tones for a true boho feel',
      'Mix in metallic thread for highlights',
      'Hang near natural light to showcase texture'
    ]
  },

  'pressed-flowers': {
    title: 'Pressed Flower Bookmarks & Decor',
    difficulty: 'Beginner',
    time: '1-3 days (includes drying)',
    description: 'Preserve real flowers and use them to create elegant bookmarks, framed art, and journal accents.',
    materials: [
      'Fresh flowers and leaves',
      'Heavy books or flower press',
      'Parchment paper',
      'Cardstock or bookmarks',
      'Clear laminate or contact paper',
      'Glue or Mod Podge'
    ],
    steps: [
      'Pick fresh, flat flowers and dry them between books',
      'After 1-2 days, remove dried flowers gently',
      'Arrange flowers on cardstock or bookmark base',
      'Seal with laminate or Mod Podge',
      'Trim edges neatly for a professional look',
      'Frame if creating wall art'
    ],
    tips: [
      'Pick flowers early in the morning for best results',
      'Avoid thick flowers—they’re harder to press',
      'Label your pressed flowers for future use',
      'Add quotes or dates to bookmarks for gifts',
      'Use tweezers to handle delicate pieces'
    ]
  },

  'air-dry-clay': {
    title: 'Air-Dry Clay Crafts for Beginners',
    difficulty: 'Beginner',
    time: '2-4 hours (plus drying)',
    description: 'Explore your creativity with air-dry clay to craft jewelry dishes, ornaments, plant tags, and more—no kiln needed!',
    materials: [
      'Air-dry clay',
      'Clay modeling tools or toothpicks',
      'Rolling pin or bottle',
      'Cookie cutters or templates',
      'Acrylic paint and sealer',
      'Sandpaper (fine grit)'
    ],
    steps: [
      'Condition clay by kneading it gently',
      'Roll out to desired thickness on a flat surface',
      'Cut shapes using cutters or freehand',
      'Smooth edges and create texture',
      'Let dry completely (24–48 hours)',
      'Paint and seal for durability'
    ],
    tips: [
      'Work on a non-stick surface like wax paper',
      'Keep unused clay in an airtight bag',
      'Use sandpaper after drying for smooth finish',
      'Try marble effects by mixing clay colors',
      'Seal with Mod Podge or clear varnish'
    ]
  }
};


// Legal content data
const legalData = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <h3>Information We Collect</h3>
      <p>At CraftoryZone, we collect only the information necessary to provide you with our services and improve your crafting experience.</p>
      
      <h3>Personal Information</h3>
      <ul>
        <li>Name and email address when you contact us</li>
        <li>Newsletter subscription preferences</li>
        <li>Messages and inquiries sent through our contact form</li>
      </ul>
      
      <h3>How We Use Your Information</h3>
      <ul>
        <li>To respond to your inquiries and provide customer support</li>
        <li>To send you our newsletter (only if you opt-in)</li>
        <li>To improve our website and services</li>
        <li>To ensure the security of our website</li>
      </ul>
      
      <h3>Information Sharing</h3>
      <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
      <ul>
        <li>With your explicit consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and safety</li>
      </ul>
      
      <h3>Data Security</h3>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      
      <h3>Your Rights</h3>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Unsubscribe from our newsletter at any time</li>
      </ul>
      
      <h3>Contact Us</h3>
      <p>If you have questions about this Privacy Policy, please contact us through our contact form.</p>
      
      <p><em>Last updated: January 2025</em></p>
    `
  },
  terms: {
    title: 'Terms & Conditions',
    content: `
      <h3>Acceptance of Terms</h3>
      <p>By accessing and using CraftoryZone, you accept and agree to be bound by the terms and provision of this agreement.</p>
      
      <h3>Use License</h3>
      <p>Permission is granted to temporarily download one copy of the materials on CraftoryZone for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
      <ul>
        <li>Modify or copy the materials</li>
        <li>Use the materials for any commercial purpose or for any public display</li>
        <li>Attempt to reverse engineer any software contained on the website</li>
        <li>Remove any copyright or other proprietary notations from the materials</li>
      </ul>
      
      <h3>Disclaimer</h3>
      <p>The materials on CraftoryZone are provided on an 'as is' basis. CraftoryZone makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      
      <h3>Craft Project Safety</h3>
      <p>All craft projects and tutorials are provided for educational purposes. Users are responsible for:</p>
      <ul>
        <li>Following all safety guidelines and using appropriate protective equipment</li>
        <li>Ensuring they have the necessary skills before attempting projects</li>
        <li>Using tools and materials safely and as intended</li>
        <li>Supervising children during any craft activities</li>
      </ul>
      
      <h3>Limitations</h3>
      <p>In no event shall CraftoryZone or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CraftoryZone, even if CraftoryZone or its authorized representative has been notified orally or in writing of the possibility of such damage.</p>
      
      <h3>Accuracy of Materials</h3>
      <p>The materials appearing on CraftoryZone could include technical, typographical, or photographic errors. CraftoryZone does not warrant that any of the materials on its website are accurate, complete, or current.</p>
      
      <h3>Links</h3>
      <p>CraftoryZone has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CraftoryZone of the site.</p>
      
      <h3>Modifications</h3>
      <p>CraftoryZone may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
      
      <p><em>Last updated: January 2025</em></p>
    `
  }
};

// DOM elements
const projectModal = document.getElementById('projectModal');
const legalModal = document.getElementById('legalModal');
const modalContent = document.getElementById('modalContent');
const legalContent = document.getElementById('legalContent');
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  initializeMobileMenu();
  initializeSmoothScrolling();
});

// Initialize event listeners
function initializeEventListeners() {
  // Project card click handlers
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const projectId = this.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Project card click handlers (entire card)
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Legal link handlers
  document.querySelectorAll('.legal-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const contentType = this.getAttribute('data-content');
      openLegalModal(contentType);
    });
  });

  // Modal close handlers
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModals);
  });

  // Modal overlay click handlers
  [projectModal, legalModal].forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModals();
      }
    });
  });

  // Escape key handler
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModals();
    }
  });

  // Contact form handler
  contactForm.addEventListener('submit', handleFormSubmission);
}

// Initialize mobile menu
function initializeMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Open project modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const content = `
    <h2>${project.title}</h2>
    <div style="margin-bottom: 1.5rem;">
      <span class="project-difficulty">Difficulty: ${project.difficulty}</span>
      <span class="project-time">Time: ${project.time}</span>
    </div>
    
    <p>${project.description}</p>
    
    <h3>Materials Needed:</h3>
    <ul>
      ${project.materials.map(material => `<li>${material}</li>`).join('')}
    </ul>
    
    <h3>Step-by-Step Instructions:</h3>
    <ol>
      ${project.steps.map(step => `<li>${step}</li>`).join('')}
    </ol>
    
    <h3>Pro Tips:</h3>
    <ul>
      ${project.tips.map(tip => `<li>${tip}</li>`).join('')}
    </ul>
  `;

  modalContent.innerHTML = content;
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Open legal modal
function openLegalModal(contentType) {
  const legal = legalData[contentType];
  if (!legal) return;

  const content = `
    <h2>${legal.title}</h2>
    ${legal.content}
  `;

  legalContent.innerHTML = content;
  legalModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close all modals
function closeModals() {
  projectModal.classList.remove('active');
  legalModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Handle form submission
function handleFormSubmission(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    newsletter: formData.get('newsletter') === 'on'
  };

  // Simulate form submission (in a real app, this would send to a server)
  console.log('Form submitted:', data);
  
  // Show success message
  showSuccessMessage();
  
  // Reset form
  contactForm.reset();
}

// Show success message
function showSuccessMessage() {
  successMessage.classList.add('show');
  
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 4000);
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.backgroundColor = 'var(--color-surface)';
    header.style.backdropFilter = 'none';
  }
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.project-card, .stat, .about-text');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    // Set initial state
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });
});
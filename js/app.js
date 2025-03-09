/**
 * Travel Industry Glossary - Main Application
 * Handles the core functionality of the glossary app
 */

(function() {
  'use strict';
  
  // DOM elements
  const searchInput = document.getElementById('search-input');
  const randomTermBtn = document.getElementById('random-term-btn');
  const categoryBtns = document.querySelectorAll('.filter-btn');
  const letterBtns = document.querySelectorAll('.letter-btn');
  const glossaryContent = document.getElementById('glossary-content');
  const favoritesSection = document.getElementById('favorites-section');
  const favoritesList = document.getElementById('favorites-list');
  const historySection = document.getElementById('history-section');
  const historyList = document.getElementById('history-list');
  const backToTopBtn = document.getElementById('back-to-top');
  const notification = document.getElementById('notification');
  
  // State
  let currentCategory = 'all';
  let currentLetter = 'all';
  let favorites = JSON.parse(localStorage.getItem('glossaryFavorites')) || [];
  let history = JSON.parse(localStorage.getItem('glossaryHistory')) || [];
  
  // Initialize the glossary
  function initializeGlossary() {
      renderAllSections();
      setupEventListeners();
      updateFavorites();
      updateHistory();
      loadPronunciationData();
      
      // Show favorites and history if available
      if (favorites.length > 0) {
          favoritesSection.style.display = 'block';
      } else {
          favoritesSection.style.display = 'none';
      }
      
      if (history.length > 0) {
          historySection.style.display = 'block';
      } else {
          historySection.style.display = 'none';
      }

      // Mobile optimizations
      if (isMobileDevice()) {
          applyMobileOptimizations();
      }
  }
  
  // Check if we're in a mobile environment
  function isMobileDevice() {
      return (window.innerWidth <= 768) || 
             (typeof window.orientation !== "undefined") || 
             (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  // Apply mobile optimizations
  function applyMobileOptimizations() {
      // Simplify the UI for mobile
      const categoryButtons = document.querySelectorAll('.filter-btn');
      categoryButtons.forEach(btn => {
          // Shorten text for smaller screens
          if (btn.textContent.includes('Management')) {
              btn.textContent = btn.textContent.replace('Management', 'Mgmt');
          }
      });
      
      // Adjust term card layout for mobile
      const termCards = document.querySelectorAll('.term-card');
      termCards.forEach(card => {
          card.classList.add('mobile-optimized');
      });
  }
  
  // Load pronunciation data
  function loadPronunciationData() {
      // For terms with pronunciation already defined in the data, we use those
      // This function would typically add pronunciation to terms that don't have it defined
      
      // Example: For demo purposes, we might add pronunciation to additional terms if needed
      const pronunciations = {
          "SLA": "es-el-ay",
          "OBT": "oh-bee-tee",
          "BSP": "bee-es-pee"
      };
      
      // Add pronunciation to term cards for terms that don't already have it
      Object.entries(pronunciations).forEach(([term, pronunciation]) => {
          if (glossaryData[term] && !glossaryData[term].pronunciation) {
              glossaryData[term].pronunciation = pronunciation;
          }
      });
  }
  
  // Render all glossary sections
  function renderAllSections() {
      // Clear existing content
      glossaryContent.innerHTML = '';
      
      // Get all letters that have terms
      const allLetters = [...new Set(Object.values(glossaryData).map(term => term.letter))].sort();
      
      // Create sections for each letter
      allLetters.forEach(letter => {
          if (currentLetter === 'all' || currentLetter === letter) {
              const letterTerms = Object.entries(glossaryData)
                  .filter(([_, term]) => term.letter === letter && 
                                       (currentCategory === 'all' || term.category === currentCategory));
              
              if (letterTerms.length > 0) {
                  const sectionHTML = createSectionHTML(letter, letterTerms);
                  glossaryContent.innerHTML += sectionHTML;
              }
          }
      });
      
      // Add empty state if no terms found
      if (glossaryContent.innerHTML === '') {
          glossaryContent.innerHTML = `
              <div class="empty-state">
                  <h3>No terms found</h3>
                  <p>Try adjusting your search or filters.</p>
              </div>
          `;
      }
      
      // Setup term card interactions
      setupTermCards();
  }
  
  // Create HTML for a single section
  function createSectionHTML(letter, terms) {
      return `
          <div class="glossary-section" id="section-${letter}">
              <div class="section-header">
                  <h2>${letter}</h2>
                  <span class="section-count">${terms.length} Term${terms.length !== 1 ? 's' : ''}</span>
              </div>
              
              <div class="term-list">
                  ${terms.map(([termName, termData]) => createTermCardHTML(termName, termData)).join('')}
              </div>
          </div>
      `;
  }
  
  // Create HTML for a single term card
  function createTermCardHTML(termName, termData) {
      const isFavorite = favorites.includes(termName);
      const isNew = termData.isNew;
      
      return `
          <div class="term-card ${isNew ? 'new-term' : ''}" data-term="${termName}" data-category="${termData.category}" data-letter="${termData.letter}">
              <div class="term-header">
                  <div class="term-title-wrapper">
                      <span class="term-title">${termData.fullTitle ? `${termName} (${termData.fullTitle})` : termName}</span>
                      <span class="term-category">${termData.category}</span>
                  </div>
                  <div class="term-toggle" aria-hidden="true">▼</div>
              </div>
              <div class="term-content">
                  <div class="term-body">
                      ${termData.pronunciation ? `<p class="pronunciation">Pronunciation: ${termData.pronunciation}</p>` : ''}
                      ${termData.definition.split('\n\n').map(para => `<p class="definition">${para}</p>`).join('')}
                      
                      ${termData.examples ? `
                          <h4 class="section-title">Examples:</h4>
                          <ul class="examples-list">
                              ${termData.examples.map(example => `<li>${example}</li>`).join('')}
                          </ul>
                      ` : ''}
                      
                      ${termData.example ? `
                          <h4 class="section-title">Example:</h4>
                          <p class="example">${termData.example}</p>
                      ` : ''}
                      
                      ${termData.tripGridNote ? `
                          <p class="tripgrid-note">${termData.tripGridNote}</p>
                      ` : ''}
                      
                      <div class="term-actions">
                          <button class="favorite-toggle ${isFavorite ? 'active' : ''}" 
                                  data-term="${termName}" 
                                  aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}" 
                                  title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">★</button>
                      </div>
                      
                      <h4 class="section-title">Related Terms</h4>
                      <div class="related-terms-list">
                          ${termData.relatedTerms.map(relatedTerm => `
                              <span class="related-term" data-term="${relatedTerm}">${relatedTerm}</span>
                          `).join('')}
                      </div>
                      
                      ${termData.reference ? `
                          <p class="term-source">Reference: <a href="#" class="reference-link" data-reference="${termData.reference}">View ${termData.reference}</a></p>
                      ` : ''}
                  </div>
              </div>
          </div>
      `;
  }
  
  // Setup term card click interactions
  function setupTermCards() {
      const termHeaders = document.querySelectorAll('.term-header');
      const favoriteToggles = document.querySelectorAll('.favorite-toggle');
      const relatedTerms = document.querySelectorAll('.related-term');
      
      // Term header click - expand/collapse
      termHeaders.forEach(header => {
          header.addEventListener('click', function() {
              const termCard = this.closest('.term-card');
              const termName = termCard.dataset.term;
              
              // Toggle the expanded class
              termCard.classList.toggle('expanded');
              
              // Add to history if expanded
              if (termCard.classList.contains('expanded')) {
                  addToHistory(termName);
              }
              
              // Set aria-expanded attribute for accessibility
              const isExpanded = termCard.classList.contains('expanded');
              this.setAttribute('aria-expanded', isExpanded);
              
              // Update the toggle button text
              const toggleBtn = this.querySelector('.term-toggle');
              toggleBtn.textContent = isExpanded ? '▲' : '▼';
          });
      });
      
      // Favorite toggle click
      favoriteToggles.forEach(toggle => {
          toggle.addEventListener('click', function(e) {
              e.stopPropagation();
              const termName = this.closest('.term-card').dataset.term;
              toggleFavorite(termName);
              
              // Update button state
              this.classList.toggle('active');
              this.setAttribute('aria-label', this.classList.contains('active') ? 'Remove from favorites' : 'Add to favorites');
              this.setAttribute('title', this.classList.contains('active') ? 'Remove from favorites' : 'Add to favorites');

              // Show notification
              showNotification(this.classList.contains('active') ? 
                  `${termName} added to favorites!` : 
                  `${termName} removed from favorites`);
          });
      });
      
      // Related term click
      relatedTerms.forEach(term => {
          term.addEventListener('click', function(e) {
              e.stopPropagation();
              const relatedTermName = this.textContent.trim();
              
              // Find the related term in the glossary data
              const matchingTerm = findMatchingTerm(relatedTermName);
              
              if (matchingTerm) {
                  // Find the related term card
                  const relatedTermCard = document.querySelector(`.term-card[data-term="${matchingTerm}"]`);
                  
                  if (relatedTermCard) {
                      // Navigate to the term
                      navigateToTerm(matchingTerm);
                  } else {
                      // Term exists in data but not on current page (due to filtering)
                      showNotification(`The term "${relatedTermName}" is not on the current page. Try changing your filters.`);
                  }
              } else {
                  // Term doesn't exist in glossary data yet
                  showNotification(`The term "${relatedTermName}" is not in the glossary yet.`);
              }
          });
      });
      
      // Reference links
      const referenceLinks = document.querySelectorAll('.reference-link');
      referenceLinks.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              const referenceType = this.dataset.reference;
              showNotification(`Reference documents (${referenceType}) will be available in a future update.`);
          });
      });
  }
  
  // Find a matching term in the glossary data
  function findMatchingTerm(searchTerm) {
      // First try for exact match
      if (glossaryData[searchTerm]) {
          return searchTerm;
      }
      
      // Then look for case-insensitive match
      const termKey = Object.keys(glossaryData).find(key => 
          key.toLowerCase() === searchTerm.toLowerCase());
      
      if (termKey) {
          return termKey;
      }
      
      // Finally look for terms that include the search term as part of their full title
      return Object.keys(glossaryData).find(key => {
          const term = glossaryData[key];
          return term.fullTitle && term.fullTitle.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }
  
  // Setup event listeners for controls
  function setupEventListeners() {
      // Search input
      searchInput.addEventListener('input', debounce(function() {
          const searchTerm = this.value.toLowerCase().trim();
          
          if (searchTerm === '') {
              // Reset to show all terms
              resetFilters();
          } else {
              // Filter terms by search
              filterBySearch(searchTerm);
          }
      }, 300));
      
      // Category filter buttons
      categoryBtns.forEach(btn => {
          btn.addEventListener('click', function() {
              // Update active button
              categoryBtns.forEach(b => b.classList.remove('active'));
              this.classList.add('active');
              
              // Update current category
              currentCategory = this.dataset.category;
              
              // Clear search input
              searchInput.value = '';
              
              // Apply filters
              applyFilters();
          });
      });
      
      // Letter filter buttons
      letterBtns.forEach(btn => {
          btn.addEventListener('click', function() {
              // Update active button
              letterBtns.forEach(b => b.classList.remove('active'));
              this.classList.add('active');
              
              // Update current letter
              currentLetter = this.dataset.letter;
              
              // Clear search input
              searchInput.value = '';
              
              // Apply filters
              applyFilters();
              
              // Scroll to the section if not 'all'
              if (currentLetter !== 'all') {
                  const section = document.getElementById(`section-${currentLetter}`);
                  if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                  }
              }
          });
      });
      
      // Random term button
      randomTermBtn.addEventListener('click', function() {
          // Get all terms from glossary data
          const allTerms = Object.keys(glossaryData);
          
          if (allTerms.length > 0) {
              // Pick a random term
              const randomIndex = Math.floor(Math.random() * allTerms.length);
              const randomTerm = allTerms[randomIndex];
              
              // Reset filters to show all terms
              resetFilters();
              
              // Navigate to the term after a short delay to allow filters to reset
              setTimeout(() => {
                  navigateToTerm(randomTerm);
                  showNotification(`Random term: ${randomTerm}`);
              }, 100);
          }
      });
      
      // Back to top button
      backToTopBtn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      
      // Show/hide back to top button based on scroll position
      window.addEventListener('scroll', function() {
          if (window.pageYOffset > 300) {
              backToTopBtn.classList.add('visible');
          } else {
              backToTopBtn.classList.remove('visible');
          }
      });
      
      // Favorites item click
      favoritesList.addEventListener('click', function(e) {
          if (e.target.classList.contains('remove-favorite')) {
              // Remove from favorites
              const termName = e.target.dataset.term;
              toggleFavorite(termName);
              
              // Update button state on term card if visible
              const termCard = document.querySelector(`.term-card[data-term="${termName}"]`);
              if (termCard) {
                  const favoriteBtn = termCard.querySelector('.favorite-toggle');
                  favoriteBtn.classList.remove('active');
                  favoriteBtn.setAttribute('aria-label', 'Add to favorites');
                  favoriteBtn.setAttribute('title', 'Add to favorites');
              }
          } else if (e.target.closest('.favorite-item')) {
              // Navigate to the term
              const termName = e.target.closest('.favorite-item').querySelector('span').textContent;
              navigateToTerm(termName);
          }
      });
      
      // History item click
      historyList.addEventListener('click', function(e) {
          if (e.target.closest('.history-item')) {
              // Navigate to the term
              const termName = e.target.closest('.history-item').querySelector('.history-term').textContent;
              navigateToTerm(termName);
          }
      });
      
      // Accessibility: keyboard navigation
      document.addEventListener('keydown', function(e) {
          // Press 'Esc' to collapse all expanded terms
          if (e.key === 'Escape') {
              const expandedTerms = document.querySelectorAll('.term-card.expanded');
              expandedTerms.forEach(term => {
                  term.classList.remove('expanded');
                  const toggleBtn = term.querySelector('.term-toggle');
                  toggleBtn.textContent = '▼';
              });
          }
      });
  }
  
  // Navigate to a specific term
  function navigateToTerm(termName) {
      // Reset filters if needed
      if (currentCategory !== 'all' || currentLetter !== 'all') {
          resetFilters();
          
          // Wait for DOM to update
          setTimeout(() => {
              scrollToTerm(termName);
          }, 100);
      } else {
          scrollToTerm(termName);
      }
  }
  
  // Scroll to a term and expand it
  function scrollToTerm(termName) {
      // Find the term card
      const termCard = document.querySelector(`.term-card[data-term="${termName}"]`);
      
      if (termCard) {
          // Scroll to the term
          termCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Expand the term if it's not already expanded
          if (!termCard.classList.contains('expanded')) {
              termCard.classList.add('expanded');
              
              // Update toggle button
              const toggleBtn = termCard.querySelector('.term-toggle');
              toggleBtn.textContent = '▲';
              
              // Add to history
              addToHistory(termName);
          }
          
          // Highlight the term temporarily
          termCard.classList.add('highlight');
          setTimeout(() => {
              termCard.classList.remove('highlight');
          }, 2000);
      } else {
          showNotification(`Term "${termName}" not found in the current view.`);
      }
  }
  
  // Filter terms by search
  function filterBySearch(searchTerm) {
      const termCards = document.querySelectorAll('.term-card');
      let hasVisibleTerms = false;
      
      termCards.forEach(card => {
          const term = card.dataset.term.toLowerCase();
          const category = card.dataset.category.toLowerCase();
          const definition = card.querySelector('.definition')?.textContent.toLowerCase() || '';
          
          if (term.includes(searchTerm) || category.includes(searchTerm) || definition.includes(searchTerm)) {
              card.style.display = '';
              hasVisibleTerms = true;
          } else {
              card.style.display = 'none';
          }
      });
      
      // Show/hide glossary sections based on visible terms
      updateSectionVisibility();
      
      // Show empty state if no terms found
      if (!hasVisibleTerms) {
          showEmptyState(`No terms found for "${searchTerm}"`);
      } else {
          removeEmptyState();
      }
  }
  
  // Apply category and letter filters
  function applyFilters() {
      renderAllSections();
  }
  
  // Update section visibility based on visible terms
  function updateSectionVisibility() {
      const sections = document.querySelectorAll('.glossary-section');
      
      sections.forEach(section => {
          const hasVisibleTerms = Array.from(section.querySelectorAll('.term-card')).some(card => card.style.display !== 'none');
          section.style.display = hasVisibleTerms ? '' : 'none';
      });
  }
  
  // Show empty state
  function showEmptyState(message) {
      removeEmptyState();
      
      const emptyState = document.createElement('div');
      emptyState.className = 'empty-state';
      emptyState.id = 'empty-state';
      emptyState.innerHTML = `
          <h3>No Results Found</h3>
          <p>${message}</p>
          <button class="btn-more" id="reset-filters-btn">Reset Filters</button>
      `;
      
      glossaryContent.appendChild(emptyState);
      
      // Add event listener to reset button
      document.getElementById('reset-filters-btn').addEventListener('click', resetFilters);
  }
  
  // Remove empty state
  function removeEmptyState() {
      const emptyState = document.getElementById('empty-state');
      if (emptyState) {
          emptyState.remove();
      }
  }
  
  // Reset all filters
  function resetFilters() {
      currentCategory = 'all';
      currentLetter = 'all';
      searchInput.value = '';
      
      // Update UI buttons
      categoryBtns.forEach(btn => {
          btn.classList.remove('active');
          if (btn.dataset.category === 'all') {
              btn.classList.add('active');
          }
      });
      
      letterBtns.forEach(btn => {
          btn.classList.remove('active');
          if (btn.dataset.letter === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Render all terms
    renderAllSections();
}

// Toggle favorite status for a term
function toggleFavorite(termName) {
    const index = favorites.indexOf(termName);
    
    if (index === -1) {
        // Add to favorites
        favorites.push(termName);
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
    }
    
    // Save to local storage
    localStorage.setItem('glossaryFavorites', JSON.stringify(favorites));
    
    // Update favorites display
    updateFavorites();
}

// Add a term to history
function addToHistory(termName) {
    // Remove if already in history
    const index = history.indexOf(termName);
    if (index !== -1) {
        history.splice(index, 1);
    }
    
    // Add to beginning of history
    history.unshift(termName);
    
    // Limit to 5 items
    if (history.length > 5) {
        history.pop();
    }
    
    // Save to local storage
    localStorage.setItem('glossaryHistory', JSON.stringify(history));
    
    // Update history display
    updateHistory();
}

// Update favorites display
function updateFavorites() {
    favoritesList.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p id="no-favorites-message">You haven\'t added any favorites yet.</p>';
        favoritesSection.style.display = 'none';
    } else {
        favorites.forEach(termName => {
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.innerHTML = `
                <span>${termName}</span>
                <span class="remove-favorite" data-term="${termName}" title="Remove from favorites">×</span>
            `;
            
            favoritesList.appendChild(favoriteItem);
        });
        
        favoritesSection.style.display = 'block';
    }
}

// Update history display
function updateHistory() {
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = '<li id="no-history-message">No recently viewed terms.</li>';
        historySection.style.display = 'none';
    } else {
        history.forEach((termName, index) => {
            const historyItem = document.createElement('li');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <span class="history-term">${termName}</span>
                <span class="history-timestamp">${index === 0 ? 'Just now' : index === 1 ? '5 minutes ago' : (index * 5) + ' minutes ago'}</span>
            `;
            
            historyList.appendChild(historyItem);
        });
        
        historySection.style.display = 'block';
    }
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('visible');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('visible');
    }, 3000);
}

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Initialize the glossary when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeGlossary();
});
})();
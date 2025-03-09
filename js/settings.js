/**
 * Travel Industry Glossary - Settings Module
 * Handles user settings and preferences
 */

(function() {
  'use strict';
  
  // DOM elements
  const settingsToggle = document.getElementById('settings-toggle');
  const settingsPanel = document.getElementById('settings-panel');
  const settingsClose = document.getElementById('settings-close');
  const fontSizeSelect = document.getElementById('font-size');
  const themeSelect = document.getElementById('theme');
  const showPronunciationToggle = document.getElementById('show-pronunciation');
  const showExamplesToggle = document.getElementById('show-examples');
  const showRelatedToggle = document.getElementById('show-related');
  const printBtn = document.getElementById('print-btn');
  const exportBtns = document.querySelectorAll('.export-btn');
  
  // Initialize settings
  function initSettings() {
      setupEventListeners();
      loadSavedSettings();
  }
  
  // Setup event listeners
  function setupEventListeners() {
      // Settings panel toggle
      settingsToggle.addEventListener('click', function() {
          settingsPanel.classList.add('open');
      });
      
      // Settings panel close
      settingsClose.addEventListener('click', function() {
          settingsPanel.classList.remove('open');
      });
      
      // Click outside to close settings
      document.addEventListener('click', function(e) {
          if (settingsPanel.classList.contains('open') && 
              !settingsPanel.contains(e.target) && 
              e.target !== settingsToggle) {
              settingsPanel.classList.remove('open');
          }
      });
      
      // Font size change
      fontSizeSelect.addEventListener('change', function() {
          const size = this.value;
          document.documentElement.setAttribute('data-font-size', size);
          localStorage.setItem('glossaryFontSize', size);
      });
      
      // Theme change
      themeSelect.addEventListener('change', function() {
          const theme = this.value;
          
          if (theme === 'auto') {
              // Use system preference
              const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
          } else {
              document.documentElement.setAttribute('data-theme', theme);
          }
          
          localStorage.setItem('glossaryTheme', theme);
      });
      
      // Content preference toggles
      showPronunciationToggle.addEventListener('change', function() {
          const isChecked = this.checked;
          document.documentElement.setAttribute('data-show-pronunciation', isChecked);
          localStorage.setItem('glossaryShowPronunciation', isChecked);
          updateContentDisplay('pronunciation', isChecked);
      });
      
      showExamplesToggle.addEventListener('change', function() {
          const isChecked = this.checked;
          document.documentElement.setAttribute('data-show-examples', isChecked);
          localStorage.setItem('glossaryShowExamples', isChecked);
          updateContentDisplay('examples', isChecked);
      });
      
      showRelatedToggle.addEventListener('change', function() {
          const isChecked = this.checked;
          document.documentElement.setAttribute('data-show-related', isChecked);
          localStorage.setItem('glossaryShowRelated', isChecked);
          updateContentDisplay('related', isChecked);
      });
      
      // Print button
      printBtn.addEventListener('click', function() {
          window.print();
      });
      
      // Export buttons
      exportBtns.forEach(btn => {
          btn.addEventListener('click', function() {
              const format = this.dataset.format;
              exportGlossary(format);
          });
      });
      
      // Listen for system theme changes if using auto theme
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
          if (themeSelect.value === 'auto') {
              document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
          }
      });
  }
  
  // Load saved settings from localStorage
  function loadSavedSettings() {
      // Font size
      const savedFontSize = localStorage.getItem('glossaryFontSize');
      if (savedFontSize) {
          fontSizeSelect.value = savedFontSize;
          document.documentElement.setAttribute('data-font-size', savedFontSize);
      }
      
      // Theme
      const savedTheme = localStorage.getItem('glossaryTheme');
      if (savedTheme) {
          themeSelect.value = savedTheme;
          
          if (savedTheme === 'auto') {
              // Use system preference
              const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
          } else {
              document.documentElement.setAttribute('data-theme', savedTheme);
          }
      }
      
      // Content preferences
      const savedShowPronunciation = localStorage.getItem('glossaryShowPronunciation');
      if (savedShowPronunciation !== null) {
          const isChecked = savedShowPronunciation === 'true';
          showPronunciationToggle.checked = isChecked;
          document.documentElement.setAttribute('data-show-pronunciation', isChecked);
          updateContentDisplay('pronunciation', isChecked);
      }
      
      const savedShowExamples = localStorage.getItem('glossaryShowExamples');
      if (savedShowExamples !== null) {
          const isChecked = savedShowExamples === 'true';
          showExamplesToggle.checked = isChecked;
          document.documentElement.setAttribute('data-show-examples', isChecked);
          updateContentDisplay('examples', isChecked);
      }
      
      const savedShowRelated = localStorage.getItem('glossaryShowRelated');
      if (savedShowRelated !== null) {
          const isChecked = savedShowRelated === 'true';
          showRelatedToggle.checked = isChecked;
          document.documentElement.setAttribute('data-show-related', isChecked);
          updateContentDisplay('related', isChecked);
      }
  }
  
  // Update content display based on preferences
  function updateContentDisplay(contentType, isVisible) {
      let selector;
      
      switch (contentType) {
          case 'pronunciation':
              selector = '.pronunciation';
              break;
          case 'examples':
              selector = '.examples-list, .example';
              break;
          case 'related':
              selector = '.related-terms-list';
              break;
      }
      
      if (selector) {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
              el.style.display = isVisible ? '' : 'none';
          });
      }
  }
  
  // Export glossary in different formats
  function exportGlossary(format) {
      const notify = document.querySelector('#notification');
      
      // Show initial notification
      notify.textContent = `Preparing ${format.toUpperCase()} export...`;
      notify.classList.add('visible');
      
      // In a real implementation, this would actually generate and download the file
      setTimeout(() => {
          // Simulate processing time
          notify.textContent = `${format.toUpperCase()} export complete!`;
          
          // Hide notification after 3 seconds
          setTimeout(() => {
              notify.classList.remove('visible');
          }, 3000);
          
          // In a real implementation, we would handle the actual download here
          console.log(`Exporting glossary in ${format} format...`);
      }, 1500);
  }
  
  // Initialize settings when DOM is loaded
  document.addEventListener('DOMContentLoaded', initSettings);
})();
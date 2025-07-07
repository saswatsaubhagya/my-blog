// Add copy buttons to code blocks
document.addEventListener('DOMContentLoaded', function() {
  // Find all pre elements (code blocks)
  const preElements = document.querySelectorAll('pre');
  
  preElements.forEach(function(pre) {
    // Skip if already has a copy button
    if (pre.querySelector('.copy-button')) return;
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    
    // Add click event listener
    copyButton.addEventListener('click', function() {
      // Get the code content
      const code = pre.querySelector('code') || pre;
      const textContent = code.textContent || code.innerText;
      
      // Copy to clipboard
      navigator.clipboard.writeText(textContent).then(function() {
        // Show success feedback
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.add('copied');
        
        // Reset button after 2 seconds
        setTimeout(function() {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.classList.remove('copied');
        }, 2000);
      }).catch(function(err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textContent;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          copyButton.innerHTML = '<i class="fas fa-check"></i>';
          copyButton.classList.add('copied');
          
          setTimeout(function() {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            copyButton.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code: ', err);
          copyButton.innerHTML = '<i class="fas fa-times"></i>';
          
          setTimeout(function() {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          }, 2000);
        }
        
        document.body.removeChild(textArea);
      });
    });
    
    // Add button to pre element
    pre.style.position = 'relative';
    pre.appendChild(copyButton);
  });
}); 
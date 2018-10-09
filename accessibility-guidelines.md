#Web Accessibility Standards

##Guidelines from [W3.org](https://www.w3.org/standards/webdesign/accessibility#examples)

###General
- Alt text for images and transcripts for audio/video
- Keyboard input (don’t rely on mouse for navigation/functionality)
- [Checklist:](https://www.w3.org/WAI/test-evaluate/preliminary/)
    - Page title and alt text
    - Semantic headings
    - Color contrast
    - Ability to resize text
    - Keyboard access (e.g. moving through forms with tab, and visually highlighting the current location)
    - Guidance for handling error messages
    - Reduce or eliminate moving, flashing, blinking, or auto-updating content (include ability to pause/stop/hide)
    - Basic structure (what order will a screen reader go through the elements?)

###Design Principles
- Contrast between foreground and background
- Don’t rely on color alone to convey information (use multiple indicators)
- Make interactive material easily identifiable (hovering on links, highlighting tab-selected fields, etc)
- Clear navigation options
- Form elements with clearly associated labels
- Easily identifiable feedback on errors (use multiple indicators)
- Use headings and spacing to group related content
- Controls for content that starts or updates automatically 
- Design for different viewport sizes
- Provide Media alternatives

###Writing Principles
- Informative, unique page titles
- Headings to convey meaning and structure
- Meaningful link text
- Meaningful alt text
- Transcripts and captions for media
- Clear instructions

###Development Principles
- Labels for every form control
- Alt text for media
- ID primary page language
- Use semantic HTML element tags (article, aside, section, etc)
- Help users avoid and correct mistakes (e.g. provide example formatting for phone number input, in addition to checking programmatically for format)
- Check reading order against code order (remove CSS positioning to check this!)
- Responsive design for multiple devices!!!
- Provide meaning for non-standard interactive elements (use aria-labels to indicate purpose)
- Ensure all interactive elements are keyboard-accessible
- Avoid CAPTCHA where possible (or include multiple ways to pass the check, including access to human representative)
# GitHub Copilot Coding Agent & Agent Mode Workshop

Welcome to the GitHub Copilot Workshop! These exercises are designed to help you explore and master GitHub Copilot's advanced capabilities, specifically the Coding Agent and Agent Mode features, through practical implementation in a real-world Next.js travel application.

## Workshop Overview

This workshop uses a Next.js travel application that includes trip search, bookings, travel guides, and user points management. You'll learn to effectively delegate complex development tasks to AI agents and understand when to use different agent capabilities for optimal results.

---

## Exercise 1: Support Menu Implementation with Coding Agent

### Objective
Master GitHub Copilot's Coding Agent for complex, multi-file feature development by implementing a complete support system.

### Task Description
Use GitHub Copilot's Coding Agent to implement a "Support" menu item in the main navigation. The "Support" section should include the following key components:
- **FAQ Page**: A dedicated page addressing frequently asked questions to assist users with common queries.
- **Enquiry Form**: An interactive form allowing users to submit their support requests or feedback directly.
- **Contact Information**: A section displaying relevant contact details for further assistance.

### Learning Objectives
- Understand how to delegate comprehensive, multi-component tasks to the coding agent
- Learn to provide clear requirements and acceptance criteria for complex features
- Observe how the agent plans and executes development work across multiple files and components
- Practice reviewing, testing, and refining agent-generated code
- Experience the coding agent's architectural decision-making capabilities

### Step-by-Step Instructions

#### Step 1: Create a GitHub Issue
1. Navigate to your repository's Issues tab
2. Create a new issue with the title: "Implement Support Menu Item with FAQ, Contact Form, and Contact Info"
3. In the issue description, provide detailed requirements:
   ```markdown
   ## Requirements
   - Add "Support" link to main navigation (Header component)
   - Create support landing page with overview of support options
   - Implement FAQ page with collapsible questions and search functionality
   - Create contact/enquiry form with validation and submission handling
   - Add contact information page with company details and office hours
   
   ## Acceptance Criteria
   - [ ] Support menu item appears in both desktop and mobile navigation
   - [ ] All support pages follow existing design patterns and responsiveness
   - [ ] FAQ component includes search and category filtering
   - [ ] Contact form includes proper validation and error handling
   - [ ] Contact information is well-structured and accessible
   - [ ] All components include TypeScript types and proper testing
   ```
4. Assign the issue to "Copilot" Coding Agent for implementation


#### Step 2: Monitor Agent Progress
1. Observe how the agent analyzes the current codebase
2. Note the agent's planning approach and file organization decisions
3. Watch how the agent handles component dependencies and imports
4. Review the agent's approach to styling and consistency

#### Step 3: Review and Test
1. Once the agent completes the implementation, thoroughly test all functionality
2. Check responsiveness across different screen sizes
3. Validate form functionality and error handling
4. Test navigation integration
5. Verify TypeScript compilation and lint compliance

### Success Criteria
- [ ] Complete support navigation system integrated into existing header
- [ ] Support landing page with clear navigation to all support options
- [ ] FAQ page with working search and collapsible sections
- [ ] Functional contact form with validation and proper error states
- [ ] Contact information page with company details
- [ ] All components follow existing project patterns and conventions
- [ ] Mobile-responsive design maintained throughout
- [ ] TypeScript types properly defined for all new interfaces
- [ ] Code passes existing lint and build processes

---

## Exercise 2: Advanced Search Filtering with Agent Mode

### Objective
Experience GitHub Copilot's Agent Mode for iterative development and enhancement of existing features.

### Task Description
Use GitHub Copilot's Agent Mode to enhance the search functionality with advanced filtering options:

1. **Search by Country**: Add country-based filtering to trip search functionality
2. **Add "Food Exploration" Category**: Extend the existing category filter to include a new "Food Exploration" option

### Learning Objectives
- Experience Agent Mode for iterative development and code enhancement
- Learn how to work with agents on existing codebases and feature extensions
- Understand agent capabilities for data structure modifications and UI updates
- Practice collaborative development with AI agents for incremental improvements
- Master the art of guiding agents through multi-step feature enhancements

### Step-by-Step Instructions

#### Step 1: Analyze Current Implementation
1. Open `components/trips/SearchForm.tsx` and examine the current search structure
2. Review `lib/types/index.ts` to understand the current Trip and SearchFilters interfaces
3. Check `lib/data/mockData.ts` to see the current trip data structure
4. Note the existing category options and search implementation

#### Step 2: Engage Agent Mode for Country Filter
1. Start a new chat session in VS Code
2. Use this prompt to begin the country filter enhancement:
   ```
   I want to add a country-based filter to our trip search functionality. Please analyze the current SearchForm component and help me implement a country dropdown filter. This should:
   
   1. Add a country field to the SearchFilters interface
   2. Update the SearchForm component to include a country dropdown
   3. Modify the search logic to filter by country
   4. Update the mock data to include country information for existing trips
   
   Let's start by examining the current implementation and planning the changes.
   ```

#### Step 3: Implement Country Filtering Iteratively
1. Work with the agent to update the TypeScript interfaces first
2. Have the agent modify the SearchForm component to add the country dropdown
3. Update the search logic to handle country filtering
4. Enhance the mock data with country information
5. Test the implementation and ask the agent for refinements

#### Step 4: Add Food Exploration Category Enhancement
1. Continue with the same agent session
2. Use this follow-up prompt:
   ```
   Now let's add a "Food" category to our existing category filter. This should:
   
   1. Update the Trip type to include "Food" as a valid category option
   2. Modify the category dropdown in SearchForm to include the new option
   3. Add some food-related trips to our mock data
   4. Ensure the search logic properly handles the new category
   
   Please maintain consistency with the existing category implementation.
   ```

#### Step 5: Integration and Testing
1. Ask the agent to help you test the combined functionality
2. Request suggestions for improving the user experience
3. Have the agent review the implementation for any potential issues
4. Ask for recommendations on additional enhancements

### Success Criteria
- [ ] Country dropdown added to search form with relevant country options
- [ ] Country filtering works correctly and integrates with existing search logic
- [ ] "Food" category added to category dropdown
- [ ] New food-related trips added to mock data with proper categorization
- [ ] Updated TypeScript interfaces properly typed for new filtering options
- [ ] Search form maintains responsive design and accessibility
- [ ] All existing search functionality continues to work correctly
- [ ] Code maintains consistency with existing patterns and conventions

---

## Understanding Agent Capabilities: When to Use What

### Coding Agent vs. Agent Mode - Key Differences

#### Use Coding Agent When:
- **Complex Feature Implementation**: Multi-file features like the entire support system
- **New Feature Development**: Building something from scratch with multiple components
- **Architectural Decisions**: When the agent needs to plan structure and organization
- **Cross-Component Integration**: Features that span multiple parts of the application
- **Complete Workflows**: End-to-end feature implementation including routes, components, and data

#### Use Agent Mode When:
- **Iterative Development**: Making incremental improvements to existing features
- **Code Enhancement**: Adding specific functionality to existing components
- **Targeted Improvements**: Focused changes to specific files or components
- **Quick Feature Extensions**: Adding new options or capabilities to existing features
- **Collaborative Refinement**: Working together on gradual improvements and optimizations

### Best Practices for Working with Agents

#### For Coding Agent:
1. **Provide Comprehensive Requirements**: Include all acceptance criteria and technical specifications
2. **Reference Related Issues**: Link to GitHub issues or project documentation
3. **Specify Architectural Preferences**: Mention patterns or structures you want followed
4. **Include Testing Requirements**: Specify what types of tests you expect
5. **Set Quality Standards**: Mention accessibility, performance, or other quality criteria

#### For Agent Mode:
1. **Start with Context**: Help the agent understand the current implementation
2. **Break Down Tasks**: Divide complex changes into smaller, manageable steps
3. **Provide Feedback**: Give the agent feedback on each iteration
4. **Ask Questions**: Engage in dialogue about implementation choices
5. **Iterate and Refine**: Use multiple rounds to achieve the desired outcome

---


**Workshop Philosophy**: The goal is not just to complete features, but to master the art of effective collaboration with AI coding agents as valuable development partners. Focus on understanding the nuances of when and how to leverage different agent capabilities for optimal development outcomes.

🚀 **Ready to become an AI-assisted development expert? Let's dive in!**

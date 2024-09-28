# NextStep
Developing a next gen low-income support app.

## Outline:

1. Entry Point: Home Page

    UI Elements:
   
        App Name: NextStep
        Navigation Bar:
            Home (current page)
            Support Finder (no account required)
            Jobs (requires an account)
            Profile (requires an account, shows when logged in)
        Information Section:
            "How it Works" (description of how the app operates, including for users seeking support and for job seekers/job posters)
            Prominent “Find Support” button for quick access to support services
            “Log In” or “Sign Up” button (directs users to account management page)
        Footer:
            Privacy policy, Terms of service, Contact info

3. Support Finder (Free, No Account Necessary)

    Process:
   
        Input: Users can search by:
            Current Location (auto-detected or manually inputted)
            Type of Support (food banks, shelters, medical aid, mental health services, etc.)
            Income Level (toggle bar to filter support for low-income, very low-income, etc.)
        Map Interface:
            Shows pins for available support services in the chosen area
            Details of each support center pop up when clicked (including name, address, phone number, working hours, available services)
            Option to filter results based on proximity or type of support needed
        Results: List view below the map (sortable by distance, ratings, etc.)

5. Job System (Account Required)

    Login/Signup Page:
   
        Options: User can either create a new account (sign up) or log into an existing one.
        For first-time users: Basic identity verification to ensure safety (e.g., email/phone verification, ID submission for workers).
        Roles:
            Job Seekers: Individuals looking for work
            Job Posters: Individuals or organizations posting job opportunities

7. Main Job Finder/Job Posting Page (Account Required)

    Toggle Options: Users can switch between two main modes:
   
        Job Posting Mode (for people looking to post jobs)
        Job Search Mode (for people looking for work)

A. Job Posting Mode (For job posters)

   Input Fields:
   
      Job Title (e.g., “Handyman Needed”, “Cooking Help”)
      Job Description (describe the job requirements, tasks, and time commitment)
      Location (allow for either a specific address or general area for privacy)
      Required Skills (optional filter for required worker skills)
      Payment/Compensation (hourly rate, fixed payment, non-monetary compensation like food or accommodation)
      Worker Verification Requirement (yes/no toggle)
  Submit Job button that posts the job on the platform

B. Job Search Mode (For job seekers)

   Input Fields/Filters:
   
      Location (auto-detect or manually input)
      Job Type (manual labor, cooking, cleaning, care work, etc.)
      Compensation Type (monetary or non-monetary)
      Worker Verified Toggle (toggle to show only jobs that require verification)
   Map Interface:
   
      Shows pins of available jobs in the area
      Pins provide a quick summary of the job (title, pay, and type)
      Filter Bar:
          Income Level Toggle (jobs with higher pay vs lower pay)
          Type of work (e.g., cleaning, childcare, construction, etc.)
      Apply button: Job seekers can express interest in the job via a built-in message system

5. Profile Page (For Account Holders)

    UI Elements:
   
        Profile Icon on the top right of the screen (clicking this leads to the profile page)
        Profile Information:
            Name
            Email/Phone Number (can be updated)
            Verification Status (for workers: displays if they've been verified, including the ability to submit documents for verification)
            Previous Jobs/Job History:
                List of jobs posted/completed
                Reviews or ratings from job posters/workers
            Edit Profile button for updating user information

7. Map Interface (Central Feature for Both Support Finder & Jobs)

    Common Map Features (available in both Support Finder and Job modes):
   
        Toggle Bar:
            Income Level filter (for support services or job opportunities based on the user's income status)
            Type of Support/Job filter (e.g., job type for workers, support type for those seeking aid)
            Location Toggle (default to user’s current location, but adjustable to other areas)
        Map Interaction:
            Dynamic map with pins based on selected filters
            Pop-ups with brief summaries and links to further details when hovering over pins
            Option to switch between list view and map view for job/support search results
        Navigation Options:
            Directions to job sites or support centers via Google Maps or similar services

9. Verification Process (For Workers)

    Purpose: Ensure that workers who are seeking jobs through the app are verified for safety.
   
    Verification Flow:
   
        Account Creation: Worker signs up and is prompted to verify their identity (by submitting a government ID or similar document)
        Approval Process: The app has a backend process where admins verify the submitted documents
        Verification Status: Once verified, workers get a badge on their profile, making it visible to job posters for trust-building

11. Admin Panel (For App Management)

    Admin Features:
    
        User Management: Admins can manage user accounts, including banning users if necessary
        Support Services Database: Ability to add or remove support services on the map
        Verification Management: Approve or deny worker verifications
        Job Listings: Monitor job listings for inappropriate content

13. Notifications (Optional Feature for Account Holders)

    Job Alerts:
    
        Notify job seekers when a new job is posted that matches their filters (e.g., location, job type)
        Notify job posters when a worker applies for their job

15. Security and Privacy

    Security Features:
    
        Data Encryption for sensitive information
        Two-factor authentication for account holders
        Privacy settings for job posters (e.g., hiding exact location)

export interface GuideStep {
  title: string;
  description: string;
  image?: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  image: string;
  section: string;
  steps: GuideStep[];
}

export interface Section {
  id: string;
  title: string;
  image: string;
}

export const sections: Section[] = [
  {
    id: "online-portal",
    title: "Online Portal",
    image: "https://images.unsplash.com/photo-1641790016790-87f04a7fc9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBwb3J0YWwlMjBnb3Zlcm5tZW50JTIwc2VydmljZXMlMjBkaWdpdGFsfGVufDF8fHx8MTc4MTQzNjM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "online-services",
    title: "Online Services",
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBzZXJ2aWNlcyUyMGRpZ2l0YWwlMjB0ZWNobm9sb2d5JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzgxNDM2MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "online-benefits",
    title: "Online Benefits",
    image: "https://images.unsplash.com/photo-1627905644737-c10eef6c542d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBiZW5lZml0cyUyMHNvY2lhbCUyMHNlcnZpY2VzJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzgxNDM2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "loan-online",
    title: "Loan Online",
    image: "https://images.unsplash.com/photo-1559067341-04a52c7d06d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsb2FuJTIwYmFuayUyMGZpbmFuY2UlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3ODE0MzYzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const guides: Guide[] = [
  // Online Portal (3 guides)
  {
    id: "get-sss-number",
    title: "Not yet an SSS member?",
    description: "Get your SSS number by following these steps.",
    image: "https://images.unsplash.com/photo-1623329385382-bc435e9e9414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxvbmxpbmUlMjBwb3J0YWwlMjBnb3Zlcm5tZW50JTIwc2VydmljZXMlMjBkaWdpdGFsfGVufDF8fHx8MTc4MTQzNjM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-portal",
    steps: [
      { title: "Visit the Portal Website", description: "Open your web browser and navigate to the official portal website. Make sure you are on the correct and secure URL before proceeding.", image: "" },
      { title: "Click 'Register'", description: "On the homepage, locate and click the 'Register' or 'Sign Up' button, usually found in the top-right corner of the page.", image: "" },
      { title: "Fill in Personal Details", description: "Enter your full name, date of birth, and a valid email address. Make sure all information matches your official identification documents.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Create a Password", description: "Choose a strong password with at least 8 characters, including uppercase, lowercase, a number, and a special character.", image: "https://images.unsplash.com/photo-1633356713697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Verify Your Email", description: "Check your email inbox for a verification link. Click the link to confirm your email address and activate your account.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Complete Your Profile", description: "Log in and fill in any remaining profile details such as contact number and address to complete your registration.", image: "https://images.unsplash.com/photo-1516534775068-bb555c765c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "register-online",
    title: "Not yet registered online?",
    description: "Register for your SSS online account to access the SSS portal.",
    image: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBwb3J0YWwlMjBnb3Zlcm5tZW50JTIwc2VydmljZXMlMjBkaWdpdGFsfGVufDF8fHx8MTc4MTQzNjM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-portal",
    steps: [
      { title: "Go to the Portal Homepage", description: "Open your browser and visit the official portal website.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Click 'Log In'", description: "Click on the 'Log In' button located at the top-right corner of the homepage.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Enter Your Credentials", description: "Type your registered email address and password into the respective fields.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Click 'Sign In'", description: "Press the 'Sign In' button to submit your credentials.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Access Your Dashboard", description: "You will be redirected to your personal dashboard where you can access all available services.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "online-acop",
    title: "Haven't complied with your ACOP yet?",
    description: "Submit your ACOP online thru facial authentication with National ID/PhilSys Registration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBzZXJ2aWNlcyUyMGRpZ2l0YWwlMjB0ZWNobm9sb2d5JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzgxNDM2MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-portal",
    steps: [
      { title: "Go to the Login Page", description: "Navigate to the portal login page on your web browser.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Click 'Forgot Password'", description: "Below the login form, click on the 'Forgot Password?' link.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Enter Your Email", description: "Type the email address associated with your account and click 'Submit'.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Check Your Email", description: "Open your email inbox and look for a password reset message from the portal.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Click the Reset Link", description: "Click the password reset link in the email. The link expires after 24 hours.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Set a New Password", description: "Enter and confirm your new password, then click 'Save'. You can now log in with your new password.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },

  // Online Services (6 guides)
  {
    id: "reset-password",
    title: "How to Reset Your Password?",
    description: "Regain access to your account by resetting your password.",
    image: "images/PasswordReset.png",
    section: "online-services",
    steps: [
      { title: "Go to www.sss.gov.ph", description: "Click Login to MY.SSS.", image: "images/ONLINERESET/Step1.jpg" },
      { title: "Click Forget Password", description: "", image: "images/ONLINERESET/Step2.jpg" },
      { title: "Click MEMBER", description: "", image: "images/ONLINERESET/Step3.jpg" },
      { title: "Click MULTI-FACTOR AUTHENTICATION", description: "Then press NEXT.", image: "images/ONLINERESET/Step4.jpg" },
      { title: "Enter your CRN/SSS Number, then click PROCEED.", description: "", image: "images/ONLINERESET/Step5.jpg" },
      { title: "Choose your authentication method.", description: "Then, select 'One-Time Pin (OTP)' via SMS.", image: "images/ONLINERESET/Step6.jpg" },
      { title: "Enter the OTP sent via SMS or TOTP from your Authenticator App", description: "Then, click 'Proceed'", image: "images/ONLINERESET/Step7.jpg" },
      { title: "Take note of your User ID and create your new Password, then click submit.", description: "The password must contain a capital letter, lowercase letter, number, and a special character.", image: "images/ONLINERESET/Step8.jpg" },
      { title: "Click 'Yes' to proceed.", description: "", image: "images/ONLINERESET/Step9.jpg" },
      { title: "Click 'Back to Login'.", description: "Then, enter your User ID and new password.", image: "images/ONLINERESET/Step10.jpg" },
    ],
  },
  {
    id: "acop-auth",
    title: "How to Authenticate Your ACOP?",
    description: "Learn how to authenticate your ACOP using facial recognition (check qr plz).",
    image: "images/ACOPCompliance.png",
    section: "online-services",
    steps: [
      { title: "Open your 'Google Chrome' and search 'www.sss.gov.ph'", description: "", image: "images/ACOPFACIAL/Step1.jpg" },
      { title: "Click 'Submit ACOP Compliance'", description: "", image: "images/ACOPFACIAL/Step2.jpg" },
      { title: "Click 'Yes' to proceed", description: "", image: "images/ACOPFACIAL/Step3.jpg" },
      { title: "Click 'Box' then 'Proceed'", description: "", image: "images/ACOPFACIAL/Step4.jpg" },
      { title: "Encode your 'Own SS Number and Birthday'", description: "", image: "images/ACOPFACIAL/Step5.jpg" },
      { title: "Click 'Yes' to confirm your identity", description: "", image: "images/ACOPFACIAL/Step6.jpg" },
      { title: "Click your answer and proceed", description: "", image: "images/ACOPFACIAL/Step7.jpg" },
      { title: "Click 'Start Liveness' for identity verification", description: "", image: "images/ACOPFACIAL/Step8.jpg" },
      { title: "Secure screenshot for successful transaction", description: "", image: "images/ACOPFACIAL/Step9.jpg" },
      { title: "If rejected, please choose any option from A to D to submit your ACOP compliance", description: "", image: "images/ACOPFACIAL/Step10.jpg" },
    ],
  },
  {
    id: "apply-sss-card",
    title: "How to Apply for an SSS Card?",
    description: "Learn how to apply for a new SSS card online.",
    image: "images/MySSSCard.png",
    section: "online-services",
    steps: [
      { title: "Scan this QR", description: "Or Log in to your SSS acount at My.SSS Member Portal (https://member.sss.gov.ph)", image: "images/SSSCARD/Step1.png" },
      { title: "Go to Services > MySSS Card", description: "", image: "images/SSSCARD/Step2.png" },
      { title: "Fill in details & choose", description: "Choose RCBC DiskartTech as the Participating Finance Institution.", image: "images/SSSCARD/Step3.png" },
      { title: "Copy your SSS Transaction No.", description: "", image: "images/SSSCARD/Step4.png" },
      { title: "Download RCBC DiskarTech Savings App", description: "", image: "images/SSSCARD/Step5.png" },
      { title: "Tap SSS Member", description: "", image: "images/SSSCARD/Step6.png" },
      { title: "Enter your SSS Details", description: "", image: "images/SSSCARD/Step7.png" },
      { title: "Complete Verification & go to the Cards Tab", description: "", image: "images/SSSCARD/Step8.png" },
      { title: "All-in-one convenience is here", description: "Avail your MySSS Card powered by RCBC DiskarTech today!", image: "images/SSSCARD/Step9.png" },
      { title: "How and when will i receive my MySSS Card powered by RCBC DiskarTech?", description: "", image: "images/SSSCARD/Step10.png" },
    ],
  },
  {
    id: "set-appointment-benefit-claim",
    title: "How to Set an Appointment for Benefit Claim?",
    description: "Learn how to schedule an appointment for your benefit claim.",
    image: "images/BENEFIT.png",
    section: "online-services",
    steps: [
      { title: "Schedule an APPOINTMENT email", description: "Email it to sssbacolodacoprdf@sss.gov.ph", image: "images/APPOINTMENT/Step1.PNG" },
      { title: "Indicate the following: ", description: "Please wait for the confirmation of your schedule of visit from our Member Service Representative thru your email address.", image: "images/APPOINTMENT/Step2.PNG" },
    ],
  },
  {
    id: "bank-disbursement-account-enrollment",
    title: "Bank Disbursement Account Enrollment Module",
    description: "Learn how to enroll your bank account for SSS benefit disbursement online.",
    image: "images/DAEM.jpg",
    section: "online-services",
    steps: [
      { title: "Open your 'GOOGLE CHROME'", description: "", image: "images/DAEM/Step1.png" },
      { title: "Go to member.sss.gov.ph", description: "", image: "images/DAEM/Step2.jpg" },
      { title: "Enter your USER ID and PASSWORD", description: "Then, click SIGN IN", image: "images/DAEM/Step3.jpg" },
      { title: "Click GET PIN and encode your OTP (One Time Pin), then click LOG IN", description: "(OTP will be sent as a TEXT MESSAGE)", image: "images/DAEM/Step4.jpg" },
      { title: "Read DATA PRIVACY NOTE then click I AGREE", description: "", image: "images/DAEM/Step5.jpg" },
      { title: "Click SERVICES then DISBURSEMENT ACCOUNT", description: "", image: "images/DAEM/Step6.jpg" },
      { title: "Click I CERTIFY then click PROCEED", description: "", image: "images/DAEM/Step7.jpg" },
      { title: "Select BANK then encode your BANK ACCOUNT NUMBER", description: "Re-Type CONFIRM BANK ACCOUNT NUMBER then click NEXT", image: "images/DAEM/Step8.jpg" },
      { title: "In Proof of Account, 'Select Document Type' then upload your document/pictures", description: "Suggested proof of account could be ATM with complete and correct name, indicated ACCOUNT NUMBER (not ATM or Card number), or Validated Deposit Slip", image: "images/DAEM/Step9.jpg" },
      { title: "READ and REVIEW bank information and uploaded documents", description: "Then, click I CERTIFY and lastly click ENROLL", image: "images/DAEM/Step10.jpg" },
      { title: "Wait for the email notification from SSS on the result of uploaded supporting document", description: "", image: "images/DAEM/Step11.jpg" },
    ],
  },
  {
    id: "non-bank-disbursement-account-enrollment",
    title: "How to Enroll for Non-Bank Disbursement Account?",
    description: "Enroll your non-bank account for SSS benefit disbursement online.",
    image: "images/DAEM.jpg",
    section: "online-services",
    steps: [
      { title: "Open your 'GOOGLE CHROME'", description: "", image: "images/NONDAEM/Step1.png" },
      { title: "Search at URL: member.sss.gov.ph", description: "", image: "images/NONDAEM/Step2.png" },
      { title: "Enter your USER ID and PASSWORD", description: "Then, click SIGN IN", image: "images/NONDAEM/Step3.png" },
      { title: "Click GET PIN and encode your OTP (One Time Pin), then click LOG IN", description: "(OTP will be sent as a TEXT MESSAGE)", image: "images/NONDAEM/Step4.png" },
      { title: "Read DATA PRIVACY NOTE then click I AGREE", description: "", image: "images/NONDAEM/Step5.png" },
      { title: "Click SERVICES then DISBURSEMENT ACCOUNT", description: "", image: "images/NONDAEM/Step6.png" },
      { title: "Click I CERTIFY then click PROCEED", description: "", image: "images/NONDAEM/Step7.png" },
      { title: "Select DBP CASH PADALA THRU MLHUILLIER and encode your mobile number", description: "Then, re-type to confirm and click NEXT", image: "images/NONDAEM/Step8.png" },
      { title: "Upload Government Issued ID and Picture of member holding his/her ID", description: "NOTE: Please read instructions upon uploading. File format is JPG/PDF with a maximum size of 3MB", image: "images/NONDAEM/Step9.png" },
      { title: "READ and REVIEW bank information and uploaded documents", description: "Then, click I CERTIFY and lastly click ENROLL", image: "images/NONDAEM/Step10.png" },
      { title: "Wait for the email notification from SSS on the result of uploaded supporting document", description: "", image: "images/NONDAEM/Step11.png" },
    ],
  },

  // Online Benefits (6 guides)
  {
    id: "funeral-claim",
    title: "How to Apply for Funeral Claim?",
    description: "Apply for funeral benefits online by following these steps.",
    image: "https://images.unsplash.com/photo-1562646329-0d0f4d3bf503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBiZW5lZml0cyUyMHNvY2lhbCUyMHNlcnZpY2VzJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzgxNDM2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-benefits",
    steps: [
      { title: "Log In to the Portal", description: "Sign in with your registered account credentials.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Go to 'Benefits'", description: "In your dashboard, click on 'Benefits' from the main navigation menu.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Select the Benefit Type", description: "Choose the type of benefit you wish to apply for from the available list.", image: "https://images.unsplash.com/photo-1452587007148-ce60e9bef211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Check Your Eligibility", description: "Review the eligibility criteria and ensure you qualify before starting the application.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Fill Out the Application Form", description: "Complete all required fields accurately in the online application form.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Upload Supporting Documents", description: "Attach required documents such as valid ID, proof of income, or medical certificates.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Submit Your Application", description: "Review your application and click 'Submit'. Keep your reference number for tracking.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "retirement-claim",
    title: "Learn how to process your retirement claim/lump sum application online.",
    description: "Monitor the progress of your benefit application.",
    image: "https://images.unsplash.com/photo-1641790016790-87f04a7fc9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBwb3J0YWwlMjBnb3Zlcm5tZW50JTIwc2VydmljZXMlMjBkaWdpdGFsfGVufDF8fHx8MTc4MTQzNjM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-benefits",
    steps: [
      { title: "Log In to Your Account", description: "Access the portal using your email and password.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Go to 'My Applications'", description: "Click on 'My Applications' or 'Benefit Status' in your dashboard.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Search for Your Application", description: "Use your reference number or application date to find your submitted application.", image: "https://images.unsplash.com/photo-1452587007148-ce60e9bef211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "View Current Status", description: "See the current status of your application: Submitted, Under Review, Approved, or Rejected.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Act on Notifications", description: "If additional documents are requested, upload them promptly to avoid delays.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "death-claim",
    title: "How to Apply for Death Claim?",
    description: "Submit a claim for death benefits online.",
    image: "https://images.unsplash.com/photo-1722937117724-4044158343df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvbmxpbmUlMjBiZW5lZml0cyUyMHNvY2lhbCUyMHNlcnZpY2VzJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzgxNDM2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-benefits",
    steps: [
      { title: "Log In to the Portal", description: "Sign in to your account using your credentials.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Navigate to 'Beneficiaries'", description: "From your dashboard, go to 'Benefits' then select 'Manage Beneficiaries'.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Add or Edit a Beneficiary", description: "Click 'Add Beneficiary' or select an existing one to edit their information.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Enter Beneficiary Details", description: "Provide the full name, date of birth, relationship, and contact details of the beneficiary.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Upload Required Documents", description: "Attach valid ID and proof of relationship (e.g., birth certificate, marriage certificate).", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Save and Confirm", description: "Click 'Save' to update your beneficiary information. You will receive a confirmation email.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "sickness-benefit",
    title: "How to File a Sickness Benefit Claim?",
    description: "Submit a claim to receive your entitled sickness benefits.",
    image: "https://images.unsplash.com/photo-1627905644737-c10eef6c542d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBiZW5lZml0cyUyMHNvY2lhbCUyMHNlcnZpY2VzJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzgxNDM2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-benefits",
    steps: [
      { title: "Log In to the Portal", description: "Access your account using your registered credentials.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Go to 'Claims'", description: "Click on 'File a Claim' under the Benefits section in your dashboard.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Select the Claim Type", description: "Choose the type of claim you are filing (e.g., sickness, maternity, disability).", image: "https://images.unsplash.com/photo-1452587007148-ce60e9bef211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Complete the Claim Form", description: "Fill in all required fields with accurate information about your claim.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Attach Medical or Supporting Documents", description: "Upload relevant documents such as medical certificates, receipts, or hospital records.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Submit the Claim", description: "Review and submit your claim. Processing usually takes 7-15 business days.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "maternity-benefit",
    title: "How to Apply for Maternity Benefit?",
    description: "Guide on filing for maternity benefit online.",
    image: "https://images.unsplash.com/photo-1562646329-0d0f4d3bf503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBiZW5lZml0cyUyMHNvY2lhbCUyMHNlcnZpY2VzJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzgxNDM2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-benefits",
    steps: [
      { title: "Log In to Your Account", description: "Sign in to the portal using your credentials.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Go to 'Contributions'", description: "Click on 'Contributions' or 'Payment History' from the Benefits menu.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Select a Date Range", description: "Use the date filter to view contributions within a specific period.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Review Your Records", description: "A table will display all your posted contributions with dates, amounts, and employer details.", image: "https://images.unsplash.com/photo-1452587007148-ce60e9bef211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Download or Print", description: "Click 'Download' to export your contribution records as a PDF for your records.", image: "https://images.unsplash.com/photo-1515378960830-ce8985007c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "disability-claim",
    title: "How to Apply for Disability Claim?",
    description: "Guide on filing for disability claim online.",
    image: "https://images.unsplash.com/photo-1562646329-0d0f4d3bf503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBiZW5lZml0cyUyMHNvY2lhbCUyMHNlcnZpY2VzJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzgxNDM2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "online-benefits",
    steps: [
      { title: "Log In to the Portal", description: "Sign in to your online account.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Navigate to 'Disability Claim'", description: "Under Benefits, select 'Disability Claim Application'.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Submit Disability Notification First", description: "If required, submit your disability notification at least 30 days before your expected delivery date.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Complete the Claim Form", description: "Fill in your expected delivery date, type of delivery, and other required information.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Upload Required Documents", description: "Submit medical certificate from your OB-GYN, birth certificate (after delivery), and valid ID.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Submit and Await Processing", description: "Click 'Submit'. Benefit will be released within 5 business days after approval.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },

  // Loan Online (2 guides)
  {
    id: "salary-loan",
    title: "How to Apply for a Salary/Calamity/Emergency Loan?",
    description: "Learn how to submit your loan application through the online portal.",
    image: "https://images.unsplash.com/photo-1559067341-04a52c7d06d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsb2FuJTIwYmFuayUyMGZpbmFuY2UlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3ODE0MzYzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "loan-online",
    steps: [
      { title: "Log In to the Portal", description: "Sign in to your registered account on the portal.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Go to 'Loans'", description: "Click on the 'Loans' section from your dashboard menu.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Check Your Eligibility", description: "Review the loan eligibility requirements. Ensure you meet the minimum contribution and membership requirements.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Select Loan Type", description: "Choose the type of loan you wish to apply for (e.g., salary loan, calamity loan, housing loan).", image: "https://images.unsplash.com/photo-1452587007148-ce60e9bef211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Enter Loan Details", description: "Input the desired loan amount and repayment term. The system will display the monthly amortization.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Review and Submit", description: "Carefully review your application details. Click 'Submit' to send your application for processing.", image: "https://images.unsplash.com/photo-1553930817-9546f919f440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Wait for Approval", description: "Loan processing typically takes 3-5 business days. You will be notified via email once approved.", image: "https://images.unsplash.com/photo-1666214280192-f539dc9dd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
  {
    id: "pension-loan",
    title: "How to file for pension loan?",
    description: "Learn how to apply for a pension loan.",
    image: "https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsb2FuJTIwYmFuayUyMGZpbmFuY2UlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3ODE0MzYzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    section: "loan-online",
    steps: [
      { title: "Log In to Your Account", description: "Access your portal account using your credentials.", image: "https://images.unsplash.com/photo-1633356313697-d83eb2f8fa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Go to 'My Loans'", description: "Click on 'My Loans' or 'Loan Status' from the Loans menu in your dashboard.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "View Your Loan Applications", description: "A list of your active and previous loan applications will be displayed.", image: "https://images.unsplash.com/photo-1452587007148-ce60e9bef211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Click on a Loan", description: "Select the specific loan you want to track to view its details and current status.", image: "https://images.unsplash.com/photo-1553930817-9546f919f440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
      { title: "Check Balance and Schedule", description: "View your outstanding balance, payment schedule, and remaining amortization details.", image: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    ],
  },
];

# Privacy Policy for Noeji

**Last Updated:** May 31, 2025

RocketByte LLC ("RocketByte," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Noeji mobile application, web application (when available), and related services (collectively, the "Service").

Please read this Privacy Policy carefully. **BY ACCESSING OR USING THE SERVICE, YOU AGREE TO THE TERMS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE, DO NOT ACCESS OR USE THE SERVICE.**

This Privacy Policy should be read in conjunction with our Terms of Service.

## 1. Information We Collect

In the course of providing the Service, we may collect various types of information from and about you, as described below. The specific types of information we collect may depend on the features you use and how you interact with the Service.

### (A) Personal Data You Provide to Us:

*   **Account Information:** When you register for an account, which may involve using third-party authentication providers (such as Google Sign-In or Apple Sign-In, or other providers we may support in the future), we receive certain profile information from these services or directly from you. This may include your name, email address, and profile picture, as permitted by your settings on those services, their privacy policies, or the information you provide during registration.
*   **User Content:** We collect the content and information you create, input, upload, or store within Noeji. This includes, but is not limited to, text, transcribed audio, information you organize into various structures within the app, prompts you provide to AI features, and any other materials you generate or manage through the Service ("User Content"). This User Content is processed by our systems, including AI/LLM components, to provide and enhance the features and functionality of the Service.
*   **Audio Recordings for Transcription:** To enable voice-to-text features, the Service captures your audio input. This audio data is immediately transmitted to our third-party AI service provider, Google (specifically, the Gemini API, which we use as a "Paid Service" under their terms), for the sole purpose of transcription. **RocketByte itself does not store the raw audio recordings after they have been transmitted for transcription.** As of the "Last Updated" date of this Privacy Policy, Google's terms for Paid Services of the Gemini API indicate that Google does not use your audio prompts or the transcribed responses from this Paid Service to improve their general AI models. Google states that they process this data in accordance with their Data Processing Addendum and may log prompts and responses for a limited time solely for abuse detection and legal/regulatory purposes. This data may be stored transiently or cached by Google as necessary to provide the transcription service. **However, Google's terms and practices may change, and we encourage you to review their current relevant terms and data processing information for their AI services, including the [Gemini API Additional Terms of Service](https://ai.google.dev/gemini-api/terms), which are authoritative.** The transcribed text, once returned to our Service, becomes part of your User Content.
*   **Passcode Information:** We store an encrypted salt (a non-reversible fingerprint) of the passcode you set to lock/unlock ideabooks. We do not store your actual passcode.
*   **Communications:** If you contact us directly (e.g., for support), we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

### (B) Information We Collect Automatically:

*   **Usage Data:** We automatically collect information about your interactions with the Service using Firebase Analytics and other tools. This includes features you use, actions you take (e.g., creating an ideabook, saving a note, chat message counts), ideabook color selections, sort order preferences, theme selection, filter settings, timestamps, and frequency of use. This may include aggregated data about the length of audio recordings or the number of words in ideabook names or ideas for the purpose of enforcing limits and improving the service.
*   **Device and Technical Information:** We collect information about the device you use to access the Service, such as your device model, operating system and version, app version, IP address (which may be used to infer general location), device identifiers, and crash data.
*   **Location Information:** With your permission (if requested by the app and if you enable location services for the App), we may collect your device's precise or approximate location to optimize results or provide location-based features. You can typically disable location services through your device settings.
*   **Chat History (Local Storage):** Your chat history with the LLM for each ideabook is stored locally on your device. It is not synced to the cloud and is lost if you switch devices or reinstall the app without a backup. While stored locally, if you engage in chat, the individual messages (your prompts and AI responses) are processed by our servers and third-party AI providers, who may have their own data retention policies for such processed data as outlined in their respective terms and privacy policies.

### (C) Information from Third Parties:

*   **Authentication Providers:** As mentioned, if you use a third-party service to create or log into your account (e.g., Google Sign-In, Apple Sign-In, or others we may offer), we receive profile information from that provider as permitted by their policies and your privacy settings on that service.
*   **Subscription Management (RevenueCat):** We receive your Firebase Auth UID and subscription status information from RevenueCat to manage your Free or Pro tier access. We do not receive or store your payment card details; these are handled by Apple App Store or Google Play Store.

## 2. How We Use Your Information

We use the information we collect for various purposes, including to:

*   Provide, operate, maintain, and improve the Service.
*   Create and manage your account, and authenticate your access.
*   Process your User Content with AI/LLM services to provide the Service's functionalities.
*   Personalize your experience (e.g., remember your preferences).
*   Process subscriptions and manage user tiers (Free/Pro).
*   Communicate with you, including responding to your inquiries, providing customer support, and sending you service-related announcements, updates, security alerts, and administrative messages.
*   Monitor and analyze trends, usage, and activities in connection with our Service to improve user experience and performance. This may include using aggregated and anonymized data for our business purposes, such as data analysis, audits, fraud monitoring and prevention, diagnosing and fixing technical problems, developing new products and features, enhancing, improving or modifying our Service, identifying usage trends, determining the effectiveness of our promotional campaigns and operating and expanding our business activities.
*   Enforce our Terms of Service, prevent abuse, and ensure the security and integrity of our Service (e.g., rate limiting, Firebase App Check).
*   Comply with legal obligations and protect our rights and the rights of others.
*   For any other purpose with your consent.

> **AI Model Training Clarification:** RocketByte LLC does not use your identifiable User Content to train its own proprietary AI models (if any exist separately from third-party provided models). When you use Noeji, your User Content (such as audio for transcription or text prompts for AI features) is processed by our third-party AI service provider, Google (using the Gemini API as a "Paid Service"). As of the "Last Updated" date of this Privacy Policy, Google's terms for such Paid Services (see [Gemini API Additional Terms of Service](https://ai.google.dev/gemini-api/terms)) state that Google does not use your prompts or responses from this Paid Service usage to improve their general AI models. Their processing is governed by their specific Data Processing Addendum. **Because these third-party terms can be updated by Google, we encourage you to review them directly for the most current information on their data handling practices.**

## 3. How We Share Your Information

We may share your information in the following situations:

*   **With Third-Party Service Providers:** We share information with third-party vendors, consultants, and other service providers who perform services on our behalf. These include:
    *   **Cloud Infrastructure (Firebase by Google):** For data storage (Firestore), authentication, serverless functions (Cloud Functions), remote configuration, analytics, and app security (App Check). Your User Content is stored on Firebase.
    *   **AI/LLM Provider (Google Gemini API - Paid Service):** Your User Content (e.g., audio for transcription, text for AI features) is sent to Google's Gemini API (which we utilize as a "Paid Service" under their terms) for processing to enable Noeji's AI functionalities. As of the "Last Updated" date of this Privacy Policy, Google's terms for this Paid Service (see [Gemini API Additional Terms of Service](https://ai.google.dev/gemini-api/terms)) indicate they do not use your prompts or responses from this Paid Service to improve their general AI models and process this data under their Data Processing Addendum, logging data for a limited time for abuse detection and legal purposes. **You acknowledge that Google's data handling practices are ultimately governed by their terms and data processing agreements, which can change, and which we encourage you to review.**
    *   **Subscription Management (RevenueCat):** We share your Firebase Auth UID with RevenueCat to manage your subscription status.
    *   **Analytics Providers (Firebase Analytics):** To help us understand usage patterns.
*   **For Legal Reasons:** We may disclose your information if we believe it's necessary to:
    *   Comply with applicable law, regulation, legal process, or governmental request.
    *   Enforce our Terms of Service, including investigation of potential violations.
    *   Detect, prevent, or otherwise address fraud, security, or technical issues.
    *   Protect the rights, property, or safety of RocketByte, our users, or the public as required or permitted by law.
*   **Business Transfers:** In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company, your information may be transferred as part of that transaction. We will use reasonable efforts to notify you via email and/or a prominent notice on our Service of any change in ownership or uses of your personal information, as well as any choices you may have.
*   **Aggregated or Anonymized Data:** We may share aggregated or anonymized information that does not directly identify you for research, analysis, or other purposes. For example, we may share statistics about app usage.
*   **With Your Consent:** We may share your information for other purposes with your explicit consent.

We do not sell your personal information. Noeji does not currently display third-party advertisements. If this changes, we will update this Privacy Policy.

## 4. Data Storage and Security

*   **Data Location:** Your data, including User Content stored in Firebase Firestore, is primarily stored and processed in the United States.
*   **Security Measures:** We implement reasonable administrative, technical, and physical security measures designed to protect your information from unauthorized access, use, alteration, or destruction. This includes using Firebase security features, encrypting passcode fingerprints (salts), and securing API keys.
*   **Passcode Security:** As stated in our Terms of Service, you are responsible for your passcode. It is not stored by us in a recoverable format.
*   **Your Role in Security:** In addition to the security measures we implement, the security of your information also depends on you. You are responsible for keeping your account credentials (including your social login details and any app-specific passcode) confidential and for using secure practices when accessing the Service.
*   **Limitations:** Despite our efforts, no security measures are perfect or impenetrable. We cannot guarantee the absolute security of your information. Any transmission of information is at your own risk.

## 5. Data Retention

We retain your personal information for as long as your account is active or as needed to provide you with the Service. We may also retain and use your information as necessary to comply with our legal obligations, resolve disputes, protect our assets, enforce our agreements, and for legitimate business purposes (e.g., improving the service with aggregated/anonymized data).

*   **User Content:** Your User Content stored in Firestore will be retained as long as your account is active, unless you delete them or your account is terminated.
*   **Chat History:** Chat history is stored locally on your device and is not retained by us on our servers beyond the immediate processing of individual messages by AI providers to generate responses.
*   **Inactive Accounts:** As per our Terms of Service, accounts inactive for twelve (12) months may be deleted, along with associated data, after a 30-day notice period.

## 6. Your Rights and Choices

Depending on your location and applicable law, you may have certain rights regarding your personal information. For US users, these may include:

*   **Access and Update:** Accessing and Updating Your Information: You can access and update information that you create and store directly within Noeji, such as your ideabook names. The name and email address associated with your Google or Apple login are provided by those services. While you cannot change this information directly through Noeji, updates made in your Google or Apple account will generally be reflected in your Noeji profile upon subsequent logins. You can manage app connections and data sharing through your respective Google or Apple account settings.
*   **Delete User Content:** You can delete your ideabooks, ideas, and notes within the app. Deleting an ideabook will also delete its associated ideas and notes.
*   **Clear Chat History:** You can clear chat history for an ideabook within the app. This deletes it from your local device.
*   **Account Deletion:** You can request deletion of your account and associated personal data by contacting us at support@rokabyte.com. We will process such requests in accordance with applicable law and our data retention policies. Please note that some information may be retained for legal or legitimate business purposes, including for backup, archival, fraud prevention, or audit purposes, or as otherwise required by law. The methods for exercising these rights may be subject to limitations and exceptions under applicable law, and any interpretation of such rights will be made by RocketByte in its reasonable discretion consistent with applicable law.
*   **Location Services:** You can disable location services through your device settings if you do not want us to collect location information.
*   **Promotional Communications:** If we send promotional emails, you can opt-out by following the unsubscribe instructions in those emails. You may still receive transactional or administrative emails related to your account and the Service.

## 7. Children's Privacy

The Service is intended for users who are at least 18 years of age or older. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that an individual under the age of 18 has provided us with personal information without verification of parental consent (where applicable for minors who may somehow gain access despite our terms, though our service is directed to those 18+), or in violation of our Terms of Service, we will take steps to delete such information from our files.

If you are a parent or guardian and believe that an individual under the age of 18 (for whom you are responsible) has provided us with personal information, please contact us at support@rokabyte.com so that we can take appropriate action. By using the Service, you represent that you are at least 18 years old.

## 8. Third-Party Websites and Services

The Service may contain links to third-party websites or services that are not owned or controlled by RocketByte. This Privacy Policy does not apply to the practices of third parties that we do not own or control. We encourage you to review the privacy policies of any third-party service you interact with.

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. If we make changes we determine to be material, we will endeavor to notify you before such changes become effective. Notification methods may include updating the "Last Updated" date at the top of this policy, providing notice through the Service (such as a pop-up or announcement), or, where we deem it appropriate for significant changes or if required by applicable law, by sending a notification to your registered email address. The timing and method of notice will be at our reasonable discretion, taking into account the nature of the changes and applicable legal requirements. We encourage you to review this Privacy Policy periodically to stay informed about our information practices. Your continued use of the Service after any changes to this Privacy Policy become effective constitutes your acceptance of such changes.

## 10. Contact Us

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

RocketByte LLC
Email: support@rokabyte.com

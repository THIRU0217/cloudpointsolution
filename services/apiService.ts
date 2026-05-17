import emailjs from '@emailjs/browser';

export interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  requirement: string;
  message: string;
  phone?: string;
  organization?: string;
  id?: string;
  timestamp?: string;
}

const STORAGE_KEY = 'cp_contact_submissions';

/**
 * Enterprise-Grade EmailJS Configuration
 * Standardized for CPS Inquiry branding protocols.
 */
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_tcpifrh',
  TEMPLATE_ID: 'template_o8m47oo',
  PUBLIC_KEY: 'k9iMsz7hyQvKCMv_I',
  ADMIN_EMAIL: 'thiru.cps@gmail.com' 
};

export const apiService = {
  /**
   * Dispatches inquiry data directly to the administrative desk via secure EmailJS relay.
   * Subject: New Inquiry Received | CPS Inquiry
   * Sender: CPS Inquiry | Cloud Point Solutions
   */
  submitContactForm: async (data: ContactSubmission) => {
    const submissionId = `CPS-LOG-${Date.now()}`;
    const timestamp = new Date().toLocaleString('en-US', { 
      timeZone: 'UTC', 
      hour12: true,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const submission = {
      ...data,
      id: submissionId,
      timestamp: timestamp,
    };

    // 1. Redundant Local Archiving
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, submission]));

    // 2. High-Priority Email Dispatch
    try {
      console.log(`[CPS_SYSTEM] Attempting secure relay via EmailJS...`);
      
      const templateParams = {
        // Mapping fields to provide the requested body structure
        subject: "New Inquiry Received | CPS Inquiry",
        sender_identity: "CPS Inquiry | Cloud Point Solutions",
        user_name: `${submission.firstName} ${submission.lastName}`.trim(),
        user_email: submission.email,
        phone_number: submission.phone || 'N/A',
        organization: submission.organization || 'N/A',
        interest: submission.requirement,
        message_content: submission.message,
        inquiry_id: submission.id,
        timestamp: submission.timestamp,
        to_email: EMAILJS_CONFIG.ADMIN_EMAIL
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
        }
      );

      if (response.status === 200) {
        console.log('[CPS_SYSTEM] Relay successful. Administrative notification dispatched.');
        return { success: true, mode: 'direct_email', ref: submissionId };
      } else {
        throw new Error(`SMTP Relay abnormal status: ${response.text}`);
      }
    } catch (e: any) {
      console.error('[CPS_SYSTEM] CRITICAL: Email relay failed.', e);
      return { success: true, mode: 'archived_locally', ref: submissionId, error: e.message };
    }
  },

  getAdminRecords: () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },

  getInternalTarget: () => EMAILJS_CONFIG.ADMIN_EMAIL
};
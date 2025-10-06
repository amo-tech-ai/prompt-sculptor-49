import { z } from "zod";

/**
 * Contact form validation schema
 * Implements strict validation and sanitization rules
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { 
      message: "Name can only contain letters, spaces, hyphens, and apostrophes" 
    }),
  
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[\d\s\-\+\(\)]+$/.test(val), {
      message: "Phone number can only contain numbers, spaces, and ()+-"
    }),
  
  company: z
    .string()
    .trim()
    .max(200, { message: "Company name must be less than 200 characters" })
    .optional(),
  
  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * WhatsApp message validation
 * Ensures safe URL encoding
 */
export const whatsappMessageSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, { message: "Message cannot be empty" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
  
  phone: z
    .string()
    .regex(/^\+?[\d\s\-]+$/, { 
      message: "Invalid phone number format" 
    }),
});

/**
 * Sanitizes string for URL encoding
 * Prevents injection attacks in WhatsApp/external URLs
 */
export function sanitizeForUrl(input: string): string {
  return encodeURIComponent(input.trim());
}

/**
 * Validates and sanitizes contact form data
 */
export function validateContactForm(data: unknown): {
  success: boolean;
  data?: ContactFormData;
  errors?: Record<string, string[]>;
} {
  try {
    const validated = contactFormSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        if (!errors[path]) errors[path] = [];
        errors[path].push(issue.message);
      });
      return { success: false, errors };
    }
    return { success: false, errors: { _general: ["Validation failed"] } };
  }
}

/**
 * Rate limiting helper (client-side)
 * Prevents spam submissions
 */
const submissionTimestamps: Record<string, number[]> = {};

export function checkRateLimit(identifier: string, maxAttempts = 3, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps[identifier] || [];
  
  // Remove old timestamps outside the window
  const recentTimestamps = timestamps.filter(ts => now - ts < windowMs);
  
  if (recentTimestamps.length >= maxAttempts) {
    return false; // Rate limit exceeded
  }
  
  // Add current timestamp
  recentTimestamps.push(now);
  submissionTimestamps[identifier] = recentTimestamps;
  
  return true;
}

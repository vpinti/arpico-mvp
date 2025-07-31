'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function handleContactForm(values: z.infer<typeof formSchema>): Promise<ContactFormState> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  try {
    // In a real application, you would send an email or save to a database here.
    // For this example, we'll just log the data to the console.
    console.log('New contact form submission:');
    console.log('Name:', parsed.data.name);
    console.log('Email:', parsed.data.email);
    console.log('Subject:', parsed.data.subject);
    console.log('Message:', parsed.data.message);
    
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error('Error handling contact form:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}

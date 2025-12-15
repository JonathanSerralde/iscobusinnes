'use server';

/**
 * @fileOverview This file defines a Genkit flow to analyze website content and provide SEO optimization suggestions.
 *
 * The flow takes website content as input and returns suggestions for optimizing it for SEO, SEM, and AEO.
 * The file exports:
 * - `optimizeContentForSEO`: The main function to trigger the content optimization flow.
 * - `OptimizeContentForSEOInput`: The input type for the `optimizeContentForSEO` function.
 * - `OptimizeContentForSEOOutput`: The output type for the `optimizeContentForSEO` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentForSEOInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The content of the website to be optimized for SEO.'),
  keywords: z
    .string()
    .optional()
    .describe('Optional keywords to focus on during SEO optimization.'),
});
export type OptimizeContentForSEOInput = z.infer<
  typeof OptimizeContentForSEOInputSchema
>;

const OptimizeContentForSEOOutputSchema = z.object({
  optimizedContent: z
    .string()
    .describe('The optimized content for the website, incorporating SEO, SEM, and AEO principles.'),
  suggestedKeywords: z
    .string()
    .describe('Suggested keywords to improve search engine ranking.'),
  metaDescription: z
    .string()
    .describe('A suggested meta description for the website.'),
});
export type OptimizeContentForSEOOutput = z.infer<
  typeof OptimizeContentForSEOOutputSchema
>;

export async function optimizeContentForSEO(
  input: OptimizeContentForSEOInput
): Promise<OptimizeContentForSEOOutput> {
  return optimizeContentForSEOFlow(input);
}

const optimizeContentForSEOPrompt = ai.definePrompt({
  name: 'optimizeContentForSEOPrompt',
  input: {schema: OptimizeContentForSEOInputSchema},
  output: {schema: OptimizeContentForSEOOutputSchema},
  prompt: `You are an expert in SEO, SEM, and AEO.

  Analyze the following website content and provide suggestions for optimizing it for search engines, marketing, and app store optimization.

  Content: {{{websiteContent}}}

  Focus on improving search engine rankings and attracting more organic traffic.

  Consider the following keywords if provided: {{{keywords}}}

  Provide optimized content, suggested keywords, and a meta description.

  Make sure the optimized content retains the original meaning and intent.
  `,
});

const optimizeContentForSEOFlow = ai.defineFlow(
  {
    name: 'optimizeContentForSEOFlow',
    inputSchema: OptimizeContentForSEOInputSchema,
    outputSchema: OptimizeContentForSEOOutputSchema,
  },
  async input => {
    const {output} = await optimizeContentForSEOPrompt(input);
    return output!;
  }
);

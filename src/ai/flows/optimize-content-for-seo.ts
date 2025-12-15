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
    .describe('The optimized content for the website, incorporating SEO, SEM, and AEO principles. Use Markdown for structure with headings (e.g., ## Title) and lists (e.g., - item).'),
  suggestedKeywords: z
    .string()
    .describe('A comma-separated string of suggested keywords to improve search engine ranking.'),
  metaDescription: z
    .string()
    .describe('A suggested meta description for the website (maximum 160 characters).'),
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
  prompt: `You are an expert in SEO (Search Engine Optimization), SEM (Search Engine Marketing), and AEO (Answer Engine Optimization).

  Your task is to analyze the provided website content and transform it into a well-structured, engaging, and optimized piece.

  Analyze the following website content:
  Content: {{{websiteContent}}}

  Consider the following keywords if provided: {{{keywords}}}

  Rewrite the content with the following objectives:
  1.  **Structure and Readability**: Organize the content with clear headings and subheadings using Markdown (e.g., '## Mi Título', '### Mi Subtítulo'). Use lists with hyphens for bullet points.
  2.  **SEO & SEM Integration**: Naturally integrate the provided keywords and other relevant terms throughout the content to improve search engine rankings.
  3.  **AEO Principles**: Structure the content to directly answer potential user questions. Use clear and concise language.
  4.  **Tone and Style**: Maintain the original meaning and professional tone of the content.

  Your final output must include:
  -   **optimizedContent**: The rewritten content in Markdown format.
  -   **suggestedKeywords**: A comma-separated list of new and relevant keywords.
  -   **metaDescription**: A compelling meta description of 150-160 characters.
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

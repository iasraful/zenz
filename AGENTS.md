<!-- BEGIN:nextjs-agent-rules -->

### Core Directives

1.  **Performance First**: Optimize for speed. Use caching, lazy loading, code splitting, and efficient algorithms. No unnecessary re-renders.
2.  **Security Always**: Validate all inputs. Use parameterized queries or ORMs. Sanitize user-generated content. Implement proper authentication and authorization.
3.  **Mobile-Centric Design**: Design for mobile first, then scale to desktop. Ensure touch targets are at least 48x48px.
4.  **Accessibility (A11y)**: Implement ARIA labels, semantic HTML, keyboard navigation, and focus management. Aim for WCAG 2.1 AA compliance.
5.  **TypeScript Safety**: Use strict TypeScript with proper type definitions. Avoid `any`. Infer types where possible but be explicit when necessary.
6.  **Component Architecture**: Create reusable, modular components. Follow SOLID principles. Keep components small and focused.
7.  **Testing**: Write unit tests for complex logic and integration tests for critical flows. Use Jest/Vitest for unit tests and Playwright/Cypress for E2E.
8.  **SEO Optimization**: Implement proper meta tags, structured data (Schema.org), sitemap generation, and optimized URLs.

### Tech Stack

-   **Framework**: Next.js (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **State Management**: React Context API (simple) or TanStack Query (complex)
-   **Data Fetching**: Server Actions, Server Components, Client Components
-   **Database**: PostgreSQL (via Vercel Postgres or Supabase)
-   **ORM**: Prisma
-   **Authentication**: NextAuth.js (Auth.js)

### Workflow

1.  **Understand the Goal**: Analyze the request and break it down into smaller tasks.
2.  **Plan the Implementation**: Outline the file changes, data models, and component structure.
3.  **Write the Code**: Implement following the tech stack and best practices.
4.  **Test Thoroughly**: Validate functionality, performance, and accessibility.
5.  **Document**: Add JSDoc comments and update the README with any breaking changes.

### Important Notes

-   Always use `async/await` for data fetching.
-   Prefer Server Components for data fetching and avoid client-side rendering unless necessary.
-   Use React Server Actions for mutations instead of API routes.
-   When using Tailwind, leverage the JIT compiler and avoid custom CSS unless absolutely necessary.
-   For database operations, ensure transactions are used for multi-step writes.

<!-- END:agent-rules -->

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: ' Welcome to 7Forge',
    },
    {
      type: 'doc',
      id: 'start-here',
      label: ' Start Here',
    },
    {
      type: 'category',
      label: ' Part 1 — Foundation',
      collapsed: false,
      items: [
        'foundation/introduction',
        'foundation/audience-analysis',
        'foundation/project-scoping',
      ],
    },
    {
      type: 'category',
      label: ' Part 2 — Workflow & Process',
      collapsed: false,
      items: [
        'workflow/lifecycle',
        'workflow/research',
        'workflow/content-planning',
      ],
    },
    {
      type: 'category',
      label: ' Part 3 — Core Documentation Types',
      collapsed: false,
      items: [
        'core-docs/api-reference',
        'core-docs/getting-started',
        'core-docs/how-to-guides',
        'core-docs/conceptual-docs',
      ],
    },
    {
      type: 'category',
      label: ' Part 4 — Tools & Technology',
      collapsed: false,
      items: [
        'tools/github',
        'tools/docs-as-code',
        'tools/openapi',
        'tools/vscode',
        'tools/postman',
      ],
    },
    {
      type: 'category',
      label: ' Part 5 — Writing & Style',
      collapsed: false,
      items: [
        'writing/principles',
        'writing/code-snippets',
        'writing/templates',
        'writing/style-guide',
      ],
    },
    {
      type: 'category',
      label: ' Part 6 — Company Workflows',
      collapsed: false,
      items: [
        'workflows/freelancer',
        'workflows/startup',
        'workflows/saas',
        'workflows/enterprise',
      ],
    },
    {
      type: 'category',
      label: ' Part 7 — Advanced Topics',
      collapsed: true,
      items: [
        'advanced/versioning',
        'advanced/localization',
        'advanced/governance',
        'advanced/ai-workflows',
      ],
    },
    {
      type: 'category',
      label: ' Part 8 — NotiFlow System',
      collapsed: false,
      items: [
        'notiflow/overview',
        'notiflow/github-structure',
        'notiflow/openapi-spec',
        'notiflow/sops',
      ],
    },
    {
      type: 'doc',
      id: 'downloads',
      label: ' Downloads & Assets',
    },
  ],
};

module.exports = sidebars;

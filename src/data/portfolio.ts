export const profile = {
  name: 'Amr Adel', title: 'E-commerce & Marketplace Leader', location: '6th October, Egypt',
  email: 'amradelabdelsattar14@gmail.com', linkedin: '', portrait: 'amr-adel-portrait.webp',
  phones: [{ label: '+20 101 889 2989', number: '+201018892989' }, { label: '+20 115 404 4777', number: '+201154044777' }],
};
export const metrics = [
  { value: '$6M+', label: 'Total sales contribution', detail: 'Cumulative commercial contribution across career and brands.' },
  { value: '$2M+', label: 'Souqpress business contribution', detail: 'B2B marketplace growth and business development.' },
  { value: '$2.5M+', label: 'FRG e-commerce sales', detail: 'Across Skechers, ANTA and Umbro.' },
  { value: '5+', label: 'Years of experience', detail: 'Across commerce, marketplaces and business development.' },
];
export const brands = ['Souqpress', 'Mix and Match', 'Fashion Retail Group', 'Skechers', 'ANTA', 'Umbro', 'Red Cotton', 'GOA Commerce', 'Fouras'];
export const freelance = ['Bow Apparel', 'El Tomy Home Appliances', 'El Nasr Home Appliances', 'Al Aqsa Home Appliances'];
export const experiences = [
  { company: 'Mix and Match', role: 'E-commerce Manager', context: 'Connecting the storefront to the customer experience.', description: 'Managed e-commerce operations across fulfillment, returns, exchanges and refunds. Coordinated catalogs, marketplaces, development teams and digital agencies to keep the customer journey moving.', tags: ['Operations', 'Customer experience', 'Catalog management', 'Reporting'] },
  { company: 'Red Cotton', role: 'E-commerce & Operations Manager', context: 'Building the digital business from launch to daily operations.', description: 'Worked across e-commerce launch, website development and commercial agreements. Combined Amazon, Jumia and Noon operations with Google Ads, email marketing, SEO, analytics, UX and paid social.', tags: ['E-commerce launch', 'Amazon', 'Jumia', 'Noon', 'Digital marketing'] },
  { company: 'GOA Commerce', role: 'Account Manager & Commercial Planner', context: 'Commercial planning across brands, platforms and markets.', description: 'Supported brand, manufacturer and distributor acquisition, marketplace sales and commercial planning across Amazon, Jumia, Noon and Homzmart. Worked with the Fouras platform across Egypt, Tunisia and Morocco, including website and mobile UX collaboration.', tags: ['Fouras', 'Commercial planning', 'Sales analytics', 'North Africa'] },
];
export const capabilities = [
  { id: 'commerce', title: 'E-commerce', icon: 'store', headline: 'The entire customer journey. One commercial focus.', description: 'Bring together the storefront, product catalog and daily operations so the business works for customers and for the bottom line.', skills: ['E-commerce management', 'E-commerce operations', 'Product management', 'Catalog management', 'Customer experience', 'Website management', 'Conversion optimization'] },
  { id: 'marketplaces', title: 'Marketplaces', icon: 'layers', headline: 'From vendor onboarding to marketplace growth.', description: 'Connect supply, visibility and marketplace execution across B2B ecosystems and consumer platforms.', skills: ['Marketplace management', 'B2B marketplaces', 'Vendor acquisition', 'Vendor onboarding', 'Amazon', 'Noon', 'Jumia', 'Marketplace growth'] },
  { id: 'business', title: 'Business development', icon: 'handshake', headline: 'Build relationships that build the business.', description: 'Develop the pipeline, negotiate commercial opportunities and connect businesses with the right partners and suppliers.', skills: ['B2B growth', 'Partnerships', 'Client acquisition', 'Supplier management', 'Commercial negotiation', 'Sales', 'Market development', 'Revenue growth'] },
  { id: 'growth', title: 'Growth & marketing', icon: 'chart', headline: 'Connect acquisition with commercial performance.', description: 'Bring paid media, search, email and analytics into a coherent growth approach.', skills: ['Performance marketing', 'SEO', 'SEM', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'Email marketing', 'Customer acquisition', 'Analytics'] },
  { id: 'strategy', title: 'Strategy & leadership', icon: 'compass', headline: 'Set the direction. Stay close to execution.', description: 'Translate marketplace strategy and commercial planning into priorities that teams can act on.', skills: ['E-commerce strategy', 'Marketplace strategy', 'Team leadership', 'Cross-functional management', 'Commercial planning', 'Budget management', 'Market analysis', 'Competitor analysis'] },
];
export const toolGroups = [
  { title: 'E-commerce platforms', summary: 'Build & operate', tools: ['Shopify', 'WordPress', 'WooCommerce', 'Salla', 'Zid', 'Easy Orders', 'Wuilt', 'Shahbandar'] },
  { title: 'Marketplaces', summary: 'Sell & scale', tools: ['Amazon Seller Central', 'Amazon Vendor Central', 'Noon', 'TikTok Marketplace', 'Jumia', 'Raya', 'Raneen'] },
  { title: 'AI & automation', summary: 'Think & automate', tools: ['ChatGPT', 'Claude', 'Gemini', 'OpenAI Codex', 'Claude Code', 'AI Agents', 'Chatbots', 'Make.com', 'n8n'] },
  { title: 'Marketing & analytics', summary: 'Acquire & understand', tools: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Google Analytics', 'SEO', 'Keyword Research', 'Power BI'] },
  { title: 'Productivity', summary: 'Plan & collaborate', tools: ['Microsoft Excel', 'Word', 'PowerPoint', 'Trello', 'Miro', 'Slack', 'ClickUp', 'Airtable', 'Notion'] },
  { title: 'Creative', summary: 'Create & deliver', tools: ['Canva', 'CapCut', 'Remove.bg', 'iLovePDF', 'iLoveJPG'] },
];
export const toolIcons: Record<string,string> = { 'Shopify':'shopify', 'WordPress':'wordpress', 'WooCommerce':'woocommerce', 'TikTok Marketplace':'tiktok', 'TikTok Ads':'tiktok', 'ChatGPT':'openai', 'OpenAI Codex':'openai', 'Claude':'claude', 'Claude Code':'claude', 'Gemini':'googlegemini', 'Make.com':'make', 'n8n':'n8n', 'Google Ads':'googleads', 'Meta Ads':'meta', 'Google Analytics':'googleanalytics', 'Trello':'trello', 'Miro':'miro', 'Slack':'slack', 'ClickUp':'clickup', 'Airtable':'airtable', 'Notion':'notion', 'Canva':'canva' };

// Verified public brand assets. Replace external URLs with local files when originals are supplied.
export const brandAssets: Record<string, {src:string; source:string}> = {
  'ANTA': {src:'brands/anta.svg',source:'https://simpleicons.org/?q=anta'},
  'Skechers': {src:'https://upload.wikimedia.org/wikipedia/commons/b/b3/Skechers_wordmark.svg',source:'https://commons.wikimedia.org/wiki/File:Skechers_wordmark.svg'},
  'Umbro': {src:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Umbro_logo.svg',source:'https://commons.wikimedia.org/wiki/File:Umbro_logo.svg'},
  'Red Cotton': {src:'https://cdn.brandfetch.io/idL7sc3N7j/w/340/h/94/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1774038057813',source:'https://brandfetch.com/redcotton.com'},
  'Souqpress': {src:'https://play-lh.googleusercontent.com/wfKLRPnv_hxuXF86d5WRiKUVerQPfquWTh-rwEa42jRDDfjn7xSTFzKLhvORVNifNLpygRBjbkRIThVIGnmcIQ=w240-h480',source:'https://play.google.com/store/apps/details?id=eg.souq.press'}
};

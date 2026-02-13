// Pricing Constants for TRUSTUP Commercial Proposal

export const PRICING = {
  // Setup Fees (One-time)
  STARTUP_FEE: 8500,
  vLEI_SETUP_FEE: 4700,
  API_SETUP_FEE: 3500,

  // Recurring Fees (Quarterly)
  SAAS_Q_FEE: 1800,
  API_ADDON_Q_FEE: 105,
  vLEI_RECURRING_RATE: 0.12, // 12% of setup fee per year

  // Storage
  STORAGE_BASE_GB: 100,

  // vLEI Actions
  vLEI_UPDATE_PRICE: 250,
  vLEI_REVOKE_PRICE: 250,

  // Credit Packs
  // Nuova struttura: da €1.00/credito (Pack S) a €0.25/credito (Pack XL 50k)
  PACKS: [
    { name: "Pack S", credits: 500, price: 500, pricePerCredit: 1.00 },
    { name: "Pack M", credits: 2000, price: 1400, pricePerCredit: 0.70 },
    { name: "Pack L", credits: 10000, price: 5000, pricePerCredit: 0.50 },
    { name: "Pack XL", credits: 50000, price: 12500, pricePerCredit: 0.25 },
  ],
} as const;

export type CreditPack = typeof PRICING.PACKS[number];

// Helper function to calculate best credit pack for estimated usage
export function getBestCreditPack(estimatedCredits: number): CreditPack {
  // Find the smallest pack that covers the estimated credits
  const suitablePack = PRICING.PACKS.find(pack => pack.credits >= estimatedCredits);
  return suitablePack || PRICING.PACKS[PRICING.PACKS.length - 1];
}

// Helper function to calculate total setup cost
export function calculateSetupCost(options: {
  includeVLEI: boolean;
  includeAPI: boolean;
}): number {
  let total = PRICING.STARTUP_FEE;
  if (options.includeVLEI) total += PRICING.vLEI_SETUP_FEE;
  if (options.includeAPI) total += PRICING.API_SETUP_FEE;
  return total;
}

// Helper function to calculate quarterly recurring cost
export function calculateQuarterlyCost(options: {
  includeVLEI: boolean;
  includeAPI: boolean;
}): number {
  let total = PRICING.SAAS_Q_FEE;
  if (options.includeVLEI) total += Math.round((PRICING.vLEI_SETUP_FEE * PRICING.vLEI_RECURRING_RATE) / 4);
  if (options.includeAPI) total += PRICING.API_ADDON_Q_FEE;
  return total;
}

// Helper function to estimate credits needed per year
export function estimateCreditsPerYear(params: {
  certificatesPerYear: number;
  dossiersPerYear: number;
  updatesPerYear: number;
  revokesPerYear: number;
  milestonesPerYear: number;
  didRegistrationsPerYear: number;
}): number {
  return (
    params.certificatesPerYear +
    params.dossiersPerYear +
    params.updatesPerYear +
    params.revokesPerYear +
    params.milestonesPerYear +
    params.didRegistrationsPerYear
  );
}

// Helper function to calculate first year total cost
export function calculateFirstYearCost(options: {
  includeVLEI: boolean;
  includeAPI: boolean;
  estimatedCredits: number;
  vLEIUpdatesPerYear: number;
}): {
  setup: number;
  recurring: number;
  credits: number;
  vLEIActions: number;
  total: number;
} {
  const setup = calculateSetupCost(options);
  const recurring = calculateQuarterlyCost(options) * 4; // Annual
  const creditPack = getBestCreditPack(options.estimatedCredits);
  const credits = creditPack.price;
  const vLEIActions = options.includeVLEI ? options.vLEIUpdatesPerYear * PRICING.vLEI_UPDATE_PRICE : 0;

  return {
    setup,
    recurring,
    credits,
    vLEIActions,
    total: setup + recurring + credits + vLEIActions,
  };
}

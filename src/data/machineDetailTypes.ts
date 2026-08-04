export interface MachineDetailCard {
  title: string;
  description: string;
}

export interface MachineParameterColumn {
  key: string;
  label: string;
}

export interface MachineDetailContent {
  slug: string;
  breadcrumbCategoryLabel: string;
  breadcrumbSubcategory: string;
  intro: string;
  highlights: string[];
  application: {
    title: string;
    body: string;
  };
  usability?: MachineDetailCard[];
  usabilityTitle?: string;
  automationBadges?: string[];
  extraBadges?: string[];
  engineering?: {
    title: string;
    subtitle: string;
    items: MachineDetailCard[];
  };
  qualitySection?: {
    title: string;
    body: string;
    items: MachineDetailCard[];
  };
  valueItems?: MachineDetailCard[];
  valueSectionTitle?: string;
  productFeatures: string[];
  parameters: {
    rowKey: string;
    columns: MachineParameterColumn[];
    rows: Record<string, string>[];
    footerNote?: string;
  };
  equipmentMatrix?: {
    standard: string[];
    optional: string[];
  };
  optionalDevicesText?: string;
  formProductName: string;
}

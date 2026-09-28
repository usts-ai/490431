export const NAV_LINKS = [
  { label: 'Solution', href: '#solution' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Terrain', href: '#terrain' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: 240, suffix: '+', label: 'Chantiers suivis' },
  { value: 98, suffix: '%', label: 'Conformité sous-traitants' },
  { value: 35, suffix: '%', label: 'Temps gagné sur le terrain' },
  { value: 12, suffix: 'k', label: 'Mètres saisis / mois' },
];

export const FEATURES = [
  {
    id: 'leads',
    title: 'Gestion des leads',
    text: 'Validez chaque demande depuis le back-office. Priorisez, assignez et transformez vos leads en chantiers rentables.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    accent: '#4A90E2',
  },
  {
    id: 'terrain',
    title: 'Experts terrain',
    text: "Géolocalisation, métrage mobile et photos de chantier en temps réel. L'interface est pensée pour le casque et les gants.",
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    accent: '#355E3B',
  },
  {
    id: 'finance',
    title: 'Suivi financier',
    text: "Devis, acomptes et rapports d'avancement synchronisés. Une vision claire de la marge sur chaque rénovation.",
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
    accent: '#D2B48C',
  },
];

export const CAPABILITIES = [
  {
    title: 'Chiffrage intelligent',
    desc: 'Estimez rapidement vos projets de rénovation avec des modèles adaptés au BTP marseillais.',
  },
  {
    title: 'Multi-rôles sécurisé',
    desc: 'Administrateurs, gestionnaires et experts terrain : chaque profil voit exactement ce dont il a besoin.',
  },
  {
    title: 'Notifications live',
    desc: 'Alertez les équipes des changements de planning, validations et avancées de chantier.',
  },
  {
    title: 'Conformité sous-traitants',
    desc: 'Documents, attestations et validations centralisés pour rester serein en cas de contrôle.',
  },
  {
    title: 'Photos et métriques',
    desc: "Capturez le terrain, associez les clichés aux postes et partagez l'état du chantier.",
  },
  {
    title: 'Reporting avancé',
    desc: "Tableaux de bord financiers et opérationnels pour piloter la marge en un coup d'œil.",
  },
];

export const WORKFLOW = [
  {
    step: '01',
    title: 'Capture du lead',
    text: 'Le gestionnaire crée et qualifie la demande depuis le portail web.',
  },
  {
    step: '02',
    title: 'Affectation chantier',
    text: "L'expert terrain reçoit le dossier sur mobile avec géolocalisation.",
  },
  {
    step: '03',
    title: 'Saisie des mètres',
    text: 'Photos, mesures et observations synchronisées en temps réel.',
  },
  {
    step: '04',
    title: 'Pilotage financier',
    text: "Devis, acomptes et rapports d'avancement mis à jour automatiquement.",
  },
];

export const MOCK_CHANTIERS = [
  {
    name: 'Rénovation Canebière',
    ville: 'Marseille 1er',
    progress: 78,
    statut: 'En cours',
  },
  {
    name: 'Appartement Vieux-Port',
    ville: 'Marseille 2e',
    progress: 42,
    statut: 'Mètres',
  },
  {
    name: 'Villa Prado',
    ville: 'Marseille 8e',
    progress: 91,
    statut: 'Finitions',
  },
];

export const FOOTER_LINKS = {
  produit: [
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Application mobile', href: '#terrain' },
    { label: 'Back-office', href: '#solution' },
  ],
  entreprise: [
    { label: 'À propos', href: '#contact' },
    { label: 'Marseille BTP', href: '#solution' },
    { label: 'Devis forfait', href: '#contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '#contact' },
    { label: 'Confidentialité', href: '#contact' },
    { label: 'NDA et CDC', href: '#contact' },
  ],
};

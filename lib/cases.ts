export type Case = {
  slug: string
  title: string
  subtitle: string
  tags: string[]
  situation: string
  approach: string
  result: string
}

export const cases: Case[] = [
  {
    slug: 'wtc-rotterdam',
    title: 'WTC Rotterdam',
    subtitle: 'Digitale omgevingscommunicatie',
    tags: ['Strategie', 'Design', 'Projectbegeleiding'],
    situation:
      'WTC Rotterdam maakte de transitie van analoge naar digitale routing. Overal kwamen grote schermen — tot 10 × 2 meter — en niemand had bedacht wat daar op moest komen of hoe dat er goed uit zou zien.',
    approach:
      'Ik trad op als schakel tussen opdrachtgever en technisch leverancier, bedacht de contentstrategie voor alle schermen, en tilde het totale design naar een hoog niveau. Van concept tot uitrol, voor meerdere WTC-locaties.',
    result:
      'Een coherent, professioneel systeem dat werkt als onderdeel van de huisstijl — niet als afterthought.',
  },
  {
    slug: 'va-magazine',
    title: 'VA Magazine',
    subtitle: 'Vrije Academie',
    tags: ['Editorial design', 'Automatisering', 'InDesign'],
    situation:
      'Het magazine van de Vrije Academie had een redesign nodig. Niet alleen visueel, maar ook qua werkproces — elke editie kostte te veel tijd en te veel handwerk.',
    approach:
      'Ik ontwierp het nieuwe magazine en zette tegelijkertijd een geautomatiseerd productiesysteem op in InDesign — inclusief scripts die terugkerende opmaaktaken overnemen. Zo wordt elke volgende editie sneller en consistenter.',
    result:
      'Een sterk vormgegeven magazine met een schaalbaar productieproces eronder.',
  },
  {
    slug: 'huisstijluitrol',
    title: 'Huisstijluitrol onder druk',
    subtitle: 'Crisisinterventie',
    tags: ['Projectovername', 'Huisstijl', 'Crisismanagement'],
    situation:
      'Een collega viel uit op een cruciaal moment in de uitrol van een nieuwe huisstijl. De dreiging was dat het hele traject zou stagneren.',
    approach:
      'Ik nam het over, bracht alle losse onderdelen samen, en zorgde dat de uitrol alsnog op tijd en volledig plaatsvond.',
    result:
      'Een succesvolle lancering, ondanks de omstandigheden. Dit is precies het soort situatie waarvoor opdrachtgevers mij inschakelen.',
  },
]

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug)
}

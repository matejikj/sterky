export interface RealizaceProject {
  slug: string;
  title: string;
  summary: string;
  roomType: string;
  system: string;
  sterkaSlug: string;
}

export const realizaceProjects: RealizaceProject[] = [
  {
    slug: 'rezidence-brno-obyvak-stone-03',
    title: 'Rezidence Brno • Obyvaci pokoj',
    summary: 'Betonova sterka v matnem finishi se sealerem a difuznim nasvicenim v hlavnim obyvaci zone.',
    roomType: 'Obyvaci pokoj',
    system: 'Penetrace • betonova sterka • ochranny sealer',
    sterkaSlug: 'betonova-sterka',
  },
  {
    slug: 'koupelna-praha-wellness-wall',
    title: 'Koupelna Praha • Wellness wall',
    summary: 'Vodeodolna sterka v koupelnovem prostoru s durazem na udrzbu, detaily napojeni a ochranu.',
    roomType: 'Koupelna / sprcha',
    system: 'Penetrace • vodeodolna sterka • hydro ochrana • sealer',
    sterkaSlug: 'vodeodolna-sterka',
  },
];


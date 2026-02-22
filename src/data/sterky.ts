export interface SterkaType {
  slug: string;
  title: string;
  summary: string;
  finish: string;
  useCase: string;
}

export const sterkyTypes: SterkaType[] = [
  {
    slug: 'betonova-sterka',
    title: 'Betonova sterka',
    summary: 'Mineralni vzhled s durazem na realistickou texturu, odlesk a technickou skladbu systemu.',
    finish: 'Matna / clouded',
    useCase: 'Obyvak, chodba, komercni interier',
  },
  {
    slug: 'dekorativni-sterka',
    title: 'Dekorativni sterka',
    summary: 'Dekorativni povrch s jemnym oblackovym charakterem a variabilnimi finishi podle svetla.',
    finish: 'Soft sheen / dekorativni',
    useCase: 'Akcentni steny, obyvaci prostor, loznice',
  },
  {
    slug: 'vodeodolna-sterka',
    title: 'Vodeodolna sterka',
    summary: 'Skladba vhodna pro vlhke prostory se sealerem a durazem na udrzbu a kompatibilitu podkladu.',
    finish: 'Mat / satin',
    useCase: 'Koupelna, sprcha, wellness',
  },
];


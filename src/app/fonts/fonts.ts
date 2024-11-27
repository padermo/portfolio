import { Poppins, Montserrat } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '600'],
  variable: '--font-poppins',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-montserrat',
});

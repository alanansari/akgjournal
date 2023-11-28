import { Oswald,Open_Sans  } from 'next/font/google';

export const openSans = Open_Sans({ subsets:['latin'] });
export const oswald = Oswald({ subsets:['latin'] });

import localFont from 'next/font/local'

//👇 Configure our local font object
const Clash_Display = localFont({ src: '../../Fonts/ClashDisplay-Variable.ttf' })

export const clash_Display = Clash_Display;
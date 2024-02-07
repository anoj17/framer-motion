import { Variable } from "lucide-react"
import { Inter, Montserrat, Nunito_Sans, PT_Sans, Playfair, Poppins } from "next/font/google"

export const inter = Inter({ subsets: ['latin'], variable: '--int' })
export const montserrat = Montserrat({ subsets: ['latin'], variable: '--mont' })
export const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--nunito' })
export const playFair = Playfair({ subsets: ['latin'], variable: '--play' })
export const poppins = Poppins({ weight: "400", subsets: [], variable: '--pop' })
export const ptSans = PT_Sans({ weight: "400", subsets: ['latin'], variable: '--ptsans' })
export const montserratRegular = Montserrat({ subsets: ['latin'], weight: "500", variable: '--monts' })
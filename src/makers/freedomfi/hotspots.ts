import HotspotIcon from './hotspot.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const FreedomFiHotspot = {
  name: 'FreedomFi Hotspot',
  icon: HotspotIcon,
  onboardType: 'WEB',
  translations: {
    en: {
      diagnostic:
        '<b><white>Diagnostic support allows FreedomFi to identify issues with your Hotspot in a secure way.</white></b>\n\nFreedomFi will never have access to private keys and will only ever be able to access your Hotspot and not any other devices on your Network.\n\nIf you would like to opt-out of diagnostic support please email <purple><b>support@freedomfi.com</b></purple> from the email used to purchase the Hotspot.',
      power: [
        "Attach the antenna's and plug in the provided power adapter.",
        'The FreedomFi PWR LED will light up once it’s powered on.',
      ],
      externalOnboard:
        'Please onboard your FreedomFi Hotspot by tapping the link below:',
    },
  },
  antenna: {
    default: ANTENNAS.FREEDOMFI,
  },
  onboardUrl: 'https://dashboard.helium.freedomfi.com/?wallet_id=WALLET',
} as MakerHotspot

export default { FreedomFiHotspot }

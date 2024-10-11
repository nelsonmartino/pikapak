import hub from '../assets/imgs/hub-pikapak.png'
import transportista from '../assets/imgs/transportista-pikapak.png'
import remitente from '../assets/imgs/remitente-pikapak.png'
import gPlay from '../assets/imgs/disponible-en-google-play-badge-2.png'

export const roleInfo = [
  {
    title: 'Remitente',
    description: 'Necesitás enviar tus ventas rapidísimo a todos lados',
    postDescription: 'Adherite como',
    action: gPlay,
    image: remitente,
    href: '#contact',
    href1: '#comercioPersona',
  },
  {
    title: 'Transportista',
    description: 'Viajás o te moves en tu vehiculo o transporte público',
    postDescription: 'Hacete',
    action: gPlay,
    image: transportista,
    href: '#transportista',
    href1: '#accordion',
  },
  {
    title: 'Hub',
    description: 'Tenés un lugar disponible en tu casa, local o comercio',
    postDescription: 'Convertite en',
    action: gPlay,
    image: hub,
    href: '#hub',
    href1: '#accordion',
  },
]

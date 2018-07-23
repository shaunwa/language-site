import 'font-awesome/css/font-awesome.min.css'

import { h } from 'react-hyperscript-helpers'
import FontAwesome from 'react-fontawesome'

export function Icon ({ name, style }) {
  return h(FontAwesome, { name, style })
}

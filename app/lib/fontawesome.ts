// lib/fontawesome.ts
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// This line is CRITICAL – prevents huge / missing icons
config.autoAddCss = false
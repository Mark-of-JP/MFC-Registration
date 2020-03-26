import emailjs from 'emailjs-com'

import {Constants} from './constants'
 
export var sendMail = (registration) => {
   return emailjs.send('gmail', 'mfc_mailer', registration, Constants.emailjs_id)
}
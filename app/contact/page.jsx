import React from 'react';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

function Contact() {
  return (
    <div>
        Contact
    </div>
  )
}

export default Contact;

// form for sending a msg
// emphais links to social media 
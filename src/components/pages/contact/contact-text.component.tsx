'use client';

import { FC } from 'react';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './contact-text.module.scss';

const ContactText: FC = () => {
  const ref = useThemes<HTMLParagraphElement>({
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <p className={styles.text} ref={ref}>
      Thank you for checking out my website 🙏. If you have any questions, feel
      free to shoot me an email 📧. I&apos;ll get back to you as soon as I can
      🙂
    </p>
  );
};

export default ContactText;

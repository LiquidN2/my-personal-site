import Image from 'next/image';

import MainContainer from '@/components/layout/main-container.component';
import SectionContainer from '@/components/layout/section-container.component';
import HeadingPrimary from '@/components/ui/heading/heading-primary.component';
import ContactText from '@/components/pages/contact/contact-text.component';
import FormContact from '@/components/pages/contact/form-contact.component';

import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <MainContainer>
      <SectionContainer>
        <HeadingPrimary>Let&apos;s Connect</HeadingPrimary>

        <div className={styles['text-image-container']}>
          <ContactText />

          <Image
            src="img/get-in-touch.svg"
            alt="get in touch"
            height={452}
            width={452}
            priority={true}
          />
        </div>

        <div className={styles['form-container']}>
          <FormContact />
        </div>
      </SectionContainer>
    </MainContainer>
  );
}

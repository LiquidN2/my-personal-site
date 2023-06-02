'use client';

import { FC, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import FormContactInput from './form-contact-input.component';

import { ThemeContext } from '@/components/context/theme-context';
import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './form-contact.module.scss';

type Inputs = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const FormContact: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const ref = useThemes<HTMLFormElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
    >
      <FormContactInput
        type="text"
        name="name"
        id="name"
        label="Name"
        register={register}
        error={errors.name}
        required
      />

      <FormContactInput
        type="text"
        name="company"
        id="company"
        label="Company"
        register={register}
      />

      <FormContactInput
        type="tel"
        name="phone"
        id="phone"
        label="Phone"
        register={register}
      />

      <FormContactInput
        type="email"
        name="email"
        id="email"
        label="Email"
        register={register}
        required
      />

      <FormContactInput
        type="text"
        name="subject"
        id="subject"
        label="Subject"
        register={register}
        fullWidth
      />

      <FormContactInput
        type="textarea"
        name="message"
        id="message"
        label="Message"
        register={register}
        required
        fullWidth
      />

      <input className={styles['btn-submit']} type="submit" />
      <input className={styles.btn} type="reset" />
    </form>
  );
};

export default FormContact;

'use client';

import { FC } from 'react';

import { FieldError, UseFormRegister } from 'react-hook-form';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './form-contact-input.module.scss';

interface FormContactInputProps {
  name: string;
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  required?: boolean;
  fullWidth?: boolean;
}

const FormContactInput: FC<FormContactInputProps> = ({
  name,
  id,
  type,
  label,
  register,
  error,
  required = false,
  fullWidth = false,
}) => {
  const labelRef = useThemes<HTMLLabelElement>({
    [Theme.Default]: styles.label,
    [Theme.Dark]: styles['label--light'],
  });

  const inputRef = useThemes<HTMLInputElement>({
    [Theme.Default]: styles.input,
    [Theme.Dark]: styles['input--dark'],
  });

  return (
    <div className={`${styles.group} ${fullWidth ? styles['full-width'] : ''}`}>
      <label className={styles.label} htmlFor={id} ref={labelRef}>
        {label}
        {required && <span>&nbsp;*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          className={styles.input}
          id={id}
          {...register(name, { required })}
        />
      ) : (
        <input
          className={styles.input}
          id={id}
          type={type}
          {...register(name, { required })}
        />
      )}
    </div>
  );
};

export default FormContactInput;

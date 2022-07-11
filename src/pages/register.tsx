import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import TextInput from 'src/components/text-input';
import { CreateUserInput } from 'src/schemas/user.schema';
import { appTrpc } from 'src/utils/trpc';

const Register: NextPage = () => {
  const router = useRouter();
  const methods = useForm<CreateUserInput>();

  const { mutate, error } = appTrpc.useMutation('users.register-user', {
    onSuccess: () => {
      router.push('/login');
    },
  });

  const onSubmit = methods.handleSubmit((formData) => {
    mutate(formData);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {error && error.message}
        <TextInput fieldName="name" label="Name" />
        <TextInput fieldName="email" label="Email" />
        <button type="submit">Submit</button>
      </form>
      <Link href="/login">Login</Link>
    </FormProvider>
  );
};

export default Register;

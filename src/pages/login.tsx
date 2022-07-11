import { NextPage } from 'next';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';

import TextInput from 'src/components/text-input';
import { CreateUserInput } from 'src/schemas/user.schema';
import { appTrpc } from 'src/utils/trpc';

const Register: NextPage = () => {
  const methods = useForm<CreateUserInput>();

  const { mutate, error } = appTrpc.useMutation('users.login', {
    onSuccess: (user) => {
      console.log(user);
    },
  });

  const onSubmit = methods.handleSubmit((formData) => {
    mutate(formData);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {error && error.message}
        <TextInput fieldName="email" label="Email" />
        <button type="submit">Submit</button>
      </form>
      <Link href="/login">Login</Link>
    </FormProvider>
  );
};

export default Register;

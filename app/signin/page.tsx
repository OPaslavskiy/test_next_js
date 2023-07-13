import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SignInForm';

export default async function Signin() {
  return (
    <div className="container">
      <h1>SignIn</h1>
      <GoogleButton />

      <SignInForm />
    </div>
  );
}

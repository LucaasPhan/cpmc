import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Đăng nhập vào CPMC"
};

export default function Page() {
  return <SignIn />;
};
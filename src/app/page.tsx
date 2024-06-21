import Image from "next/image";
import { createClient } from '@/utils/supabase/server';
import AuthButton from "@/components/auth-button";


export default async function Home() {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-white">
      <AuthButton />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main >
  );
}

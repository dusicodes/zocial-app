import Image from "next/image";
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}

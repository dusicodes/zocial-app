"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server"
export default function AuthButton() {

  const supabase = createClient();

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })

  }
  return <Button onClick={handleSignIn}>Sign in</Button>
}
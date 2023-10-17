import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button variant="contained" endIcon={<LogoutIcon />} onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button variant="contained" endIcon={<LoginIcon />} onClick={() => signIn()}>Sign in</Button>
    </>
  );
}

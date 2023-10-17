import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h1>Signed in as {session.user.email}</h1>
        <Button
          variant="contained"
          endIcon={<LogoutIcon />}
          onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <h1>Not signed in</h1>
      <Button
        variant="contained"
        endIcon={<LoginIcon />}
        onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}

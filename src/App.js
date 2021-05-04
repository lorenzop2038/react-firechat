import { Button, Channel } from "./components";
import { signInWithGoogle, signOut } from "./login";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";

function App() {
  
  const { user, initializing } = useAuthState(firebase.auth());

  const renderLoading = () => {
    if (initializing) {
      return <div>
        <h1>Loading ...</h1>
      </div>
    }
  }
  return (
    <div>
      { renderLoading()}
      {
      user ? (
        <>
          <Button onClick={signOut} >Sign in With Google</Button>
          <p> Bienvenidos al CHAT!</p>
        </>
      ) : <Button onClick={signInWithGoogle} > Sign In With Google </Button>
      
        }
      
    </div>
  );
}

export default App;
